import { items } from './seedData.js';
import { sequelize } from './db';
import { Items } from './models';
import 'regenerator-runtime/runtime';


// Create table test to ensure data can be inserted into it
describe('Items Models', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });

    for(const itemData of items) {
        await Items.create(itemData)
    }
  });

  // Test to add an item
  test('can add an item', async () => {
    const item1 = await Items.create({
      name: 'Oversized Sweater',
      description: 'Boyfriend oversized sweater',
      price: '20.99',
      category: "women's clothing",
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZczSIZ7u8lMhh0yrsAtANsEz-_sk1ng7ANse1-QeK-8jt7BNC2Hi242PsmGWWIimbHvfbZfVeoEBtcadfvlRYegmqLfXQKJtug8ZIZF8c2G5wA1LJDvcEUA',
    });

    expect(item1.name).toBe('Oversized Sweater');
    expect(item1.price).toBe('20.99');
  });

  // Test to delete an item
  test('can delete an item', async () => {
    const item1 = await Items.create({
      name: 'Oversized Sweater',
      description: 'Boyfriend oversized sweater',
      price: '20.99',
      category: "women's clothing",
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZczSIZ7u8lMhh0yrsAtANsEz-_sk1ng7ANse1-QeK-8jt7BNC2Hi242PsmGWWIimbHvfbZfVeoEBtcadfvlRYegmqLfXQKJtug8ZIZF8c2G5wA1LJDvcEUA',
    });

    await item1.destroy();
    const deletedItem = await Items.findByPk(item1.id);

    expect(deletedItem).toBeNull();
  });

  // Test to update an item
  test('can update an item', async () => {
    const item1 = await Items.create({
      name: 'Oversized Sweater',
      description: 'Boyfriend oversized sweater',
      price: '20.99',
      category: "women's clothing",
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZczSIZ7u8lMhh0yrsAtANsEz-_sk1ng7ANse1-QeK-8jt7BNC2Hi242PsmGWWIimbHvfbZfVeoEBtcadfvlRYegmqLfXQKJtug8ZIZF8c2G5wA1LJDvcEUA',
    });

    const updatedItem = await item1.update({ price: '25.99' });
    expect(updatedItem.price).toBe('25.99');
  });
});





