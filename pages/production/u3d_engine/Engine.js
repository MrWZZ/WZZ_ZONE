function* do1() {
    let i=0;
    for (let i = 0; i < 10; i++) {
        console.log(i);
        yield;
    }
}

function* do2() {
    for (let i = 0; i < 20; i++) {
        console.log("你好");
        yield;
    }
}
var it1 = do1();
var it2 = do2();

//正在
var currArr = [];
currArr.push(it1);
currArr.push(it2);
//准备
var readyArr = [];


//每帧调用
function update() {
    //执行协程
    for (let i = currArr.length - 1; i >= 0; i--) {
        result = currArr[i].next().done;
        if(result) {
            currArr.splice(i,1);
        }
    }
    //添加新的协程
    for (let j = 0; j < readyArr.length; j++) {
        currArr.push(readyArr[j]);
    }
    readyArr = [];

    requestAnimationFrame(update);
}

document.onclick = function () {
    readyArr.push(do1());
}

update();

