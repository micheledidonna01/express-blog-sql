
const connection = require('../data/db.js');

//index
function index(req, res) {

    const sql = 'SELECT * FROM posts';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({error: 'Database query failed'});
        res.json(results);
    });

}

//show
function show(req, res) {
    // let tags = req.query.tags;
    // let id = parseInt(req.params.id);
    // // console.log(tags);
    // let post = posts.find(post => id === post.id);

    // console.log(post);
    // if (!post) {
    //     res.status(404);
    //     res.json({
    //         status: 404,
    //         error: "Not Found",
    //         message: "ID dolce non trovato"
    //     });
    // } else {
    //     if(post.tags.includes(tags)){
    //         res.json(post);
    //     }else{
    //         res.status(404);
    //         res.json({
    //             status: 404,
    //             error: "Not Found",
    //             message: "Tags del dolce non trovato"
    //         });
    //     }
    // }

}

//store
function store(req, res) {
    // const newId = posts[posts.length - 1].id + 1;

    // const newPost = {
    //     id: newId,
    //     title: req.body.title ,
    //     content: req.body.content ,  
    //     image: req.body.image ,
    //     tags: req.body.tags
    // }

    // posts.push(newPost);
    
    // res.status(201);
    // res.json(newPost);
    // console.log(req.body);
}

//update
function update(req, res) {
    // let id = parseInt(req.params.id);
    // let post = posts.find(post => id === post.id);
    // if(!post){
    //     res.status(404);

    //     return {
    //         status: 404,
    //         error: "Not Found",
    //         message: "ID dolce non trovato"
    //     }
    // }else{

    //     post.title = req.body.title;
    //     post.content = req.body.content;
    //     post.image = req.body.image;
    //     post.tags = req.body.tags;
        
    //     res.status(200);
    //     res.json(post);
    // }
}


//modify
function modify(req, res) {
    // res.send(`Modifica del dolce ${req.params.id}`);
}

//destroy
function destroy(req, res) {

    const {id} = req.params;

    const sql = 'DELETE FROM posts WHERE id = ?';

    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: 'Failed to delete post'});
        res.sendStatus(204);
    });

    
}


module.exports = { index, show, store, update, modify, destroy };