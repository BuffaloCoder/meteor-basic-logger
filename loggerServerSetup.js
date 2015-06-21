var Logger;
(function(){
  var debugSettings = Meteor.settings.debug || {logLevel:'info'};
  Logger = new BaseLogger(debugSettings.logLevel);
  // TODO extend the use of the log method to write to file (if it exists), and to (possibly) ignore writes to log.
  if(debugSettings.logFile)
  	// modify the log functionality so that any call will write to file and then run super log
})();