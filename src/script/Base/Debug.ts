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
        console.log = (function (func,type) {
            return function (func,type) {
                if (this.__LOG_LEVEL__ > Log_Level.Info) return;

            }.bind(this)
        }.bind(this))(console.log,__PRINT_TYPE__)
    }
}