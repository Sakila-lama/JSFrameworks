const connect = require('connect');
const url = require('url');
const app = connect();

app.use((req, res) => {
    const query = url.parse(req.url, true).query;
    const { method, x, y } = query;
    const numX = parseFloat(x);
    const numY = parseFloat(y);
    let result;
  
    switch (method) {
      case 'add':
        result = numX + numY;
        break;
      case 'subtract':
        result = numX - numY;
        break;
      case 'multiply':
        result = numX * numY;
        break;
      case 'divide':
        result = numX / numY;
        break;
      default:
        res.end('Invalid method');
        return;
    }
  
    res.end(`${x} ${methodToSymbol(method)} ${y} = ${result}`);
  });
  
  function methodToSymbol(method) {
    switch (method) {
      case 'add': return '+';
      case 'subtract': return '-';
      case 'multiply': return '*';
      case 'divide': return '/';
      default: return '?';
    }
  }
  
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
  