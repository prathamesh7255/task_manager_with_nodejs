const not_found= (req,res)=>{
    res.status(404).json(`Could not find the page you are looking for`);
}
module.exports=not_found