import {
    Award, ShieldCheck, Sparkles, Users, Headphones, Disc, ListMusic, Book,
    CalendarDays, ShoppingCart, Music, Radio, MapPin, Phone, Mail, Clock,
    MessageCircle, Star, Cake, GraduationCap, Info, Facebook, Instagram, Youtube,
    type LucideIcon,
} from 'lucide-react';

// General-purpose icon set used by admin "icon" fields (Why Us, More Features, About highlights, etc.)
export const ICON_MAP: Record<string, LucideIcon> = {
    Award, ShieldCheck, Sparkles, Users, Headphones, Disc, ListMusic, Book,
    CalendarDays, ShoppingCart, Music, Radio, MapPin, Phone, Mail, Clock,
    MessageCircle, Star, Cake, GraduationCap, Info,
};

export const ICON_KEYS = Object.keys(ICON_MAP);

export function SiteIcon({ name, className }: { name: string; className?: string }) {
    const Icon = ICON_MAP[name] || Info;
    return <Icon className={className} />;
}

// Social icons — footer/contact social links. Includes lucide icons plus hand-drawn SVGs
// for platforms lucide doesn't ship (TikTok, Snapchat, Mixcloud, HearThis.at).
type SocialIconComponent = ({ className }: { className?: string }) => JSX.Element;

export const SOCIAL_ICON_MAP: Record<string, SocialIconComponent> = {
    Facebook: ({ className }) => <Facebook className={className} />,
    Instagram: ({ className }) => <Instagram className={className} />,
    YouTube: ({ className }) => <Youtube className={className} />,
    TikTok: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.93a8.16 8.16 0 0 0 4.77 1.52V7.01a4.85 4.85 0 0 1-1-.32z" />
        </svg>
    ),
    Snapchat: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.001 2c3.06 0 5.594 2.42 5.792 5.502l.008.26.008 1.876c.016.152.146.264.301.264.083 0 .17-.032.276-.098.09-.056.192-.086.298-.086.234 0 .45.146.53.375.086.245-.006.516-.223.652-.05.031-.24.14-.28.163a.484.484 0 0 0-.243.42c0 .06.014.12.043.176.36.706 1.15 1.196 1.985 1.29.243.028.428.234.428.478 0 .06-.01.12-.033.177-.106.271-.567.462-1.492.657-.09.144-.108.362-.14.62-.036.29-.204.436-.5.436l-.14-.005a3.42 3.42 0 0 0-.548-.047c-.23 0-.46.03-.708.096-.478.128-.99.42-1.618.834-.79.523-1.687 1.116-2.964 1.116-.052 0-.104-.002-.157-.005l-.09.003c-1.276 0-2.173-.593-2.963-1.116-.628-.414-1.14-.706-1.618-.834a2.877 2.877 0 0 0-.708-.096c-.19 0-.377.017-.548.047l-.14.005c-.296 0-.464-.146-.5-.436-.032-.258-.05-.476-.14-.62-.925-.195-1.386-.386-1.492-.657a.478.478 0 0 1-.033-.177c0-.244.185-.45.428-.478.835-.094 1.625-.584 1.985-1.29a.443.443 0 0 0 .043-.176.484.484 0 0 0-.243-.42c-.04-.023-.23-.132-.28-.163a.567.567 0 0 1-.223-.652.545.545 0 0 1 .53-.375c.106 0 .208.03.298.086.106.066.193.098.276.098.155 0 .285-.112.301-.264l.008-1.876.008-.26C6.407 4.42 8.941 2 12.001 2z" />
        </svg>
    ),
    Mixcloud: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M11.57 2C6.29 2 2 6.29 2 11.57s4.29 9.57 9.57 9.57c1.97 0 3.8-.6 5.32-1.62l-1.42-1.42a7.52 7.52 0 0 1-3.9 1.09c-4.18 0-7.57-3.39-7.57-7.57s3.39-7.57 7.57-7.57c1.97 0 3.76.75 5.11 1.99l1.42-1.42A9.52 9.52 0 0 0 11.57 2zm9.57 9.57c0 .87-.11 1.71-.32 2.51l1.82 1.82c.38-1.35.59-2.78.36-2.51V11.57zm-4.29-.86a3.28 3.28 0 0 0-3.28 3.28 3.28 3.28 0 0 0 3.28 3.28 3.28 3.28 0 0 0 3.28-3.28 3.28 3.28 0 0 0-3.28-3.28zm0 4.86a1.57 1.57 0 0 1-1.57-1.57 1.57 1.57 0 0 1 1.57-1.57 1.57 1.57 0 0 1 1.57 1.57 1.57 1.57 0 0 1-1.57 1.57z" />
        </svg>
    ),
    HearThisAt: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
        </svg>
    ),
};

export const SOCIAL_ICON_KEYS = Object.keys(SOCIAL_ICON_MAP);

export function SocialIcon({ name, className }: { name: string; className?: string }) {
    const Icon = SOCIAL_ICON_MAP[name] || SOCIAL_ICON_MAP.Facebook;
    return <Icon className={className} />;
}
