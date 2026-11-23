import React from "react";
import "./AnimalParade.css";

// Silhouettes (facing right), with their natural size in px so they keep real proportions
const ANIMALS = [
  { src: "/animals/animal-01.webp", alt: "Goat", h: 85 },
  { src: "/animals/animal-02.webp", alt: "Horse", h: 124 },
  { src: "/animals/animal-03.webp", alt: "Pig", h: 61 },
  { src: "/animals/animal-04.webp", alt: "Duck", h: 55 },
  { src: "/animals/animal-05.webp", alt: "Cow", h: 100 },
  { src: "/animals/animal-06.webp", alt: "Rooster", h: 66 },
  { src: "/animals/animal-07.webp", alt: "Hen", h: 50 },
  { src: "/animals/animal-08.webp", alt: "Sheep", h: 76 },
  { src: "/animals/animal-09.webp", alt: "Bull", h: 104 },
  { src: "/animals/animal-10.webp", alt: "Rabbit", h: 46 },
  { src: "/animals/animal-11.webp", alt: "Piglet", h: 62 },
];

// The row is repeated so the loop is seamless: the track moves right by exactly one set.
const COPIES = 4;

const AnimalParade = () => (
  <div className="animal-parade" aria-hidden="true">
    <div className="animal-parade-track" style={{ "--copies": COPIES }}>
      {Array.from({ length: COPIES }).map((_, copy) =>
        ANIMALS.map((a, i) => (
          <img
            key={`${copy}-${i}`}
            src={a.src}
            alt=""
            className="parade-animal"
            style={{ height: `${a.h * 0.8}px` }}
            loading="lazy"
            decoding="async"
          />
        ))
      )}
    </div>
  </div>
);

export default AnimalParade;
