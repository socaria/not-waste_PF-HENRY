const arrayProduct = [
  {
    id: 01,
    name: "ensalada",
    price: 300,
    realValue: 900,
    description:
      "Para la pechuga de pollo, usamos una pechuga sin filetear. La cocemos durante 5 minutos en agua con sal y después la terminamos de hacer en la plancha o parrilla, procurando que queden bien marcadas las rayas en su superficie. Después cortamos el pollo en rodajas para poder distribuirlas en la ensalada.",
    stock: 3,
    min: 1,
    imagen:
      "https://www.recetasderechupete.com/wp-content/uploads/2020/10/Ensalada-Cesar-final_-768x530.jpg",
  },
  {
    id: 02,
    name: "papas fritas",
    price: 120,
    realValue: 500,
    description:
      "Las papas fritas o patatas fritas, también conocidas como papas a la belga, patatas a la belga o papas francesas, son las papas que se preparan cortándose en forma de bastones y friéndolas en aceite caliente hasta que queden doradas, crujientes para luego retirarlas del aceite y luego sazonarlas con sal.",
    stock: 5,
    min: 2,
    imagen:
      "https://www.mydibel.be/sites/default/files/styles/lightbox/public/images/Product_Shoestring_0.jpg?itok=2P8PYUJU",
  },
  {
    id: 03,
    name: "Pastel Tres Leches con Mousse",
    price: 850,
    realValue: 1200,
    description:
      "Esta es la torta o pastel tres leches mas rica que jamas probarás!! Si, lleva bastante trabajo por que son varias preparaciones por separado, pero valen la pena.",
    stock: 2,
    min: 1,
    imagen:
      "http://2.bp.blogspot.com/-YKfTLwn0QIE/WoZjR54aOYI/AAAAAAAABmQ/JPUES7CsJpM3LbyT_v-MWjzmOQKf5dHcgCK4BGAYYCw/s1600/tan%2Bdulce%2B3%2Bleches.jpg",
  },
  {
    id: 04,
    name: "Desayuno Especial",
    price: 700,
    realValue: 1000,
    description:
      "Este pack contiene, Medialuna con Jamón y Cheddar,Licuado de Banana",
    stop: 10,
    min: 1,
    imagen:
      "https://images.rappi.com.ar/products/f4334fac-65c0-4eba-8739-f2c08ff197ef-1624971742763.png?e=webp&d=800x800&q=80",
  },
  {
    id: 05,
    name: "Desayuno",
    price: 500,
    realValue: 900,
    description: "Este pack contiene, Chipa X 10, Latte Caramel",
    stop: 3,
    min: 1,
    imagen:
      "https://images.rappi.com.ar/products/cb51bb39-6a77-458e-aa89-5b36a5785471-1604420836372.png?e=webp&q=80&d=400x400?e=webp&d=1440x1",
  },
  {
    id: 06,
    name: "Pizza Flama",
    price: 400,
    realValue: 800,
    description:
      "Este pack contiene, Faina, Extra Mozzarella ,Jamón Cocido,Panceta",
    stop: 3,
    min: 1,
    imagen:
      "https://images.rappi.com.ar/products/81b3a918-4db3-4c8f-b3a1-2d6319e1cda1-1653667914375.png?e=webp&q=80&d=400x400?e=webp&d=1440x1",
  },
  {
    id: 07,
    name: "Pizza Jamon y Morrones",
    price: 700,
    realValue: 1300,
    description:
      "Este pack contiene, Chocolatosso, Coca-Cola Sabor Original 500 ml, Fanta Naranja sin Azúcar 500 ml",
    stop: 5,
    min: 1,
    imagen:
      "https://images.rappi.com.ar/products/1645598-1602253240626.jpg?e=webp&d=800x800&q=80",
  },
  {
    id: 08,
    name: "Empanadas Jamon y Queso Mangiamo",
    price: 400,
    realValue: 800,
    description: "Este pack contiene, 6 empanadas",
    stop: 12,
    min: 1,
    imagen:
      "https://images.rappi.com.ar/products/1645548-1602254475019.jpg?e=webp&d=800x800&q=80",
  },
  {
    id: 09,
    name: "Empanadas Mixtas",
    price: 300,
    realValue: 500,
    description: "Este pack contiene, 3 empandas",
    stop: 10,
    min: 1,
    imagen:
      "https://images.rappi.com.ar/products/1645553-1602252416320.jpg?e=webp&d=800x800&q=80",
  },
  {
    id: 10,
    name: "Ramen",
    price: 1000,
    realValue: 1500,
    description:
      "Este pack contiene, Tare de pollo, finas fetas de bondiola braseada, fideos ramen, huevo marinado, verdeo y togarashi. ",
    stop: 3,
    min: 1,
    imagen:
      "https://images.rappi.com.ar/products/9da912ff-5eac-47dd-9047-e41098e0f88b-1654021841652.png?e=webp&d=800x800&q=80",
  },
  {
    id: 11,
    name: "Croquetas",
    price: 400,
    realValue: 700,
    description:
      " Este pack contiene, De arroz al curry con hongos, aderezo de aquafaba sriracha. apto vegano.",
    stop: 5,
    min: 1,
    imagen:
      "https://images.rappi.com.ar/products/c64cb3c1-e966-4433-b682-568f72cfa216-1622491533392.jpeg?e=webp&d=800x800&q=80",
  },
  {
    id: 12,
    name: "Bao de Bondiola",
    price: 600,
    realValue: 1200,
    description:
      " Este pack contiene, Pan taiwanés al vapor relleno de bondiola braseada con 5 especias asiáticas, maní , pepinos en pickles y cilantro acompañado de papas rotas y alioli.",
    stop: 4,
    min: 1,
    imagen:
      "https://images.rappi.com.ar/products/9d4d3a8c-b697-4056-a6c0-bec3acf75f47-1581782754130.png?e=webp&d=800x800&q=80",
  },
  {
    id: 12,
    name: "Ko-curry Vegano",
    price: 800,
    realValue: 1200,
    description:
      "Este pack contiene, Curry tailandes picante de tofu a la plancha y vegetales de estacion, con leche de coco, arroz y semillas.",
    stop: 4,
    min: 1,
    imagen:
      "https://images.rappi.com.ar/products/e3a13d2c-6989-4ccd-8ff2-064c8fc9f2c8-1619211037489.jpeg?e=webp&d=800x800&q=80",
  },
  {
    id: 13,
    name: "Gyoza Hongos y Tofu",
    price: 400,
    realValue: 800,
    description:
      "Este pack contiene, Masa de wonton relleno de hongos portobellos y champiñones, tofu natural, kimchi, aceite de sesamo. Acompañado con una salsa citrica y cibulette.",
    stop: 12,
    min: 1,
    imagen:
      "https://images.rappi.com.ar/products/1e68cd8d-a524-4125-8f10-b8ba2c416c7c-1637099646523.png?e=webp&d=800x800&q=80",
  },
  {
    id: 14,
    name: "Arrolladitos de Carne",
    price: 500,
    realValue: 1000,
    description: "Este pack contiene, Sumaleel, Salsa Agridulce, Camarones",
    stop: 3,
    min: 1,
    imagen:
      "https://images.rappi.com.ar/products/373693-1581621923658.jpg?e=webp&d=800x800&q=80",
  },
];

module.exports = {
  arrayProduct,
};
