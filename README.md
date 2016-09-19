# Introduction

Sounder Radio is a simple radio web app powered by [Soundcloud](http://soundcloud.com) HTTP and widget APIs. It is built using Angular2 with the [angular2-seed project](https://github.com/mgechev/angular2-seed) serving as the base. Sounder Radio is a work in process.

Sounder Radio uses the following dependencies:

- [Momentjs](http://momentjs.com)
- [Angular2Moment](https://github.com/urish/angular2-moment)
- [Soundcloud Widget](https://github.com/crookedneighbor/soundcloud-widget)
- [Angular2Toaster](https://github.com/stabzs/Angular2-Toaster)
- [Bootstrap 4](http://v4-alpha.getbootstrap.com)

# Live Demo

[Go here](http://sounderproject.surge.sh) to see it in action.

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.

**Here is how to [speed-up the build on Windows](https://github.com/mgechev/angular2-seed/wiki/Speed-up-the-build-on-Windows)**.


```bash
git clone https://github.com/JavierPDev/SounderRadio.git
cd SounderRadio
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start

# dev build
npm run build.dev
# prod build
npm run build.prod
# prod build with AoT compilation
npm run build.prod.exp

