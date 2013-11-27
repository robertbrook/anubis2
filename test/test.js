var app = require('../app');
var superagent = require('superagent');
var should = require('should');
var agent = superagent.agent();

describe('the server', function(){

		it('should respond with status 200 when called without a path', function(done) {
			agent.get('localhost:3000').end(function(err, res) {
				res.should.have.status(200);
				return done();
				});
			});

		it('should contain the text "Energy" when called without a path', function(done) {
			agent.get('localhost:3000').end(function(err, res) {
				res.text.should.include('Energy');
				return done();
				});
			});
		});
