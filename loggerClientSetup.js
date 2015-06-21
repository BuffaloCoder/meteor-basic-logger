var log;
(function(){
  var debugSettings = (Meteor.settings.public && Meteor.settings.public.debug) || {logLevel:'info'};
  var inBetween = new BaseLogger(debugSettings.logLevel);
  log = inBetween.log;
  for(key in inBetween)
    log[key] = inBetween[key];
})();