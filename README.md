## Installation

Clone this repo.

Then from its root, run:

    npm install
    npx lerna bootstrap

This will install dependencies in both `back` and `front` directories.

## Usage

Run `npm start` from the root.

## Style guide

This project includes ESLint, with the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

It is set up with Husky pre-commit hooks, which check that the code in both `back` and `front` is compliant with the style guide. `git commit` fails if this is not the case!
