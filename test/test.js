var app = require('../app');
var superagent = require('superagent');
var should = require('should');
var agent = superagent.agent();



describe('Suite one', function(){
        
    it('should redirect to dashboard if user is logged in', function(done) {
    
      agent.get('localhost:3000').end(function(err, res) {
        res.should.have.status(200);
        res.text.should.include('Energy');
        return done();
      });

    
  });
});
