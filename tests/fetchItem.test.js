require('../mocks/fetchSimulator'); 
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  })
  /* fail('Teste vazio'); */
});
test('Se fetchItem foi chamada', async () => {
  const elemento1 = await fetchItem('MLB1615760527')
  expect(fetch).toHaveBeenCalled()
});
test('Se a função fetchItem utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async() => {
  const url = 'https://api.mercadolibre.com/items/MLB1615760527'
   await fetchItem('MLB1615760527')
  expect(fetch).toHaveBeenCalledWith(url)
});
test('Se o retorno da função é uma estrutura de dados igual ao objeto item' , async () => {
  const elemento2 = await fetchItem('MLB1615760527')
  expect(elemento2).toEqual(item)
});
test('Se ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
  const elemento3 = await fetchItem()
  expect(elemento3).toEqual(new Error('You must provide an url'));
}
);
