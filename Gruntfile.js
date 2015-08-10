module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
    watch: {
      scripts: {
        files: 'src/**/*.es6.js',
        tasks: ['delete', 'babel'],
        options: {
          debounceDelay: 250,
        }
      }
    },
    clean: {
      dist: {
        src: ['dist/**']
      }
    },
    babel: {
      options: {
        sourceMap: true,
        optional: ['es7.decorators']
      },
      es6: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.es6.js'],
          dest: 'js',
          ext: '.js',
        }]
      }
    }
  });

  grunt.registerTask('delete', ['clean'])
  grunt.registerTask('default', ['delete', 'babel']);

}
