var sk = require('../learn');
var cluster = {};
var amodule = 'cluster';
var estimator;

cluster.clusterAlgorithms = function(){
    var estimators = {};
    var key;
    for(key in cluster){
        estimators[key] = cluster[key];
    }
    delete estimators.clusterAlgorithms;
    return estimators;
};

var AffinityPropagation = cluster.AffinityPropagation = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['AffinityPropagation'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var AgglomerativeClustering = cluster.AgglomerativeClustering = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['AgglomerativeClustering'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var DBSCAN = cluster.DBSCAN = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['DBSCAN'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var FeatureAgglomeration = cluster.FeatureAgglomeration = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['FeatureAgglomeration'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var KMeans = cluster.KMeans = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['KMeans'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var MiniBatchKMeans = cluster.MiniBatchKMeans = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['MiniBatchKMeans'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var MeanShift = cluster.MeanShift = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['MeanShift'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var SpectralClustering = cluster.SpectralClustering = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['SpectralClustering'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

var Ward = cluster.Ward = function(methods, cb, hyperparams){
    hyperparams = hyperparams || [];
    estimator = ['Ward'].concat(hyperparams);
    return sk.SKLearn(amodule, estimator, methods, cb);
};

module.exports = cluster;
