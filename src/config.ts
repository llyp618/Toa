import * as path from 'path';

export default {

  ENV: process.env.NODE_ENV || 'development',

  PORT: 7676,

  KEY: ['toa-test'],

  FAVICO: path.resolve(__dirname, './public/fav.ico'),

  PUBLIC: path.resolve(__dirname, './public'),

  VIEWS: path.resolve(__dirname, './views'),

  SESSION_CONFIG: {
    key: 'toa.sess',
    maxAge: 60 * 60 * 1000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,
    secure: false // require https
  }

};
