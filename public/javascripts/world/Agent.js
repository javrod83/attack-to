define([
	"./common/Model"
],

function(Model) {

		// pseudo constructor
		function Agent(word,name) {

			Model.call(this) ;
			this._world = world ;
			this._name  = name ;

			this._life			= 100 ;
			this._position		= { "x": 0 , "y": 0} ;
			this._dimentions	= {"width":30,"height":80} ;
			this._aim_angle		= 90 ; 
			this._direction		= "left";
			return this;
		}

        // The Friend class extends the base Model class.
        Agent.prototype = Object.create( Model.prototype );

        Agent.prototype.getName = function()
        	{
        		return (this._name);
        	}
        
        Agent.prototype.getPos = function()
        	{
        		return (this._position)
        	}

        Agent.prototype.setPos = function(new_pos)
        	{
        		this._position = new_pos ;
        	}

        Agent.prototype.

		// return the constructor function
		return (Agent));

	});

