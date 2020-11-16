
declare module 'koa-onerror' {
  import * as Koa from 'koa';
  type errOptions = {
    text?: (err: Error, ctx: Koa.Context) => void;
    json?: (err: Error, ctx: Koa.Context) => void;
    html?: (err: Error, ctx: Koa.Context) => void;
    redirect?: string;
    template?: string;
    accepts?: any;
  }

  const onerror : (app: Koa, options?: errOptions) => void;

  export = onerror;
}
