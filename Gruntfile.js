/*
 * jQuery selectRange plugin
 * https://github.com/makingoff/jquery-selectRange
 *
 * Copyright (c) 2013 makingoff <mail@makingoff.name>
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Uglyfy js
    uglify: {
      min: {
        files: {
          'jquery.selectRange.min.js': 'jquery.selectRange.js'
        }
      }      
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['uglify']);

};
