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
  var curLevel;
  var _log = function(level, args){
    curLevel = level;
    if(level <= this._logLevel && console)
      this.log.apply(this, args);
  }

  var basePublicLoggingMethods = {
    logLevel: 'info',
    _logLevel: levels.indexOf(this.logLevel),
    log: function(){
      for(var i = 0; i < arguments.length; i++){
        if(curLevel && curLevel <= 2) console.error(arguments[i]);
        else if(curLevel && curLevel === 4) console.info(arguments[i]);
        else console.log(arguments[i])
      }
      curLevel = null;
    },
    fatal: function(){
      _log.call(this, 1, arguments); 
    },
    error: function(){
      _log.call(this, 2, arguments);   
    },
    warn: function(){
      _log.call(this, 3, arguments); 
    },
    info: function(){
      _log.call(this, 4, arguments); 
    },
    debug: function(){
      _log.call(this, 5, arguments); 
    },
    trace: function(){
      _log.call(this, 6, arguments);   
    }
  };

  BaseLogger = function(level) {
    var obj = Object.create(basePublicLoggingMethods);
    // Follows log4j levels, can use numbers instead as well
    obj.levels = levels;
    if(level && obj.levels.indexOf(level) >= 0){
      obj.logLevel = level;
      // Internally maintained and used logLevel 
      // TODO on set, modify the _logLevel as well, then remove this line
      obj._logLevel = obj.levels.indexOf(obj.logLevel);
    }
    return obj;

  };
})();
