/**
 * Global Image System for NationTechMart
 * 
 * This module provides a consistent image handling system across the website.
 * 
 * ## Components
 * - ImageCard: Full-featured image component with caption, badge, and responsive sizing
 * - ResponsiveImage: Simple image component with fallback and required alt text
 * 
 * ## Usage Examples
 * 
 * ```tsx
 * // Basic ImageCard with caption
 * <ImageCard 
 *   src="/assets/images/hero.jpg" 
 *   alt="Hero banner showing technology products"
 *   size="hero"
 *   caption="Quality Technology Products"
 * />
 * 
 * // ImageCard with badge
 * <ImageCard 
 *   src="/assets/images/shipping.jpg" 
 *   alt="Fast shipping illustration"
 *   size="card"
 *   badge="Free Shipping"
 *   badgeVariant="default"
 * />
 * 
 * // Simple responsive image
 * <ResponsiveImage 
 *   src="/assets/images/trust.jpg" 
 *   alt="Trust and security badge"
 *   className="w-full h-48 rounded-lg"
 * />
 * 
 * // Using placeholders
 * <ImageCard 
 *   src={getPlaceholder("shipping")} 
 *   alt="Shipping information"
 *   size="card"
 * />
 * ```
 * 
 * ## Available Placeholders
 * - hero: Hero banner image
 * - trust: Trust/security image
 * - shipping: Shipping/delivery image
 * - returns: Returns/refund image
 * - support: Customer support image
 * - about: About us image
 * - default: Generic placeholder
 * 
 * ## Image Sizes
 * - hero: Full-width hero banners (400-600px height)
 * - banner: Section banners (200-350px height)
 * - card: Product/feature cards (180-220px height)
 * - thumbnail: Small previews (96-128px)
 * - logo: Logo sizes (48-64px)
 * - icon: Icon sizes (32-40px)
 */

export { default as ImageCard, imageSizes, placeholders, getPlaceholder } from "./ImageCard";
export type { ImageSize, PlaceholderKey } from "./ImageCard";
export { default as ResponsiveImage } from "./ResponsiveImage";
