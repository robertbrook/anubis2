
exports.list = function(req, res){
  res.render('asbo', { title: 'Anti-social Behaviour, Crime and Policing Bill' });
};


exports.demo = function(req, res){
  res.end(JSON.stringify(req.query));
};