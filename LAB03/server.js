// Import necessary modules
const connect = require('connect');
const url = require('url');
// Create a Connect server instance
const app = connect();

// Middleware to handle requests
app.use((req, res) => {
    // Parse the URL to extract query parameters
    const query = url.parse(req.url, true).query;
    const { method, x, y } = query;
    const numX = parseFloat(x); // Convert x to a floating-point number
    const numY = parseFloat(y); // Convert y to a floating-point number
    let result;
  

    // Determine the operation based on the 'method' parameter
    switch (method) {
      case 'add':
        result = numX + numY; // Perform addition
        break;
      case 'subtract':
        result = numX - numY; // Perform subtraction
        break;
      case 'multiply':
        result = numX * numY; // Perform multiplication
        break;
      case 'divide':
        result = numX / numY; // Perform division
        break;
      default:
        res.end('Invalid method'); // Send an error message for invalid methods
        return;
    }
  
    // Send the result of the operation back to the client
    res.end(`${x} ${methodToSymbol(method)} ${y} = ${result}`);
  });
  
  // Helper function to convert the method string to a mathematical symbol
  function methodToSymbol(method) {
    switch (method) {
      case 'add': return '+';
      case 'subtract': return '-';
      case 'multiply': return '*';
      case 'divide': return '/';
      default: return '?'; // Default case if the method is not recognized
    }
  }
  
  // Start the server on port 3000
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000'); // Log the server start status
  });
  