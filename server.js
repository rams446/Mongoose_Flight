
    require('./config/database')
    const express = require("express")
    const app =express();
    const PORT=process.env.PORT || 8000
    const Flight=require('./models/flights')
    const Destination=require('./models/destinations')

    // View Engine Middleware Configure
    const reactViewsEngine = require('jsx-view-engine').createEngine();
    app.engine('jsx', reactViewsEngine);
    // This line tells the render method the default file extension to look for.
    app.set('view engine', 'jsx');
    // This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
    app.set('views', './views');

    // Custom Middleware
    app.use(express.urlencoded({ extended: false }));

    //Induces
    //Index
    app.get('/flights', async (req, res) => {
        try {
        const foundFlight = await Flight.find({});
        res.status(200).render('Index', { flights: foundFlight });
        } catch (err) {
        res.status(400).send(err);
        }
    });
    

    //New

    app.get('/flights/new', (req ,res) =>{
        res.render("New")

    });

    app.post('/flights', async (req, res) => {
        try {
        const newFlight = await Flight.create(req.body);
        console.log(newFlight);
        //console.log(fruits);
        // redirect is making a GET request to whatever path you specify
        res.redirect('/flights');
        } catch (err) {
        res.status(400).send(err);
        }
    });

    //Show 

    app.get ('/flights/:id', async (req, res) => {
    try{
    const foundflight = await Flight.findById(req.params.id)
    

        res.render('Show' , {
        flight : foundflight, destination :destination
        });
    } catch (err) {
        res.status(400).send(err);
    }
        
    });

    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });