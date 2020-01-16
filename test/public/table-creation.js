// Show All the Data in the table:
//Allow Sorting
//Allow Searching
//Provide a button that allows grouping

const model = {
  headers: {},
  sortLabel: undefined  //price, reviewer, etc
};

//Fetching the data:
//For now, fetch from a webpage
async function postData() {
  const response = await fetch("https://raw.githubusercontent.com/bindhyeswari/interview-prep/master/fixtures/sliced-wine-reviews.json?token=ABAZB7JLEJNJYJN5SWULYWC6B6PZ4")
  return await response.json();
}
postData().then((reviews) => {
  renderData();
  console.log(model);
}).catch((err) => {
  console.log(err);
});

//Goes through the data and creates a set of props from each review.
const getData = reviews => {
  const set = new Set();
  reviews.forEach(review => {
    Object.keys(review).forEach(prop => set.add(prop));
  });
  return [...set];
};

//A function that