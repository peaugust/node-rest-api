import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/noderestapi', { useMongoClient: true });
mongoose.Promise = global.Promise;

export default mongoose;