const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://fsdmarian:fsdmarian@cluster0.2vzybpn.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('Database is connected')
}).catch((error)=>{
    console.log('Error in connection')
})
