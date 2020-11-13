const router = require('express').Router()
const path = require('path')
const fs = require('fs')

let Tours = require('../models/tours.model')
const { json } = require('body-parser')



router.route('/').get((req, res, err)=>{
    if(err){
        console.log(err)
    }

    // This is how I had to set the path to work in this seperate file.
    // However, EJS will be used in future so this may be temporary.
    res.sendFile(path.join('/var/app/current/views/tours.html'))
})

router.route('/:id').get((req, res, err)=>{
    if(err){
        console.log(err)
    }

    var contents = fs.readFileSync('/var/app/current/models/database.json');
    var jsonContent = JSON.parse(contents);

    var param = req.params.id
    if(param == 'all'){
        res.send(jsonContent)
    } else {
        let id = parseInt(param, 10)
        res.send(jsonContent.tours[id])
    }
    
    

    
    // If you are able to do store and operate on the data in this way then it will be the better option.
    // You will want to make another project where you connect to the mongodb instance so that you know how to ...
    // ... when you are working with Elastic.
    

    if(id == 'all'){
        res.send(jsonContent)
    } else {
        res.send(jsonContent.tours[id])
    }
    

    // Tours.find()
    // .then(tours => res.json(tours))
    // .catch(err => res.status(400).json('Error: ' + err))
})

// router.get('/all', (req, res, err)=>{
//     if(err){
//         console.log(err)
//     }
    
    
    
//     // If you are able to do store and operate on the data in this way then it will be the better option.
//     // You will want to make another project where you connect to the mongodb instance so that you know how to ...
//     // ... when you are working with Elastic.
//     var contents = fs.readFileSync('/var/app/current/models/database.json');
//     var jsonContent = JSON.parse(contents);
//     res.send(jsonContent)

//     // Tours.find()
//     // .then(tours => res.json(tours))
//     // .catch(err => res.status(400).json('Error: ' + err))
// })


router.route('/add').post((req, res, err)=>{
    if(err){

    }

    res.send("Post")
})








module.exports = router