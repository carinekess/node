const joi = require('joi');
const express=require('express');
const app =express();




app.use(express.json());
const courses=[{ id: 1, name:'course1'},
{ id: 2, name:'course2'},
{ id: 3, name:'course3'},
];
app.get('/',(req, res)=>{
    res.send("heloo carine");
});
app.get('/api/courses',(req, res)=>{
    res.send(courses);
});
app.get('/api/courses/:id',(req, res)=>{
 const course = courses.find(c => c.id === parseInt (req.params.id));
 if (!course) express.res.status(404).send('the course with the given id was not found');
 res.send(course);
});
app.post('/api/courses',(req, res)=>{
    if(error){
        res.status(400).send(result.error.details[0].messeage);
        return;
    };

    const result = joi.validate(req.body.schema);
    console.log(result);
    if(result.error){
        res.status(400).send(result.error.details[0].messeage);
        return;
    }
const course ={
id: courses.length +1,
name:req.body.name
};
courses.push(course);
res.send(course);
});
app.put('/api/course/:id',(req,res) => {
    const course = courses.find(c => c.id === parseInt (req.params.id));
    if (!course) return res.status(404).send('the course with the given id was not found');

    
    const schema={
        name: joi.string().min(3).required()
    };
    const result = validate(req.body.schema);
    const {} = validateCourse(req, body);
    

    if(error)return res.status(400).send(result.error.details[0].messeage);
    

    course.name=req.body.name;
    res.send(course);
});
function validateCourse(ourse){
    const schema={
        name: joi.string().min(3).required()
    };
     return joi.validate(course, schema);
};
app.delete('/api/course/:id',(req, res)=>{
    const course = courses.find(c => c.id === parseInt (req.params.id));
    if (!course) express.res.status(404).send('the course with the given id was not found');

   const courses = courses.indexof(course);
   courses.splice(index, 1);
   res.send(course);

});


const port =process.env.PORT || 4000;
app.listen(port, ()=>console.log(`listening on  port ${port}...`));