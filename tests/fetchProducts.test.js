 require('../mocks/fetchSimulator'); 
const { type } = require('mocha/lib/utils');
const { fetchItem } = require('../helpers/fetchItem');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  });
  /* fail('Teste vazio'); */
});
test('Se fetch foi chamada', async () => {
  const resposta1 = await fetchProducts('computador')
  expect(fetch).toHaveBeenCalled()
});
test('Se a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async() => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
   await fetchProducts('computador')
  expect(fetch).toHaveBeenCalledWith(url)
});
test('Se o retorno da função é uma estrutura de dados igual ao objeto computadorSearch' , async () => {
  const resposta3 = await fetchProducts('computador')
  expect(resposta3).toEqual(computadorSearch)
});
test('Se ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    const resposta = await fetchProducts()
    expect(resposta).toEqual(new Error('You must provide an url'));
  }
);