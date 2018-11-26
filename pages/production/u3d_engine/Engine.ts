abstract class Engine {
    
    //整个游戏的游戏实例数组
    private static gameObjectArray: GameObject[];
    //每帧调用方法索引
    private static rafIndex:number;

    /**
     * 启动引擎
     */
    public static run(): void {
        this.gameObjectArray = [];
        this.rafIndex = this.updatePerFrame();
    }

    /**
     * 恢复引擎
     */
    public static restore(): void {
        //如果引擎已在更新则跳过
        if(this.rafIndex) return;
        for (let i = this.gameObjectArray.length - 1; i >= 0; i--) {
            //如果该物体不启动则跳过
            if(!this.gameObjectArray[i].Enable) continue;
            //刷新物体
            this.gameObjectArray[i].onApplicationRestore();
            this.rafIndex = this.updatePerFrame();
            
        }
    }

    /**
     * 暂停引擎
     */
    public static pause(): void {
        for (let i = this.gameObjectArray.length - 1; i >= 0; i--) {
            //如果该物体不启动则跳过
            if(!this.gameObjectArray[i].Enable) continue;
            //刷新物体
            this.gameObjectArray[i].onApplicationPause();
            cancelAnimationFrame(this.rafIndex);
            this.rafIndex = null;
        }
    }

    /**
     * 停止引擎
     */
    public static stop(): void {
        for (let i = this.gameObjectArray.length - 1; i >= 0; i--) {
            //如果该物体不启动则跳过
            if(!this.gameObjectArray[i].Enable) continue;
            //刷新物体
            this.gameObjectArray[i].onApplicationQuit();
        }
    }

    /**
     * 创建游戏物体
     */
    public static instantiate(gameObject: GameObject) {
        this.gameObjectArray.push(gameObject);
        gameObject.awake();
    }

    /**
     * 销毁物体
     */
    public static destory(gameObject: GameObject) {
        let index = this.gameObjectArray.indexOf(gameObject);
        this.gameObjectArray.splice(index,1);
        gameObject.onDestory();
    }   

    //每帧调用
    private static updatePerFrame():number {
        for (let i = this.gameObjectArray.length - 1; i >= 0; i--) {
            //如果该物体不启动则跳过
            if(!this.gameObjectArray[i].Enable) continue;
            //物体是否初次调用start
            if(!this.gameObjectArray[i]._$isStart) {
                this.gameObjectArray[i].start();
                this.gameObjectArray[i]._$isStart = true;
            }
            //刷新物体
            this.gameObjectArray[i].update();
            this.gameObjectArray[i].updateCoroutine();
        }
        return requestAnimationFrame(Engine.updatePerFrame);
    }
}