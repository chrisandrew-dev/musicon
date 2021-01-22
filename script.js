const context = {
  homepage: {
    title: "Welcome to Musicon",
    body:
      "Musicon is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. Join us in delivering the euphoric vibrations of melodia to the citizens of the world!",
  },

  contact: {
    title: "Let's Get In Touch!",
    body:
      "Ready to start purchasing your musical instruments on Musicon? That's great! Give us a call or send us an email and we will get back to you as soon as possible!",
    phone: "123-456-7890",
    email: "feedback@musicon.com",
    street: "111 Music Rd, Suite 33",
    city: "New York",
    province: "NY",
    postcode: "11111",
  },

  store: {
    products: [
      {
        image: "../images/electronic-keyboard.png",
        name: "Electronic Keyboard",
        description:
          "A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.",
        price: "$1,999.00",
        salePrice: "$1,699.89",
      },
      {
        image: "../images/electric-guitar.png",
        name: "Electric Guitar",
        description:
          "Join the legends of the '50s and '60s when the marriage of guitar and electricity created the most influential instrument of a generation. Note: picks sold separately.",
        price: "$599.99",
      },
      {
        image: "../images/bass-guitar.png",
        name: "Bass Guitar",
        description:
          "Experience the embodiment of funkadelic frequencies that is the bass guitar. Let the deep low notes of the bass guitar resonate with heartbeats everywhere.",
        price: "$624.99",
      },
      {
        image: "../images/drum-kit.png",
        name: "Drum Kit",
        description:
          'Ever thought, "one instrument isn\'t enough?" Find an answer in the drum kit. Coordinate a collections of drums and cymbals to dictate the rhythm of musical masterpiece.',
        price: "$649.00",
        salePrice: "$349.00",
      },
      {
        image: "../images/violin.png",
        name: "Violin",
        description:
          "A versatile that is suited for any and all occasions. Those wearing tuxedos can strum together a classic. Others who prefer overalls can call it a fiddle and play some folk songs.",
        price: "$245.00",
      },
    ],
  },
};

const templateElement = document.querySelector("[data-template-hb]");
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiled = template(context);

document.querySelector("[data-target-hb]").innerHTML = compiled;
