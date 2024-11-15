const Order = require('../models/Order');

const handleOrderMessage = async (message) => {
  const { customerEmail, orderDate, spending } = message;
  const newOrder = new Order({ customerEmail, orderDate, spending });
  
  try {
    await newOrder.save();
    console.log("Order placed");
  } catch (error) {
    console.log(`Error saving order: ${error.message}`);
  }
};

// Example of a direct call:
const exampleOrderMessage = { customerEmail: "order@example.com", orderDate: new Date(), spending: 250 };
handleOrderMessage(exampleOrderMessage);
