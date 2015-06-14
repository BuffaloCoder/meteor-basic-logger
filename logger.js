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

	function checkLevel (level) {
		return this.levels.indexOf(level) <= this.levels.indexOf(this.logLevel)		
	}

	var basePublicLoggingMethods = {
		log: function(){
			var args = arguments;
			for(var i = 0; i < args.length; i++){
				if(console) console.log(args[i]);
			}
		},
		fatal: function(){
			if(checkLevel.call(this, 'fatal'))
				this.log.apply(this, arguments);	
		},
		error: function(){
			if(checkLevel.call(this, 'error'))
				this.log.apply(this, arguments);	
		},
		warn: function(){
			if(checkLevel.call(this, 'warn'))
				this.log.apply(this, arguments);
		},
		info: function(){
			if(checkLevel.call(this, 'info'))
				this.log.apply(this, arguments);
		},
		debug: function(){
			if(checkLevel.call(this, 'debug'))
				this.log.apply(this, arguments);
		},
		trace: function(){
			if(checkLevel.call(this, 'trace'))
				this.log.apply(this, arguments);	
		}
	}

	BaseLogger = function(level){
		var self = this;
		// Follows log4j levels, can use numbers instead as well
		this.levels = levels;
		this.logLevel = level || 'info';
		_.extend(this, basePublicLoggingMethods);

	}
})();
