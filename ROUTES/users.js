import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const app = express()
const router = express.Router();
app.use(express.json())
let users = [];

// Adding users to our mock database

router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`${user.first_name} has been added to the Database`);
})  

router.get('/', (req, res) => {
    res.send(users);
})

router.get( '/:id', (req,res)=>{          //search by id
    const {id} = req.params;

    const founduser = users.find((user) => user.id === id );

    res.send(founduser)
    });

    router.delete('/:id', (req, res) => {    //delete by id
        const { id } = req.params;
      
        users = users.filter((user) => user.id !== id)
      
        res.send(`${id} deleted successfully from database`);
      });




      router.patch('/:id', (req, res) => { 
        const {id} =req.params;
        const {first_name,last_name,email}=req.body;
        const user=users.find((user)=> user.id===id)
        if (first_name) user.first_name=first_name;
        if (last_name) user.last_name=last_name;
        if (email) user.email=email;    
        
        res.send(
            `User ${user.first_name} ${user.last_name}, has been updated.`
        )
        })
export default router