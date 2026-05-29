import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { sanityClient, isSanityConfigured } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { SectionSkeleton } from "@/components/SectionSkeleton";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowLeft, Home, BookOpen } from "lucide-react";

type PageData = {
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  content: any[];
  hero?: {
    title?: string;
    subtitle?: string;
    backgroundImageUrl?: string;
  };
};

const CustomPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [page, setPage] = useState<PageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isSanityConfigured || !slug) {
      setIsLoading(false);
      return;
    }

    let cancelled = false;
    setIsLoading(true);
    setError(null);

    const fetchPage = async () => {
      try {
        const isAnnouncement = window.location.pathname.includes("/announcements/");
        
        let query = "";
        let data: PageData | null = null;

        if (isAnnouncement) {
          query = `*[_type == "announcement" && slug.current == $slug][0]{
            title,
            category,
            content,
            "imageUrl": image.asset->url,
            publishedAt
          }`;
          
          const annData = await sanityClient.fetch<any | null>(query, { slug });
          if (annData) {
            data = {
              title: annData.title,
              seoTitle: `${annData.title} | Announcements`,
              seoDescription: annData.title,
              content: annData.content || [],
              hero: {
                title: annData.title,
                subtitle: `${annData.category || "Announcement"} • ${annData.publishedAt ? new Date(annData.publishedAt).toLocaleDateString("en-IN") : ""}`,
                backgroundImageUrl: annData.imageUrl
              }
            };
          }
        } else {
          query = `*[_type == "page" && slug.current == $slug][0]{
            title,
            seoTitle,
            seoDescription,
            content,
            hero {
              title,
              subtitle,
              "backgroundImageUrl": backgroundImage.asset->url
            }
          }`;
          data = await sanityClient.fetch<PageData | null>(query, { slug });
        }
        
        if (!cancelled) {
          if (data) {
            setPage(data);
            
            // Dynamic SEO updates
            document.title = data.seoTitle || `${data.title} | Bright Futures School`;
            if (data.seoDescription) {
              const metaDesc = document.querySelector('meta[name="description"]');
              if (metaDesc) {
                metaDesc.setAttribute("content", data.seoDescription);
              }
            }
          } else {
            setError("Page not found");
          }
          setIsLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load page content");
          setIsLoading(false);
        }
      }
    };

    void fetchPage();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <Navbar />
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <SectionSkeleton variant="heading" />
          <SectionSkeleton variant="grid" lines={6} />
        </div>
      </div>
    );
  }

  if (error || !page) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16 flex flex-col justify-between">
        <Navbar />
        <div className="container mx-auto px-4 max-w-md text-center py-20 animate-scale-in">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
            <BookOpen className="h-7 w-7" />
          </div>
          <h1 className="font-heading text-3xl font-extrabold text-foreground tracking-tight">Page Not Found</h1>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/" className="btn-primary py-3 px-6 text-sm font-semibold flex items-center gap-2">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const heroImage = page.hero?.backgroundImageUrl || heroBg;

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Navbar />

      <main className="flex-1">
        {/* Dynamic Hero Section */}
        <section className="relative min-h-[380px] flex items-center overflow-hidden">
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

          <div className="container relative mx-auto px-4 pt-24 pb-12 z-20">
            <div className="max-w-3xl space-y-4">
              <Link 
                to="/" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white uppercase tracking-wider transition-colors duration-300"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Home
              </Link>
              
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl animate-fade-up">
                {page.hero?.title || page.title}
              </h1>
              
              {page.hero?.subtitle && (
                <p className="text-base text-white/70 max-w-xl leading-relaxed animate-fade-up-delay-1">
                  {page.hero.subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Dynamic Rich Content Area */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <article className="prose prose-slate md:prose-lg max-w-none animate-fade-up-delay-2 dark:prose-invert">
              <PortableText value={page.content} />
            </article>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default CustomPage;
