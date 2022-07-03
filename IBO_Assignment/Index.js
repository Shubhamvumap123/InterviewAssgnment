function getUniqueProductCount(listOfProducts) {
  let obj = {};

  let n = listOfProducts.length;
  for (let i = 0; i < n; i++) {
    let product = listOfProducts[i].productName;
    if (obj[product] == undefined) {
      obj[product] = 1;
    } else {
      obj[product]++;
    }
  }
  return obj;
}

const getUniquePrducts = (listOfProducts) => {
  let result = [];
  listOfProducts.forEach((a) => {
    if (!this[a.description]) {
      this[a.description] = {
        description: a.description,
        productName: a.productName,
        quantity: 0,
      };
      result.push(this[a.description]);
    }
    this[a.description].quantity += a.quantity;
  });
  return result;
};

const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];
console.log(getUniqueProductCount(listOfProducts));
console.log(getUniquePrducts(listOfProducts));
