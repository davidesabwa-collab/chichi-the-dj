
export interface ImageItem {
    src: string;
    alt: string;
    aiHint?: string;
}

export interface GalleryImageItem extends ImageItem {
    category?: string;
}

export interface IconItem {
    icon: string;
    title: string;
    description: string;
}

export interface FeatureItem extends IconItem {
    href: string;
}

export interface StatItem {
    value: string;
    label: string;
}

export interface HighlightItem {
    icon: string;
    label: string;
    sub: string;
}

export interface TestimonialItem {
    quote: string;
    name: string;
    event: string;
    rating: number;
}

export interface ServiceItem {
    title: string;
    description: string;
    imageUrl: string;
    aiHint?: string;
}

export interface ServicePageItem extends ServiceItem {
    price: string;
    features: string[];
}

export interface NavLinkItem {
    name: string;
    href: string;
}

export interface SocialLinkItem {
    name: string;
    href: string;
    icon: string;
}

export interface FooterLinkGroup {
    title: string;
    links: NavLinkItem[];
}

export interface FaqItem {
    q: string;
    a: string;
}

export interface FaqCategory {
    category: string;
    items: FaqItem[];
}

export interface MixcloudMixItem {
    title: string;
    duration: string;
    slug: string;
}

export interface ContactDetailItem {
    icon: string;
    label: string;
    lines: string[];
    href?: string;
}

// --- Section content shapes, keyed by Firestore doc id in the `siteContent` collection ---

export interface HeroContent {
    headline: string;
    subtext: string;
}

export interface MixesIntroContent {
    headline: string;
    subtext: string;
    images: ImageItem[];
}

export interface AboutHomeContent {
    imageUrl: string;
    paragraph1: string;
    paragraph2: string;
    radioCredits: string[];
}

export interface AboutPageContent {
    imageUrl: string;
    eyebrow: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    radioCredits: string[];
    highlights: HighlightItem[];
    genres: string[];
    educationText: string;
    radioExperienceText: string;
    eventExperienceText: string;
}

export interface ServicesHomeContent {
    services: ServiceItem[];
}

export interface ServicesPageContent {
    services: ServicePageItem[];
}

export interface KidsOfferContent {
    price: string;
}

export interface StatsContent {
    stats: StatItem[];
}

export interface WhyUsContent {
    items: IconItem[];
}

export interface MoreFeaturesContent {
    features: FeatureItem[];
}

export interface GalleryHomeContent {
    images: ImageItem[];
}

export interface GalleryPageContent {
    images: GalleryImageItem[];
}

export interface TestimonialsContent {
    testimonials: TestimonialItem[];
}

export interface MixcloudMixesContent {
    mixes: MixcloudMixItem[];
}

export interface HeaderContent {
    navLinks: NavLinkItem[];
}

export interface FooterContent {
    tagline: string;
    sections: FooterLinkGroup[];
    socialLinks: SocialLinkItem[];
}

export interface ContactInfoContent {
    address: string;
    phone: string;
    emails: string[];
    whatsappNumber: string;
    whatsappCatalogUrl: string;
    digitalCardUrl: string;
    digitalCardQrUrl: string;
    bookingPolicyText: string;
    paymentMethods: string[];
}

export interface FaqContent {
    categories: FaqCategory[];
}

export interface SiteConfigContent {
    name: string;
    description: string;
}
