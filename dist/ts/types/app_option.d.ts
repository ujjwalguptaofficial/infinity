import { SessionProvider } from "../abstracts/session_provider";
import { ViewEngine } from "../abstracts/view_engine";
import { ErrorHandler } from "../model";
import { EtagOption } from "./etag_option";
export declare type AppOption = {
    port?: number;
    viewEngine?: typeof ViewEngine;
    shouldParseCookie?: boolean;
    shouldParsePost?: boolean;
    sessionProvider?: typeof SessionProvider;
    /**
     * session timeout in minute - default is 60 minute
     *
     * @type {number}
     * @memberof IAppOption
     */
    sessionTimeOut?: number;
    foldersAllowed?: string[];
    errorHandler?: typeof ErrorHandler;
    /**
     * path to be used when url is root.
     *
     * @type {string}
     * @memberof IAppOption
     */
    defaultPath?: string;
    /**
     * name of application - default is fort
     *
     * @type {string}
     */
    appName?: string;
    eTag?: EtagOption;
};