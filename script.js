window.addEventListener('load', function() {
    // Array de pizzas
    const pizzas = [
      { name: 'Margherita', price: 10 },
      { name: 'Pepperoni', price: 12 },
      { name: 'Calabresa', price: 11 },
      { name: 'Frango com Catupiry', price: 13 }
    ];
  
    const pizzaList = document.getElementById('pizza-list');
  
    // Adiciona cada pizza na lista
    pizzas.forEach(function(pizza) {
      const li = document.createElement('li');
      li.innerHTML = `<span>${pizza.name}</span> - R$ ${pizza.price.toFixed(2)}`;
      pizzaList.appendChild(li);
    });
  });
  