var sk = require('../learn');
var preprocessing = {};
var amodule = 'preprocessing';
var estimator;

preprocessing.preprocessingAlgorithms = function(){
    var estimators = {};
    var key;
    for(key in preprocessing){
        estimators[key] = preprocessing[key];
    }
    delete estimators.preprocessingAlgorithms;
    return estimators;
};

var Binarizer = preprocessing.Binarizer = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['Binarizer'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var Imputer = preprocessing.Imputer = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['Imputer'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var KernelCenterer = preprocessing.KernelCenterer = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['KernelCenterer'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var LabelBinarizer = preprocessing.LabelBinarizer = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['LabelBinarizer'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var LabelEncoder = preprocessing.LabelEncoder = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['LabelEncoder'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var MultiLabelBinarizer = preprocessing.MultiLabelBinarizer = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['MultiLabelBinarizer'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var MinMaxScaler = preprocessing.MinMaxScaler = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['MinMaxScaler'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var Normalizer = preprocessing.Normalizer = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['Normalizer'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var OneHotEncoder = preprocessing.OneHotEncoder = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['OneHotEncoder'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var StandardScaler = preprocessing.StandardScaler = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['StandardScaler'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var PolynomialFeatures = preprocessing.PolynomialFeatures = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['PolynomialFeatures'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

module.exports = preprocessing;
