'use strict';

var walk = require('rework-walk');

exports.prefix  = prefixSelector;
exports.replace = replaceSelector;

function prefixSelector(prefix) {
    return function (style) {
        walk(style, function (rule) {
            if (!rule.selectors) { return; }

            rule.selectors = rule.selectors.map(function (selector) {
                if (selector.match(/^(html|body)/)) {
                    return selector.replace(/^(html|body)/, prefix);
                }

                return prefix + ' ' + selector;
            });
        });
    };
}

function replaceSelector(search, replace) {
    return function (style) {
        walk(style, function (rule) {
            if (!rule.selectors) { return; }

            rule.selectors = rule.selectors.map(function (selector) {
                return selector.replace(search, replace);
            });
        });
    };
}
