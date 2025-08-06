// To run this seed script, run `npm run db:seed` in your terminal.

import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

async function seedDatabase() {
    console.log("Starting to seed database...");

    // --- Seed Mixes ---
    const mixesCollection = collection(db, 'mixes');
    const mixes = [
        { title: 'Lagos To The Max Vol 07', coverUrl: 'https://placehold.co/600x400', genre: 'Afrobeats', date: '1 week ago', views: 1024 },
        { title: 'Summer Vibes Mix 2024', coverUrl: 'https://placehold.co/600x400', genre: 'Dancehall', date: '3 weeks ago', views: 850 },
        { title: 'Hip Hop Classics Vol 10', coverUrl: 'https://placehold.co/600x400', genre: 'Hip Hop', date: '1 month ago', views: 1500 },
        { title: 'Amapiano Grooves', coverUrl: 'https://placehold.co/600x400', genre: 'Amapiano', date: '2 months ago', views: 2100 },
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
        { name: 'T-shirt', price: '$25.00', imageUrl: 'https://placehold.co/400x500', hoverImageUrl: 'https://placehold.co/400x500', aiHint: 'tshirt merchandise' },
        { name: 'Hoodie', price: '$45.00', imageUrl: 'https://placehold.co/400x500', hoverImageUrl: 'https://placehold.co/400x500', aiHint: 'hoodie merchandise' },
        { name: 'Ladies Tank Top', price: '$25.00', imageUrl: 'https://placehold.co/400x500', hoverImageUrl: 'https://placehold.co/400x500', aiHint: 'tank top' },
        { name: 'Ladies Jump Suit', price: '$100.00', imageUrl: 'https://placehold.co/400x500', hoverImageUrl: 'https://placehold.co/400x500', aiHint: 'jumpsuit fashion' },
        { name: 'Men Jump Suit', price: '$100.00', imageUrl: 'https://placehold.co/400x500', hoverImageUrl: 'https://placehold.co/400x500', aiHint: 'men jumpsuit' },
        { name: 'Baseball Hat', price: '$50.00', imageUrl: 'https://placehold.co/400x500', hoverImageUrl: 'https://placehold.co/400x500', aiHint: 'baseball cap' },
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
        { title: 'The Rise of Amapiano', content: 'Exploring the global phenomenon of Amapiano music, from its origins in South Africa to its impact on dance floors worldwide. We dive into the key artists and tracks defining the genre.', thumbnailUrl: 'https://placehold.co/600x400', aiHint: 'music production', date: 'June 12, 2024' },
        { title: 'Top 5 Summer Anthems', content: 'My personal picks for the tracks that will be dominating the summer. From Afrobeats to Dancehall, these are the songs you need on your playlist for any party.', thumbnailUrl: 'https://placehold.co/600x400', aiHint: 'summer music', date: 'June 20, 2024' },
        { title: 'A Look Back: Memorable Events', content: 'Reflecting on some of the most unforgettable events I\'ve had the pleasure of DJing. A tribute to the amazing crowds and lifelong memories.', thumbnailUrl: 'https://placehold.co/600x400', aiHint: 'dj event', date: 'July 01, 2024' },
    ];

    try {
        await Promise.all(blogs.map(blog => addDoc(blogsCollection, blog)));
        console.log("✅ Blogs seeded successfully.");
    } catch (error) {
        console.error("Error seeding blogs:", error);
    }
    

    console.log("Database seeding complete!");
    // The script will exit automatically.
}

seedDatabase().then(() => {
    // process.exit(0);
}).catch((e) => {
    console.error(e);
    // process.exit(1);
});
