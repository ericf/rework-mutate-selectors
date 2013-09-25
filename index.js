'use strict';

exports.prefix  = prefixSelector;
exports.replace = replaceSelector;

function prefixSelector(prefix) {
    return function (style) {
        style.rules.forEach(function (rule) {
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
        style.rules.forEach(function (rule) {
            if (!rule.selectors) { return; }

            rule.selectors = rule.selectors.map(function (selector) {
                return selector.replace(search, replace);
            });
        });
    };
}
