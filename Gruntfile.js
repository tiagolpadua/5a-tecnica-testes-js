module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '**',
                    dest: 'www'
                }, {
                    expand: true,
                    cwd: 'node_modules',
                    flatten: true,
                    src: [
                        'jquery/dist/jquery.min.js',
                        'bootstrap/dist/css/bootstrap.min.css',
                        'bootstrap/dist/js/bootstrap.min.js'
                    ],
                    dest: 'www'
                }]
            }
        },
        clean: ['www'],
        connect: {
            server: {
                options: {
                    base: 'www',
                    port: 9090
                }
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            dev: {
                options: {
                    force: true
                },
                files: {
                    src: ['src/**/*.js'],
                }
            },
            dist: {
                files: {
                    src: ['src/**/*.js'],
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        watch: {
            files: ['src/**/*.*'],
            tasks: ['clean', 'jshint:dev', 'karma', 'copy'],
            options: {
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['clean', 'jshint:dev', 'karma', 'copy', 'connect', 'watch']);
    grunt.registerTask('dist', ['clean', 'jshint', 'karma', 'copy']);
};