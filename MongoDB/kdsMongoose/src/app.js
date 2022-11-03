const mongoose = require('mongoose');
const validators = require('validator');

//to connect local database
mongoose.connect("mongodb://localhost:27017/hasData", { useNewUrlParser: true }).then(() => console.log("connection successfull...."))
    .catch((err) => console.log('error'));

//schema
//A mongoose schema defines the structure of the document, default values , validator etc...

//how to define schema
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        //unique is not a validator but it's a convenient helper for building MongoDB unique names.
        unique: true,
        // lowercase: true,
        //uppercase : true,
        //setting the minimum length to the name string
        // minlength : 2,
        //built in validation at minimum length
        // minlength: [2, "minimum 2 letters"],
        //trims the start and end spaces
        trim: true
    },
    course: {
        type: String,
        required: true,
        //this enum sets the document data only with the course value given in the array if user enters other than this there will be a validation error
        enum: ["FrontEnd", "BackEnd"]
    },
    videos: {
        type: Number,
        //value is the user input value to the videos

        //custom validator
        validate(value) {
            if (value < 0) {
                throw new Error("videos count cannot be negative");
            }
        }

        // validate: {
        //     validator: function (value) {
        //         return value.length < 0;
        //     },
        //     message: "videos count should not be negative"
        // }
    },
    author: String,
    email: {
        type: String,
        unique: true,
        required: true,
        validate(value) {
            if (!validators.isEmail(value)) {
                throw (new Error('Email is invalid'));
            }
        }
    },
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

//A mongoose model is a wrapper on the mongoose schema. It provides an  interface to perform curd operation.

//we can create collection by using model
//we write playlist in singular form but in mongodb it is stored in plural form
const Playlist = new mongoose.model("Playlist", playlistSchema);


//creating document
const createDocument = async () => {
    try {
        // const jsPlaylist = new Playlist({
        //     name: "JavaScript",
        //     course: "FrontEnd",
        //     videos: 150,
        //     author: "Harsh Kumar",
        //     active: true
        // })
        // const mongoPlaylist = new Playlist({
        //     name: "MongoDB",
        //     course: "BackEnd",
        //     videos: 80,
        //     author: "Harsh Kumar",
        //     active: true
        // })
        // const reactPlaylist = new Playlist({
        //     name: "React",
        //     course: "FullStack",
        //     videos: 50,
        //     author: "Harsh Kumar",
        //     active: true
        // })
        const expPlaylist = new Playlist({
            name: "      Express         ",
            course: "BackEnd",
            videos: 10,
            author: "Harsh Kumar",
            email: "kuharsh5@gmail.com",
            active: true
        })

        // const result = await reactPlaylist.save();
        // const result = await Playlist.insertMany([jsPlaylist, mongoPlaylist, reactPlaylist]);
        const result = await Playlist.insertMany([expPlaylist]);
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}


createDocument();


//getting the document
const getDocument = async () => {
    try {
        //for finding the full data whose course name = frontEnd 
        // const data = await Playlist.find({ course: "FrontEnd" });

        //for finding the data name whose course name = frontEnd
        // const data = await Playlist.find({ course: "FrontEnd" }).select({ name: 1 });

        //for finding only one data setting the limit
        // const data = await Playlist.find({ active: true }).limit(1);

        //for finding only onde data with required condition but skipping the first two
        // const data = await Playlist.find({ active: true }).limit(1).skip(2);

        //for finding the data by some condition here $gt stands for greater than
        //$gte greater than equal to
        //$eq equal to
        //$lt less than
        //$lte less than equal to
        //$ne not equal
        //$in matches any of the value specified in an array
        //$nin matches none of the value specified in an array
        // const data = await Playlist.find({ videos: { $gt: 60 } });

        // const data = await Playlist.find({ videos: { $gt: 50 } }).select({ name: 1 });


        // const data = await Playlist.find({ course: { $in: ["FullStack", "BackEnd"] } }).select({ name: 1 });

        //we are gonna find data using logical operator
        //$or $and $not $nor
        // const data = await Playlist.find({ $nor : [{ name: "MongoDB" }, { videos: 40 }] }).select({ name: 1 });

        //counting the no. of documents satisfying the give query
        // const data = await Playlist.find({ videos: { $gte: 100 } }).select({ name: 1 }).countDocuments();

        //sorting the output data
        // const data = await Playlist.find().select({ name: 1 }).sort("name : 1");

        //sorting opposite
        const data = await Playlist.find().select({ name: 1 }).sort({ name: -1 });
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

// getDocument();  


//updating the document
const updateDocument = async (_id) => {

    try {
        //updateOne(filter, updateOperators,options)
        //only it shows the update made 
        //does not give the data which is updated
        // const result = await Playlist.updateOne({ _id }, {
        //     $set: {
        //         course: "FrontEnd"
        //     }
        // });

        //for having the updated data we can use;
        //new = true as an option to a parameter
        const result = await Playlist.findByIdAndUpdate({ _id }, {
            $set: {
                course: "FrontEnd"
            }
        }
            , {
                new: true,
                useFindAndModify: false
            }
        );
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// updateDocument("6363b72075cfd1f0e9d259ba");


//deleting the document

const deleteDocument = async (_id) => {
    try {

        //only deleting the data 
        // const result = await Playlist.deleteOne({ _id });

        //output which data is deleted
        const result = await Playlist.findByIdAndDelete({ _id });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}


// deleteDocument("6363c607415b7caadc018f6f");