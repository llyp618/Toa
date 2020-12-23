
import * as mongoose from 'mongoose';
import config from '@/config';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const connectMongo = () => {
  mongoose.connect(config.MONGO.uri);

  mongoose.connection.on('connected', function () {
    console.log('Mongo Connection success!');
  });
  mongoose.connection.on('error', function (err) {
    console.log('Mongo Connection error: ' + err);
  });
  mongoose.connection.on('disconnected', function () {
    console.log('Mongo Connection disconnected');
  });
};

export default connectMongo;
