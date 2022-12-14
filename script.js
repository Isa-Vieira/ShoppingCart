const lista = document.querySelector('.cart__items');
const totalPrice = document.querySelector('.total-price');

const somaPrice = () => {
const arrayItem = document.querySelectorAll('.cart__item');
let somando = 0;
arrayItem.forEach((liProduct) => { 
  const textoProduct = liProduct.innerText;
  const number = textoProduct.split('$')[1];
  somando += Number(number);
});
totalPrice.innerText = somando;
};

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  
  document.querySelector('.items').appendChild(section);
};
const adicionandoClasse = document.createElement('span');
adicionandoClasse.innerText = 'carregando...';
adicionandoClasse.className = 'loading';
document.querySelector('.items').appendChild(adicionandoClasse);

const pegarItem = async () => {
  const resultado = await fetchProducts('computador');
  resultado.results.forEach((element) => {
    const objeto = { sku: element.id, name: element.title, image: element.thumbnail };
    return createProductItemElement(objeto);
  });
  document.querySelector('.items').removeChild(adicionandoClasse);
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(lista.innerHTML);
  somaPrice();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const loaoding = () => {
  lista.innerHTML = getSavedCartItems();
  lista.addEventListener('click', cartItemClickListener);
};
const funcao = (param1) => {
  fetchItem(param1).then((param2) => {
    lista.appendChild(createCartItemElement(param2));
    saveCartItems(lista.innerHTML);
    somaPrice();
  }); 
};

document.addEventListener('click', (param3) => {
  if (param3.target.classList.contains('item__add')) {
    const param4 = param3.target.parentNode.firstChild.innerText;
    funcao(param4);
  } 
});
const clearbtn = document.querySelector('.empty-cart');
clearbtn.addEventListener('click', () => {
  lista.innerHTML = '';
  saveCartItems(lista.innerHTML);
});

window.onload = () => { pegarItem(); loaoding(); };