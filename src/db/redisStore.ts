
import * as redisStore from 'koa-redis';
import * as debug from 'debug';
import { Redis } from 'ioredis';
import config from '@/config';

const d = debug('redis');

const _redisStore = redisStore({
  host: config.REDIS.host,
  port: config.REDIS.port
});

const _client: Redis = _redisStore.client;

_client.on('connect', () => {
  d('connect redis successfully');
});

_client.on('error', () => {
  d('redis error');
});

export default _redisStore;
