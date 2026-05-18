import { useSiteContent } from "./SiteContentProvider";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadableFilesSection = () => {
  const { content } = useSiteContent();
  const files = content.downloadableFilesList;

  if (!files || files.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Downloads</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-secondary">Important Documents</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {files.map((file, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between items-start h-full hover:shadow-md transition-shadow">
              <div>
                {file.category && (
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                    {file.category}
                  </span>
                )}
                <h3 className="font-semibold text-lg text-secondary mb-4">{file.title}</h3>
              </div>
              <Button asChild variant="outline" className="w-full gap-2 mt-4 group">
                <a href={file.fileUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                  Download PDF
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadableFilesSection;
