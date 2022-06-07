const fetchItem = (nomeProduto) => 
  fetch(`https://api.mercadolibre.com/items/${nomeProduto}`)
  .then((item1) => item1.json())
  .then((item2) => item2)
  .catch((error) => error);

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
