const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test(' Se ao executar getSavedCartItems o o método localStorage.setItem é chamado',  () => {
    getSavedCartItems()
    expect(localStorage.setItem).toHaveBeenCalled();
  })
  /* fail('Teste vazio'); */

  test(' Se ao executar getSavedCartItems o o método localStorage.setItem é chamado com um parametro ', () => {
    const test = getSavedCartItems()
    expect(localStorage.setItem).toHaveBeenCalled(localStorage.setItem('cartItems'))
  });
});
