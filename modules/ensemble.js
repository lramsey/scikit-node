var sk = require('../learn');
var ensemble = {};
var amodule = 'ensemble';
var estimator;

ensemble.ensembleAlgorithms = function(){
    var estimators = {};
    var key;
    for(key in ensemble){
        estimators[key] = ensemble[key];
    }
    delete estimators.ensembleAlgorithms;
    return estimators;
};

var AdaBoostClassifier = ensemble.AdaBoostClassifier = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['AdaBoostClassifier'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var AdaBoostRegressor = ensemble.AdaBoostRegressor = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['AdaBoostRegressor'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var BaggingClassifier = ensemble.BaggingClassifier = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['BaggingClassifier'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var BaggingRegressor = ensemble.BaggingRegressor = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['BaggingRegressor'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var ExtraTreeRegressor = ensemble.ExtraTreeRegressor = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['ExtraTreeRegressor'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var GradientBoostingClassifier = ensemble.GradientBoostingClassifier = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['GradientBoostingClassifier'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var GradientBoostingRegressor = ensemble.GradientBoostingRegressor = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['GradientBoostingRegressor'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var RandomForestClassifier = ensemble.RandomForestClassifier = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['RandomForestClassifier'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var RandomTreesEmbedding = ensemble.RandomTreesEmbedding = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['RandomTreesEmbedding'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var RandomForestRegressor = ensemble.RandomForestRegressor = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['RandomForestRegressor'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

module.exports = ensemble;
