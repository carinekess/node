
const express = require('express');

const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();
const port=3000;
app.use(express.json());

app.post('/users',async (req,res) => {
    const { name, hjemail } = req.body;

    try {
        const user = await prisma.user.create({
            date: {
                first_name,
                last_name,
                email,
                phone,
                campany_name,
                city,
                province,
                country,
                password,
                confirm
            },
        });
    res.json(user);
} catch(error){
    res.status(500).json({ error: 'Error create users'});
}
});

//read users
app.get('/users',async (req,res)=> {
    try {
        const users =await prisma.user.findMany();
        res.json(users);
    } catch(error){
        res.status(500).json({ error: 'Error fetching users'});
    }
});

// update
app.put('/users/:id', async (req, res)=> {
    const userId = parseInt(req.params.id);
    const {name,email} = (req.body);
    try {
        const updateduser = await prisma.user.update({
            where: { id: userId },
            date: {
                name,
                email
            } 
        });
        res.json(updatedUser);
    } catch(error){
        res.status(500).json({ error: 'Error updating users'});
    }
});
//delete
app.delete('/users/:id', async (req,res)=>{
    const userid = parseInt(req.params.id);
    try{
        const deleteUser =await prisma.user.delete({
           where:{ id: userId},
           
        });
        res.json(deletedUser);
    } catch(error) {
        res.status(500).json({error:'Error deleting user'});
    }

});