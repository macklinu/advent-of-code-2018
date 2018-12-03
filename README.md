# advent-of-code-2018

> Solutions to [Advent of Code 2018](https://adventofcode.com/2018) written in Python

[![Build Status](https://travis-ci.org/macklinu/advent-of-code-2018.svg?branch=master)](https://travis-ci.org/macklinu/advent-of-code-2018)

## Setup

Install [pipenv](https://pipenv.readthedocs.io/en/latest/install/). For example, on a Mac:

```sh
$ brew install pipenv
```

## Development

### `pipenv install --dev`

This will install all necessary dependencies for tests, linting, and anything that may be used in the Advent of Code solution source (trying to stick to stdlib modules as much as possible).

### `bin/check`

After installing dependencies, you can then run this command to run the tests and type checking. Exits with a non-zero code if either tests or type checking fails; otherwise, exits with zero.
