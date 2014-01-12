module.exports = (grunt) ->

  require('load-grunt-tasks')(grunt)

  grunt.initConfig
    watch:
      options:
        livereload: true

      compass:
        files: ['app/styles/*.scss']
        tasks: ['sass', 'autoprefixer']

      public:
        files: ['app/index.html', 'app/scripts/*']
        tasks: ['copy']

    connect:
      dist:
        options:
          port: 9000
          open: true
          livereload: true
          base: 'dist'

    clean: ['dist']

    sass:
      dist:
        files:
          'dist/styles/main.css': 'app/styles/main.scss'

    autoprefixer:
      options:
        browsers: 'last 2 versions'

      dist:
        dest: 'dist/styles/main.css',
        src: 'dist/styles/main.css'

    copy:
      dist:
        files:[{
          expand: true
          dot: true
          cwd: 'app'
          dest: 'dist'
          src: [
            'scripts/*'
            '*.{png,html}'
            '.htaccess'
          ]
        }]

    'gh-pages':
      options:
        base: 'dist'
      src: ['**']

  grunt.registerTask('build',[
    'clean'
    'sass'
    'autoprefixer'
    'copy'
  ])

  grunt.registerTask('server',[
    'build'
    'connect'
    'watch'
  ])

  grunt.registerTask('deploy',[
    'build'
    'gh-pages'
  ])

