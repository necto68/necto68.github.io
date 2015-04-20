/**
 * Created by Roman on 13.04.2015.
 */
var k = prompt('Количество кластеров', 4);
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


//create pointArray
var pointArray = [];
for(i=0; i<=Clusters.length*2+1; i++){

}
Clusters.forEach(function(cl, iCl){

    cl.points.forEach(function(p){
        var arr = [];
        arr.push(p.x);
        while(arr.length!=1+(iCl+1)*2-2){
            arr.push(null);
            arr.push('');
        }
        arr.push(p.y);
        arr.push(p.Name);
        while(arr.length!=1+Clusters.length*2){
            arr.push(null);
            arr.push('');
        }

        pointArray.push(arr);
    });
});
