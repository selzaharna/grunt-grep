var grunt = require('grunt');

exports.grep = {
	compile: function(test) {
		'use strict';

		test.expect(5);

		var actual = grunt.file.read('tmp/html_one_line.html');
		var expected = grunt.file.read('test/expected/html_one_line.html');
		test.equal(expected, actual, 'should remove lines matching one-line pattern from html');

        var actual = grunt.file.read('tmp/css_one_line.css');
        var expected = grunt.file.read('test/expected/css_one_line.css');
        test.equal(expected, actual, 'should remove lines matching one-line pattern from css');

        var actual = grunt.file.read('tmp/jade_one_line.jade');
        var expected = grunt.file.read('test/expected/jade_one_line.jade');
        test.equal(expected, actual, 'should remove lines matching one-line pattern from jade');

        var actual = grunt.file.read('tmp/js_one_line.js');
        var expected = grunt.file.read('test/expected/js_one_line.js');
        test.equal(expected, actual, 'should remove lines matching one-line pattern from js');

		var actual = grunt.file.read('tmp/stylus_one_line.styl');
		var expected = grunt.file.read('test/expected/stylus_one_line.styl');
		test.equal(expected, actual, 'should remove lines matching one-line pattern from stylus');

		test.done();
	}
};