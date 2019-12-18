let data = undefined;
async function postData() {
  const response =  await fetch('/wine-reviews');
  data = await response.json();
  const headers = data.map(Object.keys);
  console.log((headers));
  const rows = data.map(Object.values);
  console.log(rows);
  console.log(data);
}

postData().then(() => {renderData(data)}).catch(() => {});

function renderData(data){
  renderHeaders(data);
  renderRows(data);
}

function renderHeaders(data) {
  //grab headers from data
  const headers = Array.forEach(Object.keys(data));
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