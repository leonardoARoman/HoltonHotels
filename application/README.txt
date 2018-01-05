1. Create express framework: express <directory_name> (i.e application)

2. cd into directory (cd application) and configure all dependencies in the json file: npm install
  ->  "body-parser": "~1.18.2",
      "connect-flash": "^0.1.1",
      "cookie-parser": "~1.4.3",
      "debug": "~2.6.9",
      "express": "~4.15.5",
      "express-messages": "*",
      "express-session": "^1.15.6",
      "express-validator": "^4.3.0",
      "jade": "~1.11.0",
      "morgan": "~1.9.0",
      "multer": "*",
      "passport": "*",
      "passport-http": "*",
      "passport-local": "*",
      "serve-favicon": "~2.4.5"
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
