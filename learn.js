var child = require('child_process');

var sk = {};

sk.SKLearn = function(module, estimator, methods, cb){
    cb = cb || function(){};
    arg = JSON.stringify([module, estimator, methods]);
    python = child.spawn(
        'python', [__dirname + '/lib/exec.py', arg]);
    output = '';
    python.stdout.on('data', function(data){
        output += data;
    });
    python.stdout.on('error', function(err){
        throw new Error(err);
    });
    python.stdout.on('close', function(){
        results = JSON.parse(output);
        cb(results);
    });
};

module.exports = sk;
