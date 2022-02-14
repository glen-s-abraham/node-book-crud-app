const BookData = require('../model/BookData');

exports.getAllBooks= async (req,res,next)=>{
    const booksData = await BookData.find();
    res.status(200).json({"data":booksData});
}

exports.getBookById = async(req,res,next)=>{
    const bookData = await BookData.findById(req.params.id)
    res.status(200).json({"data":bookData});
}

exports.createBook = async (req,res,next)=>{
    const bookData = await BookData.create(req.body);
    res.status(201).json({"data":bookData});
}

exports.updateBook = async (req,res,next)=>{
    const bookData = await BookData.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    res.status(200).json({"data":bookData});
}

exports.deleteBook = async(req,res,next)=>{
    await BookData.findByIdAndDelete(req.params.id)
    res.status(204).json({"data":null});
}