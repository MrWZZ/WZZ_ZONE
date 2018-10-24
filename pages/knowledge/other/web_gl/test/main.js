var Main = /** @class */ (function () {
    function Main() {
    }
    Main.start = function () {
        var gl = Shader.getGl("canvas");
        var vSource = 'void main() {\n' +
            '  gl_Position = vec4(0.0,0.0,0.0,1.0);\n' +
            '  gl_PointSize = 10.0;\n' +
            '}\n';
        var fSource = 'void main() {\n' +
            '  gl_FragColor = vec4(1.0,0.0,0.0,1.0);\n' +
            '}\n';
        var program = Shader.createProgram(gl, vSource, fSource);
        gl.useProgram(program);
        gl.clearColor(0.0,0.0,0.0,1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.POINTS, 0, 1);
    };
    return Main;
}());
Main.start();
