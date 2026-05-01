const products = [
{ 
  name: { en: "Energy (All in One)", mr: "एनर्जी (सर्वात्मक)" }, 
  image: "https://i.ibb.co/j9LKsXSj/Energy-All-in-One2.png",
  tag: { en: "Energy", mr: "एनर्जी" }, 
  category: "sugarcane",
  dose: { en: "Drip: 5–10 L/acre", mr: "ड्रिप: ५-१० लिटर/एकर" },
  benefits: {
    en: ["Crop growth, dark color, leaf length & width","Speeds up nutrient absorption from soil","Boosts disease resistance in crops"],
    mr: ["पिकांची वाढ, गडद रंग, पानांची लांबी आणि रुंदी","जमिनीतून पोषक तत्वांचे शोषण वेगवाने करते","पिकांमध्ये रोग प्रतिकार शक्ती वाढवते"]
  }, 
  crops: { en: "All crops", mr: "सर्व पिके" }
},  
{ 
  name: { en: "Sugar Special Stage 1", mr: "द्राक्ष विशेष टप्पा १" }, 
  image: "https://i.ibb.co/pB4z57H6/sugercane-special-stage-1.png", 
  tag: { en: "Sugarcane", mr: "द्राक्ष" }, 
  category: "sugarcane", 
  dose: { en: "Drip: 5–10 L/acre", mr: "ड्रिप: ५-१० लिटर/एकर" },
  benefits: {
    en: ["Lush growth, dark color, massive branching", "Enhances strength & nutrient absorption", "Modern technology for sugarcane"],
    mr: ["जाडी वाढ, गडद रंग, मोठ्या फांगे", "शक्ती आणि पोषक तत्वांचे शोषण वाढवते", "द्राक्षांसाठी आधुनिक तंत्रज्ञान"]
  }, 
  crops: { en: "Sugarcane", mr: "द्राक्ष" }
},
{ 
  name: { en: "Sugar Special Stage 2", mr: "द्राक्ष विशेष टप्पा २" }, 
  image: "https://i.ibb.co/jvSsHTcs/Suger-Special-Stage-2.png", 
  tag: { en: "Sugarcane", mr: "द्राक्ष" }, 
  category: "sugarcane", 
  dose: { en: "Drip: 5–10 L/acre", mr: "ड्रिप: ५-१० लिटर/एकर" },
  benefits: {
    en: ["Long & wide leaf growth, dark color", "Massive root growth, food production speed", "Better weight gain for sugarcane"],
    mr: ["लांबी आणि रुंदी पानांची वाढ, गडद रंग", "मोठ्या मुळांची वाढ, अन्न निर्मितीची गती", "द्राक्षांचे वजन वाढीसाठी चांगले"]
  }, 
  crops: { en: "Sugarcane", mr: "द्राक्ष" }
},
{ 
  name: { en: "Sugar Special Stage 3", mr: "द्राक्ष विशेष टप्पा ३" }, 
  image: "https://i.ibb.co/bMWMphVv/Suger-Special-Stage-3.png", 
  tag: { en: "Sugarcane", mr: "द्राक्ष" }, 
  category: "sugarcane", 
  dose: { en: "Drip: 5–10 L/acre", mr: "ड्रिप: ५-१० लिटर/एकर" },
  benefits: {
    en: ["For final harvesting stage sugarcane", "Long & heavy leaf growth, extreme root growth", "Increases output by 10–15%"],
    mr: ["अंतिम कापन टप्प्यातील द्राक्षांसाठी", "लांबी आणि जड पानांची वाढ, अत्यंत मुळांची वाढ", "उत्पादन १०-१५% वाढवते"]
  }, 
  crops: { en: "Sugarcane", mr: "द्राक्ष" }
},
{ 
  name: { en: "Serum Magic", mr: "सीरम मॅजिक" }, 
  image: "https://i.ibb.co/S7sn20X5/Serum-Magic.png", 
  tag: { en: "Universal", mr: "सार्वत्रिक" }, 
  category: "universal", 
  dose: { en: "Drip: 5–10 L/acre", mr: "ड्रिप: ५-१० लिटर/एकर" },
  benefits: {
    en: ["Excellent flowering, fast fruit setting", "Leaf dense storage growth, massive color", "Boosts quality and production"],
    mr: ["उत्कृष्ट फुलणी, जलद फळ बंधणी", "घड पानांची साठवण वाढ, मोठा रंग", "गुणवत्ता आणि उत्पादन वाढवते"]
  }, 
  crops: { en: "All crops", mr: "सर्व पिके" }
},
{ 
  name: { en: "Guava Special", mr: "अननस विशेष" }, 
  image: "https://i.ibb.co/Df9yNLL5/Gava-Special.png", 
  tag: { en: "Special", mr: "विशेष" }, 
  category: "special", 
  dose: { en: "Drip: 5–10 L/acre", mr: "ड्रिप: ५-१० लिटर/एकर" },
  benefits: {
    en: ["Storage, freshness, flower & fruit setting", "Improves quality and production", "Increases fruit & root count"],
    mr: ["साठवण, ताजेपणा, फुले आणि फळ बंधणी", "गुणवत्ता आणि उत्पादन सुधारते", "फळे आणि मुळे संख्या वाढवते"]
  }, 
  crops: { en: "Guava", mr: "अननस" }
},
{ 
  name: { en: "Tarkari Special", mr: "भाजीपाले विशेष" }, 
  image: "https://i.ibb.co/fVp8Vv3N/Tarkari-Special.png", 
  tag: { en: "Special", mr: "विशेष" }, 
  category: "special", 
  dose: { en: "Drip: 5–10 L/acre", mr: "ड्रिप: ५-१० लिटर/एकर" },
  benefits: {
    en: ["Storage, freshness, flower & fruit setting", "Increases production in less time", "Fills micro-nutrient deficiency"],
    mr: ["साठवण, ताजेपणा, फुले आणि फळ बंधणी", "कमी वेळात उत्पादन वाढवते", "सूक्ष्म पोषक तत्वांची कमतरता भरते"]
  }, 
  crops: { en: "All Vegetables", mr: "सर्व भाजीपाले" }
},
{ 
  name: { en: "Bundha Special", mr: "केळी बंध विशेष" }, 
  image: "https://i.ibb.co/H6gFvxV/Bundha-Special.png", 
  tag: { en: "Special", mr: "विशेष" }, 
  category: "special", 
  dose: { en: "Drip: 5–10 L/acre", mr: "ड्रिप: ५-१० लिटर/एकर" },
  benefits: {
    en: ["Highly effective for banana bundha", "Strengthens banana bundha", "Used up to 80 days after planting"],
    mr: ["केळी बंधासाठी अत्यंत प्रभावी", "केळी बंध मजबूत करते", "लागवणीनंतर ८० दिवसापर्यंत वापरता येते"]
  }, 
  crops: { en: "Banana", mr: "केळी" }
},
{ 
  name: { en: "Banana Special", mr: "केळी विशेष" }, 
  image: "https://i.ibb.co/99g5Wdm0/Banana-Special.png", 
  tag: { en: "Special", mr: "विशेष" }, 
  category: "special", 
  dose: { en: "Drip: 5–10 L/acre", mr: "ड्रिप: ५-१० लिटर/एकर" },
  benefits: {
    en: ["Uniform growth, long & wide green leaves", "Quick root growth, strong plant structure", "Increases production in less time"],
    mr: ["समान वाढ, लांबी आणि रुंदी हिरवी पाने", "जलद मुळांची वाढ, मजबूत वनस्पती संरचना", "कमी वेळात उत्पादन वाढवते"]
  }, 
  crops: { en: "Banana", mr: "केळी" }
},
{ 
  name: { en: "Onion Special", mr: "कांदा विशेष" }, 
  image: "https://i.ibb.co/jZPSPBjV/Onion-Special.png", 
  tag: { en: "Special", mr: "विशेष" }, 
  category: "special", 
  dose: { en: "Drip: 5–10 L/acre", mr: "ड्रिप: ५-१० लिटर/एकर" },
  benefits: {
    en: ["For strong onion growth", "Dark & shiny onion with firm skin", "Improves disease resistance & shelf life"],
    mr: ["मजबूत कांदा वाढीसाठी", "गडद आणि चमकदार कांदे घट्ट आवरणासहित", "रोग प्रतिकार आणि साठवण काल सुधारते"]
  }, 
  crops: { en: "Onion", mr: "कांदा" }
},
  { 
    name: { en: "Jambo Sizer +", mr: "जांबो सायजर +" }, 
    image: "https://i.ibb.co/jZD1MZpv/Jambo-Sizer-Plus.png", 
    tag: { en: "Universal", mr: "सार्वत्रिक" }, 
    category: "universal", 
    dose: { en: "Drip: 5–10 L/acre", mr: "ड्रिप: ५-१० लिटर/एकर" },
    benefits: {
      en: ["Naturally increases fruit size for all crops", "Enhances color, weight & taste", "Improves shelf life for farmers"],
      mr: ["सर्व पिकांसाठी नैसर्गिकरित्या फळांचा आकार वाढवते", "रंग, वजन आणि चवाई सुधारते", "शेतकऱ्यांसाठी साठवण काल वाढवते"]
    }, 
    crops: { en: "All fruits", mr: "सर्व फळे" }
  },
  { 
    name: { en: "Dalimb Special", mr: "दालिंब विशेष" }, 
    image: "https://i.ibb.co/9DyS63C/Dalimb-Special.png", 
    tag: { en: "Special", mr: "विशेष" }, 
    category: "special", 
    dose: { en: "Drip: 5–10 L/acre", mr: "ड्रिप: ५-१० लिटर/एकर" },
    benefits: {
      en: ["Storage, canopy, leaf size & freshness", "Flower & fruit setting & glossy appearance", "Improves quality & production"],
      mr: ["साठवण, छत्र, पानांचा आकार आणि ताजेपणा", "फुले आणि फळ बंधणी आणि चमकदार दिसावा", "गुणवत्ता आणि उत्पादन सुधारते"]
    }, 
    crops: { en: "Pomegranate", mr: "दालिंब" }
  },
  { 
    name: { en: "Ginger Special", mr: "आले विशेष" }, 
    image: "https://i.ibb.co/nFNh8st/Ginger-Special.png", 
    tag: { en: "Special", mr: "विशेष" }, 
    category: "special", 
    dose: { en: "Drip: 5–10 L/acre", mr: "ड्रिप: ५-१० लिटर/एकर" },
    benefits: {
      en: ["Growth, dark color, branching & leaf length", "Speeds up nutrient absorption from soil", "Boosts disease resistance in ginger & turmeric"],
      mr: ["वाढ, गडद रंग, फांगे आणि पानांची लांबी", "जमिनीतून पोषक तत्वांचे शोषण वेगवाने करते", "आल्या आणि हळदीमध्ये रोग प्रतिकार शक्ती वाढवते"]
    }, 
    crops: { en: "Ginger, Turmeric", mr: "आले, हळद" }
  },
  { 
    name: { en: "Serum Booster", mr: "सीरम बूस्टर" }, 
    image: "https://i.ibb.co/YF0sd9TH/Serum-booster.png", 
    tag: { en: "Universal", mr: "सार्वत्रिक" }, 
    category: "universal", 
    dose: { en: "Drip: 5–10 L/acre", mr: "ड्रिप: ५-१० लिटर/एकर" },
    benefits: {
      en: ["Increases flower & fruit size", "Makes leaves, flowers & fruits attractive", "Keeps crop firm even in weather changes"],
      mr: ["फुले आणि फळांचा आकार वाढवते", "पाने, फुले आणि फळे आकर्षक बनवते", "हवामान बदलातही पिक मजबूत ठेवते"]
    }, 
    crops: { en: "All crops", mr: "सर्व पिके" }
  },
  { 
    name: { en: "Sugar Cane", mr: "द्राक्ष स्प्रे" }, 
    image: "https://i.ibb.co/PZGhvXxs/Suger-Cane.png", 
    tag: { en: "Sugarcane", mr: "द्राक्ष" }, 
    category: "sugarcane", 
    dose: { en: "Spray: 2–2.5 ml/L", mr: "स्प्रे: २-२.५ मिली/लिटर" },
    benefits: {
      en: ["Lush growth, dark color, massive branching", "Massive root & disease resistance", "Improves photosynthesis process"],
      mr: ["जाडी वाढ, गडद रंग, मोठ्या फांगे", "मोठ्या मुळे आणि रोग प्रतिकार", "प्रकाशसंश्लेषण प्रक्रिया सुधारते"]
    }, 
    crops: { en: "Sugarcane", mr: "द्राक्ष" }
  },
  { 
    name: { en: "ICON", mr: "आयकॉन" }, 
    image: "https://i.ibb.co/wZ4D5h5w/Icon.png", 
    tag: { en: "Universal", mr: "सार्वत्रिक" }, 
    category: "universal", 
    dose: { en: "Spray: 2–2.5 ml/L", mr: "स्प्रे: २-२.५ मिली/लिटर" },
    benefits: {
      en: ["Fast growth, long leaves & strong roots", "Disease resistance & freshness boost", "Suitable for 100% of all crops"],
      mr: ["जलद वाढ, लांबी पाने आणि मजबूत मुळे", "रोग प्रतिकार आणि ताजेपणा वाढ", "१डा% सर्व पिकांसाठी योग्य"]
    }, 
    crops: { en: "All crops", mr: "सर्व पिके" }
  },
  { 
    name: { en: "Serum Gold", mr: "सीरम गोल्ड" }, 
    image: "https://i.ibb.co/BKvnvzFp/Serum-gold.png", 
    tag: { en: "Soil", mr: "जमीन" }, 
    category: "soil", 
    dose: { en: "Spray: 2–2.5 ml/L", mr: "स्प्रे: २-२.५ मिली/लिटर" },
    benefits: {
      en: ["Improves soil & increases soil bio-properties", "Speeds up plant growth fast", "Reduces plant stress & boosts food production"],
      mr: ["जमीन सुधारते आणि जमिनीचे जैव-गुणधर्म वाढवते", "वनस्पती वाढ जलद करते", "वनस्पतीचा ताणाव कमी करते आणि अन्न निर्मिती वाढवते"]
    }, 
    crops: { en: "All crops", mr: "सर्व पिके" }
  },
  { 
    name: { en: "Serum Blossom", mr: "सीरम ब्लॉसम" }, 
    image: "https://i.ibb.co/MxDfH3sD/Serum-Blossom.png", 
    tag: { en: "Flowers", mr: "फुले" }, 
    category: "universal", 
    dose: { en: "Spray: 2–2.5 ml/L", mr: "स्प्रे: २-२.५ मिली/लिटर" },
    benefits: {
      en: ["Organic nutrient for flower-specific use", "Stimulates plant growth & flowering", "Increases fruit quality and production"],
      mr: ["फुलांसाठी विशिष्ट जैव पोषक तत्व", "वनस्पती वाढ आणि फुलणीला प्रोत्साहन देते", "फळांची गुणवत्ता आणि उत्पादन वाढवते"]
    }, 
    crops: { en: "Flowering crops", mr: "फुलणारी पिके" }
  },
  { 
    name: { en: "Nursery Secrete (Shoot Grow)", mr: "नर्सरी सीक्रेट (शूट ग्रो)" }, 
    image: "https://i.ibb.co/C3MdfrXk/Nursery-Secret.png", 
    tag: { en: "Nursery", mr: "नर्सरी" }, 
    category: "soil", 
    dose: { en: "Spray: 2–2.5 ml/L", mr: "स्प्रे: २-२.५ मिली/लिटर" },
    benefits: {
      en: ["Fast seedling growth, tall & wide plants", "Notable seedling harmony development", "Increases root & shoot growth massively"],
      mr: ["जलद रोपावाढ, उंच आणि रुंदी वनस्पती", "लक्षणीय रोपांचा सामंजस्य विकास", "मुळे आणि शूट वाढ मोठ्या प्रमाणात वाढवते"]
    }, 
    crops: { en: "Nursery plants", mr: "नर्सरी वनस्पती" }
  },
  { 
    name: { en: "Bio NK-24", mr: "बायो एनके-२४" }, 
    image: "https://i.ibb.co/yB4Q2S6V/NK24.png", 
    tag: { en: "Pest Control", mr: "कीट नियंत्रण" }, 
    category: "soil", 
    dose: { en: "Spray: 2–2.5 ml/L", mr: "स्प्रे: २-२.५ मिली/लिटर" },
    benefits: {
      en: ["Controls mites, grasshoppers, fruit borer, paakad", "Controls powdery mildew in grapes, banana", "Can be mixed with any biological medicine"],
      mr: ["टिकणी, पाटीड, फळ भोंगे, पाकड नियंत्रित करते", "द्राक्ष आणि केळीतील बुरशा रोग नियंत्रित करते", "कोणत्याही जैविक औषधीसह मिसळता येते"]
    }, 
    crops: { en: "All crops", mr: "सर्व पिके" }
  },
  { 
    name: { en: "Serum Prime", mr: "सीरम प्राइम" }, 
    image: "https://i.ibb.co/spzCdZ9X/Serum-Prime.png", 
    tag: { en: "Root Care", mr: "मुळांची काळजी" }, 
    category: "soil", 
    dose: { en: "Spray: 2–2.5 ml/L", mr: "स्प्रे: २-२.५ मिली/लिटर" },
    benefits: {
      en: ["Effective control over nematodes", "Destroys root-damaging worms", "Improves root health & long-term protection"],
      mr: ["निमॅटोड्सवर प्रभावी नियंत्रण", "मुळांना हानीकारक कृमी नष्ट करते", "मुळांचे आरोग्य सुधारते आणि दीर्घकालीन संरक्षण देते"]
    }, 
    crops: { en: "All crops", mr: "सर्व पिके" }
  },
  { 
    name: { en: "Micro-Nutri", mr: "मायक्रो-न्युट्री" }, 
    image: "https://i.ibb.co/qMn99M40/Micro-Nutri.png", 
    tag: { en: "Nutrition", mr: "पोषण" }, 
    category: "soil", 
    dose: { en: "Spray: 2–2.5 ml/L", mr: "स्प्रे: २-२.५ मिली/लिटर" },
    benefits: {
      en: ["Assists photosynthesis & green matter production", "Improves flower & fruit development", "Fills micronutrient deficiency"],
      mr: ["प्रकाशसंश्लेषण आणि हिरव्य द्रव्यांची निर्मितीला मदत करते", "फुले आणि फळांचा विकास सुधारते", "सूक्ष्म पोषक तत्वांची कमतरता भरते"]
    }, 
    crops: { en: "All crops", mr: "सर्व पिके" }
  },
  { 
    name: { en: "Nursery Secrete (Root Grow)", mr: "नर्सरी सीक्रेट (रूट ग्रो)" }, 
    image: "https://i.ibb.co/gMsqsP19/Nursery-Secret-Shoot-Grow.png", 
    tag: { en: "Root", mr: "मुळे" }, 
    category: "soil", 
    dose: { en: "Spray: 2–2.5 ml/L", mr: "स्प्रे: २-२.५ मिली/लिटर" },
    benefits: {
      en: ["Massive root growth & quality improvement", "Increases organic carbon & soil nutrients", "Ideal for seedling emergence & growth"],
      mr: ["मोठ्या मुळांची वाढ आणि गुणवत्ता सुधारणी", "जैविक कार्बन आणि जमिनीचे पोषक तत्व वाढवते", "रोपावाढ आणि वाढीसाठी आदर्श"]
    }, 
    crops: { en: "Nursery plants", mr: "नर्सरी वनस्पती" }
  },
  { 
    name: { en: "Altra Root Power", mr: "अल्ट्रा रूट पॉवर" }, 
    image: "https://i.ibb.co/DgPCVqLs/Altra-Root-Power-Plus.png", 
    tag: { en: "Root", mr: "मुळे" }, 
    category: "soil", 
    dose: { en: "Spray: 2–2.5 ml/L", mr: "स्प्रे: २-२.५ मिली/लिटर" },
    benefits: {
      en: ["Massive root growth & quality improvement", "Increases organic carbon & soil nutrients", "Improves soil biological properties"],
      mr: ["मोठ्या मुळांची वाढ आणि गुणवत्ता सुधारणी", "जैविक कार्बन आणि जमिनीचे पोषक तत्व वाढवते", "जमिनीचे जैविक गुणधर्म सुधारते"]
    }, 
    crops: { en: "All crops", mr: "सर्व पिके" }
  }
];
