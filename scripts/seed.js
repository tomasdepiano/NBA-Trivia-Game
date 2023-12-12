import User from "../server/models/User.model";
import Score from "../server/models/Score.model";
import { db } from "../server/config/db";

console.log("Syncing Databse");

await db.sync({ force: true });

console.log("Seeding database...");
