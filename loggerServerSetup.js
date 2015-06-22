var Logger;
(function(){
  var debugSettings = Meteor.settings.debug || {logLevel:'info'};
  Logger = new BaseLogger(debugSettings.logLevel);
  // extends the use of the _log method to write to file (if it exists, else ignore log file)
  if(debugSettings.logFile){
  	Logger.logFile = Npm.require('fs');
  	var previous_log = Logger._log;
    // modify the _log functionality so that any call will write to file and then run previous _log function
  	Logger._log = function(level, args){
  		this.logFs.write(debugSettings.logFile, args)
  		previous_log.call(this, level, args);
  	}
  }
})();