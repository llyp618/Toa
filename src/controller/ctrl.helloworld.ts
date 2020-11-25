import { Middleware } from 'koa';

export const sayhello: Middleware = (ctx) => {
  let calltimes = ctx.session.n || 0;
  ctx.session.n = ++calltimes;
  ctx.body = {
    a: 'hello',
    b: 'world',
    time: calltimes
  };
};

export const renderHello: Middleware = async (ctx) => {
  await ctx.render('hello');
};
