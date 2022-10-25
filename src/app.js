import path from "path";
import { config } from "dotenv-safe";
const __dirname = path.resolve();

import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import compression from "compression";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";

config();

import indexRouter from "./components/indexRouter.js";

// Start express app
const app = express();

// Global Middleware

// Implement cors
app.use(cors());
app.options("*", cors());

// Set Security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Limiter to limit the number of request in an hour
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message:
    "You have reached to the maximum attempt from this IP, Please try after 1 hour!",
});
app.use("/api", limiter);

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// Body parser, reading data from body
app.use(express.json({ limit: "10kb" }));
app.use(
  express.urlencoded({
    extended: false,
  })
);

// Data sanitization against NoSQL Query Injection
app.use(mongoSanitize());

// Data sanitization against XSS - Cross Site Scripting
app.use(xss());

// Prevent parameter polution
app.use(
  hpp({
    whitelist: [],
  })
);

// Compression
app.use(compression());

// Use index route
app.use("/api/v1", indexRouter);

// Return 404 if url is not found
app.all("*", (req, res, next) => {
  // Creating and passing errorn in the next method by the help of AppError class
  res.status(404).json({
    message: `Can't find ${req.originalUrl} on our server`,
  });
});

export default app;
