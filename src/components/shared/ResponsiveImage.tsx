import { cn } from "@/lib/utils";
import { placeholders } from "./ImageCard";

interface ResponsiveImageProps {
  src: string;
  alt: string; // Required - enforced by TypeScript
  className?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
}

/**
 * Simple responsive image component with required alt text and fallback.
 * Use ImageCard for more features like captions and badges.
 */
const ResponsiveImage = ({
  src,
  alt,
  className,
  loading = "lazy",
  priority = false,
}: ResponsiveImageProps) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    if (target.src !== placeholders.default) {
      target.src = placeholders.default;
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : loading}
      onError={handleError}
      className={cn("object-cover", className)}
    />
  );
};

export default ResponsiveImage;
