let pathJoin = require("path.join");
let Jimp = require("jimp");
let fs = require('fs');
let fse = require('fs-extra');

module.exports.resizeCrop = function (inputFolder = "./input", outputFolder = "./output", w = 50, h = 50, q = 100) {
    var files = fs.readdirSync(inputFolder);

    fse.ensureDir(outputFolder, err => {
        if (err) {
            console.log(err) 
            return;
        }
        files.forEach(function (file) {
            let inputPath = pathJoin(inputFolder, file);
            let outputPath = pathJoin(outputFolder, file);
            Jimp.read(inputPath, function (err, image) {
                if (err) throw err;
                image.cover(w, h).quality(q).write(outputPath);
            });
        })
    });
}