const express = require("express");
const cors = require("cors");

const hotelsRouter = require("./routes/hotels");
const chatbotRouter = require("./routes/chatbot");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/hotels", hotelsRouter);
app.use("/api/chatbot", chatbotRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
