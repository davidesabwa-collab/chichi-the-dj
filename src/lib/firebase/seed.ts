
// To run this seed script, run `npm run db:seed` in your terminal.

import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

async function seedDatabase() {
    console.log("Starting to seed database...");

    // --- Seed Mixes ---
    const mixesCollection = collection(db, 'mixes');
    const mixes = [
        {
            title: '2025 AFROBEAT MIX',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Afrobeat',
            date: '1 day ago',
            views: 0,
            platform: 'YouTube',
            platformUrl: 'https://youtu.be/ZqauqcxEF5I',
            audioUrl: 'https://storage.googleapis.com/stream-audio-6fa83.appspot.com/2025%20AFROBEAT%20MIX%20_%20%20CHICHI%20THE%20DJRUGERKAI!KHAIDAyra%20StarrWIZKIDNAIRA%20MARLEY.mp3'
        },
        {
            title: 'The Best of Afrobeat Mix 2024',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Afrobeat',
            date: '1 month ago',
            views: 47,
            platform: 'Mixcloud',
            platformUrl: 'https://www.mixcloud.com/chichithedjofficial/the-best-of-afrobeat-mix-2024-chichi-the-dj-asake-burna-boy-libianca-davido-ruger-wizkid/',
            audioUrl: '#'
        },
        {
            title: 'BEST Ugandan MUSIC Mix 2023',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Ugandan Music',
            date: '2 months ago',
            views: 8,
            platform: 'Mixcloud',
            platformUrl: 'https://www.mixcloud.com/chichithedjofficial/best-ugandan-music-mix-2023-chichi-the-dj/',
            audioUrl: '#'
        },
        {
            title: "90's THROWBACK CLASSIC RNB & JAMS V1",
            coverUrl: 'https://placehold.co/600x400',
            genre: 'R&B',
            date: '2 months ago',
            views: 9,
            platform: 'Mixcloud',
            platformUrl: "https://www.mixcloud.com/chichithedjofficial/90s-throwback-classic-rnb-jams-v1-chichi-the-dj-tlc-keith-sweat-soul-4-real-mary-j-blidge/",
            audioUrl: '#'
        },
        {
            title: 'Bongo Amapiano',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Amapiano',
            date: '2 months ago',
            views: 7,
            platform: 'Mixcloud',
            platformUrl: 'https://www.mixcloud.com/chichithedjofficial/_-bongo-amapiano-chichi-the-dj-diamod-platnumz-harmonize-marioo-rayvanny-jux-mbosso/',
            audioUrl: '#'
        },
        {
            title: 'KIKUYU GOSPEL VOL 5 -2024',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Gospel',
            date: 'Mar 15, 2024',
            views: 0,
            platform: 'Audiomack',
            platformUrl: 'https://audiomack.com/chichi-the-dj/song/kikuyu-gospel-vol-5-2024-chichi-the-dj-shiru-wa-gp-miriam-wamuthungu-cb-sir-ruth-wamuyu-grace-mwai',
            audioUrl: '#'
        },
        {
            title: '🔥🔥🔥Latest Afrobeat Mix 2 2024',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Afrobeat',
            date: 'Apr 17, 2024',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: 'https://hearthis.at/chichi-the-dj/eeelatest-afrobeat-mix-2-2024-chichi-the-dj-omah-lay-rema-rugerwizkid-ayra-starrsimi-ckayyemi-alade/',
            audioUrl: '#'
        },
        {
            title: 'Soukouss Mix',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Soukous',
            date: '2 months ago',
            views: 3,
            platform: 'Mixcloud',
            platformUrl: 'https://www.mixcloud.com/chichithedjofficial/soukouss-mix-chichi-the-dj-pepe-kalle-diblo-dibala-soukoussngouma-lokito-freddy-de-majounga/',
            audioUrl: '#'
        },
        {
            title: 'Chichi The Dj - Old School, Soul, RnB, Pop, Afrobeat music All in One Mix',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Variety',
            date: '2 months ago',
            views: 5,
            platform: 'Mixcloud',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'Best Ohangla Luo Mix 2024',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Ohangla',
            date: '2 months ago',
            views: 36,
            platform: 'Mixcloud',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'Arbantone Mix',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Arbantone',
            date: '2 months ago',
            views: 3,
            platform: 'Mixcloud',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'Best Afrobeat 2023',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Afrobeat',
            date: '2 years ago',
            views: 120,
            platform: 'Mixcloud',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'THE COLLECTORS SWAHILI GOSPEL VOL 1 2022',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Gospel',
            date: '2 years ago',
            views: 240,
            platform: 'Mixcloud',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'THE COLLECTORS BONGO MIX VOL 1 2022',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Bongo',
            date: '2 years ago',
            views: 156,
            platform: 'Mixcloud',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'THE COLLECTORS DANCEHALL MIX VOL 1 2022',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Dancehall',
            date: '2 years ago',
            views: 161,
            platform: 'Mixcloud',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'THE COLLECTORS CLASSIC 90\'s RNB VOL. 1_2022',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'R&B',
            date: '2 years ago',
            views: 172,
            platform: 'Mixcloud',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'OHANGLA/BENGA/LUO MIX vol. 1 - 2022',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Ohangla',
            date: '2 years ago',
            views: 400,
            platform: 'Mixcloud',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'THE COLLECTORS CLASSIC SOUL MIX Vol. 1',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Soul',
            date: '3 years ago',
            views: 130,
            platform: 'Mixcloud',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'THE COLLECTORS AMAPIANO VOL 2 2022',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Amapiano',
            date: '3 years ago',
            views: 96,
            platform: 'Mixcloud',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'AFROBEAT_NAIJA MIX 2022',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Afrobeat',
            date: '3 years ago',
            views: 180,
            platform: 'Mixcloud',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'THE COLLECTORS REGGAE VOL 2',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Reggae',
            date: '3 years ago',
            views: 0,
            platform: 'Mixcloud',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'BEST MUGITHI MIX vol. 1 - 2021',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Mugithi',
            date: 'Oct 14, 2022',
            views: 0,
            platform: 'Audiomack',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'Best Kalenjin Songs Ever',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Kalenjin',
            date: 'May 24, 2023',
            views: 0,
            platform: 'Audiomack',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'THE COLLECTORS SLOW RUMBA MIX VOL 1 2023',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Rumba',
            date: 'Aug 21, 2023',
            views: 0,
            platform: 'Audiomack',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'Reggae, Ragga, Dancehall, Afrobeats Mix',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Variety',
            date: 'May 8, 2024',
            views: 0,
            platform: 'Audiomack',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'LATEST KIKUYU GOSPEL 2 2023',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Gospel',
            date: 'Sep 4, 2023',
            views: 0,
            platform: 'Audiomack',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'AMAPIANO MIX 2021',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Amapiano',
            date: 'Oct 14, 2022',
            views: 0,
            platform: 'Audiomack',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'LIVE ABAGUSII CULTURAL DAY Seattle USA',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Kisii Music',
            date: 'Mar 3, 2025',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: '🔥 Chichi The DJ x Mc Hype mash',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Dancehall',
            date: 'May 8, 2024',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: 'PANADOL MUGITHI MIX 2024',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Mugithi',
            date: 'Mar 2, 2024',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: '#',
            audioUrl: '#'
        },
        {
            title: '🔥🔥🔥 Swahili Zilizopendwa Mix 2024',
            coverUrl: 'https://placehold.co/600x400',
            genre: 'Rumba',
            date: 'Feb 22, 2024',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: '#',
            audioUrl: '#'
        },
    ];

    try {
        await Promise.all(mixes.map(mix => addDoc(mixesCollection, mix)));
        console.log("✅ Mixes seeded successfully.");
    } catch(error) {
        console.error("Error seeding mixes:", error)
    }

    // --- Seed Events ---
    const eventsCollection = collection(db, 'events');
    const events = [
        { title: 'Summer Fest 2024', posterUrl: 'https://placehold.co/400x500', aiHint: 'summer party', date: '2024-08-15', location: 'Seattle, WA', venue: 'Gas Works Park' },
        { title: 'Rooftop Party', posterUrl: 'https://placehold.co/400x500', aiHint: 'rooftop party', date: '2024-07-30', location: 'Bellevue, WA', venue: 'The W Hotel' },
        { title: 'Corporate Gala', posterUrl: 'https://placehold.co/400x500', aiHint: 'corporate event', date: '2024-09-05', location: 'Redmond, WA', venue: 'Microsoft Conference Center' },
        { title: 'Wedding Celebration', posterUrl: 'https://placehold.co/400x500', aiHint: 'wedding reception', date: '2024-09-21', location: 'Woodinville, WA', venue: 'Chateau Ste. Michelle' },
    ];
    try {
        await Promise.all(events.map(event => addDoc(eventsCollection, event)));
        console.log("✅ Events seeded successfully.");
    } catch (error) {
        console.error("Error seeding events:", error)
    }


    // --- Seed Products ---
    const productsCollection = collection(db, 'products');
    const products = [
        { name: 'T-shirt', price: 25.00, imageUrl: 'https://placehold.co/400x500', hoverImageUrl: 'https://placehold.co/400x500', aiHint: 'tshirt merchandise' },
        { name: 'Hoodie', price: 45.00, imageUrl: 'https://placehold.co/400x500', hoverImageUrl: 'https://placehold.co/400x500', aiHint: 'hoodie merchandise' },
        { name: 'Ladies Tank Top', price: 25.00, imageUrl: 'https://placehold.co/400x500', hoverImageUrl: 'https://placehold.co/400x500', aiHint: 'tank top' },
        { name: 'Ladies Jump Suit', price: 100.00, imageUrl: 'https://placehold.co/400x500', hoverImageUrl: 'https://placehold.co/400x500', aiHint: 'jumpsuit fashion' },
        { name: 'Men Jump Suit', price: 100.00, imageUrl: 'https://placehold.co/400x500', hoverImageUrl: 'https://placehold.co/400x500', aiHint: 'men jumpsuit' },
        { name: 'Baseball Hat', price: 50.00, imageUrl: 'https://placehold.co/400x500', hoverImageUrl: 'https://placehold.co/400x500', aiHint: 'baseball cap' },
    ];

    try {
        await Promise.all(products.map(product => addDoc(productsCollection, product)));
        console.log("✅ Products seeded successfully.");
    } catch (error) {
        console.error("Error seeding products:", error)
    }
    

    // --- Seed Blogs ---
    const blogsCollection = collection(db, 'blogs');
    const blogs = [
        { title: 'The Rise of Amapiano', content: 'Exploring the global phenomenon of Amapiano music, from its origins in South Africa to its impact on dance floors worldwide. We dive into the key artists and tracks defining the genre.', thumbnailUrl: 'https://placehold.co/600x400', aiHint: 'music production', date: '2024-06-12' },
        { title: 'Top 5 Summer Anthems', content: 'My personal picks for the tracks that will be dominating the summer. From Afrobeats to Dancehall, these are the songs you need on your playlist for any party.', thumbnailUrl: 'https://placehold.co/600x400', aiHint: 'summer music', date: '2024-06-20' },
        { title: 'A Look Back: Memorable Events', content: 'Reflecting on some of the most unforgettable events I\'ve had the pleasure of DJing. A tribute to the amazing crowds and lifelong memories.', thumbnailUrl: 'https://placehold.co/600x400', aiHint: 'dj event', date: '2024-07-01' },
    ];

    try {
        await Promise.all(blogs.map(blog => addDoc(blogsCollection, blog)));
        console.log("✅ Blogs seeded successfully.");
    } catch (error) {
        console.error("Error seeding blogs:", error);
    }
    

    console.log("Database seeding complete!");
}

seedDatabase().then(() => {
    console.log("Seed script finished.");
}).catch((e) => {
    console.error("Seeding failed:", e);
});

  