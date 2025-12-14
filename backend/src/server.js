import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"; // access env variables
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//MIDDLEWARE -> runs between client and server, has access to next. [usecase - auth, rate limiting]

app.use(express.json()); // gets access to req.body (parse json)
app.use(cors({
  origin: "http://localhost:5173",
}
)); // CORS -> security rule applied when we need to get data from another website (use api in frontend)
app.use(rateLimiter); 

// app.use((req, res, next) => {
//     console.log(`req method is ${req.method} and req url is ${req.url}`);
//     next();
// })

app.use("/api/notes", notesRoutes); // set the base router url

connectDB().then(() => {
  app.listen(5001, () => {
    console.log("server started");
  });
});
