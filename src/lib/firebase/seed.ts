
// To run this seed script, run `npm run db:seed` in your terminal.

import { db } from './firebase';
import { collection, getDocs, writeBatch, doc } from 'firebase/firestore';

async function seedDatabase() {
    console.log("Starting to seed database...");

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
        return;
    }

    const mixes = [
        // HearThis.at Mixes
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
            genre: "Rumba",
            date: "3 weeks ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "Soukouss Mix - Chichi The DJ, Pepe Kalle, Diblo Dibala, soukouss,Ngouma Lokito, Freddy De Majounga, Sakis",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Soukous",
            date: "1 month ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "🔥🔥🔥 THE BEST OF AMAPIANO 2024 2 - CHICHI THE DJ, Mellow & Sleazy, Tjina, Peacock Revisit, Suka",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Amapiano",
            date: "1 month ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "🔥🔥AMAPIANO MIX 2024 Vol 1 - CHICHI THE DJ, Dalie, Mnike, ka valungu, Hamba Juba,Yini Ngathi,Dubula",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Amapiano",
            date: "2 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "🔥🔥🔥KIKUYU GOSPEL OLDIES Vol 4 2024 - CHICHI THE DJ Ft. Mc HypeMash",
            coverUrl: "https://img.hearthis.at/2/8/4/_/uploads/9891499/image_track/10673588/aaaaaaaaakikuyu-gospel-oldies-----w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1706785954482.jpg",
            genre: "Spiritual",
            date: "2 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "🔥🔥🔥LATEST GOSPEL VOL 3 2024 CHICHI THE DJ",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "KIGOOCO",
            date: "3 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "The Best of Afrobeat Mix - 2023:2024 - Chichi The DJ, Asake, Burna Boy, Libianca, Davido, Ruger, Wizkid,NSG",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Amapiano",
            date: "3 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "🔥🔥🔥90's THROWBACK CLASSIC RNB JAMS 1 - CHICHI THE DJ...",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "R&B",
            date: "4 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "🔥🔥🔥LATEST KIKUYU GOSPEL 2 2023 - CHICHI THE DJ",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Spiritual",
            date: "4 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "CHICHI THE DJ - THE COLLECTORS 🔥🔥🔥SLOW SWEET RUMBA MIX VOL 1 2023...",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Other",
            date: "5 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "CHICHI THE DJ - THE COLLECTORS REGGAE VOL 3",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Reggae",
            date: "5 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "Latest Ugandan Mix [2023] - Chichi The DJ",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Other",
            date: "6 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "2023 AFRICAN DANCE MIX CHICHI THE DJ - NDOMBOLO, COUPE DECALE, AFROBEAT, AMAPIANO...",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Other",
            date: "6 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "Best Kalenjing Songs Ever - Chichi The DJ - Chapa Luku, Emily Chepchumba...",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Other",
            date: "7 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "🔥🔥🔥LATEST KIKUYU GOSPEL 2023 -CHICHI THE DJ- SAMMY IRUNGU, GRACE MWAI...",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Spiritual",
            date: "7 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "AMAPIANO 2023 VOL1 - CHICHI THE DJ - COSTA TITCH,MASTER KG,MUSA KEYS,FOCALISTIC...",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Amapiano",
            date: "8 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "Chichi The DJ - Best Afrobeat 2023 [Burna boy, Buga, Folake, Kpe Paso, ayyra...]",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Amapiano",
            date: "8 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "E.A. AFROBEAT 2023 - Chichi The DJ, Bien Sautisol, khaligraph jones, Jay Melody...",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Amapiano",
            date: "9 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "Chichi The DJ - Best Soukouss Heat Mix vol 1",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Other",
            date: "9 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "CHICHI THE DJ - THE COLLECTORS SWAHILI GOSPELVOL 1 2022",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Spiritual",
            date: "10 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "CHICHI THE DJ - THE COLLECTORS BONGO MIX VOL 1 2022",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Other",
            date: "10 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "CHICHI THE DJ - THE COLLECTORS DANCEHALL MIX VOL 1 2022",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Dancehall",
            date: "11 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "CHICHI THE DJ - THE COLLECTORS CLASSIC 90's RNB MIX VOL 1",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "R&B",
            date: "11 months ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "CHICHI THE DJ - The Music Doctor - OHANGLA/BENGA/LUO MIX vol 1 - 2022",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Other",
            date: "1 year ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "CHICHI THE DJ - THE COLLECTORS CLASSIC SOUL MIX VOL 1",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Soul",
            date: "1 year ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "CHICHI THE DJ - THE COLLECTORS AMAPIANO VOL 2 2022",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Amapiano",
            date: "1 year ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "CHICHI THE DJ - THE COLLECTORS REGGAE VOL 2",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Reggae",
            date: "1 year ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "CHICHI THE DJ - TheSweetSelector BEST MUGITHI MIX vol. 1 - 2021",
            coverUrl: "https://img.hearthis.at/9/7/0/_/uploads/9891499/image_track/6318739/chichi-the-dj-thesweetselector----w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1634264023079.jpg",
            genre: "Folk",
            date: "2 years ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "CHICHI THE DJ - THE COLLECTORS AMAPIANO MIX VOL 1 2021",
            coverUrl: "https://img.hearthis.at/2/1/5/_/uploads/9891499/image_user/w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624180512.jpg",
            genre: "Other",
            date: "2 years ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        {
            title: "CHICHI THE DJ - THE COLLECTORS REGGAE Vol 1 2021",
            coverUrl: "https://img.hearthis.at/2/4/8/_/uploads/9891499/image_track/6150082/chichi-the-dj-the-collectors-r----w200_h200_c3a3a3a_q70_ptrue_v2_----cropped_1628624950842.jpg",
            genre: "Reggae",
            date: "2 years ago",
            views: 0,
            platform: "HearThisAt",
            platformUrl: "https://hearthis.at/chichi-the-dj/",
            audioUrl: "#"
        },
        
        // YouTube Mixes
        ...[
            'ZqauqcxEF5I', '3FBeRYu5NQk', '3h3b1nDaxYg', '9wnCC2AUAls', 'xCJ0C0YwDrk', 'ezzL0U__EMs', 'LwKBglNhwsk', 
            'WotMJ12_0W8', 'X4_VZthIoVc', 'PIhQnWyC-tQ', 'wz8lzeE-8po', 'k7acNGBEyZE', 'v_L_K4qHaE0', 'EopMh1SvbHI', 
            'B90bgiT-Tr0', 'De6lB-S8fmI', 'yicFQontIkI', 'QmseEgIIXMI', 'Bt7Aggn0YHw', '8kXwETJFBNQ', 'CJ8ZpB1Si6o', 
            'pVN5XpOpslo', 'fuK0DfSsy-A', 'uMPzxSSYyQM', '1LCMxaRYTEs', 'VXZvSPseMic', 'bOmwakDB93c', 'f8QbEHB7i1k', 
            'h9Zmwjw8cuo', 'b7o6vxFTPc0', 'ADI_NgAcS08', 'AqxPjMnt2-Q', '_6KYGJG_D48', 'ERH8VGjV0iw', '-Jiuvk88xjc', 
            'HK7q6YKE2go', 'vJyXSDquxlM', 'CihbrDnMkEQ', 'XJtAroyakp0', 'b_uwucZt-Jw', 'o1y-_7eDjnw', 'dQ9GEJAEzrM', 
            'GwIh-DkoODM', 'poEwPZUaFC4', 'ZMfVk5fhgN0', 'kYOWHZw-ijM', 'cXTQ3TBs5ao', 'ICjqYlVFZL4', 'DWBkgtXXJoU', 
            '745SaBSXGGM', 'oz6COac8SAw', '2gwckOKbAoo', 'BJczAsU75nk', '__54igYS_3w', '1JRThmnsfKY', 'WBkdLrJw1EU', 
            '9vimfaKnjC4', '9KFq-ove2-Y', 'wOjWHgjHrjg', 'MJ9d4qnLkeE', 'DD3H5NvJzIM', '6OHw6eYKoZI', '_dYn72xIND4', 
            '_wqmV5rYN9g', 'XkV2NlmIw7Q', 'vBVovzKudM8', 'PtGBcIdmlkI', 'VSlUw2VQnXo', 'R7O9XIltFlQ', 'DSxObsdsNrI', 
            '4THMl3PWOQI', 'dY5MHv4iMAo', 'zFiPSUr8sKM', 'Ww5TTsSzau4', 'RbtIEv_2BXo', 'x8DgdFSbf7c', 'vTGrVCoDCZk', 
            'MyIqLr4nUIs', 'biJOtNQmZ28', 'JtaVATFVRhM', 'VWms-9DCCZ8', 'Qmt5Vj-uI10', 'IAyiv7ZQhvc', '8KdT-dxGKsw', 
            '2-5S3Clc7ys', 'prDCl09XwfQ', 'aQJM_szLDjw', 'NesmYoLh_XE', 'ctGB1KBdl8M', 'lL_1DsQEAFY', 'U05uEjVb1iI', 
            '-zlbqhI4hOI', 'YGkThPSJPEg', 'TUfKb4eNjLI', 'Mrfnm8pU43I', 'y27qPI2j-3Q', 'LH2UUHpUBto', 'w2TClpxFpgY', 
            'n23I0Xc1Wqw', '81_YK75YbMI', 'bqC-CFgilA0', 'QntAk9wGNGs', 'G1MIQfueOxw', 'QLzuUgjZ1nU', 'ETgR7cwcnCI', 
            'Xf0M3wWtNNU', 'FlgR2dyrh8o', 'Qu8xweeEk0o', 'wvPuIM5K1tA', 'OB5_j5VHZV8', 'zRlmPe-OVg4', 'kJ5ixQj70nQ', 
            '5TNpk_cmxq0', 'WTCxfEYEmbs'
        ].map((videoId, index) => ({
            title: `Chichi The DJ YouTube Mix #${114 - index}`,
            coverUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
            genre: 'YouTube Mix',
            date: `${index + 1} days ago`,
            views: 0,
            platform: 'YouTube',
            platformUrl: `https://www.youtube.com/embed/${videoId}`,
            audioUrl: '#'
        }))
    ];

    try {
        console.log("Seeding new mixes...");
        const batch = writeBatch(db);
        mixes.forEach(mix => {
            const docRef = doc(mixesCollectionRef); 
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
