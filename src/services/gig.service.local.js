
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'gig'

export const gigService = {
    query,
    getById,
    save,
    remove,
    getEmptyGig,
    addGigMsg
}
window.cs = gigService


async function query(filterBy = { title: '', DeliveryTime: '', }) {
    var gigs = await storageService.query(STORAGE_KEY)
    if (filterBy.title) {
        console.log('hello filterBy.title you arrived to gig service local congratulations ')
        const regex = new RegExp(filterBy.title, 'i')
        gigs = gigs.filter(gig => regex.test(gig.title) || regex.test(gig.description))
    }
    if (filterBy.min && filterBy.max) {
        console.log('hello filterBy.bugdet you arrived to gig service local congratulations ', filterBy.min, filterBy.max)
        gigs = gigs.filter(gig => gig.price > filterBy.min && gig.price < filterBy.max)
    }

    if (filterBy.DeliveryTime) {
        console.log('hello filterBy.DeliveryTime you arrived to gig service local congratulations ')
        if (filterBy.DeliveryTime === '1') gigs = gigs.filter(gig => gig.daysToMake < 2)
        if (filterBy.DeliveryTime === '3') gigs = gigs.filter(gig => gig.daysToMake < 4)
        if (filterBy.DeliveryTime === '7') gigs = gigs.filter(gig => gig.daysToMake < 7)

    }

    if (filterBy.category) {
        console.log('hello filterBy.category you arrived to gig service local congratulations ')
        // gigs = gigs.filter(gig => gig.tags.includes(filterBy.category))
        gigs = gigs.filter(gig => gig.tags.some(tag => tag.name === filterBy.category))
    }


    if (filterBy.sortBy) {
        console.log('hello filterBy.sort you arrived to gig service local congratulations ')
        if (filterBy.sortBy === 'Best price') {
            gigs = gigs.sort((a, b) => b.price - a.price)
            console.log('giiiiiiiiiiiiiiiiiiiigs',gigs);
        }
        if (filterBy.sortBy === 'delivery Time') gigs = gigs.sort((a, b) => b.daysToMake - a.daysToMake * (-1))
        // if (filterBy.sortBy === 'check') gigs = gigs.sort((a, b) => b.price - a.price)
    }
    return gigs
}

function getById(gigId) {
    return storageService.get(STORAGE_KEY, gigId)
}

async function remove(gigId) {
    await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
    var savedGig
    if (gig._id) {
        savedGig = await storageService.put(STORAGE_KEY, gig)
    } else {
        // Later, owner is set by the backend
        // gig.owner = userService.getLoggedinUser()
        savedGig = await storageService.post(STORAGE_KEY, gig)
    }
    return savedGig
}

async function addGigMsg(gigId, txt) {
    // Later, this is all done by the backend
    const gig = await getById(gigId)
    if (!gig.msgs) gig.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    gig.msgs.push(msg)
    await storageService.put(STORAGE_KEY, gig)

    return msg
}

function getEmptyGig() {
    return {
        title: '',
        price: 0,
        description: '',
        category: '',
        daysToMake: '',
        images: [],
        owner: {
            fillname: 'moti', imgUrl
                :
                "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
            level: "basic/premium", rate: 2
        }
    }
}


