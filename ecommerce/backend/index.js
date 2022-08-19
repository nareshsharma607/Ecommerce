const express=require('express');
const app=express()
const data=require('./modal/product.json')
const cors=require('cors')


app.use(cors({
    origin:'http://localhost:8080'
}))
app.get('/products',(req,res)=>{
    res.json(data)
})








app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
