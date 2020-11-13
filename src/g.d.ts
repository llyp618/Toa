
declare module 'koa-onerror' {
  type errOptions = {
    text?: any;
    json?: any;
    html?: any;
    redirect?: any;
    template?: string;
    accepts?: any;
  }

  const fun : (app: any, options?: errOptions) => void;

  export default fun;
}
