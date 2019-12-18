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
    console.log(model);
    renderData()
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


function renderData() {
  const container = document.querySelector('.wine-reviews');
  const thead = container.querySelector('thead');
  const tbody = container.querySelector('tbody');
  
  renderHeaders(model.headers, thead);
  renderRows(model.reviews, tbody);
}

function renderHeaders(headers, thead) {
  thead.innerHTML = '';
  const tr = document.createElement('tr');
  Object.values(headers).forEach(headerObj => {
    const header = createElement('th', headerObj.label.replace(/_/g, ' '), '', headerObj.label);
    tr.appendChild(header);
  });
  thead.appendChild(tr);
}

function renderRows(reviews, tbody) {
  //clear out data:
  tbody.innerHTML = '';
  reviews.forEach(review => {
    const tr = document.createElement('tr');
    Object.values(review).forEach(value => {
      tr.appendChild(createElement('td', value))
    });
    tbody.appendChild(tr);
  });
}

function createElement(tag, innerHTML, className, prop) {
  const element = document.createElement(tag);
  element.setAttribute('class', className);
  element.setAttribute('data-prop', prop);
  element.innerHTML = innerHTML;
  return element;
  
}