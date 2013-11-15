/ Define the base / core Model class.
define(
    function(){
 
 
        // I am the internal, static counter for the number of models
        // that have been created in the system. This is used to
        // power the unique identifier of each instance.
        var instanceCount = 0;
 
 
        // I get the next instance ID.
        var getNewInstanceID = function(){
 
            // Precrement the instance count in order to generate the
            // next value instance ID.
            return( ++instanceCount );
 
        };
 
 
        // -------------------------------------------------- //
        // -------------------------------------------------- //
 
 
        // I return an initialized object.
        function Model(){
 
            // Store the private instance id.
            this._instanceID = getNewInstanceID();
 
            // Return this object reference.
            return( this );
 
        }
 
 
        // I return the current instance count. I am a static method
        // on the Model class.
        Model.getInstanceCount = function(){
 
            return( instanceCount );
 
        };
 
 
        // Define the class methods.
        Model.prototype = {
 
            // I return the instance ID for this instance.
            getInstanceID: function(){
 
                return( this._instanceID );
 
            }
 
        };
 
 
        // -------------------------------------------------- //
        // -------------------------------------------------- //
 
 
        // Return the base Model constructor.
        return( Model );
 
 
    }
);
