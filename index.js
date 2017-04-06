let pathJoin = require("path.join");
let Jimp = require("jimp");
let fs = require('fs');
let fse = require('fs-extra');

function checkDirectory(directory, callback) {
    fs.stat(directory, function (err, stats) {
        //Check if error defined and the error code is "not exists"
        if (err && err.errno === 34) {
            //Create the directory, call the callback.
            fs.mkdir(directory, callback);
        } else {
            //just in case there was a different error:
            callback(err)
        }
    });
}

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