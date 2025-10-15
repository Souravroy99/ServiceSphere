require('dotenv').config(); 

const express = require('express') ;
const cors = require('cors') ;
const app = express() ;

const authRouter = require('./Router/auth_router.js') ;
const contactRouter = require('./Router/contact_router.js') ;
const serviceRouter = require('./Router/service_router.js') ;
const adminRouter = require('./Router/admin_router.js') ;

const connectDB = require('./utils/Database.js') ;
const errorMiddleware = require('./middleware/error_middleware.js') ;

// "http://localhost:5173"
const corsOptions = {
    origin: "https://servicesphere-frontend.onrender.com"
};

app.use(cors(corsOptions)) ;
app.use(express.json()) ; 

app.use('/api/auth', authRouter) ;
app.use('/api/form', contactRouter) ;
app.use('/api/data', serviceRouter) ;
app.use('/api/admin', adminRouter) ;

app.use(errorMiddleware) ;

const Port = process.env.PORT || 4000 ;

connectDB()
.then(()=>{
    app.listen(Port, ()=>{
        console.log(`Server is running at port: ${Port}`) ;
    });
}); 