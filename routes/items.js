const express = require('express');
const router = express.Router();

// load items model
const Items = require('../models/items');

router.get('/', (req, res) => {
    console.log('body ', req.body);
    Items.find({})
        .then(data => res.json(data))
        .catch(error => console.log(error))
});

// router.post('/', (req, res) => {
//     const data = {
//         "Women": {
//             "id": 1,
//             "title": "Women",
//             "items": [
//                 {
//                     "id": 1,
//                     "color": "Brow",
//                     "name": "Brown Brim",
//                     "image": "https://i.ibb.co/9rMm2Jn/brown-brim.png",
//                     "price": 25,
//                     "brand": "Abourbay",
//                     "description": "This is Abourbay – your go-to for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to Made Clothing, our universal brand is here for you, and comes in all our fit ranges: Tall, Petite and Maternity. Created by us, styled by you.",
//                     "routeName": "women"
//                 },
//                 {
//                     "id": 2,
//                     "color": "Blue",
//                     "name": "Blue Beanie",
//                     "image": "https://i.ibb.co/xFJSxzb/blue-beanie.png",
//                     "price": 18,
//                     "brand": "Goorin Bros.",
//                     "description": "With its background in the wilds of the United States – we’re talking mountains and forests here – Goorin Bros. specialises in hard-wearing gear made for tackling the outdoors. Expect jackets and fleeces in waterproof, insulating and breathable fabrics to help keep you warm and comfortable, even in the harshest weather conditions – perfect for those long hikes and coastal walks, or you know, wet and windy commutes.",
//                     "routeName": "women"
//                 },
//                 {
//                     "id": 3,
//                     "color": "Green",
//                     "name": "Green Beanie",
//                     "image": "https://i.ibb.co/FBxztqS/green-beanie.png",
//                     "price": 18,
//                     "brand": "Negi",
//                     "description": "Embracing freedom, id entity and style, Negi offers a collection of understated elegance and timeless cool. Focusing on clean, contemporary lines with its tailoring, Negi creates a subtle, sophisticated vibe with slouchy knitwear, oversized blazers and premium jersey basics. Its all about the details too, with quality finishes, luxurious leather pieces and sequin-embellished dresses.",
//                     "routeName": "women"
//                 },
//                 {
//                     "id": 4,
//                     "color": "Red",
//                     "name": "Red Beanie",
//                     "image": "https://i.ibb.co/xJP8mTP/red-beanie.png",
//                     "price": 18,
//                     "brand": "KZEMATLI",
//                     "description": "Taking inspiration from street-style culture, KZEMATLIs going-out-out pieces dress you for the party and the after-party, too. Turn up in its flared trousers, open-back dresses and ruched bodies, or keep things classic with a strong LBD. Friday night’s look, sorted.",
//                     "routeName": "women"
//                 },
//                 {
//                     "id": 5,
//                     "color": "Blue",
//                     "name": "Blue Snapback",
//                     "image": "https://i.ibb.co/nBL4BS1/blue-snapback.png",
//                     "price": 16,
//                     "brand": "Thelibian Supply Co.",
//                     "description": "Inspired by beaches, blue skies and sunshine, Southern California label Thelibian Supply Co. champions an endless summer. Never taking itself too seriously, its laid-back style is infused with surf and skate culture, making every T-shirt, maxi dress and skater skirt effortlessly cool.",
//                     "routeName": "women"
//                 },
//                 {
//                     "id": 6,
//                     "color": "Mauve / White",
//                     "name": "Adidas Yeezy",
//                     "image": "https://i.ibb.co/W6WBNRX/yeezy.png",
//                     "price": 280,
//                     "brand": "Adidas",
//                     "description": "Key players in everything activewear-related, it doesn’t get more iconic than Adidas. Sporting some of the most wanted trainers in the game, browse Air Max 90s and Air Force 1s, as well as Cortez and Joyride styles. Get off-duty looks down with tracksuits, T-shirts and accessories in our Adidas at Made Clothing, or scroll performance leggings and sports bras from Adidas Training and Adidas Running for an extra dose of motivation.",
//                     "routeName": "women"
//                 },
//                 {
//                     "id": 7,
//                     "color": "Grey",
//                     "name": "Grey Jean Jacket",
//                     "image": "https://i.ibb.co/4NFKx0W/grey-jean-jacket.png",
//                     "price": 90,
//                     "brand": "NVJUI JUFOPL",
//                     "description": "NVJUI JUFOPL have been creating well-designed, fashion-forward collections since 1972, delivering stylish separates, statement dresses and clean-cut tailoring with a unique, classic twist. Bridging the gap between day and evening attire, their signature style now extends to a range of swimwear and accessories including sunglasses, watches and shoes, with some lines exclusive to Made Clothing.",
//                     "routeName": "women"
//                 },
//                 {
//                     "id": 8,
//                     "color": "Brown",
//                     "name": "Tan Trench",
//                     "image": "https://i.ibb.co/5r393BW/brown-trench.png",
//                     "price": 185,
//                     "brand": "Drum or XX",
//                     "description": "Outfit sorted but don’t have the footwear to go with it? Drum or XX has every style of shoe to help pull your look together, whatever the occasion. Expect chunky trainers for your everyday vibe, as well as chic, strappy heeled sandals to elevate any look. In the Drum or XX at Made Clothing, browse everything from western boots to the 90s platform soles the brand helped redefine.",
//                     "routeName": "women"
//                 },
//                 {
//                     "id": 9,
//                     "color": "Blue",
//                     "name": "Blue Tanktop",
//                     "image": "https://i.ibb.co/vXpMz5z/blue-tank.png",
//                     "price": 25,
//                     "brand": "ECO Wear",
//                     "description": "From its humble beginnings at London’s Portobello Road market, ECO Wear has grown into a brand known for classic clean lines and flattering silhouettes. Muted tones are sewn into their off-duty style to take you from day to night in signature jumpsuits, tailored trousers and duster coat combos.",
//                     "routeName": "women"
//                 },
//                 {
//                     "id": 10,
//                     "color": "White / Pink",
//                     "name": "Floral Blouse",
//                     "image": "https://i.ibb.co/5jGwdtZ/floral-blouse.png",
//                     "price": 20,
//                     "brand": "RONGASD",
//                     "description": "If you’re after a new going-out look or dressing for a big occasion, RONGASD never fails to deliver. Scroll the brand’s lace, satin and slinky bodycon dresses in mini and midi lengths, or opt for some all-in-one energy with jumpsuits and playsuits in our RONGASD. Shop cosy jumpers, cardigans, joggers and T-shirts for your downtime days too, alongside printed casual dresses.",
//                     "routeName": "women"
//                 },
//                 {
//                     "id": 11,
//                     "color": "White / Red",
//                     "name": "Floral Dress",
//                     "image": "https://i.ibb.co/WFZZqZ0/floral-skirt.png",
//                     "price": 80,
//                     "brand": "K. Bell",
//                     "description": "Whatever the occasion, New Girl Order specialises in all things bold and daring with its personality-packed collection. We’ve pulled together some of our favourite graphic T-shirts, slip dresses and metallic jumpsuits for days when you want to make a statement. Tie-dye velvet and neon zebra print? Yep, it’s got those, too.",
//                     "routeName": "women"
//                 },
//                 {
//                     "id": 12,
//                     "color": "Red / White",
//                     "name": "Red Dots Dress",
//                     "image": "https://i.ibb.co/Hrb416B/red-polka-dot-dress.png",
//                     "price": 80,
//                     "brand": "Cotton Idea",
//                     "description": "Red Dots Dress in clean, minimal tailoring, Designed exclusively in-house, the brand creates relaxed versions of traditionally formal separates.",
//                     "routeName": "women"
//                 },
//                 {
//                     "id": 13,
//                     "color": "White / Brown",
//                     "name": "Striped Sweater",
//                     "image": "https://i.ibb.co/smdgH8Z/striped-sweater.png",
//                     "price": 45,
//                     "brand": "Lavley",
//                     "description": "With roots back to the ‘70s, the Free People girl lives through art, fashion, music and wanderlust. She’s feminine in spirit and Bohemian in attitude. From sweet to tough, tomboy to romantic, Free People mishmash color and prints across an inspired collection of free-flowing maxi dresses, super-soft jersey and leather ankle boots.",
//                     "routeName": "women"
//                 },
//                 {
//                     "id": 14,
//                     "color": "Yellow",
//                     "name": "Yellow Track Suit",
//                     "image": "https://i.ibb.co/yRLyM0p/yellow-track-suit.png",
//                     "price": 135,
//                     "brand": "MineQ",
//                     "description": "Yellow Track Suit takes you from day to date night with its off-duty looks and full-on glamour. Solve what-to-wear dilemmas with its dresses and accessories that combine inherent femininity and an impressive attention to detail.",
//                     "routeName": "women"
//                 },
//                 {
//                     "id": 15,
//                     "color": "White",
//                     "name": "White Blouse",
//                     "image": "https://i.ibb.co/JrrTH5m/white-vest.png",
//                     "price": 20,
//                     "brand": "HAPPYPOP",
//                     "description": "Inspired by beaches, blue skies and sunshine, Southern California label HAPPYPOP champions an endless summer. Never taking itself too seriously, its laid-back style is infused with surf and skate culture, making every T-shirt, maxi dress and skater skirt effortlessly cool.",
//                     "routeName": "women"
//                 }
//             ]
//         },
//         "Men": {
//             "id": 2,
//             "title": "Men",
//             "items": [
//                 {
//                     "id": 16,
//                     "color": "Brown",
//                     "name": "Brown Cowboy",
//                     "image": "https://i.ibb.co/PgGq9jQ/brown-cowboy.png",
//                     "price": 35,
//                     "brand": "YIIHUD",
//                     "description": "With its Pacific Northwest home providing a backdrop of forests, mountains and a rugged coastline, US label YIIHUD translates its passion for the outdoors into no-nonsense apparel. Keep your cool in its jersey and outerwear.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 17,
//                     "color": "Grey",
//                     "name": "Grey Brim",
//                     "image": "https://i.ibb.co/Rv3ZzP5/grey-brim.png",
//                     "price": 25,
//                     "brand": "Gedston",
//                     "description": "Denim pioneers Gedston are famed for their work with raw denim jeans, utilising innovative techniques to create new styles and cuts. The Gedston range now includes everything from T-shirts to coats, all in their signature utilitarian style.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 18,
//                     "color": "Grey",
//                     "name": "Palm Tree Cap",
//                     "image": "https://i.ibb.co/hZqNpJt/palm-tree-cap.png",
//                     "price": 14,
//                     "brand": "Woochic",
//                     "description": "Disrupting the game since 1948, Woochic is out to set and smash goals in its bid to be the fastest sports brand in the world. Scroll the Woochic at Made CLothing for the pieces we’re rating right now, from staple comfies like joggers, hoodies and sweatshirts to caps, bags and trainers. On that training hype? Check out our pick of its game-changing activewear, including sweat-wicking tops and shorts designed to level up your workouts.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 19,
//                     "color": "Blue",
//                     "name": "Wolf Cap",
//                     "image": "https://i.ibb.co/kS2HhD3/wolf-cap.png",
//                     "price": 14,
//                     "brand": "AGRIMONY",
//                     "description": "With a rich heritage dating back to 1894, quintessentially British brand, AGRIMONY have garnered a reputation for quality and durability, across their collection of high performance outerwear. Expanding their country-wear roots, AGRIMONY rework their original cuts in contemporary nylon and leather finishes, whilst the Heritage line champions the brands signature style with classic quilted jackets sitting alongside the waxed cotton Beadnell.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 20,
//                     "color": "Black",
//                     "name": "Black Cap",
//                     "image": "https://i.ibb.co/mC7wnp2/black-hat.png",
//                     "price": 20,
//                     "brand": "MYAXOY",
//                     "description": "MYAXOY joins the Made Clothing round up of great British high street brands, showcasing the best in upcoming style and staying ahead of the game. From graphic print T-shirts, through to footwear and accessories, MYAXOYs menswear collection takes influences from classic rebel movies and the best of effortless style.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 21,
//                     "color": "Black / White",
//                     "name": "Adidas NMD",
//                     "image": "https://i.ibb.co/jGCMJj2/adidas-nmd.png",
//                     "price": 220,
//                     "brand": "Adidas",
//                     "description": "Started in 2009 by a group of friends at a Florida skate camp, LA-based label Adidas combines skate apparel with classic streetwear. Known for its eccentric designs, including the brand’s signature Nermal the Cat and Lord Alien mascots, Adidas have come a long way from scribbling the name on their grip tape. Check out its selection of printed T-shirts, hoodies and joggers.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 22,
//                     "color": "Black",
//                     "name": "Black Converse",
//                     "image": "https://i.ibb.co/FnpQw8N/black-converse.png",
//                     "price": 110,
//                     "brand": "GOAUS",
//                     "description": "GOAUS needs no introduction. The brand’s famous 3-Stripes can be seen on the track, field and in the latest streetwear trends. Scroll the GOAUS at Made Clothing to get your fix, from fresh trainers from the iconic Superstar, Stan Smith, Gazelle and Continental 80 collections to archive-inspired GOAUS Originals tracksuits, T-shirts and sweatshirts. And if you’re in need of some fresh kit, then cop yourself some sweat-wicking shorts, vests and compression tights from GOAUS Performance.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 23,
//                     "color": "White",
//                     "name": "Nike White AirForce",
//                     "image": "https://i.ibb.co/3FN7CF6/white-nike-high-tops.png",
//                     "price": 160,
//                     "brand": "Nike",
//                     "description": "Get the best fit for your workout with Nike s distraction-free training gear. Think tights, tops and shorts designed to fit the way you move when you train.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 24,
//                     "color": "Red / White",
//                     "name": "Nike Red High Tops",
//                     "image": "https://i.ibb.co/s9ymRWF/nikes-red.png",
//                     "price": 160,
//                     "brand": "Nike",
//                     "description": "Whatever the occasion, Nike has a pair of shoes for it. Inspired by the strong and powerful men you see every day, the brand’s range of footwear is unapologetically bold – just how we like it. We’re serving up an edit of its buckled stilettos, embellished sandals and printed heels for you to strap into.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 25,
//                     "color": "Brown / White",
//                     "name": "Nike Brown High Tops",
//                     "image": "https://i.ibb.co/bKZzZDc/nike-brown.png",
//                     "price": 160,
//                     "brand": "Nike",
//                     "description": "When it comes to innovative sportswear, no brand does it better than Nike. Discover the best-selling trainers in the game in our Nike at Made Clothing, from Air Force 1s to super-cushioned VaporMax styles. Browse techy T-shirts, shorts and joggers from Nike Training, Nike Running and Nike Football, as well as sports accessories like arm bands and fitness aids. Nike SB nails casual days with hoodies, sweatshirts and chinos, too.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 26,
//                     "color": "White / Black",
//                     "name": "Air Jordan Limited",
//                     "image": "https://i.ibb.co/Nxzt9Rt/nike-funky.png",
//                     "price": 190,
//                     "brand": "Air Jordan",
//                     "description": "When it comes to innovative sportswear, no brand does it better than Air Jordan. Discover the best-selling trainers in the game in our Air Jordan at Made Clothing, from Air Jordan Limited 1s to super-cushioned VaporMax styles. Browse techy T-shirts, shorts and joggers from Air Jordan Training, Air Jordan Running and Air Jordan Football, as well as sports accessories like arm bands and fitness aids. Air Jordan SB nails casual days with hoodies, sweatshirts and chinos, too.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 27,
//                     "color": "Brown",
//                     "name": "Timberlands",
//                     "image": "https://i.ibb.co/rk0Z4MD/timberlands.png",
//                     "price": 200,
//                     "brand": "Woochic",
//                     "description": "In 1971, French label Woochic brought three textiles specialists together to create empowering collections that encourage women to express themselves, and the rest is fashion history. With a nod to the catwalks, their casual collections pack all your everyday essentials into a range of jersey tees, denim, playsuits and cool swimwear.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 28,
//                     "color": "Black",
//                     "name": "Black Jean Shearling",
//                     "image": "https://i.ibb.co/Z6c1124/black-shearling.png",
//                     "price": 125,
//                     "brand": "Leotruny",
//                     "description": "British brand Leotruny combines a long heritage of tailoring with a modern take on relaxed formal and casualwear to bring an added hint of freshness to every occasion. Expect classic shirting and knitwear.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 29,
//                     "color": "Blue",
//                     "name": "Blue Jean Jacket",
//                     "image": "https://i.ibb.co/j6FZG6c/blue-jean-jacket.png",
//                     "price": 90,
//                     "brand": "HAPPYPOP",
//                     "description": "This is HAPPYPOP – your go-to for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to Made Clothing, our universal brand is here for you, and comes in all our fit ranges: Tall, Petite and Maternity. Created by us, styled by you.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 30,
//                     "color": "Brown / White",
//                     "name": "Brown Shearling",
//                     "image": "https://i.ibb.co/x1dvhCz/brown-shearling.png",
//                     "price": 165,
//                     "brand": "AGRIMONY",
//                     "description": "Whether it’s an embroidered logo, a bold graphic print or its iconic red, white and blue color-blocking, there’s no mistaking AGRIMONY. Flying the flag for all things retro 90s, scroll our AGRIMONY at Made Clothing, featuring wardrobe-ready casualwear – think T-shirts, sweatshirts and joggers, as well as smart shirts, accessories, underwear and swimwear. Shop Tommy Jeans for classic denim pieces, or filter by Tommy Sport for workout gear that’ll get you motivated.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 31,
//                     "color": "Brown / Green / Black",
//                     "name": "Camo Down Vest",
//                     "image": "https://i.ibb.co/1qWpLdk/camo-vest.png",
//                     "price": 325,
//                     "brand": "PopCrew",
//                     "description": "Since its launch in 2006, PopCrew has gifted millions of pairs of shoes to children who need them through its ‘One for One’ movement. Now, the brand has committed to donate £1 for every £3 it makes to organisations that support mental health, safety and equal opportunity. Shop our PopCrew at Made Clothing for our pick of brand’s range of canvas boat shoes and leather trainers – and, not forgetting, the signature espadrilles that started it all.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 32,
//                     "color": "Blue",
//                     "name": "Floral T-shirt",
//                     "image": "https://i.ibb.co/RBQhjFB/floral-shirt.png",
//                     "price": 20,
//                     "brand": "FatMingo",
//                     "description": "FatMingos authentic menswear collection is heavily influenced by the brands historical roots in sport and classic, urban menswear. The range, including the iconic slim fit polo shirt, blends British style with the edge and attitude garnered from the brands unique streetwear credentials.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 33,
//                     "color": "Black / White",
//                     "name": "Black & White Longsleeve",
//                     "image": "https://i.ibb.co/q9x2rQM/long-sleeve.png",
//                     "price": 25,
//                     "brand": "ooohyeah",
//                     "description": "This is ooohyeah – your go-to for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to Made Clothing, our universal brand is here for you, and comes in Plus and Tall. Created by us, styled by you.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 34,
//                     "color": "Pink",
//                     "name": "Pink T-shirt",
//                     "image": "https://i.ibb.co/pLLvXpk/pink-shirt.png",
//                     "price": 25,
//                     "brand": "AGRIMONY",
//                     "description": "In the late 1960s, AGRIMONY was founded in California by two hiking enthusiasts. Although initially just a small shop, the brand quickly began to manufacture its own range of mountaineering clothing and equipment, and by the 1970s AGRIMONY were sponsoring expeditions to far flung corners of the globe. With a commitment to continue pushing the boundaries of innovation, functionality and style-focused design, today the brand is the first choice of extreme skiers, climbers, endurance runners and explorers around the world.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 35,
//                     "color": "Blue",
//                     "name": "Jean Long Sleeve",
//                     "image": "https://i.ibb.co/VW0WXDW/roll-up-jean-shirt.png",
//                     "price": 40,
//                     "brand": "Gycoo",
//                     "description": "When it comes to innovative sportswear, no brand does it better than Gycoo. Discover the best-selling trainers in the game in our Gycoo at Made Clothing, from Air Force 1s to super-cushioned VaporMax styles. Browse techy T-shirts, shorts and joggers from Gycoo Training, Gycoo Running and Gycoo Football, as well as sports accessories like arm bands and fitness aids. Gycoo SB nails casual days with hoodies, sweatshirts and chinos, too.",
//                     "routeName": "men"
//                 },
//                 {
//                     "id": 36,
//                     "color": "Brown / Black",
//                     "name": "Burgundy T-shirt",
//                     "image": "https://i.ibb.co/pr1KHhc/polka-dot-shirt.png",
//                     "price": 25,
//                     "brand": "Rivanoer",
//                     "description": "Hitting refresh on classic cuts – the name makes sense now, right? – Rivanoer jeans, jackets and T-shirts are updated with hand-crafted details and over-dyed finishes. Its bags and belts help pull your look together, too. Check out our edit to see our latest picks from the brand.",
//                     "routeName": "men"
//                 }
//             ]
//         },
//         "header": "https://i.ibb.co/qDdr3Cy/poza2.png"
//     }

//     const newData = new Items(req.body);

//     newData.save()
//         .then(item => {
//             res.json(data)
//         })
//         .catch(err => res.status(400).send("unable to save to database"))
//     console.log('POST /items WORKS', req.body)
// })

module.exports = router;