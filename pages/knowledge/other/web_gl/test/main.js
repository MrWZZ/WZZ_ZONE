/**
 * 纹理
 * 1、准备好映射到几何图形上的纹理图像
 * 2、为几何图形配置纹理映射方式
 * 3、加载纹理图像、对其进行一些配置，在webgl中使用
 * 4、在片元着色器中将形影相应的纹素从纹理中抽取处理来，并将纹素的颜色赋给片元
 */
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.start = function () {
        var gl = Shader.getGl("canvas");
        var vSource = 'attribute vec4 a_Position;\n' +
            'attribute vec2 a_TexCoord;\n' +
            'varying vec2 v_TexCoord;\n' +
            'void main() {\n' +
            '  gl_Position = a_Position;\n' +
            '  v_TexCoord = a_TexCoord;\n' +
            '}\n';
        var fSource = 'precision mediump float;\n' +
            'varying vec2 v_TexCoord;\n' +
            'uniform sampler2D u_Sampler;\n' +
            'void main() {\n' +
            '  gl_FragColor = texture2D(u_Sampler,v_TexCoord);\n' +
            '}\n';
        var program = Shader.createProgram(gl, vSource, fSource);
        gl.useProgram(program);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        //缓冲数据:顶点坐标、纹理坐标
        var vArray = new Float32Array([
            -0.5, 0.5, 0.0, 1.0,
            -0.5, -0.5, 0.0, 0.0,
            0.5, 0.5, 1.0, 1.0,
            0.5, -0.5, 1.0, 0.0
        ]);
        //创建缓冲区对象
        var vBuffer = Shader.createBuffer(gl);
        //绑定缓冲区对象
        gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
        //将数据写入缓冲区对象
        gl.bufferData(gl.ARRAY_BUFFER, vArray, gl.STATIC_DRAW);
        //获取分量长度
        var FSIZE = vArray.BYTES_PER_ELEMENT;
        //获取attribute变量
        var a_Position = Shader.getAttribLocation(gl, program, "a_Position");
        //将缓冲区对象分配给一个attribute变量
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 4, 0);
        //开启attribute变量
        gl.enableVertexAttribArray(a_Position);
        //获取attribute变量
        var a_TexCoord = Shader.getAttribLocation(gl, program, "a_TexCoord");
        //将缓冲区对象分配给一个attribute变量
        gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
        //开启attribute变量
        gl.enableVertexAttribArray(a_TexCoord);
        //加载纹理
        initTextures(gl, program);
        //绘制
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 4);
    };
    Main.initTextures = function ($gl, $program) {
    };
    return Main;
}());
Main.start();
function initTextures($gl, $program) {
    var texture = $gl.createTexture();
    var u_Sampler = Shader.getUniformLocation($gl, $program, "u_Sampler");
    //加载图片
    var image = new Image();
    image.onload = function () {
        onLoadImage($gl, texture, u_Sampler, image);
    };
    image.src = "sky.JPG";
}
function onLoadImage($gl, $texture, $u_Sampler, $image) {
    //对纹理图像进行y轴反转
    $gl.pixelStorei($gl.UNPACK_FLIP_Y_WEBGL, 1);
    //开启0号纹理单元
    $gl.activeTexture($gl.TEXTURE0);
    //向target绑定纹理对象
    $gl.bindTexture($gl.TEXTURE_2D, $texture);
    //配置纹理参数
    $gl.texParameteri($gl.TEXTURE_2D, $gl.TEXTURE_MIN_FILTER, $gl.LINEAR);
    //配置纹理图像
    $gl.texImage2D($gl.TEXTURE_2D, 0, $gl.RGB, $gl.RGB, $gl.UNSIGNED_BYTE, $image);
    //将0号纹理传给着色器参数
    $gl.uniform1i($u_Sampler, 0);
}
