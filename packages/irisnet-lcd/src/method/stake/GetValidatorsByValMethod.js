const AbstractMethod = require('../../lib/AbstractMethod');
class GetValidatorsMethod extends AbstractMethod{
    /**
     *
     * @constructor
     */
    constructor(host) {
        super(host,'/stake/validators');
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     */
    beforeExecution(param) {}


    /**
     * This method will be executed after the RPC request.
     *
     * @method afterExecution
     *
     * @param {*} response
     *
     * @returns {*}
     */
    afterExecution(response) {
        return response;
    }
}

module.exports = GetValidatorsMethod;