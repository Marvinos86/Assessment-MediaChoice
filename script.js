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

// Check for response && Parse JSON
function getShowsFromResponse(response) {
  if (!response) {
    console.error('No response provided');
  }
  return JSON.parse(response).MetaData;
}

// Edit data to work with
function editData(showsList) {
  // console.log(showsList);
  const target = document.querySelector('#slidebar');

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  today = yyyy + '-' + mm + '-' + dd;
  console.log('Date today is:' + ' ' + today);

  showsList.forEach(show => {
    // debugger;

  
    // Filter data for todays data
    
    // console.log(filtered);

    // data_today = new Array();
    // for(var i = 0; i < show.length; i++) {
    //   if(items[i].show.PubDate == today)
    //   {
    //     data_today.push(items[i]);
    //   }
    // }
    // console.log(data_today);    ---> Data is onleesbaar


    // function parseDataToday() {
    //   return JSON.parse(data_today).MetaData;
    // }
    // parseDataToday();
    // console.log(data_today);   ----> error: unexpectend end of JSON input at JSON.parse


    // for (i in respons) {
    //   pubDate = (i["PubDate"], "yyyy-MM-dd");
    //   if (pubDate == today)
    //     addElement(data_today, (i["Description"], i["LargeArtwork"], i["EndPubDate"], i["PubDate"]));
    // }
    // console.log(data_today);

    // function findTodaysItems() {
    //   return show.PubDate == today;
    // }
    // console.log(show.find(findTodaysItems)); 
    // console.log(typeof show);


    // Get time from PubDate (for visible items only)
    var pubTime;
    function getTimeFromDate() {
      pubTime = show.PubDate.substring(11,show.PubDate.length-11);
      return;
    }
    getTimeFromDate();

    // Create Elements for Todays Items
    const newDiv = document.createElement("div");
    newDiv.classList.add("mySlides");
    
    newDivTime = document.createElement("div");
    newDivTime.innerHTML = pubTime;
    newDivTime.classList.add("time");
    newDiv.appendChild(newDivTime);
    
    newDivImg = document.createElement("img");
    newDivImg.src = show.LargeFrontCover;
    newDivImg.classList.add("poster");
    newDiv.appendChild(newDivImg);

    newDivTitle = document.createElement("p");
    newDivTitle.innerHTML = show.Title;
    newDivTitle.classList.add("title");
    newDiv.appendChild(newDivTitle);
  
    newDivDesc = document.createElement("p");
    newDivDesc.innerHTML = show.Description;
    newDivDesc.classList.add("my-class-description");
    newDiv.appendChild(newDivDesc);

    target.appendChild(newDiv);
  });
  
}

getData('https://online.192tv.tv/Backend.svc/getepg', editData);


var testToSearch = "186959";
// Get date and time
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();






