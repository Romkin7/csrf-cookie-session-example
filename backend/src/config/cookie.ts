import { CookieOptions } from 'express';

class COOKIE {
    private maxAge?: number | undefined;
    private signed?: boolean | undefined;
    private expires?: Date | undefined;
    private httpOnly?: boolean | undefined;
    private path?: string | undefined;
    private domain?: string | undefined;
    private secure?: boolean | undefined;
    //private encode?: ((val: string) => string) | undefined;
    private sameSite?: boolean | 'lax' | 'strict' | 'none' | undefined;
    constructor(cookie: CookieOptions) {
        this.maxAge = cookie.maxAge || Date.now() + 30000;
        this.domain = cookie.domain || '127.0.0.1';
        this.secure = cookie.secure || false;
        this.httpOnly = cookie.httpOnly || true;
        this.expires = cookie.expires || new Date(Date.now() + 30000);
        this.path = cookie.path || '/';
        //this.encode = undefined;
        this.sameSite = cookie.sameSite || 'none';
        this.signed = cookie.signed || false;
    }
    public getCookie(): CookieOptions {
        return {
            maxAge: this.maxAge,
            secure: this.secure,
            //encode: this.encode,
            domain: this.domain,
            httpOnly: this.httpOnly,
            expires: this.expires,
            path: this.path,
            sameSite: this.sameSite,
            signed: this.signed,
        };
    }
}

export default COOKIE;
