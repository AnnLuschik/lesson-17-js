let unicycle = {
    title: 'Inmotion v5f',
    price: 500,
}

Object.defineProperty(unicycle, 'multifunctionalMetod', {
    enumerable: false,

    get() {
        let newObject = {};
        for(let key in this) {
            newObject[key] = this[key];
        }
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



let clone = unicycle.multifunctionalMetod;

unicycle.multifunctionalMetod = [{propertyName: 'title', propertyValue: 'Gotway Nikola'}, {propertyName: 'price', propertyValue: '1000'}];

console.log(clone);
console.log(unicycle);