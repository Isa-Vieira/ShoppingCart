require('../mocks/fetchSimulator');
const { type } = require('mocha/lib/utils');
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
  expect(resposta1).toHaveBeenCalled('fetch')
});
test('Se a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async() => {
  const resposta2 = await fetchProducts('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  expect(resposta2).toBe('https://api.mercadolibre.com/sites/MLB/search?q=computador')
});
test('Se o retorno da função é uma estrutura de dados igual ao objeto computadorSearch' , async () => {
  const resposta3 = await fetchProducts('computadorSearch')
  expect(resposta3).toEqual('computadorSearch')
});
test('Se ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
  try {
    expect.assertions(1)
    const resposta = await fetchProducts('You must provide an url');
  } catch (error) {
    expect(error).toEqual(new Error('You must provide an url'));
  }
});