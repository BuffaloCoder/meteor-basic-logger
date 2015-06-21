var log;
(function(){
  var debugSettings = (Meteor.settings.public && Meteor.settings.public.debug) || {logLevel:'info'};
  log = new BaseLogger(debugSettings.logLevel);
})();