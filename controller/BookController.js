exports.getAllBooks=(req,res,next)=>{
    res.status(200).json({"book":"get all books"});
}

exports.getBookById = (req,res,next)=>{
    res.status(200).json({"book":"get single book","id":req.params.id});
}

exports.createBook = (req,res,next)=>{
    res.status(201).json({"book":"create single book"});
}

exports.updateBook = (req,res,next)=>{
    res.status(200).json({"book":"update single book"});
}

exports.deleteBook = (req,res,next)=>{
    res.status(200).json({"book":"delete single book"});
}