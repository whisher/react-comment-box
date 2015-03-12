'use strict';

/* global config:true */
/* exported config */

global.SRC_FOLDER = 'public';
global.SCRIPTS_FOLDER = SRC_FOLDER + '/modules';
global.BUILD_FOLDER = 'build';
global.RELEASE_FOLDER = 'dist';
global.TMP_FOLDER = 'tmp';

var config = {
    paths: {
        src: {
            index: SRC_FOLDER + '/index.html',
            entryPoint: './' + SRC_FOLDER + '/js/app.js',
            mainStyles: SRC_FOLDER + '/scss/app.scss',
           /* styles: SRC_FOLDER + '/styles/*.scss',*/
            
            fonts: [
                'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/**',
                'bower_components/fontawesome/fonts/**'
            ],
            assets: [
                SRC_FOLDER + '/favicon.ico',
                SRC_FOLDER + '/humans.txt',
                SRC_FOLDER + '/robots.txt',
                SRC_FOLDER + '/comments.json'
            ],
            images: SRC_FOLDER + '/images/**/*',
            server: ['./server.js', './server/**/*.js']
        },
        dest: {
            build: {
                index: BUILD_FOLDER,
                styles: BUILD_FOLDER + '/css',
                js: BUILD_FOLDER + '/js',
                fonts: BUILD_FOLDER + '/fonts',
                images: BUILD_FOLDER + '/images',
            },
            dist: {
                index: RELEASE_FOLDER,
                styles: RELEASE_FOLDER + '/css',
                js: RELEASE_FOLDER + '/js',
                fonts: RELEASE_FOLDER + '/fonts',
                images: RELEASE_FOLDER + '/images'
            }
        }
    },
    filenames:{ 
        styles: 'bundle.css',
        app: 'app.js'
    }
};

global.config = config;