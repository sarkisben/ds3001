var sayjohn = [
                { "Name": "Cabernet Sauvignon", "Tweets": 86 },
                { "Name": "Red Blend", "Tweets": 14 },
                { "Name": "Rose", "Tweets": 200 },
                { "Name": "Pinot Noir", "Tweets": 67 },
                { "Name": "Chardonnay", "Tweets": 94 },
                { "Name": "Sauvignon Blanc", "Tweets": 27 },
                { "Name": "Merlot", "Tweets": 200 },
                { "Name": "Syrah", "Tweets": 93 },
                { "Name": "Bordeaux-style Red Blend", "Tweets": 5 },
                { "Name": "Riesling", "Tweets": 200 }
              ]
// Create the bubble graph
function makeOverallPieChart(){
  //Get unique varieties and occurances
  var winenames = []
  var tweets = []
  for (var i = 0; i < sayjohn.length; i++){
    var obj = sayjohn[i];
    for (var key in obj){
     winenames.push(key);
     tweets.push(obj[key]);
    }
  }


  //... adding to chart
  var tracer = {
   x: winenames,
   y: tweets,
   marker: {
    size: tweets
   }
  };

  var data = [tracer];

  Put chart on page
  var layout = {
   title: 'Twitter Popularity'
  };
  Plotly.newPlot('bubblechart', plotData, layout);
};



performAnalysis();
