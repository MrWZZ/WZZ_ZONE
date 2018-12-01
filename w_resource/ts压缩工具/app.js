var file = require("./Zip/FileUtil");
var path = require("path");
var ts = require("./Zip/typescript-plus/lib/typescript");
var uglifyJS = require("./Zip/uglify-js/uglifyjs");

var baseUrl = "./"
var url = baseUrl + "tsconfig.json";
//var configObj = JSON.parse(file.read(url));
var configObj = {
    "compilerOptions":{
        "target": "es5",
        "experimentalDecorators": true,
        "lib": [
            "es5", "dom", "es2015.promise"
        ]
    },
    "exclude": [
        "node_modules"
    ]
};
var configParseResult = ts.parseJsonConfigFileContent(configObj, ts.sys, path.dirname(url));
let compilerOptions = configParseResult.options;
let fileNames = configParseResult.fileNames;
compilerOptions.outFile = path.join(baseUrl, "main.min.js");
var compilerHost = ts.createCompilerHost(compilerOptions);
var program = ts.createProgram(fileNames, compilerOptions, compilerHost);
var sortResult = ts.reorderSourceFiles(program);
program.emit();
var outfile = compilerOptions.outFile;
var result = uglifyJS.minify(outfile, {mangle:false,compress:false, output:{beautify:true}});
file.save(outfile, result.code);