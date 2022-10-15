const arraySeller = [
  {
    id: 1,
    name: "carrefour",
    email: "carrefour@gmail.com",
    password: "abc123",
    phone: 351685888,
    adress: "chacabuco 123",
    cuit: 26712937,
    image:
      "https://cclasarenas.com/wp-content/uploads/2020/04/carrefour-las-arenas.jpg",
    enabled: true,
    cities: ["Balvanera", "Almagro"],
    category: "supermercado",
  },
  {
    id: 2,
    name: "dia",
    email: "dia@gmail.com",
    password: "abc123",
    phone: 351685888,
    adress: "chacabuco 123",
    cuit: 26712938,
    image:
      "https://cclasarenas.com/wp-content/uploads/2020/04/carrefour-las-arenas.jpg",
    enabled: true,
    cities: ["Almagro"],
    category: "supermercado",
  },
  {
    id: 3,
    name: "la celeste",
    email: "laceleste@gmail.com",
    password: "abc123",
    phone: 351685888,
    adress: "dean funes 123",
    cuit: 26752937,
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Far.linkedin.com%2Fcompany%2Fla-celeste-panaderia&psig=AOvVaw08NShc0Adczv-qjMmpqdA-&ust=1665830480725000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOiyr6LE3_oCFQAAAAAdAAAAABAE",
    enabled: true,
    cities: ["Barracas"],
    category: "panaderia",
  },
  {
    id: 4,
    name: "del pilar",
    email: "delpilar@gmail.com",
    password: "abc123",
    phone: 351685838,
    adress: "colon 123",
    cuit: 26752437,
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FPanaderiadelPilar%2F&psig=AOvVaw1LXS0f80iFVPBFSg0JTKaA&ust=1665830578704000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCdlNHE3_oCFQAAAAAdAAAAABAE",
    enabled: true,
    cities: ["Belgrano"],
    category: "panaderia",
  },
  {
    id: 5,
    name: "homies",
    email: "homies@gmail.com",
    password: "abc123",
    phone: 351585838,
    adress: "colon 123",
    cuit: 26752537,
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2Fhomiescba%2F&psig=AOvVaw3Gg5KqKcSAjgfeis0AITia&ust=1665830710472000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMCb-Y_F3_oCFQAAAAAdAAAAABAE",
    enabled: true,
    cities: ["Boedo"],
    category: "restaurante",
  },
  {
    id: 6,
    name: "subway",
    email: "subway@gmail.com",
    password: "abc123",
    phone: 351554838,
    adress: "tucuman 123",
    cuit: 26754637,
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fsubwayspain%2F&psig=AOvVaw2Sk-b6zdpIguwO9pZx_ac0&ust=1665830771493000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIi3jq3F3_oCFQAAAAAdAAAAABAE",
    enabled: true,
    cities: ["Caballito"],
    category: "restaurante",
  },
  {
    id: 7,
    name: "alianza",
    email: "alianza@gmail.com",
    password: "ali123",
    phone: 596858478,
    adress: "Av. lara 520",
    cuit: 588742937,
    image:
      "https://scontent.fscl26-1.fna.fbcdn.net/v/t39.30808-6/241067637_231704198967573_8482222181604581730_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qhcwT3REVzUAX_9kDPn&_nc_ht=scontent.fscl26-1.fna&oh=00_AT88Yi_50CM43ev5fZvnyJWA4ImF-QqkFColSyXaQyjw0g&oe=634E76C7",
    enabled: true,
    cities: ["Almagro"],
    category: "panaderia",
  },
  {
    id: 8,
    name: "entremasas",
    email: "entremasas@gmail.com",
    password: "en3masas",
    phone: 695858752,
    adress: "calle ahumada 8547",
    cuit: 695747527,
    image:
      "https://scontent.fscl26-1.fna.fbcdn.net/v/t1.6435-9/51600634_2707178059322147_5932299886836842496_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=973b4a&_nc_ohc=BMSw9eiu81QAX-SoPdi&_nc_ht=scontent.fscl26-1.fna&oh=00_AT8oQGSkzSSexc5lU93y5Can2BpJLMmfa6WqPc5ZS4cJBg&oe=636E577B",
    enabled: true,
    cities: ["Caballito"],
    category: "panaderia",
  },
  {
    id: 9,
    name: "miguel",
    email: "miguel@gmail.com",
    password: "panmiguel",
    phone: 741356982,
    adress: "av los leones 3245",
    cuit: 965447784,
    image:
      "https://scontent.fscl26-1.fna.fbcdn.net/v/t39.30808-6/304592070_411376264431742_5989104082805563354_n.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DoYEMd8K7qcAX8BlEST&_nc_ht=scontent.fscl26-1.fna&oh=00_AT_CL88lCsvuldr0pEOC2URqCfbmTn2TwvFQCH2kjnmnUQ&oe=634F3A44",
    enabled: true,
    cities: ["Colegiales"],
    category: "panaderia",
  },
  {
    id: 10,
    name: "mochahs panaderia & pasteleria",
    email: "mochahs@gmail.com",
    password: "ppmochahs",
    phone: 454156773,
    adress: "calle san miguel 845",
    cuit: 247142424,
    image:
      "https://i.pinimg.com/564x/d8/0d/c5/d80dc5f955ad5065ca45d13210b996ef.jpg",
    enabled: true,
    cities: ["Floresta"],
    category: "panaderia",
  },
  {
    id: 11,
    name: "big panes",
    email: "bpanes@gmail.com",
    password: "bigbig",
    phone: 558756344,
    adress: "salecianos 1085",
    cuit: 365142282,
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/7002a8150536065.62fbf973cf494.png",
    enabled: true,
    cities: ["La Paternal"],
    category: "panaderia",
  },
  {
    id: 12,
    name: "villa hermosa panaderia",
    email: "villahermosa@gmail.com",
    password: "villaher88",
    phone: 857759614,
    adress: "san martin 525",
    cuit: 342542752,
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/1eb0e1150391993.Y3JvcCwyMTU4LDE2ODgsNDIyLDA.jpg",
    enabled: true,
    cities: ["Mataderos"],
    category: "panaderia",
  },
  {
    id: 13,
    name: "panaderia los hermanos",
    email: "loshermanos@gmail.com",
    password: "hermanospan",
    phone: 532751414,
    adress: "estacion 687",
    cuit: 854542624,
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/6259ba145608751.Y3JvcCwxMDAxLDc4MywxNzgsMA.png",
    enabled: true,
    cities: ["Nuñez"],
    category: "panaderia",
  },
  {
    id: 14,
    name: "sweet love panaderia y pasteleria",
    email: "sweetlove@gmail.com",
    password: "panypassweet",
    phone: 556852334,
    adress: "bolivar 3475",
    cuit: 965142584,
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/518e0f144665783.Y3JvcCwzMjYwLDI1NTAsMTYsMA.png",
    enabled: true,
    cities: ["Parque Avellaneda"],
    category: "panaderia",
  },
];

module.exports = {
  arraySeller,
};
