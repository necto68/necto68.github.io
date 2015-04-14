/**
 * Created by Roman on 13.04.2015.
 */
var k = 3;
var Clusters = [];
var rnd = shuffle(POINTS);
//init Clusters
for (var i = 0; i <= k-1; i++){
    var c = new Cluster();
    c.setCenter(rnd[i].x, rnd[i].y);
    Clusters.push(c);

}

//bind points to Clusters
function Bind() {
    POINTS.forEach(function(p){
        var Dist = [];
        Clusters.forEach(function(cl){
            Dist.push(Math.sqrt(Math.pow((cl.centerX- p.x),2)+Math.pow((cl.centerY- p.y),2)))
        });
        var minDist = Math.min.apply(null, Dist);
       for (var i = 0; i <= Dist.length; i++){
            if (Dist[i] == minDist){
                Clusters[i].addPoint(p);
                break;
            }
        }
    });

    var checkNum = 0;
    Clusters.forEach(function(cl){
        checkNum += Number.parseInt(String(Number(cl.checkCenter())));
    });

    if (checkNum == 0){
        return;
    }
    else {
        Clusters.forEach(function(cl){
            cl.moveCenter();
            cl.clear();
        });
        Bind();
    }
}
Bind();
var pointArray = [];
Clusters.forEach(function(cl, iCl){

    cl.points.forEach(function(p){
        var arr = [];
        arr.push(p.x);
        arr.push(p.y);
        arr.push(String(iCl));
        pointArray.push(arr);
    });
    var arr = [];
    arr.push(cl.centerX);
    arr.push(cl.centerY);
    arr.push(String(iCl+' center'));
    pointArray.push(arr);
});
