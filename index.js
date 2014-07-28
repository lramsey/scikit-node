var child = require('child_process');

var SK = {};
SK.skLearn = function(module, estimator,methods, cb){
    cb = cb || function(){};
    arg = JSON.stringify([module, estimator, methods]);
    python = child.spawn(
        'python', [__dirname + '/lib/experiment.py', arg]);
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

SK.randomForestClassifier = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    var module    = 'ensemble';
    var estimator = ['RandomForestClassifier'];
    hyperparams.forEach(function(param){
        estimator.push(param);
    });
    return this.skLearn(module, estimator, methods, cb);
};

SK.gradientBoostingClassifier = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    var module    = 'ensemble';
    var estimator = ['GradientBoostingClassifier'];
    hyperparams.forEach(function(param){
        estimator.push(param);
    });
    return this.skLearn(module, estimator, methods, cb);
};

module.exports = SK;
