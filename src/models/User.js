const db = require("../database/db");
const {DataTypes} = require("sequelize");

const User = db.define("Funcionarios",{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cargo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User;