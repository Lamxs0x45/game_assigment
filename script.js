// All the images (Radu) image paths fixed (Salvatore)
const cardData = [
    { name: "Adam", image: "Cards/1Adam salicath Kaabi.png" },
    { name: "Alexandru", image: "Cards/2Alexandru Nicolas Birta.png" },
    { name: "Alisia", image: "Cards/3Alisia Cristina Muresan.png" },
    { name: "Andrii", image: "Cards/4Andrii Petrenko.png" },
    { name: "Anna H.", image: "Cards/5Anna Hliuza.png" },
    { name: "Anna M.", image: "Cards/6Anna Matviienko.png" },
    { name: "Artur", image: "Cards/7Artur Sokolan.png" },
    { name: "Berkay", image: "Cards/8Berkay Aptishoglu.png" },
    { name: "Bernardo", image: "Cards/9Bernardo Viaro Perfeito.png" },
    { name: "Bogdan", image: "Cards/10Bogdan Dadu.png"},
    { name: "Daniil", image: "Cards/11Daniil Viter.png"},
    { name: "Diya", image: "Cards/12Diya Gnanasambandam.png"},
    { name: "Ionela", image: "Cards/13Ionela Lefter.png"},
    { name: "Jade", image: "Cards/14Jade Maria Kastl Jensen.png"},
    { name: "Jakub", image: "Cards/15Jakub Macinsky.png"},
    { name: "Kristina", image: "Cards/16Kristina Zakharenko.png"},
    { name: "Krzysztof", image: "Cards/17Krzysztof Laczewski.png"},
    { name: "Line", image: "Cards/18Line Lindhardt Egsgaard.png"},
    { name: "Luchianno", image: "Cards/19Luchianno Marcelo Mascarino.png"},
    { name: "Lukasz", image: "Cards/20Lukasz Styrna.png"},
    { name: "Maciej", image: "Cards/21Maciej Klimaszewski.png"},
    { name: "Madalina", image: "Cards/22Madalina Orlov.png"},
    { name: "Mariem", image: "Cards/23Mariem Ben Abdallah.png"},
    { name: "Matteo", image: "Cards/24Matteo Lizzo.png"},
    { name: "Alex", image: "Cards/25Mihai-Alexandru Manolea.png"},
    { name: "Monika", image: "Cards/26Monika Shaik.png"},
    { name: "Nihar", image: "Cards/27Nihar Nikhil Kane.png"},
    { name: "Radu", image: "Cards/28Radu-Gabriel Nichifor.png"},
    { name: "Sabin", image: "Cards/29Sabin Ioan Constantin.png"},
    { name: "Salvatore", image: "Cards/30Salvatore Tartaro.png"},
    { name: "Sebastian", image: "Cards/31Sebastian Babin.png"},
    { name: "Sofia", image: "Cards/32Sofia Mocanu.png"},
    { name: "Tim", image: "Cards/33Tim Rosested.png"},
    { name: "Volodymyr", image: "Cards/34Volodymyr Andrieiev.png"},
    { name: "Wojciech", image: "Cards/35Wojciech Zaremba.png"},
    { name: "Yordan", image: "Cards/36Yordan Kalinov Yordanov.png"},
    { name: "Allan", image: "Cards/37Allan Henriksen.png"},
    { name: "Merete", image: "Cards/38Merete Thorhauge Lindholm.png"},
    { name: "Alexandru", image: "Cards/39Alexandru Potfalean.png"},
    { name: "Marina", image: "Cards/40Marina Montserrat Chavez Egas.png"},
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
// This function shuffles the cards in a random order (Salvatore)
function shuffleCards(cardArray) {
    for (let i = cardArray.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = cardArray[i];
        cardArray[i] = cardArray[randomIndex];
        cardArray[randomIndex] = temp;
    }
}
shuffleCards(cards);
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