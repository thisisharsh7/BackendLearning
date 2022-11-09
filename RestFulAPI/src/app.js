const express = require('express');
require('./db/connection');
const Student = require('./Models/students');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//for creating post method
//for reading get method
//for updating put and patch method
//for deleting delete method 

// app.get('/', (req, res) => {
//     res.send('Welcome to the homepage');
// })

//create a new students
// app.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     });
//     res.send('this is a student api');
// });
app.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        req.status(201).send(createUser);

    } catch (e) {
        res.status(400).send(e);
    }
    res.send('this is a student api');
});

app.get("/students", async (req, res) => {
    try {
        const sdata = await Student.find();
        res.send(sdata);
    } catch (e) {
        console.log(e);
    }
})
app.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const sdata = await Student.findById(_id);
        res.send(sdata);
    } catch (e) {
        res.status(500).send(e);
        console.log(e);
    }
})
app.get("/home", async (req, res) => {
    res.send("this is home page");
})
app.get("/*", async (req, res) => {
    res.send("this is error page");
})
app.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const upData = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(upData);
    } catch (e) {
        res.status(500).send(e);
        console.log(e);
    }
})
app.delete("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deldata = await Student.findByIdAndDelete(_id);
        if (!req.params.id) {
            return res.status(404).send();
        }
        res.send(deldata);
    } catch (e) {
        res.status(500).send(e);
        console.log(e);
    }
})

app.listen(port, () => {
    console.log(`connection is established at port no. ${port}`);
})

//express.json() is a method inbuilt in express to recognize the incoming request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());