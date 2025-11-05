import { app } from "./app.js";
import dbConnect from "./db/dbConnection.js";

const PORT = process.env.PORT || 10000;

dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error while connecting the database:", err);
    process.exit(1);
  });
