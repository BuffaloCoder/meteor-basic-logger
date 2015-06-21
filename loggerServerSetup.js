var sLogger;
(function(){
  var debugSettings = Meteor.settings.debug || {logLevel:'info', logFile:'log.txt'};
  sLogger = new BaseLogger(debugSettings.logLevel);
  // extend the use of the log method to write to file (if it exists), and to (possibly) ignore writes to log.
})();