/**
 * 颜色
 */

class Main {

    public static start(): void {

        let gl = Shader.getGl("canvas");
        let vSource =
            'attribute vec4 a_Position;\n' +
            'attribute vec4 a_Color;\n' +
            'varying vec4 v_Color;\n' +
            'void main() {\n' +
            '  gl_Position = a_Position;\n' +
            '  gl_PointSize = 10.0;\n' +
            '  v_Color = a_Color;\n' +
            '}\n';

        let fSource =
            'precision mediump float;\n' +
            'varying vec4 v_Color;\n' +
            'void main() {\n' +
            '  gl_FragColor = v_Color;\n' + 
            '}\n';

        let program = Shader.createProgram(gl,vSource,fSource);
        gl.useProgram(program);
        gl.clearColor(0.0,0.0,0.0,1.0);
        
        //缓冲数据（使用一个缓冲数据可以采用分量的形式分参）
        //（使用两个以上的缓冲数据，需要先使用一个：绑定、写入、分配、开启；另一个之后再重复这个步骤）
        let vArray = new Float32Array([
            0.0,0.5,1.0,0.0,0.0,
            -0.5,-0.5,0.0,1.0,0.0,
            0.5,-0.5,0.0,0.0,1.0
        ]);
        //创建缓冲区对象
        let vBuffer = Shader.createBuffer(gl);
        //绑定缓冲区对象
        gl.bindBuffer(gl.ARRAY_BUFFER,vBuffer);
        //将数据写入缓冲区对象
        gl.bufferData(gl.ARRAY_BUFFER,vArray,gl.STATIC_DRAW);
        //获取分量长度
        let FSIZE = vArray.BYTES_PER_ELEMENT;
        //获取attribute变量
        let a_Position = Shader.getAttribLocation(gl,program,"a_Position");
        //将缓冲区对象分配给一个attribute变量
        gl.vertexAttribPointer(a_Position,2,gl.FLOAT,false,FSIZE * 5,0);
        //开启attribute变量
        gl.enableVertexAttribArray(a_Position);

        //获取attribute变量
        let a_Color = Shader.getAttribLocation(gl,program,"a_Color");
        //将缓冲区对象分配给一个attribute变量
        gl.vertexAttribPointer(a_Color,3,gl.FLOAT,false,FSIZE * 5,FSIZE * 2);
        //开启attribute变量
        gl.enableVertexAttribArray(a_Color);

        //绘制
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES,0,3);
    }
}

Main.start();