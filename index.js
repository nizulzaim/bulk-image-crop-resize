let pathJoin = require("path.join");
let  Jimp = require("jimp");
let fs = require('fs');

module.exports.resizeCrop = function(inputFolder = "./input", outputFolder ="./output", w = 50, h = 50, q = 100) {
    var files = fs.readdirSync(inputFolder);
    files.forEach(function(file) {
        let inputPath = pathJoin(inputFolder, file);
        let outputPath = pathJoin(outputFolder, file);
        Jimp.read(inputPath, function (err, image) {
            if (err) throw err;
            image.cover( w, h ).quality(q).write(outputPath); 
        });
    })
}