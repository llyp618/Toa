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

export const login : Middleware = async (ctx) => {
  const { username, password } = ctx.query;
  if (username === 'lulu' && password === '123') {
    ctx.session.user = 'lulu';
  }
  ctx.body = {
    res: 'success'
  };
};

export const logout: Middleware = async (ctx) => {
  ctx.session = null;
  ctx.body = {
    res: 'success'
  };
};
