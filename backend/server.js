require("dotenv").config();
const fastify = require("fastify")({ logger: true });
const sequelize = require("./config/database");
require("./models/term");

// Register plugins and routes
fastify.register(require("@fastify/cors"), { origin: "*" });
fastify.register(require("./routes/termRoutes"));

// Start server function
const start = async () => {
  try {
    await sequelize.authenticate();
    fastify.log.info("Database connection has been established successfully.");

    const port = process.env.PORT || 3001;
    await fastify.listen({ port, host: "0.0.0.0" });
    
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
