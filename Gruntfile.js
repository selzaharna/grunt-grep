/*
 * grunt-grep
 * https://github.com/msemenistyi/grunt-version
 *
 * Copyright (c) 2013 Mykyta Semenistyi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    clean: {
      tests: ['tmp'],
    },

    grep: {
      css: {
        files: {
          'tmp/stylus.styl': ['test/fixtures/stylus.styl'],
        },
        options: {
          pattern: "modern"
        }
      }
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', ['clean', 'grep']);

  grunt.registerTask('default', ['jshint']);

};
