import { Context } from 'koa';

export const sayhello = (ctx : Context) => {
  ctx.body = 'hello world';
};
