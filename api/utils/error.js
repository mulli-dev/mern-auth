export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};

/*In summary, this code defines a function called
 errorHandler that creates 
and returns a custom error object. 

The error object has properties statusCode and message,
 and the values of these properties are determined by 
the parameters passed to the function.

*/
