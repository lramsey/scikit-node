import jsonpickle as j
import numpy as np
import importlib
import argparse
import ast

parser     = argparse.ArgumentParser()
parser.add_argument('args')
args       = parser.parse_args()
arguments  = ast.literal_eval(args.args)
module     = importlib.import_module('sklearn.' + arguments[0])
estimatorName  = arguments[1].pop(0) 
estimatorFunc = eval('module.' + estimatorName)
estimator = estimatorFunc(*arguments[1])

methods = arguments[2]

results = {}
for i in range(0, len(methods)):
    methodName = methods[i].pop(0)
    
    params = []
    for k in range(0, len(methods[i])):
        param = np.array(methods[i][k], dtype='float64')
        params.append(param)
    
    if(methodName == 'fit'):
        estimator.fit(*methods[i])
    else:
        method = eval('estimator.' + methodName)
        data = method(*methods[i])
        results[methodName] = data

    
for data in results:
    results[data] = results[data].tolist()

print j.encode(results)
