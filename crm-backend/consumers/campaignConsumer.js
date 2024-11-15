const CommunicationLog = require('../models/CommunicationLog');

const handleCampaignMessage = async (message) => {
  const { customerEmail, status } = message;

  try {
    const log = await CommunicationLog.findOne({ customerEmail });
    if (log) {
      log.status = status;
      await log.save();
      console.log(`Updated status for ${customerEmail} to ${status}`);
    }
  } catch (error) {
    console.error(`Error updating status for ${customerEmail}: ${error.message}`);
  }
};

// Example of how you could now trigger this function
// whenever a new campaign update is created:
const exampleMessage = { customerEmail: "example@example.com", status: "Updated" };
handleCampaignMessage(exampleMessage);
