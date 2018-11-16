class GameObject {

    private coroutine: IterableIterator<any>[];

    //生命周期 ==
    public awake() { }
    public onEnable() { }
    public start() { }
    // public onCollisionXXX() {}  //todo
    // public onMouseXXX() {}  //todo
    public update() { }
    public updateCoroutine() {
        //执行协程
        for (let i = this.coroutine.length - 1; i >= 0; i--) {
            let done = this.coroutine[i].next().done;
            if (done) {
                this.coroutine.splice(i, 1);
            }
        }
    }
    public onApplicationPause() {}
    public onApplicationQuit() {}
    public onDisable() {}
    /**
     * 被销毁时发生
     */
    public onDestory() {
        this.coroutine = [];
    }
    //end生命周期

    //开启协程
    public startCoroutine(coroutine: IterableIterator<any>) {
        this.coroutine.push(coroutine);
    }


}