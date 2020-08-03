let unicycle = {
    title: 'Inmotion',
    price: 500,
    changeProperties: function ChangeProperties(title = unicycle.title, price = unicycle.price) {
        this.title = title;
        this.price = price;
    }
};

let myUnicycle = new unicycle.changeProperties();
console.log(myUnicycle);

unicycle.changeProperties('Ninebot', 1000);
console.log(unicycle);
