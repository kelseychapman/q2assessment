// load the auth variables
var configAuth = require('./auth');

module.exports = function(passport) {


    var facebookStrategy = require('passport-facebook').Strategy;

    passport.use(new FacebookStrategy({

            // pull in our app id and secret from our auth.js file
            clientID: configAuth.facebookAuth.clientID,
            clientSecret: configAuth.facebookAuth.clientSecret,
            callbackURL: configAuth.facebookAuth.callbackURL

        },

        function(token, refreshToken, profile, done) {
            process.nextTick(function() {
                User.findOne({
                    'facebook.id': profile.id
                }, function(err, user) {
                    if (err)
                        return done(err);
                    if (user) {
                        return done(null, user);
                    } else {
                        var newUser = new User();
                        newUser.facebook.id = profile.id;
                        newUser.facebook.token = token;
                        newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
                        newUser.facebook.email = profile.emails[0].value;
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }

                });
            });

        }));

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    //     // used to serialize the user for the session
    //     passport.serializeUser(function(user, done) {
    //         done(null, user.id);
    //     });
    //
    //     // used to deserialize the user
    //     passport.deserializeUser(function(id, done) {
    //         User.findById(id, function(err, user) {
    //             done(err, user);
    //         });
    //     });
};
