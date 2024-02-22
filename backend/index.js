import dotenv from'dotenv'
import 'dotenv/config'
import connectDB  from './db/index.js'
import {app} from './server.js'

connectDB().then(
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`server is running at port ${process.env.PORT}`);
    })
)
.catch((err)=>{
    console.log("--------error----");
})