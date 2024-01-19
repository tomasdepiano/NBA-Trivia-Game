import { DataTypes, Model } from "sequelize";
import util from "util";
import { db } from "../config/db.js";

export default class Score extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Score.init(
  {
    scoreId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    scores: {
      type: DataTypes.STRING,
    },
    timer: {
      type: DataTypes.FLOAT,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "score",
    sequelize: db,
  }
);
