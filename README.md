Amazon Clone
============

## Prerequisites
- [Node.js](http://nodejs.org/) - install via
    - [homebrew](http://brew.sh/) on Macs
    - [chocolatey](http://chocolatey.org/) on Windows
    - or grab the installer from [the node.js website](http://nodejs.org/)
- [NPM](https://www.npmjs.org/) - this comes with Node.js
- [nodemon](http://nodemon.io) - automatically reload node server, however not necessary.
- Also going to need to get a stripe account to grab your api key and publisher key.

## Initial Setup
- Grab the source
- Run `npm install` to get all the dependencies
- Run 'bower install' to get client dependencies (I have referenced local versions and planned on doing gulp to build)
- Use brew install elasticsearch on mac or choco install elasticsearch on windows
- Setup database and populate the fields in secret.js
- Create facebook app in developers.facebook.com and add secret and id to secret.js
- Use admin routes to add categories.  You can use the api to populate the categories by sending the name of the category you want to populate.
- Input stripe publisher key in custom.js and add the key to mainjs where stripe is imported.
