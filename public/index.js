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

const reviewsModel = {
  props: {
    headers: {
      label: undefined,
      sortState: undefined
    },
    reviews: undefined,
    sortLabel: undefined  //price, reviewer, etc
  }
};

function showData(reviews) {
  const headers = renderHeaders(reviews);
  reviewsModel.headers = headers.reduce((sortState, header) => {
    sortState[header] = {
      sortState: undefined,
      label: header
    };
    return sortState;
  }, {});
  reviewsModel.reviews = renderRows(reviews)
}

function renderData(reviews) {
  console.log(reviewsModel);
  
  renderHeaders(reviews);
  renderRows(reviews);
}

function renderHeaders(reviews) {
  //grab headers from data
  const thead = document.querySelector('thead');
  const headers = Object.keys(reviews[0]).map(key => key.replace(/_/g, ' '));
  createElement('th', '', headers, reviewsModel.headers.label);
  
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