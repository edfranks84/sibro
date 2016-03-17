# Gulp Lunchbox

To get started is relatively simple. At the moment we are testing the new scaffold without Slush while we try to remove errors that team members are experiencing. To get started —

1. `git clone git@bitbucket.org:visualdecree/gulp-lunchbox.git` (into your project dir)
2. rename the folder from gulp-lunchbox to <project-name>
3. change the project name in the package.json (this is because gulp will name the js files based on the name in the package.json)
4. install all the required depancies listed in the package.json `npm install`
5. run `gulp setup` — this ensures package name is applied to css/js and links to files in the index.html
6. run `gulp` and get coding!


## Basic Structure

```
├── assets/
│   ├── css
│   ├── fonts
│	├──	images
│	├──	js
│	│	├──	helpers
│	│	├──	plugins
│	│	├──	src
│	│	└──	vendor
│	└──	scss
│		├──	modules
│		└──	partials
├── .gitignore
├── bower.json
├── package.json
├── gulpfile.js
└── index.html
```

## Issues

Please report issues here. Errors encountered while installing are generally to do with Gyp. From the looks of things it's a widely reported issue that is not to do with the scaffold we're making but rather one of the dependancies. 

# Using the dev branch

Currently there is a branch called bower. If you use this Branch — as the name suggests — it now has Bower for fetching scss dependencies like breakpoints.

### The Process

Run `git clone -b bower_update git@bitbucket.org:visualdecree/gulp-lunchbox.git`

Now you have the dev bower branch, you can run `bower install`. This will download Breakpoints.scss, Susy and Respond.scss. Now you're ready to run `npm install`.

Once the download completes, enter your package.json file and change the project name. Save this file, then run `gulp setup`. This will ensure the css file and main js file are named accordingly as well as ensuring links to these files are set in the *index.html*. 

Now you're all set. Run `gulp` and you're ready to go.
