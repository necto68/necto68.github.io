/**
 * Created by Roman on 13.04.2015.
 */
var POINTS = [
    {Name:"1", x:1, y:1},
    {Name:"2", x:2, y:1},
    {Name:"3", x:3, y:1},

    {Name:"4", x:4, y:5},
    {Name:"5", x:5, y:5},
    {Name:"6", x:6, y:5},

    {Name:"7", x:7, y:10},
    {Name:"8", x:8, y:10},
    {Name:"9", x:9, y:10}

];

var X = [];
var Y = [];
POINTS.forEach(function(p){
    X.push(p.x);
    Y.push(p.y);
});
var _minX = Math.min.apply(null, X);
var _maxX = Math.max.apply(null, X);
var _minY = Math.min.apply(null, Y);
var _maxY = Math.max.apply(null, Y);

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffle(o){
    for(var j, x, k = o.length; k; j = Math.floor(Math.random() * k), x = o[--k], o[k] = o[j], o[j] = x);
    return o;
};


