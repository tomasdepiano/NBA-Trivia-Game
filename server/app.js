import express from "express";
import session from "express-session";
import morgan from "morgan";
import ViteExpress from "vite-express";
import { User } from "./models/index.js";
import { Score } from "./models/index.js";

const app = express();
const port = "5444";
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({ secret: "ssshhhhh", saveUninitialized: true, resave: false })
);

app.post("/createAccount", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  console.log(req.body);
  const user = await User.findOne({ where: { email } });

  if (user) {
    res.json({ success: false, message: "Email already in use" });
  } else {
    User.create({
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    });
    res.json({
      success: true,
      message: "Your account has been created, go back and login.",
    });
  }
});

app.get("/top5", async (req, res) => {
  const topScores = await Score.findAll({
    include: User,
    order: [
      ["scores", "DESC"],
      ["timer", "ASC"],
    ],
    limit: 5,
  });
  console.log(topScores);
  res.json({ success: true, topScores });
});

app.post("/scoreData", async (req, res) => {
  const { scores, timer } = req.body;
  console.log(req.session.userId);
  console.log(req.body);
  console.log(typeof timer);

  await Score.create({
    scores: scores,
    timer: timer,
    userId: req.session.userId,
  });
  res.json({ success: true });
});

app.get("/data", async (req, res) => {
  const data = await User.findAll({
    include: Score,
  });
  res.json(data);
});

app.post("/auth", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });

  if (user && user.password === password) {
    req.session.userId = user.userId;
    res.json({ success: true, userId: req.session.userId });
  } else {
    res.json({ success: false });
  }
});

app.post("/logout", (req, res) => {
  if (!req.session.userId) {
    res.status(401).json({ error: "Unauthorized" });
  } else {
    req.session.destroy();
    res.json({ success: true });
  }
});

app.get("/api/welcome", async (req, res) => {
  const userId = req.session.userId;
  const user = await User.findByPk(userId);
  console.log(user);
  console.log(userId);

  res.json({
    fname: user?.fname,
    lname: user?.lname,
    email: user?.email,
  });
});

app.put("/email", async (req, res) => {
  const { email } = req.body;
  const userId = req.session.userId;
  const user = await User.update(
    { email: email },
    {
      where: {
        userId: userId,
      },
    }
  );
});

app.delete("/deleteUser", async (req, res) => {
  const userId = req.session.userId;

  const user = await User.destroy({
    where: {
      userId: userId,
    },
  });
  req.session.destroy();
  res.json({ success: true });
});

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);
