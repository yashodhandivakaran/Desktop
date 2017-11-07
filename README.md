# Desktop
### Quickly start building cross platform Desktop Apps
[Electron](http://electron.atom.io/) application boilerplate based on [React](https://facebook.github.io/react/), [Redux](https://github.com/reactjs/redux), [React Router](https://github.com/reactjs/react-router), [Webpack](http://webpack.github.io/docs/), [Redux-Saga](https://redux-saga.js.org/).

# Install

Install Electron command globally in your $PATH
```bash
npm install electron -g
```
Clone this repo via git and change current directory to this repo:
```bash
git clone --depth=1 git@github.com:yashodhandivakaran/Desktop.git
cd Desktop
```
Install all the dependencies:
```bash
npm install
```

# Run

To start the app:
```bash
npm run dev
```
This will initiate webpack build process, once done it will start the electron app main window.

# Project Description

Desktop is a tool to quickly start building cross platform Desktop applications with zero configuration.
The aim of this project is to provide clean architecture and boilerplate code for making production ready Electron Apps.
Use [React](https://facebook.github.io/react/) for UI and state management is done with [Redux](https://github.com/reactjs/redux)


# TODO
- [X] Redux-Saga
- [ ] Api calls demo
- [ ] Sqlite setup and its demo
- [ ] Setup electron-packager
