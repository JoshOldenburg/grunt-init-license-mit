exports.description = 'Add the MIT license.';

exports.warnOn = ['LICENSE.md', 'LICENSE.txt', 'LICENSE'];

exports.template = function(grunt, init, done) {
	init.process({}, [
		{
			name: 'year',
			message: 'What is the copyright year?',
			default: (new Date()).getFullYear(),
		},
		{
			name: 'author_name',
			message: 'Who does the copyright belong to?',
		}
	], function(err, props) {
		var files = init.filesToCopy(props);
		init.copyAndProcess(files, props);

		done();
	});

};
