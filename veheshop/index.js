const exp = require('express');
const sql3 = require('sqlite3');
const app = exp();
const prt = 3000;

app.use(exp.static('public'));
app.set('view engine', 'ejs');

app.listen(prt, () => {
    console.log(`Server started at port: http://localhost:${prt}`);
});

var essentials = [
    {
        id: 131,
        imagePath: 'images/product-1.jpg',
        imageAlt: 'Some product name',
        discount: 30,
        price: 120,
        salePrice: 80,
        name: 'Bell pepper',
        options: ['Small','Medium','Large','Extra Large']
    },
    {
        id: 333,
        imagePath: 'images/product-2.jpg',
        imageAlt: 'Some product name',
        discount: 30,
        price: 120,
        salePrice: 80,
        name: 'Bell pepper',
        options: ['Small','Medium','Large']
    },
    {
        id: 41,
        imagePath: 'images/product-3.jpg',
        imageAlt: 'Some product name',
        discount: 30,
        price: 120,
        salePrice: 80,
        name: 'Tomatoes',
        options: ['Small','Extra Large']
    },
    {
        id: 14,
        imagePath: 'images/product-4.jpg',
        imageAlt: 'Some product name',
        discount: 30,
        price: 120,
        salePrice: 80,
        name: 'Bell pepper',
        options: ['Small']
    },
    {
        id: 234,
        imagePath: 'images/product-5.jpg',
        imageAlt: 'Some product name',
        discount: 30,
        price: 120,
        salePrice: 80,
        name: 'Bell pepper',
        options: ['Large only']
    }
];

const mainDb = new sql3.Database('iit.shop.db');
mainDb.run('CREATE TABLE IF NOT EXISTS catalog (pid INTEGER PRIMARY KEY AUTOINCREMENT, imagePath TEXT, iamgeAlt TEXT, discount INTEGER, price DECIAML(9,2), salePrice DECIMAL(9,2), name TEXT, options TEXT)');


app.get('/product/:pid', (req, res) => {
    console.log(req.params.pid);
    const product = essentials.find((product) => product.id == req.params.pid);

    console.log(product);

    res.render('product-single', product);
});

app.get('/', (req, res) => {
    res.render('home', { essentials: essentials});
});