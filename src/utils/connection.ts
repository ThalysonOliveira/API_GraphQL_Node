import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/stream',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})