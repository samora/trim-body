# trim-body

Trim parsed request body or any object with strings that need trimming in one go.

Modifies object in place.

## Installation

```
npm install trim-body
```

## Usage

```javascript
var body = {
  name: {
    first: ' First    ',
    last: '   Last'
  },

  email: '  user@example.com  '
};

trimBody(body);

// body === {
//  name: {
//    first: 'First',
//    last: 'Last'
//  },
//
//  email: 'user@example.com'
// }
```

## License
MIT