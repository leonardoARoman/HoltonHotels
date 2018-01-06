1. Create express framework:
  -> npm install -g express-generator
  -> express <directory_name> (i.e application)
2. cd into directory (cd application) and configure all dependencies in the json file:
  -> npm install --save body-parser
                        connect-flash
                        express-messages
                        express-session
                        express-validator
                        multer
                        passport
                        passport-http
                        passport-local
                        mysql
  ->To test server run: npm start
  ->To restart server automatically run: nodemon

3. Add bootstrap.js, bootstrap.css into javascripts, stylesheets folders respectively
    ->application->public->javascripts
                         ->stylesheets

4. In view start designing the User interface of the web app:
  ->Using Jade (html framework)
  ->All child pages might derive layout.jade file
  ->index.jade file might be use as the home directory
  ->Populate the view folders with all necessary html files (jade files)
