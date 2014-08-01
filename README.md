#Scikit-Node NPM Module

##<a name='contents' href='#'/> Contents

[What is Scikit-Node?](#about)  
[Setup Process](#setup)  
[API](#use)  
[skLearn](#sk)  
[Helper Methods](#halp)  

## <a name='about' href='#'/> What is Scikit-Node

Scikit-Node is an npm wrapper for Python's scikit-learn library.  Using this module, you can use scikit-learn a node.js server.  To learn more about scikit-learn, please go to http://scikit-learn.org/stable/.  The methods on the Scikit-node Module spawn a python process that executes scikit-learn estimators and methods.  The results from these algorithms are then streamed up to node.

This module is currently in beta, so feedback and contributions would be appreciated!  I am available by email at lramsey177@gmail.com or through a github issues request.

## <a name='setup' href='#'/>  Set Up Process

In order to run Scikit-Node, there are several dependencies that need to be present.  The first step would be to make sure node.js, npm, and a python verison of >= 27. or >= 3.2 has been installed.  To install these items, I would recommend checking out http://nodejs.org/download/ and https://www.python.org/download/.

In addition, there are several python modules that need to be installed for the module to function properly.  These modules are scikit-learn, numpy, and jsonpickle.  For install instructions for scikit-learn and numpy, please go to http://scikit-learn.org/stable/install.html.  The version of scikit-node I have used in producing this module is 0.15.  For jsonpickle, please go to http://jsonpickle.github.io/#download-install.  Some additional python modules used in this project are importlib, argparse and ast.  These modules are all included in the Python Standard Library, so there should be no need to download them.

Once these dependencies are installed, add the Scikit-Node module to your project by typing 'npm install scikit-node' into the terminal.

## <a name='use' href='#'/> API

To use the Scikit-Node npm module, begin by requiring the module.

    sk = require('scikit-node')

## <a name='sk' href='#'/> skLearn

All methods of the Scikit-Node module arise from the skLearn method.

    sk.skLearn(module, estimator, methods, callback)

This function requires four arguments.  The module argument is a string that mentions which scikit-learn module is needed.  For example, if one wanted to use the RandomForestClassifier estimator, this estimator needs to be accessed on the ensemble module in scikit learn.
    
    module = 'ensemble'

The second estimator contains an array, where index 0 of the array is a string referring to an estimator object.  All succeeding elements in the estimator array are the hyperparameters which are used to fine tune the estimator.  Estimators are objects scikit-learn uses to carry out its machine learning.  Estimators contain methods which are customized to the algorithm indicated by the estimator.  The hyperparameters change how the algoirthm is run.  Check the Scikit-learn documentation to see the proper order you need when passing hyperparamers to estimators.
    
    estimator = ['RandomForestClassifier', 100]

The methods argument contains an array of arrays.  Each inner array contains a method on the chosen estimator at index 0.  All succeeding indexes in each inner arrray contains arguments for that method.

    estimator = ['fit', X, Y]

The callback argument is a function that runs once the python process has streamed its results to node.  This callback function gives you direct access to the results of the scikit-learn methods.  The results of every scikit-learn method except fit will be added to a results array, which is ordered based on the order methods were placed in the methods parameter.

## <a name='halp' href='#'/> Helper Methods

On top of the skLearn method, there are also several helper methods which make using the module easier.  Using the helper methods, one would not need to put parameters in for the module and estimator, but instead would just need to choose the correct method for a desired estimator.  The helper method calls the skLearn method, passing in the desired module and estimator for you.  Some of the helper methods may not work if you have a scikit-learn version of 0.14 or earlier, as version 0.15 has some new methods that earlier versions lacked.

All these helper methods expect the same kind of arguments.  One example of such a helper method is the randomForestClassifier method.

    sk.randomForestClassifier(methods, callback, hyperparams)

The methods argument here is the same as the one above in the skLearn method.  The callback parameter allows you to use the results of your scikit-learn methods in node.  The hyperparams argument contains an array that holds all the hyperparams that will be passed to a scikit-learn estimator.

Helper methods from these below scikit-learn modules have been added to scikit-node.

    cluster
    ensemble
    linear_model
    preprocessing

To investigate the helper methods that have been added to each module, there is an algorithm checker method for each module.  They are of the format 'moduleAlgorithms', where the word module is replaced by the actual name of the desired module.
    
    clusterAlgorthms()

This algorithm checker method will return an object where the keys are each helper method from that module in scikit-node, and the values are the functions themselves for that module.

If you want a certain module or helper method added to Scikit-Node, please feel free to submit a github issues request or send me an email at lramsey177@gmail.com.  Contributors are welcome to submit pull requests as well to add new helper methods to Scikit-Node.

[Contents](#contents)
