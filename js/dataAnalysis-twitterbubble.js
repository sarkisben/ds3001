var sayjohn = [
                { "name": "Cabernet Sauvignon", "tweets": 86 },
                { "name": "Red Blend", "tweets": 14 },
                { "name": "Rose", "tweets": 200 },
                { "name": "Pinot Noir", "tweets": 67 },
                { "name": "Chardonnay", "tweets": 94 },
                { "name": "Sauvignon Blanc", "tweets": 27 },
                { "name": "Merlot", "tweets": 200 },
                { "name": "Syrah", "tweets": 93 },
                { "name": "Bordeaux-style Red Blend", "tweets": 5 },
                { "name": "Riesling", "tweets": 200 }
              ];

// Create the bubble graph
function makeBubbleChart(){
  //Get unique varieties and occurances
  var winenames = []
  var tweets = []
  // for (var i = 0; i < sayjohn.length; i++){
  //   var obj = sayjohn[i];
  //   for (var key in obj){
  //    winenames.push(key);
  //    tweets.push(obj[key]);
  //   }
  // }
  sayjohn.forEach(function(d) {
    winenames.push(d.name);
    tweets.push(d.tweets);
  });

  //... adding to chart
  var trace = {
   x: winenames,
   y: tweets,
   mode: 'markers',
   marker: {
     size: tweets
   }
  };

  var data = [trace];

  // Put chart on page
  var layout = {
   title: 'Twitter Popularity'
  };

  Plotly.newPlot('bubblechart', data, layout);
};

makeBubbleChart();
