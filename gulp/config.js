'use strict';

global.SRC_FOLDER = 'public';
global.BUILD_FOLDER = 'build';

var config = {
    paths: {
        src: {
            index: SRC_FOLDER + '/index.html',
            entryPoint: './' + SRC_FOLDER + '/js/app.js',
            mainStyles: SRC_FOLDER + '/scss/app.scss',
            fonts: [
                'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/**'
            ],
            assets: [
                SRC_FOLDER + '/favicon.ico',
                SRC_FOLDER + '/humans.txt',
                SRC_FOLDER + '/robots.txt'
            ]
        },
        dest: {
            build: {
                index: BUILD_FOLDER,
                styles: BUILD_FOLDER + '/css',
                js: BUILD_FOLDER + '/js',
                fonts: BUILD_FOLDER + '/fonts'
            }
        }
    },
    filenames:{
        styles: 'bundle.css',
        app: 'app.js'
    },
    watch: {
      src: 'public/**/*.*',
      tasks: ['scripts', 'scss']
    }
};

global.config = config;
