import { Card } from "./Card.js";
import { Deck } from "./Deck.js";

const card = new Card("A", "hearts");
document.getElementById("playersCards").appendChild(card.render());

const deck = new Deck();
console.log(deck.shuffle());
