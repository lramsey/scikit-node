var sk = require('./learn');
var cluster = require('./modules/cluster');
var ensemble = require('./modules/ensemble');
var linear_model = require('./modules/linear_model');
var neighbors = require('./modules/neighbors');
var preprocessing = require('./modules/preprocessing');

var _extend = function(obj1){
    var objs = Array.prototype.slice.call(arguments,1);
    objs.forEach(function(obj){
        for(var key in obj){
            obj1[key] = obj[key];
        }
    });
};

_extend(sk, cluster, ensemble, linear_model, neighbors, preprocessing);

sk.allModules = function(){
    return { 'cluster':sk.clusterAlgorithms, 'ensemble':sk.ensembleAlgorithms, 'linear_model':sk.linear_modelAlgorithms, 'preprocessing':sk.preprocessing };
};

module.exports = sk;
