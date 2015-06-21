var cLogger;
(function(){
  var debugSettings = (Meteor.settings.public && Meteor.settings.public.debug) || {logLevel:'info'};
  cLogger = new BaseLogger(debugSettings.logLevel);
})();