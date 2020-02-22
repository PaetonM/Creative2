document.getElementById("getquote").addEventListener("click", function(event) {
  const url = "https://favqs.com/api/qotd";
  fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Authorization': 'Token token=f03842ad291a57dc29a7df099b2fbfa4'
    })
  })
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
        results += '<div id = "quoteBox">';
        results += '<h1> "' + json.quote.body + '"</h1>';
        results += '<br>';

        results += '<div id = "authorBox">';
        results+= '<h2> ~ ' + json.quote.author + " ~</h2>";
        results+='</div>';
        results+='<div id = "tagBox">';
        //results+= '<h2> Tags: </h2>';
        //results += '<h2> Tags: ' + json.quote.tags + "</h2>";
        results+= '</div>';
        results += '</div>';
        document.getElementById("displayquote").innerHTML = results;
    });
  });

  fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Authorization': 'Token token=f03842ad291a57dc29a7df099b2fbfa4'
    })
  })
