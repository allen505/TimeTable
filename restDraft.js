 const express = require('express');
 const cors = require('cors');
 const mysql = require('mysql');//object to acess mySQL properties

 const app =  express();// its a service to help build our api
 var IpQuery = "SELECT * FROM ";//this is my query, table exists and it works fine

 //var self = this;
 const conn = mysql.createConnection({
 	host: '127.0.0.1',
 	username: 'root',
 	user:'root',
 	password:'',
 	database: 'timetable'

 	 });//defining an object to create a connection with i'll make this a pool later if it's more of an advantage and use the SSL port over https 
 conn.connect(err => {
 	if(err){
 		return err;
 	}

 	
 });//making a connection so you can use it #BItCoOOOOOOneccccct
 console.log(conn); //should op connection was here to make sure it was connected to the right thing 
 app.use(cors());//i dont know why we need this

app.get('/',(req,res) => {
	res.send('Hello from the Timetable Server');
	
 });//this is a GET based request and opening localhost:4000 on your PC should get this to show up

app.get('/teachTable/retrieve',(req,res) => {
	const{teachId} = req.query;
	//res.send(teachId);// in here to see what id was sent
	IpQuery = IpQuery + teachId;
	//res.send(IpQuery);//checking if teachID is being properly appended to IpQuery 
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
});/*this is where you retrieve a particular teacher's timetable from. 
For Eg: If you want a teacher whose id is "ajay", 
your url would be
"localhost:4000/teachtable/retrieve?teachId=ajay"

the data is in the from of rows where each row is an object and all rows are stored in an array heded by 'data'.

the rest of the querying should be simple enough...i think*/


 


 app.listen(4000,()=>{
 	console.log('Timetable Server listening on 4000');
 });//this tells us restDraft compiled properly and should display on your cmd line
