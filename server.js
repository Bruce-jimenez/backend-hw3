require('dotenv').config();
const express =  require('express');
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon');
const methodOverride =require('method-override');
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
  });
app.use(methodOverride('_method'));
mongoose.set("strictQuery", true);
app.set('view engine', 'jsx');


app.engine('jsx', require('express-react-views').createEngine());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });


//Pokemon Table of contents

app.get('/pokemon', (req, res) =>{
    pokemon.find({}, (err, pokemons) =>{

        res.render('Index', {pokemon:pokemons});
    });
});

//Goes to a New post page
app.get("/pokemon/New", (req, res) => {
    res.render("New");
}) 

//Releasing pokemon
app.delete('/pokemon:id', (req, res) => {
    pokemon.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/pokemon')
    })
})

//Status update
app.put('/pokemon/:id', (res, req) =>{
    pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokes) =>{
        res.redirect(`/pokemon/${req.params.id}`);
    });
});

//A new index page -New
app.post("/pokemon", (req, res) => {

        pokemon.create(req.body, (error, createdPokemon) => {
    res.redirect('/pokemon')
    
        });
    });

//Edit -Get form
app.get('/pokemon/:id/edit', (req, res) =>{
    pokemon.findById(req.params.id, (err, specficPokes ) =>{
        if (!err){
            res.render(
                'Edit',
            {
                pokemon:specficPokes
            }
            );
        } else {
            res.send({msg: err.message})
        }
    });
});

//Index for the pokemon: Show route
app.get('/pokemon/:id', (req, res) =>{
        
    pokemon.findById(req.params.id, (err, pokemons) => {
         res.render('Show', {pokemon:pokemons[req.params.id]});
 
  });
});





// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

app.listen(port, () => {
    console.log('Listening to port', port);
});
