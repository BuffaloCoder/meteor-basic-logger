// Write your package code here!
var BaseLogger;
(function(){
  var basePublicLoggingMethods = {
    levels:[
      'off',
      'fatal',
      'error',
      'warn',
      'info',
      'debug',
      'trace'
    ],
    _curLevel: null,
    log: function(){
      var curLevel = this._curLevel;
      for(var i = 0; i < arguments.length; i++){
        if(console.error && curLevel && curLevel <= 2) console.error(arguments[i]);
        else if(console.warn && curLevel && curLevel === 3) console.warn(arguments[i]);
        else if(console.info && curLevel && curLevel === 4) console.info(arguments[i]);
        else if(console.trace && curLevel && curLevel === 6) console.trace(arguments[i]);
        else if(console.log) console.log(arguments[i]);
      }
      this._curLevel = null;
    },
    _log: function(level, args){
      this._curLevel = level;
      if(level <= this._logLevel && console)
        this.log.apply(this, args);
    },
    fatal: function(){
      this._log(1, arguments); 
    },
    error: function(){
      this._log( 2, arguments);   
    },
    warn: function(){
      this._log( 3, arguments); 
    },
    info: function(){
      this._log( 4, arguments); 
    },
    debug: function(){
      this._log( 5, arguments); 
    },
    trace: function(){
      this._log( 6, arguments);   
    }
  };
  // Initializes it with all console functions that someone may need to call
  for(key in console)
    if(typeof console[key] === 'function' && !basePublicLoggingMethods.hasOwnProperty(key))
      basePublicLoggingMethods[key] = console[key].bind(console);

  BaseLogger = function(level) {
    var logger = Object.create(basePublicLoggingMethods);
    if(Object.defineProperty)
      // Follows log4j levels, can use numbers instead as well
      Object.defineProperty(logger, "logLevel", {
        get: function() {
          return this.levels[this._logLevel]; 
        },
        set: function(level) { 
          this._logLevel = this.levels.indexOf(level);
        }
      });
    else 
      logger.logLevel = function(newLevel){ this._logLevel = this.levels.indexOf(level)}
    if(level && logger.levels.indexOf(level) >= 0)
      logger.logLevel = level;
    else
      logger.logLevel = 'info';
    return logger;
  };
})();
