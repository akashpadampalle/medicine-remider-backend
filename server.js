const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const  PORT = 5000;

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'connection to backend is successfull',
        data: {
            user: 'akash',
            email: 'akashpadampalle780@gmail.com',
            age: 21
        }
    });
})


app.listen(5000, (err) => {
    if(err){
        console.log(`error in starting server ${err}`);
        return;
    }

    console.log(`server is up add runnig at ${PORT}`);
})