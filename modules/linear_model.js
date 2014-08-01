var sk = require('../learn');
var linear_model = {};
var amodule = 'linear_model';
var estimator;

linear_model.linear_modelAlgorithms = function(){
    var estimators = {};
    var key;
    for(key in linear_model){
        estimators[key] = linear_model[key];
    }
    delete estimators.linear_modelAlgorithms;
    return estimators;
};

var ARDRegression = linear_model.ARDRegression = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['ARDRegression'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var BayesianRidge = linear_model.BayesianRidge = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['BayesianRidge'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var ElasticNet = linear_model.ElasticNet = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['ElasticNet'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var ElasticNetCV = linear_model.ElasticNetCV = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['ElasticNetCV'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var Lars = linear_model.Lars = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['Lars'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var LarsCV = linear_model.LarsCV = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['LarsCV'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var Lasso = linear_model.Lasso = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['Lasso'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var LassoCV = linear_model.LassoCV = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['LassoCV'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var LassoLars = linear_model.LassoLars = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['LassoLars'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var LassoLarsCV = linear_model.LassoLarsCV = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['LassoLarsCV'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var LassoLarsIC = linear_model.LassoLarsIC = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['LassoLarsIC'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var LinearRegression = linear_model.LinearRegression = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['LinearRegression'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var LogisticRegression = linear_model.LogisticRegression = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['LogisticRegression'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var MultiTaskLasso = linear_model.MultiTaskLasso = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['MultiTaskLasso'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var MultiTaskElasticNet = linear_model.MultiTaskElasticNet = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['MultiTaskElasticNet'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var MultiTaskLassoCV = linear_model.MultiTaskLassoCV = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['MultiTaskLassoCV'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var MultiTaskElasticNetCV = linear_model.MultiTaskElasticNetCV = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['MultiTaskElasticNetCV'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var OrthogonalMatchingPursuit = linear_model.OrthogonalMatchingPursuit = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['OrthogonalMatchingPursuit'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var OrthogonalMatchingPursuitCV = linear_model.OrthogonalMatchingPursuitCV = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['OrthogonalMatchingPursuitCV'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var PassiveAggressiveClassifier = linear_model.PassiveAggressiveClassifier = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['PassiveAggressiveClassifier'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var PassiveAggressiveRegressor = linear_model.PassiveAggressiveRegressor = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['PassiveAggressiveRegressor'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var Perceptron = linear_model.Perceptron = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['Perceptron'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var RandomizedLasso = linear_model.RandomizedLasso = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['RandomizedLasso'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var RandomizedLogisticRegression = linear_model.RandomizedLogisticRegression = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['RandomizedLogisticRegression'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var Ridge = linear_model.Ridge = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['Ridge'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var RidgeClassifier = linear_model.RidgeClassifier = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['RidgeClassifier'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var RidgeClassifierCV = linear_model.RidgeClassifierCV = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['RidgeClassifierCV'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var RidgeCV = linear_model.RidgeCV = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['RidgeCV'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var SGDClassifier = linear_model.SGDClassifier = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['SGDClassifier'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var SGDRegressor = linear_model.SGDRegressor = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['SGDRegressor'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

module.exports = linear_model;
