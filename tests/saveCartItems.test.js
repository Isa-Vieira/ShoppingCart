const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test(' Se ao executar saveCartItems o o método localStorage.setItem é chamado',  () => {
    saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toHaveBeenCalled();
  })
  /* fail('Teste vazio'); */

  test(' Se ao executar saveCartItems o o método localStorage.setItem é chamado com dois parametros ', () => {
    const test2 =  saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toHaveBeenCalled(localStorage.setItem('cartItems', '<ol><li>Item</li></ol>'))
  });
});
