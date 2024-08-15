import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.post("/insert",(req,res)=>{
  const name = window.localStorage.setItem(req.body.value) 
  const Addresses = window.localStorage.setItem(req.body.value)
  const phone = window.localStorage.setItem(req.body.value) 
  const social_security_number=  window.localStorage.setItem(req.body.value) 
  const date_of_birth = window.localStorage.setItem(req.body.value) 
  const credit_card_number = window.localStorage.setItem(req.body.value)

  res.render("insert.ejs",{response:"submitted"})
})


app.post("/check",(req,res)=>{
    const username = req.body.username;
    if(username== window.location.getitem("name"))
    {
        res.render("check.ejs",{response:"yes your infoemation is secured"})
    }
    else
    res.render("check.ejs",{response:"no document found"})
})
