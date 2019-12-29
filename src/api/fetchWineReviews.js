async function fetchWineReviews() {
  const response = await fetch('/wine-reviews');
  // This data will show up in the resolve callback
  return await response.json();
}

module.exports = {
  fetchWineReviews
};
