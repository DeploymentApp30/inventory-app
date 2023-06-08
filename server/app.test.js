const {sauces, items, cart} = require('./seedData.js');
const {Sequelize, sequelize} = require('./db');
const {Sauce,Items, Cart } = require('./models');


// create table test to ensure data can be inserted into it 
describe('Sauce , Items, Cart Models', () => {
   
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })

    // test to add an item
    test('can add an item', async () => {
        const item1 = await Items.create({name: 'Oversized Sweater', 
        description: 'Boyfriend oversized sweater', price: "20.99", 
        category: "women's clothing", 
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZczSIZ7u8lMhh0yrsAtANsEz-_sk1ng7ANse1-QeK-8jt7BNC2Hi242PsmGWWIimbHvfbZfVeoEBtcadfvlRYegmqLfXQKJtug8ZIZF8c2G5wA1LJDvcEUA"  })
    })

    // test to delete an item

    // test to update an item 







})




