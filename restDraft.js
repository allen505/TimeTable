 const express = require('express');
 const cors = require('cors');
 const mysql = require('mysql');//object to acess mySQL properties

 const app =  express();// its a service to help build our api
 const IpQuery = "SELECT * FROM ajay";//this is my query, table exists and it works fine

 const conn = mysql.createConnection({
 	host: 'localhost',
 	username: 'root',
 	password:'',
 	database: 'timetable'
 	 });//defining an object to create a connection with
 conn.connect(err => {
 	if(err){
 		return err;
 	}
 });//making a connection so you can use it #BItCoOOOOOOneccccct
 //console.log("get rekt bich");//for lulz and also to see if it works		
 
 //console.log(conn); //should op connection was here to make sure it was connected to the right thing 
 app.use(cors());//i dont know why we need this

app.get('/',(req,res) => {
	res.send('Hello from the Timetable Server');
 });//this is a GET based request and opening localhost:4000 on your PC should get this to show up

app.get('/teachTable',(req,res) => {
	//res.send('lol k ur here');
	conn.query(IpQuery, (err, results) => {
		if (err) {
			return res.send(err);
		}
		else{
			 return res.json({
				data: results
			})
		}
	})
 });

 


 app.listen(4000,()=>{
 	console.log('Timetable Server listening on 4000');
 });//this tells us restDraft compiled properly and should display on your cmd line
