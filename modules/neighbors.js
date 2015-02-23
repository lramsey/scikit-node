var sk = require('../learn');
var neighbors = {};
var amodule = 'neighbors';
var estimator;

neighbors.neighborsAlgorithms = function(){
    var estimators = {};
    var key;
    for(key in neighbors){
        estimators[key] = neighbors[key];
    }
    delete estimators.neighborsAlgorithms;
    return estimators;
};

var NearestNeighbors = neighbors.NearestNeighbors = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['NearestNeighbors'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var KNeighborsClassifier = neighbors.KNeighborsClassifier = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['KNeighborsClassifier'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var RadiusNeighborsClassifier = neighbors.RadiusNeighborsClassifier = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['RadiusNeighborsClassifier'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var KNeighborsRegressor = neighbors.KNeighborsRegressor = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['KNeighborsRegressor'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var RadiusNeighborsRegressor = neighbors.RadiusNeighborsRegressor = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['RadiusNeighborsRegressor'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var NearestCentroid = neighbors.NearestCentroid = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['NearestCentroid'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var BallTree = neighbors.BallTree = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['BallTree'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var KDTree = neighbors.KDTree = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['KDTree'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var DistanceMetric = neighbors.DistanceMetric = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['DistanceMetric'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var KernelDensity = neighbors.KernelDensity = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['KernelDensity'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var kneighbors_graph = neighbors.kneighbors_graph = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['kneighbors_graph'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var radius_neighbors_graph = neighbors.radius_neighbors_graph = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['radius_neighbors_graph'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};