
// To run this seed script, run `npm run db:seed` in your terminal.

import { db } from './firebase';
import { collection, getDocs, writeBatch, doc } from 'firebase/firestore';

async function seedDatabase() {
    console.log("Starting to seed database...");

    // --- Clear Existing Mixes ---
    const mixesCollectionRef = collection(db, 'mixes');
    console.log("Clearing existing mixes...");
    try {
        const querySnapshot = await getDocs(mixesCollectionRef);
        const batch = writeBatch(db);
        querySnapshot.docs.forEach((doc) => {
            batch.delete(doc.ref);
        });
        await batch.commit();
        console.log("✅ Existing mixes cleared successfully.");
    } catch (error) {
        console.error("Error clearing mixes:", error);
        return; // Stop seeding if clearing fails
    }

    // --- Seed New Mixes from HearThis.at ---
    const mixes = [
        {
            title: "🔥LIVE ABAGUSII CULTURAL DAY Seattle USA - Miggy Champ, Mr. Ong'eng'o, Chichi The DJ 08_17_2024 Live",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: 'Kisii Music',
            date: '1 day ago',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: 'https://hearthis.at/chichi-the-dj/',
            audioUrl: '#'
        },
        {
            title: "🔥 Chichi The DJ x Mc Hype mash - Reggae, Ragga, Dancehall, Afrobeats, Arbantone, Kudade, Girlfriend, Ruger, Rema",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: 'Dj Mix',
            date: '2 days ago',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: 'https://hearthis.at/chichi-the-dj/',
            audioUrl: '#'
        },
        {
            title: "Arbantone - Chichi The DJ, Finish Kumalo, G Baga Jat, Mukuchu, Tiktoker, Kappy, YBW Smith, Gody Tennor, Tipsy Gee",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: 'Dancehall',
            date: '3 days ago',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: 'https://hearthis.at/chichi-the-dj/',
            audioUrl: '#'
        },
        {
            title: "🔥🔥🔥Latest Afrobeat Mix 2 2024 - Chichi The Dj, Omah Lay, Rema, Ruger,Wizkid, Ayra Starr,Simi, Ckay,Yemi Alade",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: 'Amapiano',
            date: '4 days ago',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: 'https://hearthis.at/chichi-the-dj/eeelatest-afrobeat-mix-2-2024-chichi-the-dj-omah-lay-rema-rugerwizkid-ayra-starrsimi-ckayyemi-alade/',
            audioUrl: '#'
        },
        {
            title: "Best Ohangla Luo Mix 2024 - Chichi The DJ, Prince Indah, Sumina, Odongo Swagg, MacAjudo, Musa Jakadalla",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: 'Other',
            date: '5 days ago',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: 'https://hearthis.at/chichi-the-dj/',
            audioUrl: '#'
        },
        {
            title: "KIKUYU GOSPEL VOL 5 -2024 - Chichi The DJ, Shiru Wa GP, Miriam Wamuthungu, CB Sir, Ruth Wamuyu, Grace Mwai",
            coverUrl: "https://img.hearthis.at/4/1/4/_/uploads/9891499/image_track/10985275/kikuyu-gospel-vol-5-2024-chich----w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1710533221414.jpg",
            genre: 'kikuyu gospel',
            date: '1 week ago',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: 'https://hearthis.at/chichi-the-dj/',
            audioUrl: '#'
        },
        {
            title: "PANADOL MUGITHI MIX 2024 - SALIM JUNIOR x CHICHI THE DJ",
            coverUrl: "https://img.hearthis.at/8/8/2/_/uploads/9891499/image_track/10904926/panadol-mugithi-mix-2024-salim----w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1709372557288.jpg",
            genre: 'Mugithi',
            date: '2 weeks ago',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: 'https://hearthis.at/chichi-the-dj/',
            audioUrl: '#'
        },
        {
            title: "🔥🔥🔥 Swahili Zilizopendwa Mix 2024 - Chichi The DJ",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: 'Rumba',
            date: '3 weeks ago',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: 'https://hearthis.at/chichi-the-dj/',
            audioUrl: '#'
        },
        {
            title: "Soukouss Mix - Chichi The DJ, Pepe Kalle, Diblo Dibala, soukouss,Ngouma Lokito, Freddy De Majounga, Sakis",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: 'Soukous',
            date: '1 month ago',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: 'https://hearthis.at/chichi-the-dj/',
            audioUrl: '#'
        },
        {
            title: "🔥🔥🔥 THE BEST OF AMAPIANO 2024 2 - CHICHI THE DJ, Mellow & Sleazy, Tjina, Peacock Revisit, Suka",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: 'Amapiano',
            date: '1 month ago',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: 'https://hearthis.at/chichi-the-dj/',
            audioUrl: '#'
        },
        {
            title: "🔥🔥AMAPIANO MIX 2024 Vol 1 - CHICHI THE DJ, Dalie, Mnike, ka valungu, Hamba Juba,Yini Ngathi,Dubula",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: 'Amapiano',
            date: '2 months ago',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: 'https://hearthis.at/chichi-the-dj/',
            audioUrl: '#'
        },
        {
            title: "🔥🔥🔥KIKUYU GOSPEL OLDIES Vol 4 2024 - CHICHI THE DJ Ft. Mc HypeMash",
            coverUrl: "https://img.hearthis.at/2/8/4/_/uploads/9891499/image_track/10673588/aaaaaaaaakikuyu-gospel-oldies-----w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1706785954482.jpg",
            genre: 'Spiritual',
            date: '2 months ago',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: 'https://hearthis.at/chichi-the-dj/',
            audioUrl: '#'
        },
        {
            title: "🔥🔥🔥LATEST GOSPEL VOL 3 2024 CHICHI THE DJ",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: 'KIGOOCO',
            date: '3 months ago',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: 'https://hearthis.at/chichi-the-dj/',
            audioUrl: '#'
        },
        {
            title: "The Best of Afrobeat Mix - 2023:2024 - Chichi The DJ, Asake, Burna Boy, Libianca, Davido, Ruger, Wizkid,NSG",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: 'Amapiano',
            date: '4 months ago',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: 'https://hearthis.at/chichi-the-dj/',
            audioUrl: '#'
        },
        {
            title: "🔥🔥🔥90's THROWBACK CLASSIC RNB JAMS 1 - CHICHI THE DJ, TLC, SOUL 4 REAL, MARY J BLIGE, LUCY PEARL, Ja Rule, Missy Elliots, Blackstreet, New Edition, 702, Montell Jordan, and many more",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: 'R&B',
            date: '5 months ago',
            views: 0,
            platform: 'HearThisAt',
            platformUrl: 'https://hearthis.at/chichi-the-dj/',
            audioUrl: '#'
        }
    ];

    try {
        console.log("Seeding new mixes...");
        const batch = writeBatch(db);
        mixes.forEach(mix => {
            const docRef = doc(mixesCollectionRef); // Automatically generate a new ID
            batch.set(docRef, mix);
        });
        await batch.commit();
        console.log(`✅ ${mixes.length} new mixes seeded successfully.`);
    } catch(error) {
        console.error("Error seeding new mixes:", error)
    }

    console.log("Database seeding complete!");
}

seedDatabase().then(() => {
    console.log("Seed script finished.");
}).catch((e) => {
    console.error("Seeding failed:", e);
});
