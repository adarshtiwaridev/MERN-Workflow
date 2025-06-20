const cityData = [
  {
    id: 1,
    name: "Delhi",
    info: "Delhi, Bharat ki rajdhani, ek aisa shahar hai jahan aapko purani aur nayi duniya ka behtareen mel milega. Yahan Red Fort, Qutub Minar, India Gate jaise historical monuments hain, jo Bharat ki itihaas aur virasat ko dikhate hain. Delhi ka Chandni Chowk market street food ke liye mashhoor hai, jahan aap chaat, jalebi, aur paranthe ka asli swaad le sakte hain. Saath hi, yeh city modern infrastructure, malls, metro aur corporate life ka bhi hub hai. Akshardham aur Lotus Temple jaise spiritual places bhi logon ko shanti aur adhyatmikta ka ahsas dilate hain. Delhi sabhi seasons mein alag hi rang dikhata hai — sardiyo mein garm chai aur garam pakode ka maza, to garmiyo mein India Gate par late evening stroll. Yeh city ek multicultural hub bhi hai, jahan alag-alag rajyon ke log milkar ek vibrant culture banate hain.",
    image: "/images/delhi.jpeg",
    price: "45,000"
  },
  {
    id: 2,
    name: "Jaipur",
    info: "Jaipur, jise 'Pink City' ke naam se bhi jana jata hai, Rajasthan ki rajdhani hai aur apne royal heritage aur architectural beauty ke liye duniya bhar mein mashhoor hai. Yahan Hawa Mahal, City Palace, Jantar Mantar jaise behtareen historic spots hain. Amer Fort ki shaan aur Sheesh Mahal ka craftsmanship dekhkar koi bhi hairaan reh jaata hai. Jaipur ka local market jahan bandhej sarees, kundan jewellery aur mojri milti hai, shopping ke liye heaven hai. Traditional Rajasthani cuisine jaise dal baati churma, gatte ki sabzi bhi yahaan ke khaas highlights hain. Yahan ki streets, tuk-tuk rides aur local logon ki hospitality har tourist ke liye ek yaadgar anubhav ban jaati hai. Saath hi, Jaipur Literature Festival jaise cultural events is city ko ek intellectual flavor bhi dete hain.",
    image: "/images/jaipur.jpeg",
    price: "82,560"
  },
  {
    id: 3,
    name: "Goa",
    info: "Goa, India ka sabse chhota rajya hone ke bawajood tourism ke maamle mein sabse bada destination hai. Goa apni sundar beaches, vibrant nightlife, aur Portuguese architecture ke liye jaana jaata hai. Baga Beach, Calangute aur Anjuna jaise beaches party aur adventure lovers ke liye perfect spot hain. Fort Aguada aur Chapora Fort jaise historical spots panoramic sea views provide karte hain. Local markets jahan aap handmade crafts aur beachwear kharid sakte ho, wo bhi kaafi famous hain. Goa mein aapko scuba diving, parasailing aur banana boat ride jaise paani ke khel milte hain. Saath hi yeh shahar apni sukoon bhari life aur shant churches ke liye bhi jaana jaata hai jaise Basilica of Bom Jesus. Yahan ke food joints mein Goan fish curry aur Feni ka alag hi maza hai. Goa har tarah ke tourist ke liye ek dream destination hai.",
    image: "/images/goa.jpeg",
    price: "29,695"
  },
  {
    id: 4,
    name: "Mumbai",
    info: "Mumbai, jise 'City of Dreams' kehte hain, Bharat ki financial capital hai. Yeh shahar apne fast life, Bollywood, aur dhandho ke liye mashhoor hai. Marine Drive, Gateway of India, aur Juhu Beach jaise spots har visitor ko attract karte hain. Mumbai mein aapko sab kuch milega – street food jaise vada pav, pav bhaji se leke high-end restaurants tak. Film City aur Mukesh Ambani ka Antilia bungalow bhi yahan ke attraction hain. Local train rides se leke Bandra ke graffiti walls tak, sab kuch Mumbai ke charm ko define karta hai. Shopping ke liye Linking Road aur Colaba Causeway popular destinations hain. Mumbai ek aisi jagah hai jahan har sapna poora ho sakta hai, chahe aap entrepreneur ho ya artist. Yahan ki energy, logon ka junoon aur resilience duniya bhar mein admired hai.",
    image: "/images/mumbai.jpeg",
    price: "60,000"
  },
  {
    id: 5,
    name: "Kerala",
    info: "Kerala, jise 'God’s Own Country' kaha jata hai, ek aisa rajya hai jahan prakriti ka asli roop dekhne ko milta hai. Kerala apne serene backwaters, houseboats aur greenery ke liye world-famous hai. Alleppey aur Kumarakom jaise shant jheelon wale cities yahaan ki shaan hain. Munnar ke tea gardens aur Thekkady ka Periyar Wildlife Sanctuary adventure aur nature lovers ke liye perfect destination hai. Ayurveda aur spa therapy yahaan ki ek aur khasiyat hai jo logon ko stress-free kar deti hai. Kerala ki Kathakali aur Mohiniyattam jaise traditional dance forms aur boat races culture ka ek aham hissa hain. Local cuisine jaise appam with stew, Kerala sadya aur fresh seafood aapke taste buds ko excite karenge. Kerala ek aisi jagah hai jahan spirituality, nature aur simplicity ek saath jeevan ka sukoon deti hain.",
    image: "/images/kerala.jpeg",
    price: "40,000"
  },
  {
    id: 6,
    name: "Varanasi",
    info: "Varanasi, jise Banaras bhi kaha jaata hai, duniya ka sabse purana aur continuously inhabited city mana jaata hai. Yeh spiritual aur cultural capital hai Bharat ki. Ganga ke ghaat, especially Dashashwamedh aur Assi Ghat, par hone wali Ganga Aarti ek divine experience hoti hai. Kashi Vishwanath Temple yahaan ke sabse pavitra mandiron mein se ek hai. Varanasi ka street food jaise kachori-sabzi, tamatar chaat aur malaiyo famous hai. Yahaan ke narrow lanes mein aapko art, music, aur spirituality ka sangam milega. Banarasi silk sarees puri duniya mein famous hain, aur yahaan ka music aur classical singing bhi world-renowned hai. Varanasi ek aisi jagah hai jahan jeevan aur mrityu dono ka mahatva samjha jaata hai — yeh shahar aatma ko shaanti dene wala hai.",
    image: "/images/vanarshi.jpeg",
    price: "25,000"
  },
  {
    id: 7,
    name: "Shimla",
    info: "Shimla, Himachal Pradesh ki rajdhani, ek shant aur sundar hill station hai jo British colonial era ke charm ko aaj bhi jivit rakhta hai. Mall Road, The Ridge, Christ Church aur Jakhoo Temple yahaan ke prime attractions hain. Shimla ki toy train journey, jo Kalka se start hoti hai, UNESCO World Heritage mein shamil hai. Snowfall ke dauran Shimla ek fairy tale town ban jaata hai, aur skiing, snowball fights yahaan ke tourists ke liye highlights hote hain. Kufri aur Naldehra jaise nearby points adventure aur serenity ka perfect combo offer karte hain. Shimla ka local market handicrafts, woollens aur Himachali topi ke liye famous hai. Ek cup garam chai, ek shawl, aur barf se dhaki pahadiyaan – Shimla ek yaadon bhara vacation ban jaata hai.",
    image: "/images/shimla.jpeg",
    price: "35,200"
  },
  {
    id: 8,
    name: "Udaipur",
    info: "Udaipur, jise 'City of Lakes' kaha jaata hai, Rajasthan ka ek royal aur romantic destination hai. Yeh shahar apne sundar jheelon, rajmahalon aur heritage hotels ke liye jaana jata hai. Lake Pichola, Fateh Sagar Lake aur Jag Mandir jise locations dreamy sunset aur boat ride ke liye perfect hain. City Palace ka architecture aur view mesmerizing hota hai. Udaipur ka old city area narrow lanes, colorful houses aur artistically designed haveli se bhara hua hai. Shilpgram festival yahaan ka ek important cultural event hai jahan traditional art, dance aur crafts milte hain. Local food jaise daal-baati aur ghevar yahaan ka swaad badhate hain. Udaipur ek shaadi, honeymoon ya peaceful vacation ke liye ek excellent jagah hai.",
    image: "/images/udaipur.jpeg",
    price: "37,800"
  },
  {
    id: 9,
    name: "Rishikesh",
    info: "Rishikesh, Uttarakhand mein sthit ek spiritual aur adventure city hai, jise 'Yoga Capital of the World' bhi kaha jata hai. Ganga ke kinare sthit yeh shahar sadhana aur spirituality ka center hai. Parmarth Niketan aur Beatles Ashram yahaan ke famous meditation aur yoga centres hain. Haridwar se thoda hi door yeh jagah rafting, bungee jumping, aur cliff diving jaise adventure ke liye bhi mashhoor hai. Lakshman Jhula aur Ram Jhula yahan ke iconic hanging bridges hain. Evening Ganga Aarti yahaan ki sabse spiritual experience hoti hai. Rishikesh ka organic cafe culture aur foreign tourists ka blend is city ko bohot lively aur soulful banata hai. Yeh jagah ek saath man, body aur soul dono ko rejuvenate karti hai.",
    image: "/images/rishikesh.jpeg",
    price: "22,300"
  },
  {
    id: 10,
    name: "Manali",
    info: "Manali, Himachal Pradesh ka ek breathtaking hill station hai jo honeymooners, backpackers aur adventure seekers ke liye ek dream destination hai. Rohtang Pass, Solang Valley aur Hidimba Temple yahaan ke popular spots hain. Snow-capped mountains, pine forests aur Beas river is city ko ek postcard-perfect feel dete hain. Manali mein aap skiing, zorbing, snow scooter aur paragliding jaise thrilling activities enjoy kar sakte hain. Old Manali area cafes, live music aur hippie vibe ke liye jaana jata hai. Winters mein snowfall aur garmiyon mein pleasant weather is jagah ko har season mein popular banata hai. Local market mein woollens, handicrafts aur wooden souvenirs milte hain. Yeh shahar har stress bhoolakar shanti aur masti ka complete package deta hai.",
    image: "/images/manali.jpeg",
    price: "38,700"
  }
];

export default cityData;
