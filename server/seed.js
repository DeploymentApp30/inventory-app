const { sauces, items, cart } = require('./seedData.js');
const { sequelize } = require('./db');
const { Sauce, Items, Cart } = require('./models');

const seed = async () => {
  try {
    await sequelize.sync({ force: true });

    await Promise.all(sauces.map(sauce => Sauce.create(sauce)));
    await Promise.all(items.map(item => Items.create(item)));
    await Promise.all(cart.map(cartItem => Cart.create(cartItem)));

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1); // Terminate the process with a non-zero exit code to indicate failure
  }
};

await seed();
