let productCard = {
    title: 'Inmotion v5f',
    price: 500,
}

Object.defineProperty(productCard, 'multifunctionalMetod', {
    enumerable: false,

    get() {
        let newObject = Object.defineProperties({}, Object.getOwnPropertyDescriptors(this));
        return newObject;
    },

    set(array) {
            for(let item of array) {
                if(!item.propertyValue.match(/\W/g)) {
                    item.propertyValue = +item.propertyValue;
                }
                this[item.propertyName] = item.propertyValue;
            }
    }
});

let clone = productCard.multifunctionalMetod;

productCard.multifunctionalMetod = [{propertyName: 'title', propertyValue: 'Gotway Nikola'}, {propertyName: 'price', propertyValue: '1000'}];

console.log(clone);
console.log(productCard);