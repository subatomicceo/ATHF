module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
			compile: {
				options: {
					// paths: ['path/to/import', 'another/to/import'],
					// import: [      //  @import 'foo', 'bar/moo', etc. into every .styl file
					// 	'foo',       //  that is compiled. These might be findable based on values you gave
					// 	'bar/moo'    //  to `paths`, or a plugin you added under `use`
					// ]
				},
				files: {
					'dist/css/app.css': ['stylus/*.styl'] // compile and concat into single file
				}
			}
		},
    watch: {
      files: ['stylus/*.styl'],
      tasks: ['stylus']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.registerTask('default', ['watch']);

};