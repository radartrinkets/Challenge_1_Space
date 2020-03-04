google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart1);

      function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Time in hours', 'Speed'],
          ['10.00',  24375],
          ['11.00',  25845],
          ['12.00',  25993],
          ['13.00',  25487],
          ['14.00',  25392],
          ['15.00',  25635],
          ['16.00',  25635],
          ['17.00',  25635],
          ['18.00',  25635]
        ]);

        var options = {
          
          curveType: 'function',
          hAxis: {title: 'Time in hours', titleTextStyle: {color: 'white', fontName:'Josefin Sans'}, textStyle: {color: 'white', fontName:'Josefin Sans'}},
          vAxis: {title: 'km/h', textStyle: {color: 'white', fontName:'Josefin Sans'}, titleTextStyle: {color: 'white'}},
          backgroundColor: '#212121',
          titleTextStyle: { color: 'white',
                            fontName: 'Josefin Sans',
                            bold: 'false'}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('speed'));

        chart.draw(data, options);
      }


google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart2);
       function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Nitrogen',     78],
          ['Oxygen',      21],
          ['Argon',  0.93],
          ['Carbon Dioxide', 0.04],
          ['Other',    0.03]
        ]);

        var options = {
          legend: {textStyle: {color: 'white', fontName: 'Josefin Sans'}, alignment: 'center'},
          pieSliceBorderColor: '#212121',
          pieHole: 0.4,
          backgroundColor: 'transparent',
          colors: [ "#003f5c",
                    "#58508d", 
                    "#bc5090", 
                    "#ff6361"],
        };

        var chart = new google.visualization.PieChart(document.getElementById('atmosfeer'));
        chart.draw(data, options);
      }



      


      google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart3);

      function drawChart3() {

        var data = google.visualization.arrayToDataTable([
          ['G-force', 0.378]
        ], true);

        var options = {
          width: 150, height: 150,
          majorTicks: 10,
          minorTicks: 5,
          max: 1,
        };

        var chart = new google.visualization.Gauge(document.getElementById('gravity'));

        chart.draw(data, options);

      //setInterval(function() {
       //data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
     //   chart.draw(data, options);
 //       }, 13000)
   //   }

      




}