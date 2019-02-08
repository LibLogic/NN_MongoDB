var mongoose = require('mongoose');

before(function(done){
	mongoose.set('useFindAndModify', false);
	mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true });
	mongoose.connection.once('open', function(){
		console.log('Connection Successful!');
		done();
	}).on('error', function(error){
			console.log('Error: ', error);
		});
});

beforeEach(function(done){
	mongoose.connection.collections.mariochars.drop(function(){
		done();
	});
});