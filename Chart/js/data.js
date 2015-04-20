/**
 * Created by Roman on 13.04.2015.
 */
var POINTS = [
    {Name:"КНР", x:17617, y:0.473},
    {Name:"США", x:17419, y:0.45},
    {Name:"Индия", x:7535, y:0.368},

    {Name:"Япония", x:4751, y:0.376},
    {Name:"Германия", x:3722, y:0.27},
    {Name:"Россия", x:3565, y:0.42},

    {Name:"Бразилия", x:3264, y:0.519},
    {Name:"Индонезия", x:2676, y:0.368},
    {Name:"Франция", x:2581, y:0.306},


    {Name:"Великобритания", x:2320, y:0.323},
    {Name:"Мексика", x:2059, y:0.483},
    {Name:"Италия", x:2035, y:0.319},

    {Name:"ЮАР", x:663, y:0.631},
    {Name:"Филиппины", x:643, y:0.448},
    {Name:"Колумбия", x:602, y:0.559},

    {Name:"Чехия", x:288, y:0.249},
    {Name:"Венесуэла", x:553, y:0.39},
    {Name:"Алжир", x:523, y:0.353},

    {Name:"Греция", x:278, y:0.343},
    {Name:"Израиль", x:258, y:0.376},
    {Name:"Португалия", x:269, y:0.385},

    {Name:"Марокко", x:242, y:0.41},
    {Name:"Дания", x:241, y:0.248},
    {Name:"Венгря", x:230, y:0.247},

    {Name:"Ирландия", x:213, y:0.34},
    {Name:"Финляндия", x:218, y:0.268},
    {Name:"Шри-Ланка", x:200, y:0.49},

    {Name:"Латвия", x:46.5, y:0.352},
    {Name:"Кипр", x:25.3, y:0.31},
    {Name:"Гвинея", x:14.7, y:0.51}



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


