'use strict';

module.exports = function sass(grunt) {
  // Load task
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Options
  return {
	dist: {
		files: {
			'public/style/style.css' : 'sass/main.scss'
		}
	}
  };
};
