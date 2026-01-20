import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Slide {
  image: string;
  alt: string;
  heading: string;
  subtext: string;
  primaryLink: string;
  primaryText: string;
  secondaryLink?: string;
  secondaryText?: string;
  align?: "left" | "right";
}

const slides: Slide[] = [
  {
    image: "/assets/images/hero-banner.jpg",
    alt: "Professional using printer in modern office environment",
    heading: "Printers & Scanners for Home and Office Use",
    subtext:
      "Shop a wide selection of printers and document scanners designed for everyday home use, office environments, and business workflows.",
    primaryLink: "/shop",
    primaryText: "Shop All Products",
  },
  {
    image: "/assets/images/shop-banner.jpg",
    alt: "Woman using office printer copier in modern workplace",
    heading: "Home, Office, Inkjet & Laser Printers",
    subtext:
      "Find the right printer for your needs with detailed specifications and transparent pricing.",
    primaryLink: "/shop",
    primaryText: "View Printers",
    align: "right",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning],
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="bg-background">
      <div
        className="relative w-full bg-muted max-h-[500px] md:max-h-[600px] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        data-testid="hero-carousel"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={index !== currentSlide}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-auto object-cover min-h-[400px] md:min-h-[500px]"
              style={{ objectPosition: "center 20%" }}
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 flex items-center">
              <div
                className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex ${slide.align === "right" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xl bg-black/40 backdrop-blur-sm p-4 md:p-6 rounded-lg text-left transform transition-all duration-500 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                    {slide.heading}
                  </h1>
                  <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                    {slide.subtext}
                  </p>
                  <div className="mt-4 md:mt-6 flex flex-wrap gap-3 justify-start">
                    <Button
                      asChild
                      size="lg"
                      data-testid={`button-carousel-primary-${index}`}
                    >
                      <Link to={slide.primaryLink}>
                        {slide.primaryText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    {slide.secondaryText && slide.secondaryLink && (
                      <Button
                        asChild
                        variant="secondary"
                        size="lg"
                        className="bg-background text-foreground hover:bg-background/90"
                        data-testid={`button-carousel-secondary-${index}`}
                      >
                        <Link to={slide.secondaryLink}>
                          {slide.secondaryText}
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="relative min-h-[400px] md:min-h-[500px]">
          <img
            src={slides[0].image}
            alt=""
            className="w-full h-auto object-cover invisible"
            aria-hidden="true"
          />
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
          data-testid="button-carousel-prev"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
          data-testid="button-carousel-next"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2"
          data-testid="carousel-dots"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : "false"}
              data-testid={`button-carousel-dot-${index}`}
            />
          ))}
        </div>
      </div>

      <div className="bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="py-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <Truck className="h-5 w-5 text-primary-foreground shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">
                    Shipping Calculated at Checkout
                  </p>
                  <p className="text-xs text-primary-foreground/80">
                    Based on address and order details
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Shield className="h-5 w-5 text-primary-foreground shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">
                    Secure Checkout
                  </p>
                  <p className="text-xs text-primary-foreground/80">
                    SSL encrypted
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-3">
                <RotateCcw className="h-5 w-5 text-primary-foreground shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">
                    Easy Returns
                  </p>
                  <p className="text-xs text-primary-foreground/80">
                    30-day policy (eligibility applies)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
