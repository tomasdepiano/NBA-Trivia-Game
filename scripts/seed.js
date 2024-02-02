import User from "../server/models/User.model.js";
import Score from "../server/models/Score.model.js";
import { db } from "../server/config/db.js";

import TomasData from "./data/seed.json" assert { type: "json" };

console.log("Syncing Databse");

await db.sync({ force: true });

console.log("Seeding database...");

const usersInDB = await Promise.all(
  TomasData.map(async (data) => {
    const { userId, fname, lname, email, password, scoreId, score, timer } =
      data;

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

    const userScore = Score.create({
      scores: "10",
      timer: 1,
      userId: newUser.userId,
    });

    return newUser;
  })
);

console.log(usersInDB);
