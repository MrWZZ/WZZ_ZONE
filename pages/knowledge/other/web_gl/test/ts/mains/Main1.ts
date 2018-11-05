/**
 * 使用缓冲区,绘制三角形
 */

class Main {

    public static start(): void {

        let gl = Shader.getGl("canvas");
        let vSource =
            'attribute vec4 a_Position;\n' +
            'void main() {\n' +
            '  gl_Position = a_Position;\n' +
            '}\n';

        let fSource =
            'precision mediump float;\n' +
            'uniform vec4 u_FragColor;\n' +
            'void main() {\n' +
            '  gl_FragColor = u_FragColor;\n' + 
            '}\n';

        let program = Shader.createProgram(gl,vSource,fSource);
        gl.useProgram(program);
        gl.clearColor(0.0,0.0,0.0,1.0);
        //获取attribute变量
        let a_Position = Shader.getAttribLocation(gl,program,"a_Position");
        //赋值（使用缓冲区对象后不能使用这种方式赋值）
        // gl.vertexAttrib2f(a_Position,0.5,0.5);
        //获取uniform变量
        let u_FragColor = Shader.getUniformLocation(gl,program,"u_FragColor");
        //赋值
        gl.uniform4f(u_FragColor,1.0,0.0,0.0,1.0);
        
        //缓冲数据
        let vArray = new Float32Array([
            0.0,0.5,-0.5,-0.5,0.5,-0.5
        ]);
        //创建缓冲区对象
        let vBuffer = Shader.createBuffer(gl);
        //绑定缓冲区对象
        gl.bindBuffer(gl.ARRAY_BUFFER,vBuffer);
        //将数据写入缓冲区对象
        gl.bufferData(gl.ARRAY_BUFFER,vArray,gl.STATIC_DRAW);
        //将缓冲区对象分配给一个attribute变量
        gl.vertexAttribPointer(a_Position,2,gl.FLOAT,false,0,0);
        //开启attribute变量
        gl.enableVertexAttribArray(a_Position);

        //绘制
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES,0,3);
    }
}

Main.start();