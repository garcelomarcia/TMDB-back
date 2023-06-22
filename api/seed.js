const { User } = require("./models");
const db = require("./db");

// Add code to create the demo user
async function createDemoUser() {
  await db.sync({ force: false });
  try {
    // Check if the demo user already exists
    const demoUser = await User.findOne({ where: { username: "demo" } });
    if (demoUser) {
      console.log("Demo user already exists.");
      return;
    }

    // Create the demo user
    await User.create({
      username: "demo",
      password: "password",
      // Add other necessary properties
    });

    console.log("Demo user created successfully.");
  } catch (error) {
    console.error("Error creating demo user:", error);
  }
}

// Call the function to create the demo user during the build process
createDemoUser();
