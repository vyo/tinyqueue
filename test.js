'use strict';

var test = require('tape');
var Queue = require('./index');

var data = [];
for (var i = 0; i < 100; i++) {
    data.push(Math.floor(100 * Math.random()));
}

var sorted = data.slice().sort(function (a, b) {
    return a - b;
});

test('maintains a priority queue', function (t) {
    var queue = new Queue();
    for (var i = 0; i < data.length; i++) queue.push(data[i]);

    var result = [];
    while (queue.length) result.push(queue.pop());

    t.same(result, sorted);

    t.end();
});

test('accepts data in constructor', function (t) {
    var queue = new Queue(data.slice());

    var result = [];
    while (queue.length) result.push(queue.pop());

    t.same(result, sorted);

    t.end();
});