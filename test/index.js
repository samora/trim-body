var trimBody = require('..');

describe('trim-body', function() {
  it('should work', function() {
    var body = {
      name: {
        first: ' First    ',
        last: '   Last'
      },

      email: '  user@example.com  '
    };

    trimBody(body);

    body.name.first.should.be.equal('First');
    body.name.last.should.be.equal('Last');
    body.email.should.be.equal('user@example.com');
  });
});