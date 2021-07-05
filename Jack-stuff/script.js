// TV Gids Script

// Catch Json data 
function getData(url, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200)
      callback(getShowsFromResponse(xmlHttp.responseText));
  }
  xmlHttp.open("GET", url, true); // true for asynchronous 
  xmlHttp.send(null);
}

function getShowsFromResponse(response) {
  if (!response) {
    console.error('No response provided');
  }
  return JSON.parse(response).MetaData;
}

function editData(showsList) {
  
  const target = document.querySelector('#slidebar');

  showsList.forEach(show => {
    // debugger;

    /*

    // https://stackoverflow.com/questions/14781153/how-to-compare-two-string-dates-in-javascript

    Date.parse(show.EndPubDate)
    // de show.EndPubDate haal je uit het show object wat je hierboven binnenkrijgt, daar staat een datum een bepaalde notatie in
    // als je dat parsed dan krijg je de datum als een timestamp
    // een timestamp is een numerieke representatie van een datum, namelijk de datum vanaf 1 jan 1970 in seconden (jka serieus, zoveel seconden zijn eroverheen gegaan sinds die datum tot de datum die je hebt geparst)
    // omdat die datum nu een nummer is, kan je daarmee makkelijk rekenen en dus vergelijken en dus ook berekenen welke show waar moet komen
    */

    const newDiv = document.createElement("div");
    newDiv.classList.add("my-class");
  
    newDivTitle = document.createElement("p");
    newDivTitle.innerHTML = show.Title;
    newDivTitle.classList.add("my-class-title");
    newDiv.appendChild(newDivTitle);
  
    newDivImg = document.createElement("img");
    newDivImg.src = show.LargeFrontCover;
    newDivImg.classList.add("my-class-image");
    newDiv.appendChild(newDivImg);
  
    newDivDesc = document.createElement("p");
    newDivDesc.innerHTML = show.Description;
    newDivDesc.classList.add("my-class-description");
    newDiv.appendChild(newDivDesc);

    // target.insertAdjacentElement("afterend", newDiv);
    target.appendChild(newDiv);
  });

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var hh = today.getHours();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  today = yyyy + '-' + mm + '-' + dd;
  console.log('Date today is:' + ' ' + today);

  //  Filter respons for today's data
  data_today = new Array();
  // for (i in respons) {
  //   pubDate = (i["PubDate"], "yyyy-MM-dd");
  //   if (pubDate == today)
  //     addElement(data_today, (i["Description"], i["LargeArtwork"], i["EndPubDate"], i["PubDate"]));
  // }
  // console.log(data_today);

  function findTodaysItems() {
    return respons.PubDate == today;
  }

  // console.log(respons.find(findTodaysItems));    --> DEZE DOET NIKS WANT DATA IS GEEN ARRAY
  // console.log(typeof respons);



  // // add data to containers
  // var mainContainer = document.getElementById("data");



}


getData('https://online.192tv.tv/Backend.svc/getepg', editData);


var testToSearch = "186959";
// Get date and time
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


/*
for(var i = 0; i < data.length; i++) {
  if(items[i].data.PubDate == today)
  {
    data_today.push(items[i].restaurant.name);
  }
}
*/


