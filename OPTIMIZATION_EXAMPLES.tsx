// 🚀 OPTIMIZATION EXAMPLES - Copy & Use These Patterns

// ============================================
// Example 1: Section with Progressive Loading
// ============================================

import { useSiteContent } from "@/components/SiteContentProvider";
import { SectionSkeleton } from "@/components/SectionSkeleton";

export const ProgramsSection = () => {
  const { content } = useSiteContent();
  
  // Note: No need to check isLoading anymore!
  // Content shows immediately with defaults, then updates
  
  return (
    <section className="py-12">
      <h2>{content.programs.title}</h2>
      
      {/* If programs are empty, show skeleton */}
      {!content.programsList?.length ? (
        <SectionSkeleton variant="grid" lines={3} />
      ) : (
        <div className="grid gap-4">
          {content.programsList.map((program) => (
            <div key={program.slug?.current}>{program.title}</div>
          ))}
        </div>
      )}
    </section>
  );
};

// ============================================
// Example 2: List with Skeleton Loader
// ============================================

export const TestimonialsSection = () => {
  const { content } = useSiteContent();
  
  return (
    <section>
      <h2>{content.testimonials.title}</h2>
      
      {/* Show skeleton while loading, content when ready */}
      {!content.testimonialsList?.length ? (
        <SectionSkeleton variant="list" lines={4} />
      ) : (
        <div className="space-y-4">
          {content.testimonialsList.map((testimonial, idx) => (
            <div key={idx} className="p-4 border rounded">
              <p>{testimonial.text}</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

// ============================================
// Example 3: Lazy Load Component (Advanced)
// ============================================

import { lazy, Suspense } from "react";

// Code-split expensive components
const GallerySection = lazy(() => import("@/components/GallerySection"));
const FacilitiesSection = lazy(() => import("@/components/FacilitiesSection"));

export const OptimizedPage = () => (
  <main>
    {/* Above-fold sections load immediately */}
    <HeroSection />
    <AboutSection />
    
    {/* Below-fold sections lazy load */}
    <Suspense fallback={<SectionSkeleton variant="grid" />}>
      <GallerySection />
    </Suspense>
    
    <Suspense fallback={<SectionSkeleton variant="list" />}>
      <FacilitiesSection />
    </Suspense>
  </main>
);

// ============================================
// Example 4: Optimized Image URL
// ============================================

interface ImageProps {
  src?: string;
  alt: string;
}

export const OptimizedImage = ({ src, alt }: ImageProps) => {
  // Sanity images support query parameters
  const optimizedSrc = src 
    ? `${src}?w=800&h=600&fit=crop&q=75`
    : "/placeholder.jpg";
  
  return (
    <img 
      src={optimizedSrc} 
      alt={alt}
      loading="lazy"  // Browser lazy loads below viewport
      decoding="async" // Don't block rendering
      className="w-full h-auto"
    />
  );
};

// ============================================
// Example 5: Check Content Loading State
// ============================================

import { useState, useEffect } from "react";

export const SectionWithLoader = () => {
  const { content, isLoading } = useSiteContent();
  const [isLocalLoading, setIsLocalLoading] = useState(true);
  
  useEffect(() => {
    // Simulate section-level loading
    const timer = setTimeout(() => setIsLocalLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLocalLoading) {
    return <SectionSkeleton />;
  }
  
  // If global Sanity is still loading, show with a subtle indicator
  return (
    <section className={isLoading ? "opacity-75" : ""}>
      {/* Your content here */}
      <h2>{content.about.title}</h2>
      {isLoading && <p className="text-xs text-gray-400">Updating...</p>}
    </section>
  );
};

// ============================================
// Example 6: Conditional Rendering Pattern
// ============================================

export const SmartSection = () => {
  const { content } = useSiteContent();
  
  // Pattern: Show skeleton or content based on data presence
  const hasData = (data?: any[]) => data && data.length > 0;
  
  return (
    <section>
      {/* Gallery */}
      <div>
        {hasData(content.galleryImages) ? (
          <div className="grid grid-cols-3">
            {content.galleryImages?.map((img) => (
              <img key={img.alt} src={img.image} alt={img.alt} />
            ))}
          </div>
        ) : (
          <SectionSkeleton variant="grid" lines={6} />
        )}
      </div>
      
      {/* Testimonials */}
      <div>
        {hasData(content.testimonialsList) ? (
          <div className="space-y-4">
            {content.testimonialsList?.map((t, i) => (
              <div key={i}>{t.text}</div>
            ))}
          </div>
        ) : (
          <SectionSkeleton variant="list" lines={3} />
        )}
      </div>
    </section>
  );
};

// ============================================
// Example 7: Migration Checklist
// ============================================

/*
If you're updating an existing component:

[ ] Remove any PageLoader blocking checks
[ ] Replace `if (isLoading) return <Loader />` patterns
[ ] Add SectionSkeleton for data-dependent sections
[ ] Check for empty arrays before rendering lists
[ ] Use `useSiteContent()` hook to get data
[ ] Test in network throttling (DevTools > Network > Slow 3G)
[ ] Verify skeleton shows briefly while data loads

Before:
  if (isLoading) return <PageLoader />;
  return <YourContent />;

After:
  const { content } = useSiteContent();
  return (
    <>
      {!data.length ? <SectionSkeleton /> : <YourContent />}
    </>
  );
*/

export default {};
