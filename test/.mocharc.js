module.exports = {
    diff: true,
    extension: ['js'],
    require: 'babel-core/register',
    spec: './test/integration/*.js',
    package: './package.json',
    reporter: 'spec',
    slow: 5000,
    timeout: 2000,
  };
  
  