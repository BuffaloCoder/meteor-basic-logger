// Write your package code here!
var BaseLogger;
(function(){
  BaseLogger = function(level) {
    if(Object.defineProperty)
      // Follows log4j levels, can use numbers instead as well
      Object.defineProperty(this, "logLevel", {
        get: function() {
          return this.levels[this._logLevel]; 
        },
        set: function(level) { 
          this._logLevel = this.levels.indexOf(level);
        }
      });
    else 
      this.logLevel = function(newLevel){ this._logLevel = this.levels.indexOf(level)}
    if(level && this.levels.indexOf(level) >= 0)
      this.logLevel = level;
    else
      this.logLevel = 'info';
  };

  BaseLogger.prototype = {
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
  /* 
  * Initializes it with all console functions that someone may need to call,
  *  though will not fail if bind method does not exist (but will not have those funcitons either)
  */
  if(Function.prototype.bind)
    for(key in console)
      if(typeof console[key] === 'function' && !BaseLogger.hasOwnProperty(key))
        BaseLogger[key] = console[key].bind(console);

})();
