export default (req, res)=>{
    // res.writeHead(200, {"Content-Type": "text/plain"});
    // res.end("Hello World!");
    res.render ('about',{
        name: 'Drashya'
    });
}