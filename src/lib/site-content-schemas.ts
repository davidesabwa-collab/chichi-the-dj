export type FieldType = 'text' | 'textarea' | 'number' | 'image' | 'list-text' | 'list-object' | 'icon' | 'social-icon';

export interface FieldDef {
    key: string;
    label: string;
    type: FieldType;
    fields?: FieldDef[]; // sub-fields, required when type === 'list-object'
}

export interface SectionSchema {
    key: string;
    label: string;
    description: string;
    fields: FieldDef[];
}

export const SITE_CONTENT_SCHEMAS: SectionSchema[] = [
    {
        key: 'hero',
        label: 'Hero (Homepage Top)',
        description: 'Headline, subtext, and the image carousel at the top of the homepage.',
        fields: [
            { key: 'headline', label: 'Headline', type: 'text' },
            { key: 'subtext', label: 'Subtext', type: 'textarea' },
            {
                key: 'images', label: 'Carousel Images', type: 'list-object', fields: [
                    { key: 'src', label: 'Image', type: 'image' },
                    { key: 'alt', label: 'Alt Text', type: 'text' },
                    { key: 'aiHint', label: 'AI Hint', type: 'text' },
                ]
            },
        ],
    },
    {
        key: 'about-home',
        label: 'About (Homepage Section)',
        description: 'The "About Chichi The DJ" block on the homepage.',
        fields: [
            { key: 'imageUrl', label: 'Photo', type: 'image' },
            { key: 'paragraph1', label: 'Paragraph 1', type: 'textarea' },
            { key: 'paragraph2', label: 'Paragraph 2', type: 'textarea' },
            { key: 'radioCredits', label: 'Radio Station Credits', type: 'list-text' },
        ],
    },
    {
        key: 'about-page',
        label: 'About Page',
        description: 'The full standalone /about page.',
        fields: [
            { key: 'imageUrl', label: 'Hero Photo', type: 'image' },
            { key: 'eyebrow', label: 'Eyebrow Text', type: 'text' },
            { key: 'paragraph1', label: 'Paragraph 1', type: 'textarea' },
            { key: 'paragraph2', label: 'Paragraph 2', type: 'textarea' },
            { key: 'paragraph3', label: 'Paragraph 3', type: 'textarea' },
            { key: 'radioCredits', label: 'Radio Station Credits', type: 'list-text' },
            {
                key: 'highlights', label: 'Stat Highlights', type: 'list-object', fields: [
                    { key: 'icon', label: 'Icon', type: 'icon' },
                    { key: 'label', label: 'Label', type: 'text' },
                    { key: 'sub', label: 'Sub Text', type: 'text' },
                ]
            },
            { key: 'genres', label: 'Music Genre Tags', type: 'list-text' },
            { key: 'educationText', label: 'Background: Education', type: 'textarea' },
            { key: 'radioExperienceText', label: 'Background: Radio Experience', type: 'textarea' },
            { key: 'eventExperienceText', label: 'Background: Event Experience', type: 'textarea' },
        ],
    },
    {
        key: 'services-home',
        label: 'Services (Homepage Section)',
        description: 'The service cards grid on the homepage.',
        fields: [
            {
                key: 'services', label: 'Services', type: 'list-object', fields: [
                    { key: 'title', label: 'Title', type: 'text' },
                    { key: 'description', label: 'Description', type: 'textarea' },
                    { key: 'imageUrl', label: 'Image', type: 'image' },
                    { key: 'aiHint', label: 'AI Hint', type: 'text' },
                ]
            },
        ],
    },
    {
        key: 'services-page',
        label: 'Services Page',
        description: 'The full standalone /services page.',
        fields: [
            {
                key: 'services', label: 'Services', type: 'list-object', fields: [
                    { key: 'title', label: 'Title', type: 'text' },
                    { key: 'price', label: 'Price Label', type: 'text' },
                    { key: 'description', label: 'Description', type: 'textarea' },
                    { key: 'features', label: 'Feature Bullets', type: 'list-text' },
                    { key: 'imageUrl', label: 'Image', type: 'image' },
                    { key: 'aiHint', label: 'AI Hint', type: 'text' },
                ]
            },
        ],
    },
    {
        key: 'kids-offer',
        label: 'Kids Birthday Offer Price',
        description: 'The price shown in the Kids Birthday special offer, on both the homepage and the Services page.',
        fields: [
            { key: 'price', label: 'Price (e.g. $800)', type: 'text' },
        ],
    },
    {
        key: 'stats',
        label: 'Stats Strip (Homepage)',
        description: 'The "10+ Years / 500+ Events" stat strip on the homepage.',
        fields: [
            {
                key: 'stats', label: 'Stats', type: 'list-object', fields: [
                    { key: 'value', label: 'Value', type: 'text' },
                    { key: 'label', label: 'Label', type: 'text' },
                ]
            },
        ],
    },
    {
        key: 'why-us',
        label: 'Why Chichi The DJ',
        description: 'The 4-item "Why Us" grid on the homepage.',
        fields: [
            {
                key: 'items', label: 'Items', type: 'list-object', fields: [
                    { key: 'icon', label: 'Icon', type: 'icon' },
                    { key: 'title', label: 'Title', type: 'text' },
                    { key: 'description', label: 'Description', type: 'textarea' },
                ]
            },
        ],
    },
    {
        key: 'more-features',
        label: 'More Features Grid',
        description: 'The "Beyond the Sound" feature links grid on the homepage.',
        fields: [
            {
                key: 'features', label: 'Features', type: 'list-object', fields: [
                    { key: 'icon', label: 'Icon', type: 'icon' },
                    { key: 'title', label: 'Title', type: 'text' },
                    { key: 'description', label: 'Description', type: 'textarea' },
                    { key: 'href', label: 'Link', type: 'text' },
                ]
            },
        ],
    },
    {
        key: 'gallery-home',
        label: 'Gallery (Homepage Section)',
        description: 'The photo grid in the homepage Gallery section.',
        fields: [
            {
                key: 'images', label: 'Images', type: 'list-object', fields: [
                    { key: 'src', label: 'Image', type: 'image' },
                    { key: 'alt', label: 'Alt Text', type: 'text' },
                    { key: 'aiHint', label: 'AI Hint', type: 'text' },
                ]
            },
        ],
    },
    {
        key: 'gallery-page',
        label: 'Gallery Page',
        description: 'The full standalone /gallery page.',
        fields: [
            {
                key: 'images', label: 'Images', type: 'list-object', fields: [
                    { key: 'src', label: 'Image', type: 'image' },
                    { key: 'alt', label: 'Alt Text', type: 'text' },
                    { key: 'category', label: 'Category Tag', type: 'text' },
                    { key: 'aiHint', label: 'AI Hint', type: 'text' },
                ]
            },
        ],
    },
    {
        key: 'testimonials',
        label: 'Testimonials',
        description: 'The client testimonial cards on the homepage.',
        fields: [
            {
                key: 'testimonials', label: 'Testimonials', type: 'list-object', fields: [
                    { key: 'quote', label: 'Quote', type: 'textarea' },
                    { key: 'name', label: 'Client Name', type: 'text' },
                    { key: 'event', label: 'Event Type', type: 'text' },
                    { key: 'rating', label: 'Rating (1-5)', type: 'number' },
                ]
            },
        ],
    },
    {
        key: 'mixcloud-mixes',
        label: 'Mixcloud Sessions List',
        description: 'The Mixcloud session links shown at the bottom of the homepage Mixes section.',
        fields: [
            {
                key: 'mixes', label: 'Mixcloud Mixes', type: 'list-object', fields: [
                    { key: 'title', label: 'Title', type: 'text' },
                    { key: 'duration', label: 'Duration (e.g. 38:55)', type: 'text' },
                    { key: 'slug', label: 'Mixcloud Slug', type: 'text' },
                ]
            },
        ],
    },
    {
        key: 'header',
        label: 'Header Navigation',
        description: 'The nav links in the site header.',
        fields: [
            {
                key: 'navLinks', label: 'Nav Links', type: 'list-object', fields: [
                    { key: 'name', label: 'Label', type: 'text' },
                    { key: 'href', label: 'Link', type: 'text' },
                ]
            },
        ],
    },
    {
        key: 'footer',
        label: 'Footer',
        description: 'Footer tagline, link columns, and social icons.',
        fields: [
            { key: 'tagline', label: 'Tagline', type: 'textarea' },
            {
                key: 'sections', label: 'Link Columns', type: 'list-object', fields: [
                    { key: 'title', label: 'Column Title', type: 'text' },
                    {
                        key: 'links', label: 'Links', type: 'list-object', fields: [
                            { key: 'name', label: 'Label', type: 'text' },
                            { key: 'href', label: 'Link', type: 'text' },
                        ]
                    },
                ]
            },
            {
                key: 'socialLinks', label: 'Social Icons', type: 'list-object', fields: [
                    { key: 'name', label: 'Name', type: 'text' },
                    { key: 'href', label: 'Link', type: 'text' },
                    { key: 'icon', label: 'Icon', type: 'social-icon' },
                ]
            },
        ],
    },
    {
        key: 'contact-info',
        label: 'Contact Info (Shared)',
        description: 'Phone, email, WhatsApp, and address — used on the homepage booking section and the Contact page.',
        fields: [
            { key: 'address', label: 'Address', type: 'text' },
            { key: 'phone', label: 'Phone', type: 'text' },
            { key: 'emails', label: 'Emails', type: 'list-text' },
            { key: 'whatsappNumber', label: 'WhatsApp Chat Link', type: 'text' },
            { key: 'whatsappCatalogUrl', label: 'WhatsApp Catalog Link', type: 'text' },
            { key: 'digitalCardUrl', label: 'Digital Contact Card Link', type: 'text' },
            { key: 'digitalCardQrUrl', label: 'Digital Contact Card QR Image', type: 'image' },
            { key: 'bookingPolicyText', label: 'Booking Policy Text', type: 'textarea' },
        ],
    },
    {
        key: 'faq',
        label: 'FAQ Page',
        description: 'All FAQ categories and questions.',
        fields: [
            {
                key: 'categories', label: 'Categories', type: 'list-object', fields: [
                    { key: 'category', label: 'Category Name', type: 'text' },
                    {
                        key: 'items', label: 'Questions', type: 'list-object', fields: [
                            { key: 'q', label: 'Question', type: 'text' },
                            { key: 'a', label: 'Answer', type: 'textarea' },
                        ]
                    },
                ]
            },
        ],
    },
    {
        key: 'site-config',
        label: 'Site Identity',
        description: 'The site name and description used in page titles, search results, and social share previews.',
        fields: [
            { key: 'name', label: 'Site Name', type: 'text' },
            { key: 'description', label: 'Site Description', type: 'textarea' },
        ],
    },
];

export const getSchema = (key: string) => SITE_CONTENT_SCHEMAS.find(s => s.key === key);
