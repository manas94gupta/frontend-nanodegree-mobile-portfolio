module.exports = function(grunt) {

    // All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img/'
                }]
            }
        },
        uglify: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'js/',
                    src: ['**/*.js'],
                    dest: 'dist/js/'
                }]
            }
        },
        cssmin: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['**/*.css'],
                    dest: 'dist/css/'
                }]
            }
        },
        htmlmin: {
            build: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['**/*.html', '!node_modules/**/*.*', '!dist/**/*.*'],
                    dest: 'dist/'
                }]
            }
        }

    });

    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['imagemin', 'uglify', 'cssmin', 'htmlmin']);

};
