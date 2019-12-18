async function postData() {
  const response = await fetch('/wine-reviews');
  // This data will show up in the resolve callback
  return await response.json();
}
postData().then((reviews) => {
    renderData(reviews)
  }
).catch(() => {
});
function renderData(reviews) {
  renderHeaders(reviews);
  renderRows(reviews);
}
function renderHeaders(reviews) {
  //grab headers from data
  const headers = Object.keys(reviews[0]).map(key => key.replace(/_/g, ' '));
  console.log(`headers: ${headers}`)
}
function renderRows(data) {
  //Grab info from rows
}
function createElement(tag, className, innerHTML) {
}