import User from "../server/models/User.model.js";
import Score from "../server/models/Score.model.js";
import { db } from "../server/config/db.js";

import TomasData from "./data/seed.json" assert { type: "json" };

console.log("Syncing Databse");

await db.sync({ force: true });

console.log("Seeding database...");

console.log(TomasData);

const { userId, fname, lname, email, password, scoreId, score, timer } =
  TomasData[0];

console.log(userId);

const newUser = await User.create({
  userId: userId,
  fname: fname,
  lname: lname,
  email: email,
  password: password,
  scoreId: scoreId,
  score: score,
  timer: timer,
});

console.log(newUser);
