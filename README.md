Rework Mutate Selectors
=======================

[![Dependency Status](https://gemnasium.com/ericf/rework-mutate-selectors.png)](https://gemnasium.com/ericf/rework-mutate-selectors)
[![npm Version](https://badge.fury.io/js/rework-mutate-selectors.png)](https://npmjs.org/package/rework-mutate-selectors)

Mutate CSS selectors via [Rework][].


[Rework]: https://github.com/visionmedia/rework


Usage
-----

This package can be used directly as a [Rework][] plugin, or via Grunt with
using the companion [grunt-css-selectors][] plugin.

### Rework Plugin

```js
var rework    = require('rework'),
    selectors = require('rework-mutate-selectors');

var css = rework(inputCSS)
    .use(selectors.prefix('.foo'))
    .use(selectors.replace(/^\.pure/g, '.bar'))
    .toString();
```

### Grunt Plugin

This Rework plugin was originally written to be used by a Grunt task, so people
using Grunt who want to mutate CSS selectors as a build task should use the
companion **[grunt-css-selectors][]** plugin.

The plugin is fully documented with [Grunt usage examples][].


[grunt-css-selectors]: https://github.com/ericf/grunt-css-selectors
[Grunt usage examples]: https://github.com/ericf/grunt-css-selectors#usage-examples


License
-------

This software is free to use under the Yahoo! Inc. BSD license.
See the [LICENSE file][] for license text and copyright information.


[LICENSE file]: https://github.com/ericf/rework-mutate-selectors/blob/master/LICENSE
