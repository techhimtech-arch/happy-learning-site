import { Skeleton } from "@/components/ui/skeleton";

interface SectionSkeletonProps {
  lines?: number;
  variant?: "title" | "list" | "grid" | "cards" | "carousel";
}

export const SectionSkeleton = ({ lines = 3, variant = "title" }: SectionSkeletonProps) => {
  // Professional pulse animation
  const pulseClass = "animate-pulse";

  if (variant === "list") {
    return (
      <div className="space-y-4">
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className={`flex gap-4 ${pulseClass}`}>
            <Skeleton className="h-12 w-12 rounded-full bg-muted-foreground/10" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-full bg-muted-foreground/10" />
              <Skeleton className="h-3 w-2/3 bg-muted-foreground/5" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "cards") {
    return (
      <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ${pulseClass}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-12 w-12 rounded-lg bg-primary/5" />
            <Skeleton className="h-6 w-3/4 bg-muted-foreground/10" />
            <Skeleton className="h-4 w-full bg-muted-foreground/5" />
            <Skeleton className="h-3 w-1/2 bg-muted-foreground/5" />
          </div>
        ))}
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ${pulseClass}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="space-y-3 overflow-hidden rounded-lg">
            <Skeleton className="h-48 w-full rounded-lg bg-muted-foreground/10" />
            <div className="p-4 space-y-2">
              <Skeleton className="h-5 w-3/4 bg-muted-foreground/10" />
              <Skeleton className="h-3 w-full bg-muted-foreground/5" />
              <Skeleton className="h-3 w-2/3 bg-muted-foreground/5" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "carousel") {
    return (
      <div className={`space-y-4 ${pulseClass}`}>
        <Skeleton className="h-96 w-full rounded-xl bg-muted-foreground/10" />
        <div className="flex justify-between items-center gap-4">
          <Skeleton className="h-10 w-10 rounded-full bg-muted-foreground/10" />
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-2 w-8 rounded-full bg-muted-foreground/10" />
            ))}
          </div>
          <Skeleton className="h-10 w-10 rounded-full bg-muted-foreground/10" />
        </div>
      </div>
    );
  }

  // Default title variant
  return (
    <div className={`space-y-4 ${pulseClass}`}>
      <Skeleton className="h-10 w-1/3 bg-muted-foreground/10" />
      <Skeleton className="h-5 w-full bg-muted-foreground/5" />
      {Array.from({ length: lines - 1 }).map((_, i) => (
        <Skeleton key={i} className="h-4 w-full bg-muted-foreground/5" />
      ))}
    </div>
  );
};
