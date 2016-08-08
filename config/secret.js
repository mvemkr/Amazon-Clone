module.exports = {
    database: '',
    port: 3000,
    secretKey: '',

    facebook: {
        clientID: process.env.FACEBOOK_ID || '',
        clientSecret: process.env.FACEBOOK_SECRET || '',
        profileFields: ['emails', 'displayName'],
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    }
}