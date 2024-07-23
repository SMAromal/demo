const express=require("express")
const app=new express();
const cors=require('cors')
const PORT=4000;

const UserModel=require('./model/UserData');
const BookModel=require('./model/BookData');

require('./connection');

app.use(express.json());
app.use(cors());

// POST

app.post('/adduser',async (req,res)=>{
    try {
        var item=req.body;
        const datasave=new UserModel(item);
        const savedata= await datasave.save();
        res.send('Post Successful')
    } catch (error) {
        console.log(error)
    }
})

// POST book

app.post('/addbook',async (req,res)=>{
    try {
        var item=req.body;
        const datasave=new BookModel(item);
        const savedata= await datasave.save();
        res.send('Post Successful')
    } catch (error) {
        console.log(error)
    }
})

// GET

app.get('/users',async (req,res)=>{
    try {
        const data= await UserModel.find();
        res.send(data)
    } catch (error) {
        res.send('Data not found')
    }
    
})

// DELETE

app.delete('/moviedel/:id',async (req,res)=>{
    try {
        await UserModel.findByIdAndDelete(req.params.id);
    res.send('Deleted Successfully');
    } catch (error) {
        console.log(error)
    }
})




app.listen(4000,()=>{
    console.log('The server is running on Port 4000')
})