# Currency Converter Package

[![NPM Version](https://img.shields.io/npm/v/currency-converter-package.svg)](https://www.npmjs.com/package/currency-converter-package)
[![License](https://img.shields.io/npm/l/currency-converter-package.svg)](https://www.apache.org/licenses/LICENSE-2.0)

A simple and efficient currency converter package for Node.js applications.

## Installation

To install the package, use npm:

```sh
npm i currency-converter-package
```

## Usage

First, require the package in your Node.js application:

```javascript
const currencyConverter = require('currency-converter-package');
```

### Converting Currency

To convert an amount from one currency to another, use the `convert` method. The method takes three parameters: the amount, the from currency, and the to currency.

```javascript
currencyConverter.convert(100, 'USD', 'EUR')
  .then(response => {
    console.log(`100 USD is equal to ${response} EUR`);
  })
  .catch(error => {
    console.error(error);
  });
```

### Supported Currencies

The package supports a wide range of currencies. Make sure to use the correct ISO currency codes (e.g., USD, EUR, GBP).

## License

This project is licensed under the Apache License Version 2.0. See the [LICENSE](LICENSE) file for details.

## Repository

For more details, visit the repository on GitHub:

[Currency Converter Package](https://github.com/Mukundbansal10/currency-converter-package.git)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## Issues

If you encounter any issues, please report them on the [issue tracker](https://github.com/Mukundbansal10/currency-converter-package/issues).

## Author

[Mukund Bansal](https://github.com/Mukundbansal10)
