var LaunchDarkly = require('ldclient-node');
ldclient = LaunchDarkly.init('sdk-12df30fb-03d7-44b3-9885-d26b80c2bce3')
ldclient.once('ready', function() {
  ldclient.variation('new-image', {key: 'amjjunk@gmail.com'}, false, function(err, showFeature) {
    if (showFeature) {
        // application code to show the feature
        <iframe src="https://drive.google.com/file/d/1z8gpaaYEUmhgC9CNhhsbLdSCl463iDdm/preview" width="320" height="240"></iframe>
    } else {
        // the code to run if the feature is off
        <iframe src="https://drive.google.com/file/d/1lTQEKBCWTVv_JmhVWXtutdnkk2LKn2h5/preview" width="320" height="240"></iframe>
    }
  });
});
var user = {
  firstName: 'Andrew',
  lastName: 'Jones',
  key: 'amjjunk@gmail.com',
  custom: {
    groups: 'beta_testers'
  }
};

client.once('ready', function() {
  client.variation('new-image', user, false, function(err, showFeature) {
    if (showFeature) {
      // application code to show the feature
      console.log('Showing your feature to ' + user.key );
    } else {
      // the code to run if the feature is off
      console.log('Not showing your feature to ' + user.key);
    }

    client.flush(function() {
      client.close();
    });
  });
});
