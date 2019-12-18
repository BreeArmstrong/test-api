let data = undefined;
async function postData() {
  const response =  await fetch('/wine-reviews');
  data = await response.json();
  const headers = typeof(data);
  console.log((headers));
  console.log(data);
}

postData().then((data) => {renderData(data)}).catch(() => {});

function renderData(data){
  renderHeaders(data);
  renderRows(data);
}

function renderHeaders(data) {
  //grab headers from data
  const headers = Object.keys(data);
  console.log(`headers: ${headers}`)
}

function renderRows(data) {
  //Grab info from rows
}



//grab data
//pass in to a function to get headers
//pull out headers
//another function for row elements
//pull out row elements