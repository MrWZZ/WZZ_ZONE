/**
 * 纹理
 * 1、准备好映射到几何图形上的纹理图像
 * 2、为几何图形配置纹理映射方式
 * 3、加载纹理图像、对其进行一些配置，在webgl中使用
 * 4、在片元着色器中将形影相应的纹素从纹理中抽取处理来，并将纹素的颜色赋给片元
 */

class Main {

    public static start(): void {

        let gl = Shader.getGl("canvas");
        let vSource =
            'attribute vec4 a_Position;\n' +
            'attribute vec2 a_TexCoord;\n' +
            'varying vec2 v_TexCoord;\n' +
            'void main() {\n' +
            '  gl_Position = a_Position;\n' +
            '  v_TexCoord = a_TexCoord;\n' +
            '}\n';

        let fSource =
            'precision mediump float;\n' +
            'varying vec2 v_TexCoord;\n' +
            'uniform sampler2D u_Sampler;\n' +
            'void main() {\n' +
            '  gl_FragColor = texture2D(u_Sampler,v_TexCoord);\n' +
            '}\n';

        let program = Shader.createProgram(gl, vSource, fSource);
        gl.useProgram(program);

        //缓冲数据:顶点坐标、纹理坐标
        let vArray = new Float32Array([
            -0.5, 0.5, 0.0, 1.0,
            -0.5, -0.5, 0.0, 0.0,
            0.5, 0.5, 1.0, 1.0,
            0.5, -0.5, 1.0, 0.0
        ]);
        //创建缓冲区对象
        let vBuffer = Shader.createBuffer(gl);
        //绑定缓冲区对象
        gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
        //将数据写入缓冲区对象
        gl.bufferData(gl.ARRAY_BUFFER, vArray, gl.STATIC_DRAW);
        //获取分量长度
        let FSIZE = vArray.BYTES_PER_ELEMENT;
        //获取attribute变量 
        let a_Position = Shader.getAttribLocation(gl, program, "a_Position");
        //将缓冲区对象分配给一个attribute变量
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 4, 0);
        //开启attribute变量
        gl.enableVertexAttribArray(a_Position);

        //获取attribute变量
        let a_TexCoord = Shader.getAttribLocation(gl, program, "a_TexCoord");
        //将缓冲区对象分配给一个attribute变量
        gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
        //开启attribute变量
        gl.enableVertexAttribArray(a_TexCoord);

        //加载图片
        let image = new Image();
        image.onload = this.onImageLoad.bind(this,gl,program,image);
        image.src = "sky.jpg";
    }

    public static onImageLoad(gl,program,image): void {
        //创建纹理对象
        let texture = gl.createTexture();
        let u_Sampler = Shader.getUniformLocation(gl, program, "u_Sampler");
        //对纹理对象进行y轴反转
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        //开启0号纹理单元
        gl.activeTexture(gl.TEXTURE0);
        //向目标绑定纹理对象
        gl.bindTexture(gl.TEXTURE_2D, texture);
        //配置纹理参数
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        //配置纹理图像
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
        //将0号纹理传递给着色器
        gl.uniform1i(u_Sampler, 0);


        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
}

Main.start();