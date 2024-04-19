import dotenv from "dotenv";
dotenv.config();
const { PORT } = process.env;

import app from "./app";
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
