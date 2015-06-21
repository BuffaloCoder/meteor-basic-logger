// Write your package code here!
var BaseLogger;
(function(){
	var levels = [
		'off',
		'fatal',
		'error',
		'warn',
		'info',
		'debug',
		'trace'
	];

	// TODO attempt to use the proper console.log features (info, error, log) when possible
	var basePublicLoggingMethods = {
		log: function(level, args){
			if(level <= this._logLevel)
				for(var i = 0; i < args.length; i++){
					if(console) console.log(args[i]);
				}
		},
		fatal: function(){
			this.log(1, arguments);	
		},
		error: function(){
			this.log(2, arguments);		
		},
		warn: function(){
			this.log(3, arguments);	
		},
		info: function(){
			this.log(4, arguments);	
		},
		debug: function(){
			this.log(5, arguments);	
		},
		trace: function(){
			this.log(6, arguments);		
		}
	}

	BaseLogger = function(level) {
		// Follows log4j levels, can use numbers instead as well
		this.levels = levels;
		this.logLevel = level || 'info';
		this._logLevel = this.levels.indexOf(this.logLevel);
		_.extend(this, basePublicLoggingMethods);

	};
})();
