
function performAnalysis(){
  d3.json("../twitter.json", function(json){
    return {
      Wine: json.Wine,
      TotalTweets: +json.TotalTweets,
      Retweets: +json.Retweets,
      Favorited: +json.Favorited
    };
  }, function (data){
    makeBubbleChart(data);
  });
};
// Create the bubble graph
function makeBubbleChart(data){
  var winenames = [];
  var retweets = [];
  var favorites = [];
  var tweets = [];

  data.forEach(function(d) {
    winenames.push(d.Wine);
    tweets.push(d.TotalTweets);
    favorites.push(d.Favorited);
    retweets.push(d.Retweets);
  });

  //... adding to chart
  var trace = {
   x: winenames,
   y: tweets,
   mode: 'markers',
   marker: {
     size: retweets
   }
  };

  var outdata = [trace];

  // Put chart on page
  var layout = {
   title: 'Twitter Popularity',
   xaxis: {title: 'Wine Variety'},
   yaxis: {title: 'Number of Tweets'}
  };

  Plotly.newPlot('bubblechart', data, layout);
};

performAnalysis();
