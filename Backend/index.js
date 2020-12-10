
const express = require('express');
const sequelize = require('./configuration/config');
const tasks = require ('./models/tasks');
const notes = require ('./models/note');
const goals = require ('./models/goal');
const app = express();
const cors=require('cors');
const goal = require('./models/goal');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


sequelize.authenticate().
then(()=>{console.log('connection has been established successfully');})
.catch((err)=>{console.log(err);});

//get all task

app.get('/get_tasks',function(req,res){

  tasks.findAll({where: {Is_archived:0}}).then(function(result){

    res.send(result);
  }).catch(function(err){
    res.send(err);
  });

});


//get all note

app.get('/get_notes',function(req,res){

  notes.findAll({where: {Is_archived: 0}}).then(function(result){
  
      res.send(result);
    }).catch(function(err){
      res.send(err);
    });
  
  });

//get all goals

app.get('/get_goals',function(req,res){

    goals.findAll({where: {Is_archived: 0}}).then(function(result){
  
      res.send(result);
    }).catch(function(err){
      res.send(err);
    });
  
  });


  //add task
app.post('/add_task/',function(req,res){

  tasks.create({ Name: req.body.Name, Description: req.body.Description, Date_of_Start: req.body.Date_of_Start, Date_of_end: req.body.Date_of_end, Status: req.body.Status, Is_archived:0 }).then(function(result){

    res.redirect('/get_tasks');

  }).catch(function(err){
    res.send(err);
  });
  
});


//add note

app.post('/add_note/',function(req,res){

  notes.create({ Name: req.body.Name, Header: req.body.Header, Details: req.body.Details, Importance: req.body.Importance, Is_archived:0}).then(function(result){

    res.redirect('/get_notes');

  }).catch(function(err){
    res.send(err);
  });
  
});

//add goal

app.post('/add_goal/',function(req,res){

  goal.create({ Description: req.body.Description,Is_archived:0 }).then(function(result){

    res.redirect('/get_goals');

  }).catch(function(err){
    res.send(err);
  });
  
});


//get task by ID

app.get('/get_task/id/:id',function(req,res){

  tasks.findAll({ where: {ID: req.params.id}}).then(function(result){

    res.send(result);
  }).catch(function(err){
    res.send(err);
  });
});



//get note by ID

app.get('/get_note/id/:id',function(req,res){

  notes.findAll({ where: {ID: req.params.id}}).then(function(result){

    res.send(result);
  }).catch(function(err){
    res.send(err);
  });
});




//update task


app.put('/update_task/id/:id',function(req,res,next){

  tasks.update({ Name: req.body.Name, Description: req.body.Description, Date_of_Start: req.body.Date_of_Start, Date_of_end: req.body.Date_of_end, Status: req.body.Status, Is_archived:1 }, { where: {id: req.params.id}}).then(function(result){
  
      console.log(updated);

    }).catch(function(err){
      res.send(err);
    });
    
  });




  //update note


app.put('/update_note/id/:id',function(req,res,next){

  notes.update({ Name: req.body.Name, Header: req.body.Header, Details: req.body.Details, Importance: req.body.Importance, Is_archived:1 }, { where: {id: req.params.id}}).then(function(result){
  
      console.log(updated);

    }).catch(function(err){
      res.send(err);
    });
    
  });



  //update goals


app.put('/update_goal/id/:id',function(req,res,next){

  goals.update({ Description: req.body.Description,Is_archived:1  }, { where: {id: req.params.id}}).then(function(result){
  
      console.log(updated);

    }).catch(function(err){
      res.send(err);
    });
    
  });


//console message: display server running
app.listen(3050, function () {
  console.log("server running on port 3050");
});
