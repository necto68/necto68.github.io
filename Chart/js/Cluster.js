/**
 * Created by Roman on 13.04.2015.
 */
function Cluster() {
    this.lastCenterX = null;
    this.lastCenterY = null;
    this.centerX = null;
    this.centerY = null;
    this.points = [];
    this.setCenter = function(x, y){
        this.lastCenterX = this.centerX;
        this.lastCenterY = this.centerY;
        this.centerX = x;
        this.centerY = y;
    };
    this.addPoint = function(point){
        this.points.push(point);
    };
    this.clear = function() {
        this.points = [];
    };
    this.checkCenter = function(){
        return !(this.lastCenterX == this.centerX && this.lastCenterY == this.centerY);
    };
    this.moveCenter = function(){
       var X = [];
       var Y = [];
        this.points.forEach(function(p){
           X.push(p.x);
           Y.push(p.y);
       });
        var minX = Math.min.apply(null, X);
        var maxX = Math.max.apply(null, X);
        var minY = Math.min.apply(null, Y);
        var maxY = Math.max.apply(null, Y);

        this.setCenter((minX+maxX)/2, (minY+maxY)/2);
    }
}
