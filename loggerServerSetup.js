var Logger;
(function(){
  var debugSettings = Meteor.settings.debug || {logLevel:'info'};
  Logger = new BaseLogger(debugSettings.logLevel);
  // TODO extend the use of the _log method to write to file (if it exists, else ignore log file)
  if(debugSettings.logFile)
    // modify the _log functionality so that any call will write to file and then run super _log
})();