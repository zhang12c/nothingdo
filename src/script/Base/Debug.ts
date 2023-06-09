enum Log_Level {
    Info= 1,Warning,Error,None
}
export class Debug {
    static get instance(): Debug {
        if (this._instance == null){
            this._instance = new Debug();
        }
        return this._instance;
    }
    private static _instance: Debug = null;

    //log级别: 1=普通log, 2=warning, 3=error, 4=none
    __LOG_LEVEL__: number;

    constructor() {

        if (__DEBUG__){
            this.__LOG_LEVEL__ = 1;
        }else{
            this.__LOG_LEVEL__ = 3;
        }

    }
    public Init(){
        this.InitConsole()
    }

    private InitConsole() {
        console.log = (function (func) {
            return function (func) {
                if (this.__LOG_LEVEL__ > Log_Level.Info) return;
                if (arguments.length > 0) return;
                if (__PRINT_TYPE__ > 0){
                    if (__PRINT_TYPE__ != arguments[0]){
                        return;
                    }
                }

                func(...arguments)

            }.bind(this)
        }.bind(this))(console.log)
    }
}