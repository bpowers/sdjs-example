To develop locally, three web technologies are used: bower, npm and
grunt.  Bower is used to manage libraries (like sd.js) used in the
browser, npm is used to manage tools used during development, and
Grunt is the JS-world-version of Make.

To develop:

```
$ git clone https://github.com/bpowers/sdjs-example
$ cd sdjs-example
$ npm install
$ bower install
$ grunt serve # this will open up the page in your browser,
              # and refresh the contents everytime you save a file
$ grunt build # this will 'compile' the website for putting on the
              # web or an internal network - the resulting website
	      # will not access any external resources
```
