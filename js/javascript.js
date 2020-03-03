google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart1);

      function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Time in hours', 'Speed'],
          ['2004',  1000],
          ['2005',  1170],
          ['2006',  660],
          ['2007',  1030]
        ]);

        var options = {
          
          curveType: 'function',
          hAxis: {title: 'Time in hours', titleTextStyle: {color: 'white'}},
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
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          

          pieHole: 0.4,
          backgroundColor: '#212121',
        };

        var chart = new google.visualization.PieChart(document.getElementById('atmosfeer'));
        chart.draw(data, options);
      }



      google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart3);

      function drawChart3() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Memory', 80],
         
        ]);

        var options = {
          width: 400, height: 120,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('gravity'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 13000);
        
      }

      window.odometerOptions = {
        format: '(ddd).ddd',
        duration: 3000,
        animation: 'count'
      };

      setTimeout(function(){
        odometer.innerHTML = 0.700;
      }, 3000);

     