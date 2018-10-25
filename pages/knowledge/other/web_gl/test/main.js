var Main = /** @class */ (function () {
    function Main() {
    }
    Main.start = function () {
        var gl = Shader.getGl("canvas");
        var vSource = 'attribute vec4 a_Position;\n' +
            'void main() {\n' +
            '  gl_Position = a_Position;\n' +
            '  gl_PointSize = 10.0;\n' +
            '}\n';
        var fSource = 'precision mediump float;\n' +
            'uniform vec4 u_FragColor;\n' +
            'void main() {\n' +
            '  gl_FragColor = u_FragColor;\n' +
            '}\n';
        var program = Shader.createProgram(gl, vSource, fSource);
        gl.useProgram(program);
        gl.clearColor(1.0, 1.0, 1.0, 1.0);
        //获取attribute变量
        var a_Position = Shader.getAttribLocation(gl, program, "a_Position");
        //赋值
        gl.vertexAttrib2f(a_Position, 0.5, 0.5);
        //获取uniform变量
        var u_FragColor = Shader.getUniformLocation(gl, program, "u_FragColor");
        //赋值
        gl.uniform4f(u_FragColor, 1.0, 0.0, 1.0, 1.0);
        gl.drawArrays(gl.POINTS, 0, 1);
    };
    return Main;
}());
Main.start();
