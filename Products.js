// we create this var Products OBJECT array to represents the list of each product with many values. IMAGE, NAME AND PRICE. 
// export variable 'Products' to use on other javascript files

export var Products = [{
  id: 'b27a06e1-c0f6-4d51-b20c-deaf614862e9',
  image: './Images/q.jpg',
  name: 'Poppy Corset',
  price: 999
},{
  id: 'a1b8935d-2fe2-41cc-af90-eaf593c7eb23',
  image: './Images/l .jpg',
  name: 'Classic Corset',
  price: 999
},{
  id: '667e6e45-ecbb-4b3a-91ea-391baa47d695',
  image: './Images/m .jpg',
  name: 'Flower Corset',
  price: 999
},{
  id: 'ba85cfac-41ce-4b1a-8477-b7a4698759b3',
  image: './Images/n .jpg',
  name: 'Blue Corset',
  price: 999
},{
  id: 'b51a2bf4-a6ba-4938-a50e-edf6d3ed56d3',
  image: './Images/o .jpg',
  name: 'Ellias Corset',
  price: 999
},{
  id: 'e8e1a46d-5019-4c2b-bd81-41e9708d1ace',
  image: './Images/p .jpg',
  name: 'White Corset',
  price: 999
},{
  id: 'ad7b6700-5191-4510-87f7-b251b373e753',
  image: './Images/q.jpg',
  name: 'SunFlower Corset',
  price: 999
},{
  id: 'c9c3f2fc-d440-4c63-b06b-9adeedbdaebd',
  image: './Images/h .jpg',
  name: 'Red Corset',
  price: 999
},{
  id: '13e32643-afaf-378d-9f5a-329e4dada48d',
  image: './Images/2.png',
  name: 'Red Corset',
  price: 999
},
{
  id: 'f816cbcf-b6ba-6fe4-752d-78a18320a724',
  image: './Images/3.png',
  name: 'Red Corset',
  price: 999
}];


export function getProduct(productId) {
  var matchingProduct;
    
  Products.forEach((product) => {
      if (product.id === productId) {
          matchingProduct = product;
      }
  });

return matchingProduct;

}



let guid = () => {
  let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
  }
  //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

console.log(guid());
