import { Middleware } from 'koa';

export const sayhello: Middleware = (ctx) => {
  ctx.body = 'hello world';
};
