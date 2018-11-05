/**
 * 绘制单个点、单个获取变量main代码
 */

class Main {

    public static start(): void {

        let gl = Shader.getGl("canvas");
        let vSource =
            'attribute vec4 a_Position;\n' +
            'void main() {\n' +
            '  gl_Position = a_Position;\n' +
            '  gl_PointSize = 10.0;\n' +
            '}\n';

        let fSource =
            'precision mediump float;\n' +
            'uniform vec4 u_FragColor;\n' +
            'void main() {\n' +
            '  gl_FragColor = u_FragColor;\n' + 
            '}\n';

        let program = Shader.createProgram(gl,vSource,fSource);
        gl.useProgram(program);
        gl.clearColor(1.0,1.0,1.0,1.0);
        //获取attribute变量
        let a_Position = Shader.getAttribLocation(gl,program,"a_Position");
        //赋值
        gl.vertexAttrib2f(a_Position,0.5,0.5);
        //获取uniform变量
        let u_FragColor = Shader.getUniformLocation(gl,program,"u_FragColor");
        //赋值
        gl.uniform4f(u_FragColor,1.0,1.0,0.0,1.0);
        //绘制
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.POINTS,0,1);
    }
}

Main.start();