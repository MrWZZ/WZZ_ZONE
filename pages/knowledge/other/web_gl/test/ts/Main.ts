class Main {

    public static start(): void {
        let gl = Shader.getGl("canvas");
        let vSource =
            'void main() {\n' +
            '  gl_Position = vec4(0.0,0.0,0.0,1.0);\n' +
            '  gl_PointSize = 10.0;\n' +
            '}\n';

        let fSource =
            'void main() {\n' +
            '  gl_FragColor = vec4(1.0,0.0,0.0,1.0);\n' + 
            '}\n';

        let program = Shader.createProgram(gl,vSource,fSource);
        gl.useProgram(program);

        gl.drawArrays(gl.POINTS,0,1);
    }
}

Main.start();