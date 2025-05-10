const express = require("express");
const { engine } = require("express-handlebars");
const db = require("./src/database/db");
const User = require("./src/models/User");
const funcionariosRouter = require("./src/route/Funcionarios");

const app = express();
const porta = 3001;

app.engine("handlebars", engine({
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }
}));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "handlebars");
app.use(express.urlencoded({extended: true}));

app.get("/add/users", (req, res)=>{
  res.render("addusers");
})


app.post("/add/users", async(req, res)=>{
  const name = req.body.name;
  const email = req.body.email;
  const cargo = req.body.cargo;

  await User.create({
    name,
    email,
    cargo
  })
  res.redirect("/");
})

app.use("/", funcionariosRouter)

app.get("/", (req, res)=>{
  res.render("home");
})

db.sync().then(()=>{
  app.listen(porta, ()=>{
    console.log(`Run Server http://localhost:${porta}`);
  })
}).catch((err)=> console.log(err));