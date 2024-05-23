import colors from "colors";
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDb from "./config/db.config.js";

dotenv.config({ path: "./.env" });

connectDb()
   .then(() => {
      app.listen(process.env.PORT || 7072, () => {
         console.log(
            `\n🏃 SERVER IS RUNNING ON PORT: ${process.env.PORT}!!!`.bgBlue
               .white
         );
      });
   })
   .catch((error) => {
      console.log(`\n🔗 MONGODB CONNECTION FAILED!!! ${error}`.bgRed.white);
   });
