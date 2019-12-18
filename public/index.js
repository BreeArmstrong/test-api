const model = {
  headers: {},
  sortLabel: undefined  //price, reviewer, etc
  
};

async function postData() {
  const response = await fetch('/wine-reviews');
  // This data will show up in the resolve callback
  return await response.json();
}

postData().then((reviews) => {
    showData(reviews);
    renderData(reviews)
  }
).catch(() => {
});

const getData = reviews => {
  const set = new Set();
  reviews.forEach(review => {
    Object.keys(review).forEach(prop => set.add(prop));
  });
  return [...set];
};

function showData(reviews) {
  const headers = getData(reviews);
  model.headers = headers.reduce((sortState, header) => {
    sortState[header] = {
      sortState: undefined,
      label: header
    };
    return sortState;
  }, {});
  model.reviews = reviews;
}


function renderData(reviews) {
  console.log(model);
  
  renderHeaders(reviews);
  renderRows(reviews);
}

function renderHeaders(reviews) {
  //grab headers from data
  const thead = document.querySelector('thead');
  const headers = Object.keys(reviews[0]).map(key => key.replace(/_/g, ' '));
  createElement('th', '', headers, model.headers.label);
  
}

function renderRows(reviews) {
  //Grab info from rows
  const rowData = Object.values(reviews).map(value => value.replace(/_/g, ' '));
  console.log(`Data: ${rowData}`)
}

function createElement(tag, className, innerHTML, prop) {
  const element = document.createElement(tag);
  element.setAttribute('class', className);
  element.setAttribute('data-prop', prop);
  element.innerHTML = innerHTML;
  return element;
  
}