
 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

function readURL() {
      var file = event.target.files[0];
      var my_img = document.getElementById("my_img");
      var input_type = document.getElementById("file")
      
        var reader = new FileReader();

        reader.onload = function(e) {
          
          console.log(file.type);
          my_img.src = URL.createObjectURL(file)
        }

        reader.readAsDataURL(file);
        
      
    }



      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Category', 'Percentage'],
          ['Human',     2],
          ['Horse',      2]
          
        ]);

        var options = {
          pieHole: 0.5,
          pieSliceTextStyle: {
            color: 'white'
            
          },
          legend: 'none',
          pieSliceText: 'label',
          pieStartAngle: 45,
          backgroundColor: '#A1E3BA'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
