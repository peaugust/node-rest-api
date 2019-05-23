import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/noderestapi', { useNewUrlParser:true });
mongoose.Promise = global.Promise;

export default mongoose;