const Lead = require('../models/Lead');

const handleLeadMessage = async (message) => {
  const { name, email, totalSpends, maxVisits, lastVisit } = message;
  const newLead = new Lead({ name, email, totalSpends, maxVisits, lastVisit });

  try {
    await newLead.save();
    console.log(`Lead saved: ${email}`);
  } catch (error) {
    console.error(`Error saving lead: ${error.message}`);
  }
};

// Example of a direct call:
const exampleLeadMessage = { name: "John Doe", email: "john@example.com", totalSpends: 100, maxVisits: 5, lastVisit: new Date() };
handleLeadMessage(exampleLeadMessage);
