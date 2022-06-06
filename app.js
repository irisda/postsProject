const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config')

//Middlewars
app.use(bodyParser.json());
app.use(cors());

//import Routes
const postsRoutes = require('./routes/posts')
//adding a piece of middleware to convert body in json objec
app.use('/posts',postsRoutes);

app.get('/', async (req, res) => {
   res.send('We are on home')
});


//connect To DB
mongoose.connect(
  process.env.DB_CONNECTION, ()=>{
  console.log('connected to DB!');
});






// //Creating a new course and add it on the courses object
// app.post('/api/courses', (req, res) => {

//     const { error } = validateCourse(req.body);

//     if (error) {
//         return req.status(404).send(result.error.details[0].message);

//     }
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };
//     courses.push(course);
//     res.send(course);

// });

// app.put('/api/courses/:id', (req, res) => {

//     //Look up for the course
//     //If not existing return 404
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) res.status(404).send('Cours with this id was not found')

//     //Validate
//     //If invalide retunr 400 - bad reques
//     const { error } = validateCourse(req.body);
//     if (error) {
//         return req.status(404).send(result.error.details[0].message);
//     }
//     //Update Course
//     course.name = req.body.name;
//     //Return updated course
//     res.send(course);



// })

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening in port ${port}`));

