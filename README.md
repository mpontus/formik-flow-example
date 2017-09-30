# Formik Flow Example

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Example application to showcase formik usage with Flow

This repository contains an example application which uses formik and its respective [Flow](https://flow.org/) type-definitions.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Background

Original type definitions file was authored by [authored by @istarkov](https://github.com/jaredpalmer/formik/issues/78#issuecomment-330001137).

At the moment of writing this, type definitions are not available in the [flow-typed](https://github.com/flowtype/flow-typed) repository.

[Typing in this example](flow-typed/formik_v0.9.2.js) are based on the source code from the above discussion, minor modifications were necessary to make it compatible with latest Formik release.

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```
$ git clone https://github.com/mpontus/formik-flow-example
$ cd formik-flow-example
$ npm install
```

## Usage

To validate typings run:

```
$ npm run flow
```

Try introducing bugs to `src/Form.js` and see if flow detects them.

Check to see if props injected by Formik are correctly recognized by your editor.

## Contribute

[Open an issue](https://github.com/mpontus/formik-flow-example/issues/new) if you notice something falling out of date.

All relevant Pull Requests will be accepted.

## License

MIT
