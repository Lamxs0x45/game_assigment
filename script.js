// All the images (Radu)
const cardData = [
    { name: "Adam", image: "images/1Adam salicath Kaabi.png" },
    { name: "Alexandru", image: "images/2Alexandru Nicolas Birta.png" },
    { name: "Alisia", image: "images/3Alisia Cristina Muresan.png" },
    { name: "Andrii", image: "images/4Andrii Petrenko.png" },
    { name: "Anna H.", image: "images/5Anna Hliuza.png" },
    { name: "Anna M.", image: "images/6Anna Matviienko.png" },
    { name: "Artur", image: "images/7Artur Sokolan.png" },
    { name: "Berkay", image: "images/8Berkay Aptishoglu.png" },
    { name: "Bernardo", image: "images/9Bernardo Viaro Perfeito.png" },
    { name: "Bogdan", image: "images/10Bogdan Dadu.png"},
    { name: "Daniil", image: "images/11Daniil Viter.png"},
    { name: "Diya", image: "images/12Diya Gnanasambandam.png"},
    { name: "Ionela", image: "images/13Ionela Lefter.png"},
    { name: "Jade", image: "images/14Jade Maria Kastl Jensen.png"},
    { name: "Jakub", image: "images/15Jakub Macinsky.png"},
    { name: "Kristina", image: "images/16Kristina Zakharenko.png"},
    { name: "Krzysztof", image: "images/17Krzysztof Laczewski.png"},
    { name: "Line", image: "images/18Line Lindhardt Egsgaard.png"},
    { name: "Luchianno", image: "images/19Luchianno Marcelo Mascarino.png"},
    { name: "Lukasz", image: "images/20Lukasz Styrna.png"},
    { name: "Maciej", image: "images/21Maciej Klimaszewski.png"},
    { name: "Madalina", image: "images/22Madalina Orlov.png"},
    { name: "Mariem", image: "images/23Mariem Ben Abdallah.png"},
    { name: "Matteo", image: "images/24Matteo Lizzo.png"},
    { name: "Alex", image: "images/25Mihai-Alexandru Manolea.png"},
    { name: "Monika", image: "images/26Monika Shaik.png"},
    { name: "Nihar", image: "images/27Nihar Nikhil Kane.png"},
    { name: "Radu", image: "images/28Radu-Gabriel Nichifor.png"},
    { name: "Sabin", image: "images/29Sabin Ioan Constantin.png"},
    { name: "Salvatore", image: "images/30Salvatore Tartaro.png"},
    { name: "Sebastian", image: "images/31Sebastian Babin.png"},
    { name: "Sofia", image: "images/32Sofia Mocanu.png"},
    { name: "Tim", image: "images/33Tim Rosested.png"},
    { name: "Volodymyr", image: "images/34Volodymyr Andrieiev.png"},
    { name: "Wojciech", image: "images/35Wojciech Zaremba.png"},
    { name: "Yordan", image: "images/36Yordan Kalinov Yordanov.png"},
    { name: "Allan", image: "images/37Allan Henriksen.png"},
    { name: "Merete", image: "images/38Merete Thorhauge Lindholm.png"},
    { name: "Alexandru", image: "images/39Alexandru Potfalean.png"},
    { name: "Marina", image: "images/40Marina Montserrat Chavez Egas.png"},
]
// The code that makes the pairs (Radu)
let cards = [];
cardData.forEach(function(card, index){
    cards.push({
        name: card.name,
        image: card.image,
        pairId: index
    });
    cards.push({
        name: card.name,
        image: card.image,
        pairId: index
    });
})
// The code where the cards will shuffle (Radu)
for (let i = cards.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const temp = cards[i];
    cards[i] = cards[randomIndex];
    cards[randomIndex] = temp;
}
// This will render the shuffled cards (Radu)
const board = document.getElementById("board");
cards.forEach(function(card){
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.dataset.pair = card.pairId;

    const imageElement = document.createElement("img");
    imageElement.src = card.image;
    imageElement.alt = card.name;

    cardElement.appendChild(imageElement);

    board.appendChild(cardElement);
});

console.log(cards.length);