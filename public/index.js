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

function renderData(reviews) {
  renderHeaders(reviews);
  renderRows(reviews);
}

function renderHeaders(reviews) {
  //grab headers from data
  
  const headers = Object.keys(reviews[0]).map(key => key.replace(/_/g, ' '));
  headers.createElement('th', '', headers, headers);
  
  
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