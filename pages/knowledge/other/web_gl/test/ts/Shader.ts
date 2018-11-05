class Shader {

    /**
     * 获取一个上下文对象
     * @param $canvasId 画布ID
     */
    public static getGl($canvasId:string):WebGLRenderingContext {
        let canvas:any = document.getElementById($canvasId);
        //不同浏览器适配
        let names = ["webgl","experimental-webgl","webkit-3d","moz-webgl"];
        let gl:WebGLRenderingContext;
        for(let i=0;i<names.length;i++){
            gl = canvas.getContext(names[i]);
            if(gl) return gl;
        }
        if(!gl) {
            Log.error(`${$canvasId}:can not get webgl object!`);
            return null;
        }
    }

    /**
     * 创建着色器对象
     * @param $gl 上下文对象
     * @param $source 着色器源码
     * @param $type 着色器类型
     */
    public static createShader($gl:WebGLRenderingContext,$source:string,$type:number):WebGLShader {
        //创建着色器
        let shader = $gl.createShader($type);
        //指定着色器对象源码
        $gl.shaderSource(shader,$source);
        //编译着色器
        $gl.compileShader(shader);
        //检查编译状态
        let isSuccess = $gl.getShaderParameter(shader,$gl.COMPILE_STATUS);
        if(!isSuccess) {
            let errorLog = $gl.getShaderInfoLog(shader);
            Log.error(errorLog);
            $gl.deleteShader(shader);
            return null;
        }
        return shader; 
    }

    /**
     * 创建着色器程序
     * @param $gl 上下文对象
     * @param $vSource 顶点着色器源码
     * @param $fSource 片元着色器源码
     */
    public static createProgram($gl:WebGLRenderingContext,$vSource:string,$fSource:string):WebGLProgram {
        let vShader = this.createShader($gl,$vSource,$gl.VERTEX_SHADER);
        let fShader = this.createShader($gl,$fSource,$gl.FRAGMENT_SHADER);
        //创建着色器失败
        if(!vShader || !fShader) return null;

        //创建程序对象
        let program = $gl.createProgram();
        //分配着色器对象
        $gl.attachShader(program,vShader);
        $gl.attachShader(program,fShader);
        //链接程序对象
        $gl.linkProgram(program);
        //检查链接状态
        let isSuccess = $gl.getProgramParameter(program,$gl.LINK_STATUS);
        if(!isSuccess) {
            let errorLog = $gl.getShaderInfoLog(program);
            Log.error(errorLog);
            $gl.detachShader(program,vShader);
            $gl.detachShader(program,fShader);
            $gl.deleteShader(vShader);
            $gl.deleteShader(fShader);
            $gl.deleteProgram(program);
            return null;
        }
        return program;
    }

    /**
     * 获取变量地址
     * @param $gl 上下文对象
     * @param $program 着色器程序
     * @param $name 变量名字
     */
    public static getAttribLocation($gl:WebGLRenderingContext,$program:WebGLProgram,$name:string):number {
        let address = $gl.getAttribLocation($program,$name); 
        //获取地址失败
        if(address < 0) {
            Log.warn(`${name}:can not get address!`);
            return -1;
        }
        return address;
    }

    /**
     * 获取变量地址
     * @param $gl 上下文对象
     * @param $program 着色器程序
     * @param $name 变量名字
     */
    public static getUniformLocation($gl:WebGLRenderingContext,$program:WebGLProgram,$name:string):WebGLUniformLocation {
        let address = $gl.getUniformLocation($program,$name); 
        //获取地址失败
        if(address < 0) {
            Log.warn(`${name}:can not get address!`);
            return -1;
        }
        return address;
    }

    //创建缓冲区对象
    public static createBuffer($gl:WebGLRenderingContext):WebGLBuffer {
        let buffer = $gl.createBuffer();
        if(!buffer) {
            Log.warn(`can note create buffer!`);
            return -1;
        }
        return buffer;
    }

}

