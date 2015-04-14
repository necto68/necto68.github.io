/**
 * Created by Roman on 13.04.2015.
 */
google.load('visualization', '1', {'packages':['corechart']});
google.setOnLoadCallback(drawChart);

function drawChart () {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Hours Studied');
    data.addColumn('number', 'Final');
    data.addColumn({type:'string', role:'tooltip'});
    /*data.addColumn('number', 'Final1');
    data.addColumn({type:'string', role:'tooltip'});
    data.addColumn('number', 'Final11');
    data.addColumn({type:'string', role:'tooltip'});*/


    /*data.addRows([
        [1, 1, '1', null, '', null, ''],
        [2, 1, '2', null, '', null, ''],
        [3, 1, '3', null, '', null, ''],


        [4, null, '', 5, '4', null, ''],
        [5, null, '', 5, '5', null, ''],
        [6, null, '', 5, '6', null, ''],


        [7, null, '', null, '', 10, '7'],
        [8, null, '', null, '', 10, '8'],
        [9, null, '', null, '', 10, '9']
    ]);*/
    data.addRows(pointArray);
    var options = {
        width: 900,
        height: 500,
        title: 'Students\' Final Grades',
        hAxis: {title: 'Hours Studied'},
        vAxis: {title: 'Grade'}
        //legend:'none'
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('ScatterChart'));

    chart.draw(data, options);
}