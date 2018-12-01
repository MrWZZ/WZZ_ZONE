/**
 * 生命周期借鉴unity的生命周期
 */
class GameObject {

    //协程数组
    private _$coroutine: IterableIterator<any>[];
    //是否初次调用start方法
    public _$isStart:boolean = false;
    //物体形状
    public mesh:Mesh;
    
    /**是否启用
     */
    private _$Enable : boolean = true;
    public get Enable() : boolean {
        return this._$Enable;
    }
    public set Enable(v : boolean) {
        this._$Enable = v;
        if(this._$Enable) {
            this.onEnable();
        } else {
            this.onDisable();
        }
    }

    public constructor(name?:any,...component:Component[]) {

    }

    //生命周期 ==
    public awake() { 
    }
    //物体有效时调用
    public onEnable() { }
    public start() { }
    // public onCollisionXXX() {}  //todo
    // public onMouseXXX() {}      //todo
    //每帧调用
    public update() { }
    //每帧调用协程
    public updateCoroutine() {
        //执行协程
        for (let i = this._$coroutine.length - 1; i >= 0; i--) {
            let done = this._$coroutine[i].next().done;
            if (done) {
                this._$coroutine.splice(i, 1);
            }
        }
    }
    //引擎恢复时调用
    public onApplicationRestore() {}  
    //引擎暂停时调用
    public onApplicationPause() {}  
    //引擎退出时调用
    public onApplicationQuit() {}   
    //物体失效时调用
    public onDisable() {}
    //物体被销毁时调用
    public onDestory() {
        this._$coroutine = [];
    }
    //end生命周期 == 

    /**
     * 开启协程（目前没有对相同的生成器方法做优化）
     * @param coroutine 生成器
     */
    public startCoroutine(coroutine: IterableIterator<any>) {
        this._$coroutine.push(coroutine);
    }

    /**
     * 关闭协程（目前没有对相同的生成器方法做优化）
     * @param coroutine 生成器
     */
    public stopCoroutine(coroutine: IterableIterator<any>) {
        let index = this._$coroutine.indexOf(coroutine);
        this._$coroutine.splice(index,1);
    }

    /**
     * 清除所有协程
     */
    public clearCoroution():void {
        this._$coroutine = [];
    }
    
    /**
     * 创建一个初始模型的物体
     * @param type PrimitiveType类型枚举
     */
    public static createPrimitive(type:PrimitiveType):GameObject {
        switch(type) {
            case PrimitiveType.Plane:
                break;
        }
    }

}