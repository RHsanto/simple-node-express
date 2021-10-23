const express = require('express');
const cors = require('cors')
const app =express();
const port = 5000;

app.use(cors());
//parse application/json
app.use(express.json());

app.get('/',(req,res)=>{
  res.send('I am learning nodeJs with jm')
})


const users = [  

{id:0, name: "Rakibul", email:'Rakibul@gmail.com', age:'21',designation: 'student'},
{id:1, name: "Shanto",  email:'Shanto@gmail.com',  age:'23',designation: 'student'},
{id:2, name: "Sumon",   email:'Sumon@gmail.com',   age:'21',designation: 'student'},
{id:3, name: "Ibrahim", email:'Ibrahim@gmail.com', age:'20',designation: 'student'},
{id:4, name: "Rabby",   email:'Rabby@gmail.com',   age:'18',designation: 'student'},
{id:5, name: "Rahat",   email:'Rahat@gmail.com',   age:'22',designation: 'student'},
{id:6, name: "Imran",   email:'Imran@gmail.com',   age:'20',designation: 'student'},
{id:7, name: "Nahid",   email:'Nahid@gmail.com',  age:'20',designation: 'student'},


]


// here dynamic search query
app.get('/users',(req,res)=>{
  const search = req.query.search;
  if(search){
  const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
  res.send(searchResult);
  }
   else{
    res.send(users)
   } 
   
  })

//app method // here send data capture
app.post('/users',(req,res)=>{
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser)
  console.log('hitting',req.body);
  res.json(newUser)
})

// here dynamic api
app.get('/users/:id',(req,res)=>{
  const id =req.params.id;
  res.send(users[id])
})



app.listen(port,()=>{
  console.log('Example',port);
})