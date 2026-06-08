import { GraduationCap } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="relative mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-glow">
          <GraduationCap className="h-9 w-9 text-primary-foreground" />
        </div>
        <div className="absolute -inset-3 animate-ping rounded-2xl border border-primary/20" />
      </div>
      <h2 className="font-heading text-lg font-bold tracking-tight text-foreground">Bright Path Education</h2>
      <p className="mt-1.5 text-sm text-muted-foreground">Preparing for a demo Future...</p>
      <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-muted">
        <div className="h-full w-full origin-left animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-primary to-accent" />
      </div>
    </div>
  );
};

export default PageLoader;
