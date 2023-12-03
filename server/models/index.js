import User from "./User.model.js";
import Score from "./Score.model.js";

User.hasMany(Score, { foreignKey: "userId" });
Score.belongsTo(User, { foreignKey: "userId" });

export { User, Score };
