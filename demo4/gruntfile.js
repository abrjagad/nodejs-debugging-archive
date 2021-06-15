'use strict';

module.exports = function(grunt) {
  //debugger;
  grunt.initConfig({
    'node-inspector': {
      dev: {}
    },
    uglify: {
      dev: {
        files: {
          'dist/output.min.js': ['./print.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-node-inspector');

  grunt.registerTask('default', ['uglify']);

};
