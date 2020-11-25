import { Middleware } from 'koa';

export const sayhello: Middleware = (ctx) => {
  const calltimes = ctx.session.n || 0;
  ++ctx.session.n;
  ctx.body = {
    a: 'hello',
    b: 'world',
    time: calltimes
  };
};
