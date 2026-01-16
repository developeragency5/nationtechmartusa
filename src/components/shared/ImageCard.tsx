import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

// Image size presets with responsive rules
export const imageSizes = {
  hero: "w-full h-[400px] md:h-[500px] lg:h-[600px]",
  banner: "w-full h-[200px] md:h-[300px] lg:h-[350px]",
  card: "w-full h-[180px] md:h-[220px]",
  thumbnail: "w-24 h-24 md:w-32 md:h-32",
  logo: "w-12 h-12 md:w-16 md:h-16",
  icon: "w-8 h-8 md:w-10 md:h-10",
} as const;

export type ImageSize = keyof typeof imageSizes;

interface ImageCardProps {
  src: string;
  alt: string; // Required - enforced by TypeScript
  size?: ImageSize | string;
  caption?: string;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
  imageClassName?: string;
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  shadow?: "none" | "sm" | "md" | "lg";
  objectFit?: "cover" | "contain" | "fill" | "none";
  loading?: "lazy" | "eager";
  onClick?: () => void;
}

// Placeholder images map
export const placeholders = {
  hero: "/assets/images/hero.jpg",
  trust: "/assets/images/trust.jpg",
  shipping: "/assets/images/shipping.jpg",
  returns: "/assets/images/returns.jpg",
  support: "/assets/images/support.jpg",
  about: "/assets/images/about.jpg",
  default: "/placeholder.svg",
} as const;

export type PlaceholderKey = keyof typeof placeholders;

export const getPlaceholder = (key: PlaceholderKey = "default"): string => {
  return placeholders[key] || placeholders.default;
};

const ImageCard = ({
  src,
  alt,
  size = "card",
  caption,
  badge,
  badgeVariant = "secondary",
  className,
  imageClassName,
  rounded = "xl",
  shadow = "sm",
  objectFit = "cover",
  loading = "lazy",
  onClick,
}: ImageCardProps) => {
  const sizeClass = size in imageSizes ? imageSizes[size as ImageSize] : size;
  
  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  };

  const shadowClasses = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  };

  const objectFitClasses = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    if (target.src !== placeholders.default) {
      target.src = placeholders.default;
    }
  };

  return (
    <figure
      className={cn(
        "relative overflow-hidden",
        roundedClasses[rounded],
        shadowClasses[shadow],
        onClick && "cursor-pointer hover:opacity-95 transition-opacity",
        className
      )}
      onClick={onClick}
    >
      {/* Badge */}
      {badge && (
        <Badge
          variant={badgeVariant}
          className="absolute top-3 left-3 z-10"
        >
          {badge}
        </Badge>
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onError={handleError}
        className={cn(
          sizeClass,
          objectFitClasses[objectFit],
          imageClassName
        )}
      />

      {/* Caption */}
      {caption && (
        <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4 pt-8">
          <p className="text-sm text-foreground font-medium">{caption}</p>
        </figcaption>
      )}
    </figure>
  );
};

export default ImageCard;
