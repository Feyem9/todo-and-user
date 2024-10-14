const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT;

mongoose.connect(process.env.DATABASE_URL)
.then(
    connection => {
        const app = express();
        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({extended: false}));

        const todoRoutes = require('./routes/todo.route');
        const userRoutes = require('./CRUD/routes/user.routes');



        app.use('/api/todo', todoRoutes);
        app.use('/user' , userRoutes);



    
        app.listen(port , () => {
            console.log(`Server is running on http://localhost:${port} `);
    });
    }

)
// .catch(error => {
//     throw new Error("Database connection error: " + error);
// });
