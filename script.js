const names = ['Adam', 'Alexandru', 'Alisia', 'Andrii', 'Anna', 'Anna', 'Artur', 'Berkay', "Bernardo", "Bogdan", "Daniil", "Diya", "Ionela", "Jade", "Jakub", "Kristina", "Krzysztof", "Line", "Luchianno", "Lukasz", "Maciej", "Madalina", "Mariem", "Matteo", "Alexandru", "Monika", "Nihar", "Radu", "Salvatore", "Sebastian", "Sofia", "Tim", "Volodymyr", "Wojciech", "Yordan", "Allan", "Merete", "Alexandru", "Marina"];


function generateCards(names) {
  const cards = [];
  names.forEach((name, i) => {
    cards.push({ id: i * 2,     pairId: i, name });
    cards.push({ id: i * 2 + 1, pairId: i, name });
  });
  return cards;
}

function renderCards(cards, container) {
  container.innerHTML = '';
  cards.forEach(card => {
    const el = document.createElement('div');
    el.className = 'card';
    el.dataset.id = card.id;
    el.dataset.pair = card.pairId;
    el.textContent = card.name;
    container.appendChild(el);
  });
}

renderCards(generateCards(names), document.getElementById('board'));
