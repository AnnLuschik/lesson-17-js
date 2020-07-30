let productCard = {
    title: 'Inmotion v5f',
    price: 500,
    set addProperties(propertiesArray) {
        for (let object of propertiesArray) {
            this[Object.entries(object)[0][0]] = Object.entries(object)[0][1];
        }
    },
}

productCard.addProperties = [{'type': 'unicycle'}, {'weight': 12}, {'maxSpeed': '25km/h'}];

console.log(productCard);
