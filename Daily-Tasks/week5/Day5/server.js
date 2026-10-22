require("dotenv").config();

const express = require("express");
const app = express();

const logger = require("./utils/logger");
const errorHandler = require("./middleware/errorHandler");
const userRoutes = require("./routes/userRoutes");

// Built-in middleware
app.use(express.json());

// Custom logger
app.use(logger);

// Main route
app.use("/api/users", userRoutes);

// Test home route
app.get("/", (req, res) => {
    res.send("Express Day-5 API is running!");
});

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({
        error: "Route not found"
    });
});

// Error handler must come last
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(
        `${process.env.APP_NAME || "Express API"} running on port ${PORT}`
    );
});