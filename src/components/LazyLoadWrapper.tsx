import { ComponentType, Suspense, ReactNode } from "react";
import { SectionSkeleton } from "./SectionSkeleton";

/**
 * Lazy Loading Wrapper for professional code-splitting
 * Automatically shows skeleton while component loads
 */
export function withLazyLoad<P extends object>(
  Component: ComponentType<P>,
  skeletonVariant: "title" | "list" | "grid" | "cards" | "carousel" = "grid"
) {
  return function LazyLoadedComponent(props: P) {
    return (
      <Suspense fallback={<SectionSkeleton variant={skeletonVariant} lines={4} />}>
        <Component {...props} />
      </Suspense>
    );
  };
}

/**
 * Wrapper for sections that have conditional rendering
 * Shows skeleton when data is empty, content when ready
 */
export interface WithDataLoadProps {
  isLoading?: boolean;
  isEmpty?: boolean;
  fallbackLines?: number;
  skeletonVariant?: "title" | "list" | "grid" | "cards" | "carousel";
  children: ReactNode;
}

export const WithDataLoad = ({
  isLoading = false,
  isEmpty = false,
  fallbackLines = 3,
  skeletonVariant = "grid",
  children,
}: WithDataLoadProps) => {
  if (isLoading || isEmpty) {
    return <SectionSkeleton variant={skeletonVariant} lines={fallbackLines} />;
  }

  return <>{children}</>;
};

/**
 * Eager load hint for critical resources
 * Add to head or preload critical Sanity queries
 */
export const EagerLoadHints = () => (
  <>
    {/* Preload Sanity API domain */}
    <link rel="preconnect" href="https://api.sanity.io" crossOrigin="anonymous" />
    <link rel="dns-prefetch" href="https://cdn.sanity.io" />
    
    {/* Preload critical fonts if any */}
    <link rel="preload" as="style" href="/fonts/critical.css" />
  </>
);
