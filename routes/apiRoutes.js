const express = require('express')
const router = express.Router()
const Profile = require('../Modules/model')



// Create and Save Document into the Database using Model.create Method
router.get('/api', (req, res)=>{ 
    const user = Profile.create({
        Name: 'Rose Odekun',
        Age: '32',
        favoriteFood: 'eba',
    })
    
    .then((Data)=>{
        res.send(Data)
    })
    .catch((err)=>{
        console.log(err)
    })
});

 // Using this Model to create aditinonal 7 Nos of document into the collection in the Database
 router.get('/api', (req, res)=>{ 
    const user = Profile.create({
        Name: 'Dunni Wemimo',
        Age: '35',
        favoriteFood: 'rice',
    })
    
    .then((Data)=>{
        res.send(Data)
    })
    .catch((err)=>{
        console.log(err)
    })
});

// Performing CRUD operation on Model created

// Model.find() and chain meathod query
router.get('/api/display-all',(req, res)=>{
      const user =  Profile.find().sort({createdAt: -1})
       .then((result)=>{
            res.json({result})
       })
       .catch((err)=>{
        console.log(err)
       })
})

     // Reading from the Database
router.get('/api/display/id',(req, res)=>{
       const user =  Profile.findById('650c9be517a603bfc16e6907')
    .then((result)=>{
         res.json({result})
    })
    .catch((err)=>{
     console.log(err)
    })
})
    // updating from the Database
router.put('/api/update/:id',(req, res)=>{
    const id = req.params.id
    const user =  Profile.findOneAndUpdate({"Name":"Mary Jon"})
     .then((result)=>{
          res.json({result})
     })
     .catch((err)=>{
      console.log(err)
     })
})
       // Deleting from the Database
router.delete('/api/delete/:id',(req, res)=>{
    const id = req.params.id
    const user =  Profile.findOneAndRemove({Name: 'Shotty Amubieya'})
     .then((result)=>{
          res.json({result})
     })
     .catch((err)=>{
      console.log(err)
     })
})

module.exports = router;
