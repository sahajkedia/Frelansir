var firebase = require('firebase');
var firebaseui = require('firebaseui');

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInOptions: [
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        scopes: [
          'https://www.googleapis.com/auth/contacts.readonly'
        ],
        customParameters: {
          // Forces account selection even when one account
          // is available.
          prompt: 'select_account'
        }
      },
    //   {
    //     provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //     scopes: [
    //       'public_profile',
    //       'email',
    //       'user_likes',
    //       'user_friends'
    //     ],
    //     customParameters: {
    //       // Forces password re-entry.
    // //       auth_type: 'reauthenticate'
    //     }
    //   },
    //   firebase.auth.TwitterAuthProvider.PROVIDER_ID, // Twitter does not support scopes.
    //   firebase.auth.EmailAuthProvider.PROVIDER_ID // Other providers don't need to be given as object.
    ]
  });