// TEST DATA
// ;(async ()=>{
//     await storageService.post(STORAGE_KEY,  {
//         "images": [
//             "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/205390017/original/bb4cd6aee714c3e78c6a640a52985d01e41b5b8e/produce-food-photography-for-your-business.jpg",
//             "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/205390017/original/3de664893bf6fdbe05758d16d948baeda7bc90db/produce-food-photography-for-your-business.jpg",
//             "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/205390017/original/046ac15f30eb4f25a99c5818b0c18ff6c216766f/produce-food-photography-for-your-business.jpg"
//         ],
//         "title": "I will produce food photography and video",
//         "description": "Hi, I am Lena and I am a food photographer. I cook and photograph food for culinary blogs, books and magazines. I am ready to discuss your projects and show my skills. Thank you",
//         "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/38b2329008b00746276be91fc9fea9de-1620127239949/823ace64-7e64-4121-9bba-37267524c2f4.png",
//         "owner": {
//             "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/38b2329008b00746276be91fc9fea9de-1620127239949/823ace64-7e64-4121-9bba-37267524c2f4.png",
//             "fullname": "sevenperfection",
//             "level": "basic/standard/premium",
//             "rate": 4
//         },
//         "loc": "Germany",
//         "Member since": "Jan 2021",
//         "price": 160,
//         "daysToMake": 10,
//         "fullname": "sevenperfection",
//         "avgResponceTime": "3 hours",
//         "lastDelivery": "about 16 hours",
//         "likedByUsers": [
//             "mini-user"
//         ],
//         "reviews": [
//             {
//                 "name": "strawberryred78",
//                 "country": "Germany",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
//                 "review": "Savisione is easy to work with and delivers a high-quality product on time! I am enjoying working with them!",
//                 "reviewedAt": "Published 3 months ago"
//             },
//             {
//                 "name": "doja75",
//                 "country": "India",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f3.png",
//                 "review": " love working with Savissione! Professional, on time and excellent communication and photographs. Thank you again! Annie",
//                 "reviewedAt": "Published 3 months ago"
//             },
//             {
//                 "name": "annie4hf",
//                 "country": "United States",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                 "review": "This is one of the best purchases I have made on fiverr (I have had some terrible luck lately, so thank you for turning that around!). The communication was very upbeat and positive and this was an all-around great experience. Thank you!",
//                 "reviewedAt": "Published 2 weeks ago"
//             },
//             {
//                 "name": "jayebiz",
//                 "country": "United States",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                 "review": "Seller communicated very well. They also genuinely interested in helping me create a nice image. The end results was the best I could have hoped.",
//                 "reviewedAt": "Published 3 months ago"
//             },
//             {
//                 "name": "petro08",
//                     "country": "Kenya",
//                     "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f0-1f1ea.png",
//                     "review": "Great experience working with kaleem_studio. Great communication, high quality work, and fast delivery. I will hire him again. I recommend",
//                     "reviewedAt": "Published 1 month ago"
//             },
//         ],
//         "tags": [
//             {
//                 "name": "video"
//             },
//             {
//                 "name": "photograph"
//             },
//             {
//                 "name": "Instagram"
//             }
//         ]
//     })
//     await storageService.post(STORAGE_KEY,  {
//         "images": [
//             "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/124129546/original/1901e91a0b24a22e440d52bb3a8969a6401a773e/research-podcasts-for-you-to-be-a-guest-on.jpg",
//             "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/124129546/original/4bad77bb987bd7689e364a94113e3911f68b2a85/research-podcasts-for-you-to-be-a-guest-on.png",
//         ],
//         "title": "I will research podcasts for you to guest on",
//         "about": "Podcasts are a great way to market yourself. You could be an author, singer, blogger or even a podcaster looking for a way to market your content and get your name/company out there. Well, theres no better and more fun way than by doing so whilst being a guest on a podcast you like. Let me do the heavy-lifting and find you the perfect podcasts for you to be on, as you focus on getting that amazing voice of yours ready for the show! I will provide you with a detailed list of Podcast shows, alongside their contact information which includes; - Podcast name - Host's name - iTunes link - Website link - Facebook page link - Twitter profile link - Instagram link - Email address - Brief notes on the Podcast Show Researched podcasts consistently produce episodes (released within the past 1 month) and host guests, to ensure that you, dear buyer, have great chances of being booked. Purchase the Standard or Premium gig and get a Free Pdf on how to pitch yourself/client to podcast shows.",
//         "description": "Why me?\nI have worked with Fortune 500 brands such as Adidas, L’Oreal, Xiaomi & Pfizer on numerous marketing and branding campaigns.\nI’ve successfully delivered 4000+ hashtag strategies with over 2600+ happy clients to help them achieve organic instagram growth.\nWhy my service?\nI will strategically research, analyze & handpick best-performing hashtags tailored to your Instagram account. I will teach you:\n✅ How you can effectively use hashtags to rank and grow organically\n✅ How to avoid bad hashtags to avoid negative growth\n✅ Stand out from your competition and increase your sales\n✅ How to increase traffic and conversion organically\n✅ Account optimization and posting secrets to gain new Instagram followers\nWhat will you get?\n✅ Data-backed high-ranking hashtags tailored to your niche and brand\n✅ Profile optimization so you can be discovered quickly\n✅ Personalized hashtag strategy to help you grow and increase your followers\n✅ Expert video guide to teach you to find high-ranking hashtags\n✅ Monthly newsletter based on Instagram's newest algorithm updates\n✅ Masters Course 2021/2022 (Platinum or Diamond Gig)",
//         "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/0e80055d93fad68d0f6abc465fec8fab-1670493288297/7f6eff4a-186e-4879-9034-a3b4253abf20.jpg",
//         "owner": {
//             "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/0e80055d93fad68d0f6abc465fec8fab-1670493288297/7f6eff4a-186e-4879-9034-a3b4253abf20.jpg",
//             "fullname": "sevenperfection",
//             "level": "basic/standard",
//             "rate": 5
//         },
//         "loc": "Kenya",
//         "Member since": "Dec 2018",
//         "price": 60,
//         "daysToMake": 7,
//         "fullname": "sevenperfection",
//         "avgResponceTime": "3 hours",
//         "lastDelivery": "about 11 hours",
//         "likedByUsers": [
//             "mini-user"
//         ],
//         "reviews": [
//             {
//                 "name": "strawberryred78",
//                 "country": "Netherlands",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
//                 "review": "I appreciate the long list of relevant podcasts! The Ebook is an added bonus with helpful tips. Thank you! This will save me a lot of time researching podcasts.",
//                 "reviewedAt": "Published 3 months ago"
//             },
//             {
//                 "name": "vritvi",
//                 "country": "India",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f3.png",
//                 "review": "They provided exactly what I was asking for to repair or remove in the image, had good communications, answered all my questions, Highly recommend and will definitely come back.",
//                 "reviewedAt": "Published 3 months ago"
//             },
//             {
//                 "name": "kinniehearts",
//                 "country": "United States",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                 "review": "This is one of the best purchases I have made on fiverr (I have had some terrible luck lately, so thank you for turning that around!). The communication was very upbeat and positive and this was an all-around great experience. Thank you!",
//                 "reviewedAt": "Published 2 weeks ago"
//             },
//             {
//                 "name": "jayebiz",
//                 "country": "United States",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                 "review": "Seller communicated very well. They also genuinely interested in helping me create a nice image. The end results was the best I could have hoped.",
//                 "reviewedAt": "Published 3 months ago"
//             },
//             {
//                 "name": "mikezaff",
//                 "country": "Romania",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                 "review": "5 stars!!!!!!!!!!!!!!!!!!",
//                 "reviewedAt": "Published 4 days ago"
//             },
//         ] ,
//         "tags": [
//             {
//                 "name": "audio"
//             },
//             {
//                 "name": "music"
//             },
//             {
//                 "name": "instagram"
//             },
//             {
//                 "name": "social media"
//             }
//         ]
//     })
//     await storageService.post(STORAGE_KEY,  {
//         "images": [
//             "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/295371479/original/6fcdd7ae738553c1cc9f265972383abedeeb6393/fix-your-ai-image-enhance-it-and-paint-over.jpg",
//             "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/295371479/original/aaf0291b285fa54d4c321c90cf01387cc38087c7/fix-your-ai-image-enhance-it-and-paint-over.jpg",
//             "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230114/ai_fixes_example_cover_pl2n3m.jpg"
//         ],
//         "title": "I will fix your ai art, enhance the image and paint over it",
//         "about": "Hi and welcome C I am a professional digital artist with years of experience and I would love to help you out with your AI-generated art. I can edit any style as I am good with copying art styles--my job literally requires it. Eyes, ears, hands, fingers, noses--all facial features and human anatomy are not an issue. But I wont limit you with humans only. I know how to paint animals and therefore how to fix possible AI flaws. Aside from characters, I am able to fix or improve backgrounds that you can possibly use for game art, including both nature and architecture+perspective. Let's make objects on your A.I. images make sense together! Prices are per one image and starting price is $5 for very simple fixes! Please contact me privately beforehand! I will need to see the AI picture that you want me to edit first, thats the starting point. Also, I can make a cover for you, based on your image. Fiction, music, book--you pick. Let’s discuss it if you are interested!",
//         "description": "Why me?\nI have worked with Fortune 500 brands such as Adidas, L’Oreal, Xiaomi & Pfizer on numerous marketing and branding campaigns.\nI’ve successfully delivered 4000+ hashtag strategies with over 2600+ happy clients to help them achieve organic instagram growth.\nWhy my service?\nI will strategically research, analyze & handpick best-performing hashtags tailored to your Instagram account. I will teach you:\n✅ How you can effectively use hashtags to rank and grow organically\n✅ How to avoid bad hashtags to avoid negative growth\n✅ Stand out from your competition and increase your sales\n✅ How to increase traffic and conversion organically\n✅ Account optimization and posting secrets to gain new Instagram followers\nWhat will you get?\n✅ Data-backed high-ranking hashtags tailored to your niche and brand\n✅ Profile optimization so you can be discovered quickly\n✅ Personalized hashtag strategy to help you grow and increase your followers\n✅ Expert video guide to teach you to find high-ranking hashtags\n✅ Monthly newsletter based on Instagram's newest algorithm updates\n✅ Masters Course 2021/2022 (Platinum or Diamond Gig)",
//         "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a88bc096f5150b900c6ed40916a9b425-1423610811673570913.683484/AC210C0C-E82C-4C09-92DA-94556A6D4E9B",
//         "owner": {
//             "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a88bc096f5150b900c6ed40916a9b425-1423610811673570913.683484/AC210C0C-E82C-4C09-92DA-94556A6D4E9B",
//             "fullname": "sylvana_13",
//             "level": "basic",
//             "rate": 5
//         },
//         "loc": "Romania",
//         "Member since": "Jan 2023",
//         "price": 660,
//         "daysToMake": 7,
//         "fullname": "tommysiu",
//         "avgResponceTime": "3 hours",
//         "lastDelivery": "about 1 hour",
//         "likedByUsers": [
//             "mini-user"
//         ],
//         "reviews": [
//             {
//                 "name": "jayebiz",
//                 "country": "United States",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                 "review": "Seller communicated very well. They also genuinely interested in helping me create a nice image. The end results was the best I could have hoped.",
//                 "reviewedAt": "Published 3 months ago"
//             },
//             {
//                 "name": "jayebiz",
//                 "country": "United States",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                 "review": "They provided exactly what I was asking for to repair or remove in the image, had good communications, answered all my questions, Highly recommend and will definitely come back.",
//                 "reviewedAt": "Published 2 months ago"
//             },
//             {
//                 "name": "kinniehearts",
//                 "country": "United States",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                 "review": "Very approachable and open to questions! I had a couple of very specific requests, and for purchasing such a service for the first time, I'd say this has been a positive experience.",
//                 "reviewedAt": "Published 3 weeks ago"
//             },
//             {
//                 "name": "sabtainhaide209",
//                 "country": "United States",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                 "review": "Very approachable and open to questions! I had a couple of very specific requests, and for purchasing such a service for the first time, I'd say this has been a positive experience.",
//                 "reviewedAt": "Published 3 weeks ago"
//             },
//             {
//                 "name": "maximusdecim151",
//                 "country": "Croatia",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ed-1f1f7.png",
//                 "review": "Great job! The designs are cool and modern looking. He was very helpful and met all of my needs and changes I requested. I appreciate the fact he hopped on a call with me to further understand what I wanted..",
//                 "reviewedAt": "Published 1 month ago"
//             }
//         ],
//         "tags": [
//             {
//                 "name": "ai art"
//             }
//         ]
//     })
//     await storageService.post(STORAGE_KEY,  {
//         "images": [
//             "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231682055/original/77cc585046a1ceb81a809218fef35ee8252bbb3b.jpg",
//             "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/288940537/original/124ce1f01792804037c61cde23984a3400867407.png"
//         ],
//         "title": "I will do organic promotion and marketing for youtube monetization",
//         "category": "Digital Marketing",
//         "subCategory": "Social Media Marketing",
//         "description": "Do you want to Monitize your YouTube Channel?\ni'm the best for digital media marketing, i will help you make youtube monetization\nSafe methods we use:\n· Web 2.0\n· iFrame Embedding\n· PPC advertising campaign\n· Do SEO friendly Video optimization\n· Will share video in Suggested & related videos\n· Add video in Niche related playlists for more impressions\nI strictly follow YT and Fiverr TOS so it means you will get organic You Tube Promotion for your channel monetization.\nREQUIREMENT:\nChannel Link\nWhat do you get from this gig?\n● Watch time boost\n● Compliance with YT TOS\n● Fully Organic And Real Traffic\n● 100% chances of monetization\n● Naturally helps in Video Ranking\nThink that your best friend is Elon Musk, and tomorrow morning you are asking him to post a post asking people to watch your vide0, probably you will get monetized in less than an hour!\nI do the same, just without Elon Musk :)",
//         "price": 534,
//         "daysToMake": 17,
//         "fullname": "farah_youtube",
//         "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5db4b0cccf5a3e138a9f57542175248c-1620011414308/8d7f7d68-efe9-465e-80d2-aedcc548efdb.JPG",
//         "loc": "Vietnam",
//         "memberSince": "Nov 2019",
//         "avgResponceTime": "1 hour",
//         "lastDelivery": "about 4 hours",
//         "about": "I am trained in online marketing, and I have studied SEO, Ads (Google, Facebook, Bing...), I have 6 years of experience in digital marketing, in which time working at fiverr is 3 years, with more than 2000 completed orders, the main work that I do is: - Youtube seo and promotion - SEO - Website traffics - Spotify promotion - Instagram promotion Contact me if you have any questions!",
//         "owner": {
//             "fullname": "frederickkessie",
//             "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
//             "level": "basic/premium",
//             "rate": 2
//         },
//         "likedByUsers": [
//             "mini-user"
//         ],
//         "reviews": [
//             {
//                 "name": "tonyamajette",
//                 "country": "United States",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                 "review": "The seller got me the promotion that I needed, however, she stated that I could contact her if I had any problems and I did and she was not helpful. This is my second gig with her and she was great at many things but not so much at helping me to understand or correct issues with the result of her efforts. I had planned to use her for many other gigs but in light of her response to my request for help, I cannot. I do recommend her for getting you the numbers that you need but if you are denied, do not expect any help from her to actually get passed the review process for monetization.",
//                 "reviewedAt": "Published 1 month ago"
//             },
//             {
//                 "name": "robertpetyko",
//                 "country": "Hungary",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ed-1f1fa.png",
//                 "review": "She delivered as promised. I was sceptical . I bought a smallest package. My watch hour went up. Also gained a lot of subscribers. Some been deleted. But what`s been promised been delivered. So well done !",
//                 "reviewedAt": "Published 1 week ago"
//             },
//             {
//                 "name": "brucefrausto893",
//                 "country": "Thailand",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f9-1f1ed.png",
//                 "review": "she increased my subscribers amount by a little over 1000 subscribers and over 4000 watch hours. I recommend to anyone who wants a boost for their channel.",
//                 "reviewedAt": "Published 1 month ago"
//             },
//             {
//                 "name": "vwgbooks",
//                 "country": "United Kingdom",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
//                 "review": "The gig was good, nothing amazing. I didn't really notice any difference when using this gig. Watch time, subs didn't increase that much. I did order the lowest gig, so I wasn't expecting big numbers or anything. It was a good gig and the seller was easy to work with.",
//                 "reviewedAt": "Published 2 weeks ago"
//             },
//             {
//                 "name": "dulline",
//                 "country": "Romania",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f7-1f1f4.png",
//                 "review": "I just want to be short and clear she is the BEST ! Very happy and satisfied what she did to my youtube channel ! A lot of subscribers and more what she said and more watch hours.If you want to grow your youtube channel fast and organic 100% real she is the ONE who can do it ! Thank you very much Farah !",
//                 "reviewedAt": "Published 2 weeks ago"
//             }
//         ],
//         "tags": [
//             {
//                 "name": "youtube"
//             },
//             {
//                 "name": "monetization"
//             },
//             {
//                 "name": "youtube channel"
//             },
//             {
//                 "name": "seo"
//             }
//         ]
//     })
//     await storageService.post(STORAGE_KEY,     {
//         "images": [
//             "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231682055/original/77cc585046a1ceb81a809218fef35ee8252bbb3b.jpg",
//             "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/288940537/original/124ce1f01792804037c61cde23984a3400867407.png"
//         ],
//         "title": "I will create an effective instagram hashtag growth strategy",
//         "description": "Why me?\nI have worked with Fortune 500 brands such as Adidas, L’Oreal, Xiaomi & Pfizer on numerous marketing and branding campaigns.\nI’ve successfully delivered 4000+ hashtag strategies with over 2600+ happy clients to help them achieve organic instagram growth.\nWhy my service?\nI will strategically research, analyze & handpick best-performing hashtags tailored to your Instagram account. I will teach you:\n✅ How you can effectively use hashtags to rank and grow organically\n✅ How to avoid bad hashtags to avoid negative growth\n✅ Stand out from your competition and increase your sales\n✅ How to increase traffic and conversion organically\n✅ Account optimization and posting secrets to gain new Instagram followers\nWhat will you get?\n✅ Data-backed high-ranking hashtags tailored to your niche and brand\n✅ Profile optimization so you can be discovered quickly\n✅ Personalized hashtag strategy to help you grow and increase your followers\n✅ Expert video guide to teach you to find high-ranking hashtags\n✅ Monthly newsletter based on Instagram's newest algorithm updates\n✅ Masters Course 2021/2022 (Platinum or Diamond Gig)",
//         "price": 660,
//         "daysToMake": 7,
//         "fullname": "tommysiu",
//         "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/429c1a9395f66cd8a36b38028ff35aa6-1550219507580/db25059c-6725-4e49-bf82-fa4d2af0a780.jpg",
//         "loc": "Hong Kong",
//         "memberSince": "Aug 2016",
//         "avgResponceTime": "3 hours",
//         "lastDelivery": "about 1 hour",
//         "about": "Hello! My name is Tommy. I am a multi-displinary marketer with experience in both the Western and Chinese digital marketing landscape. I am passionate about crafting impactful experiences and digital marketing strategies at the intersection of brand and product. I have worked in London, Hong Kong and in Shanghai for companies such as the Adidas, L'Oreal, Pfizer and Danone I currently offer Instagram growth and TikTok marketing strategies on Fiverr",
//         "owner": {
//             "fullname": "frederickkessie",
//             "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
//             "level": "basic/premium",
//             "rate": 2
//         },
//         "likedByUsers": [
//             "mini-user"
//         ],
//         "reviews": [
//             {
//                 "name": "jayebiz",
//                 "country": "United States",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                 "review": "I am very new to organic growth and trying to work Instagram in the best way possible for my business. I found this seller on a whim and WOW. I know that a lot of his reviews say that he is amazing but I didn't expect nearly HALF of what I got. It was so good that I immediately printed it out and made it into my own little book to reference as I go through the process of building my Instagram audience. In all honesty, I think that he should charge way more for what he gives. I can't believe I got so much value at this very fair price! Thank you so much and I can't WAIT to implement your strategies starting TODAY!!",
//                 "reviewedAt": "Published 2 months ago"
//             },
//             {
//                 "name": "basayra",
//                 "country": "United States",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                 "review": "I was very very skeptical. Since this is my 1st business. I truly appreciated I was able to communicate with him and let him know about my \"unique\" nitch. Before we even proceeded he asked for my Instagram to make sure he could provided the services I requested. I was not prepared for the the whole breakdown!! I am shocked as to how much information I received for the price. Not only did i receive information regarding hashtags, but when to post, what to write under the post, how to not repost to the same things to become saturated . I can't wait to implement this new information to my Gram. Sooooo yeah about my unique niche go follow @ba_sayra.",
//                 "reviewedAt": "Published 1 month ago"
//             },
//             {
//                 "name": "marialeeheller",
//                 "country": "United States",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                 "review": "As other sellers described- the service is excellent, especially for the price. I did notice some spelling errors but that did not detract from the overall informative report. I am very pleased with the delivery and I learned A LOT. Also, the hashtags he provided were on point- very impressed. Let me preface this by saying that I had purchased similar hashtag research from another top seller on this platform and what I received was subpar. My business has elements of sustainability that I haven't pushed too much (because the 100% sustainable products haven't launched yet), but he picked up on it and delivered results that included this. 👏👏👏",
//                 "reviewedAt": "Published 2 months ago"
//             },
//             {
//                 "name": "soniabukh",
//                 "country": "Italy",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f9.png",
//                 "review": "Tommy is absolutely great! My expectations were high because of all the other excellent reviews, but wow he really does go above and beyond! I got the most basic hashtag strategy package and not only did he do a great job with it, he also included a lot of bonus information and tools. If you're tired of not knowing how Instagram works and trying random tactics hoping they'll work and get your account seen, let me offer you a suggestion: buy this gig! You won't regret it! I can't wait to start implementing all his great advice. P.S. Communication was great and delivery was on time!",
//                 "reviewedAt": "Published 2 months ago"
//             },
//             {
//                 "name": "ricarda20",
//                 "country": "Germany",
//                 "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
//                 "review": "Wow, I agree with everything everyone else said: Tommy overdelivers by far. What an amazing package. Thank you so much Tommy. It will take awhile to work through it but wow, I am speechless. To everyone who is considering using Tommy's service: DO IT!",
//                 "reviewedAt": "Published 1 week ago"
//             }
//         ],
//         "tags": [
//             {
//                 "name": "instagram hashtags"
//             },
//             {
//                 "name": "instagram marketing"
//             },
//             {
//                 "name": "instagram"
//             },
//             {
//                 "name": "instagram growth"
//             }
//         ]
//     })
//     await storageService.post(STORAGE_KEY, {
//             "images": [
//                 "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/157827646/original/8f14f50a81ddd1a60b4af990ea5154a26975d150.jpg",
//                 "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/214005899/original/669295e46a3a1a7dad13e65fe73e1f9a12597618.jpeg",
//                 "https://fiverr-res.cloudinary.com/video/upload/so_4.360211,t_gig_cards_web/k2m8lje6srmbwddsevci.png"
//             ],
//             "title": "I will write you an attractive instagram bio",
//             "description": "The FIRST thing a potential follower sees on your page is your bio.\nStand out, and build trust with a bio that informs and captivates everyone who views it. This will not only attract new people to your page, but it will keep them there!\nYou've seen those profiles on Instagram that look amazing, and you deserve that for your business too.\nGet the Instagram bio you need, and with it, more followers and clients!\nWhat you'll receive:\n⭐ One unique, professionally designed bio\n⭐ A captivating layout that engages your viewers\n⭐ A call to action, if required\n⭐ 24 hour delivery\n⭐ 100% Satisfaction Guarantee\nLet's build you a great Instagram page that is sure to bring AND KEEP followers.\nIf you BUY a gig from me always feel free to request a revision if you need any part of your order revised. Thank you.",
//             "price": 50,
//             "daysToMake": 1,
//             "fullname": "bellavida123",
//             "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9e2d7f453419c08e138fbfe9e65347df-696051281638594671.588431/DD8E6DDC-C231-47D3-B61A-97274452D3BF",
//             "loc": "Jamaica",
//             "memberSince": "May 2018",
//             "avgResponceTime": "1 hour",
//             "lastDelivery": "about 23 hours",
//             "about": "Thanks for stopping by! I'm a Social Media Specialist with 8+ years experience. I can help with all your Social Media related tasks! Send me a message. Let's get it done!",
//             "owner": {
//                 "fullname": "frederickkessie",
//                 "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
//                 "level": "basic/premium",
//                 "rate": 2
//             },
//             "likedByUsers": [
//                 "mini-user"
//             ],
//             "reviews": [
//                 {
//                     "name": "bswoll51",
//                     "country": "United States",
//                     "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                     "review": "She was amazing! Told me exactly when she would start. Got it done and over-delivered! Tips to grow my following and exclusive tailoring of my bio. She can call me The Terminator because I'll be back. 🤣",
//                     "reviewedAt": "Published 1 month ago"
//                 },
//                 {
//                     "name": "dawnmichaela",
//                     "country": "United States",
//                     "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                     "review": "My bio turned out better than I could have hoped for! She took all my words and ideas and turned it in to a clear and powerful bio. I highly recommend working with her. She is easy to communicate with, responds quickly, and got it done fast. I would definitely use her again.",
//                     "reviewedAt": "Published 1 week ago"
//                 },
//                 {
//                     "name": "iidark",
//                     "country": "United Kingdom",
//                     "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
//                     "review": "Wonderful working with this seller. The work is as promised and delivered on time and on point. I would definitely recommend their work, in fact I'm about to book another gig from them.",
//                     "reviewedAt": "Published 2 weeks ago"
//                 },
//                 {
//                     "name": "singh_manu1313",
//                     "country": "New Zealand",
//                     "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1ff.png",
//                     "review": "She is really good. I ordered two bio and both are amazing. Very easy to convey the message. And she did exactly what i was looking for. Definitely recommend",
//                     "reviewedAt": "Published 1 week ago"
//                 },
//                 {
//                     "name": "charliericeiii",
//                     "country": "United States",
//                     "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                     "review": "Thank you so much for creating my bios for me on my social media pages. We got it right how we wanted it to I appreciate that. God bless!",
//                     "reviewedAt": "Published 3 weeks ago"
//                 }
//             ],
//             "tags": [
//                 {
//                     "name": "bio"
//                 },
//                 {
//                     "name": "instagram marketing"
//                 },
//                 {
//                     "name": "instagram"
//                 },
//                 {
//                     "name": "social media"
//                 },
//                 {
//                     "name": "social network"
//                 }
//             ]
//         })
// })()
