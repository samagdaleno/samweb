app.service('Lambda', function() {

    AWS.config.update({accessKeyId: 'accessKeyId here', secretAccessKey: 'secretAccessKey here'});
    AWS.config.region = 'us-east-1';

    AWS.config.apiVersions = {
        lambda: '2015-03-31',
        // other service API versions
    };

    var lambda = new AWS.Lambda();

    return {


        LambdaAPI: function (params,callback) {

            return lambda.invoke(params,callback);
        }
    }

});