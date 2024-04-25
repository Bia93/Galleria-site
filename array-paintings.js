const paintings = [
  {
    id: 1,
    image: "./photos/starry-night.jpg",
    title: "Starry night",
    painter: "Vincent Van Gogh",
  },
  {
    id: 2,
    image: "./photos/1665_Girl_with_a_Pearl_Earring.jpg",
    title: "Girl with a Pearl Earring",
    painter: "Johannes Vermeer",
  },
  {
    id: 3,
    image: "./photos/picasso.jpg",
    title: "Guernica",
    painter: "Pablo Picasso",
  },
  {
    id: 4,
    image: "./photos/penitent.jpg",
    title: "Penitent Magdalene",
    painter: "Artemisia Gentileschi",
  },
  {
    id: 5,
    image: "./photos/boat.jpg",
    title: "The storm On the Sea of Galilee",
    painter: "Rembrandt",
  },
  {
    id: 6,
    image: "./photos/wave.jpg",
    title: "The Great Wave off Kanagawa",
    painter: "Hokusai",
  },
  {
    id: 7,
    image: "./photos/gogh.jpg",
    title: "Van Gogh self-portrait",
    painter: "Vincent van Gogh",
  },
  {
    id: 8,
    image: "./photos/gypsy.jpg",
    title: "The Sleeping Gypsyh",
    painter: "Henri Rousseau",
  },
  {
    id: 9,
    image: "./photos/girl.jpg",
    title: "Lady with an Ermin",
    painter: "Leonardo da Vinci",
  },
  {
    id: 10,
    image: "./photos/table.jpg",
    title: "The Night cafe",
    painter: "Vincent van Gogh",
  },
  {
    id: 11,
    image: "./photos/apples.jpg",
    title: "The Basket of Apples",
    painter: "Paul Cezanne",
  },
  {
    id: 12,
    image: "./photos/boy.jpg",
    title: "The Boy in the red Vest",
    painter: "Edward Hopper",
  },
  {
    id: 13,
    image: "./photos/green.jpg",
    title: "Arnolfini Portrait",
    painter: "Jan Van Eyck",
  },
  {
    id: 14,
    image: "./photos/mona.jpg",
    title: "Mona Lisa",
    painter: "Leonardo da Vinci",
  },
  {
    id: 15,
    image: "./photos/swing.jpg",
    title: "The Swing",
    painter: "Jean-Honore Fragonard",
  },
];

localStorage.setItem("paintings", JSON.stringify(paintings));