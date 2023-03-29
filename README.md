# Gauss-Numeric-Integration

This is a package that calculates the numeric integral of a regular funcion using Gauss Quadrature.

//Example code:

// GaussIntegration(f, n, a, b)
// f is the function to be integrated of single variable
// n is the number of Gauss points
// a is the lower limit of integration
// b is the upper limit of integration

function f(x) {
return x;
}

console.log(GaussIntegration(f, 4, 0, 1)); // shoud return 0.4999999999999968
