const express = require("express");
const app = express.Router();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.get("/login", (req, res) => {
    res.render("login", { title: "Login"})
})

app.get("/Register", (req, res) => {
    res.render("Register", { title: "Register"})
})

app.get("/toDoList", (req, res) => {
    res.render("toDoList", { title: "To Do list"})
})

app.listen(port, () => {
    try {
        console.log("Servidor conectado..");
    } catch (error) {
        console.log(error);
        console.log("Servidor não conseguiu se conectar");
    }
})
