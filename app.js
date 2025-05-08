const express = require('express');
const app = express();
let port = 3002;
const posts = require('./data/posts.js');
const errorsHandler = require('./middlewares/errorsHandler.js');
const notFound = require('./middlewares/notFound.js');

//body parser
app.use(express.json());

//router
const postsRouter = require('./routers/postsRouter.js');

app.use(express.static('public'));
app.use('/lists', postsRouter);

//middleware error
app.use("/lists", errorsHandler);

app.use(notFound);


app.listen(port, () => {
    console.log(`Sono un server sulla porta ${port}`);
})