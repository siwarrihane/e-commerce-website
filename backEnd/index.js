// const express = require('express')
// const app = express()


// const path= require ('path')

// const db= require('./models')


// //added
// const cors = require('cors')

// const PORT = 8001

// //added

// const users = require('./routes/users')
// const posts = require('./routes/products')
// const login = require('./routes/login')


// app.use(express.json())


// //added


// app.use(cors())
// app.use(express.json())





// // added
// app.use(express.urlencoded({ extended: true }));

// app.use('/users', users);
// app.use('/posts', posts);
// app.use('/login', login);


// app.use('/static', express.static(path.join(__dirname, 'public')));

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

// (async () => {
//     await db.sequelize.sync(); //this is gonna run mysql code
// })(); //IIFE  (parenthesis)  used to avoid polluting the global namespace.

// app.use((req, res, next) => {
//     console.log(new Date().toLocaleDateString());
//     next();
// })

// app.get('/', [
//     (req, res, next) => {
//         res.send('This is the home page!')
//     }
// ]);

// app.use(function(request, response, next) {
//     console.log('This is global middleware!');
//     next();
// });



// app.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`)
// })


const express = require('express')
const cors = require('cors')


const app = express()

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json())



//routers 


const users = require('./routes/users')
const products = require('./routes/product')
const login = require('./routes/login')




const path= require ('path')

const db= require('./models')



const { product } = require('./controllers')












app.use('/users', users);
app.use('/product', products);
app.use('/login', login);


app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

(async () => {
    await db.sequelize.sync(); //this is gonna run mysql code
})(); //IIFE  (parenthesis)  used to avoid polluting the global namespace.

app.use((req, res, next) => {
    console.log(new Date().toLocaleDateString());
    next();
})




app.get('/', [
    (req, res, next) => {
        res.send('This is the home page!')
    }
]);

app.use(function(request, response, next) {
    console.log('This is global middleware!');
    next();
});





//port
const PORT = 8001


//server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})