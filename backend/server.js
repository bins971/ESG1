const express = require('express');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes); // Auth routes

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(Server running on PORT ${PORT});
})

const app = express();
const POR T = 8080;

app.use(cors());
app.use(express.json());

app.get('/login', (req, res) => {
    res.send('Good morning.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:8080`);
});

app.get('/create-account', (req, res) => {
    res.send("Account created");
})

app.get('/forgot-Password', (req, res) => {
    res.send("Try again");
})

app.get('/Log-out', (req, res) => {
    res.send("Log out Successfully");
})






