/**
 * Cloudinary image interface
 *@interface
 *@param {public_id} public_id - image url
 */
export interface Image {
  _id: string;
  public_id: string;
  url: string;
}
/**
 * Product API response interface
 *@interface
 *@param {images} images - cloudinary IMG object, use public_id in frontend
 */
export interface Product {
  _id: string;
  brand: string;
  colors: string[];
  department: string;
  description: string;
  images: Image[];
  model: string;
  price: number;
  size: number;
  styleCode: string;
}

/**
 * Generic Router Link interface
 *@interface RouterLink
 *@param {genericType} text - router link content string or ReactNode
 *@param {string} href - href of router link
 */
export interface RouterLinkType<T> {
  text: T;
  href: string;
}
