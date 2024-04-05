//your code here
document.addEventListener("DOMContentLoaded", function() {
  let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

  // Function to sort names in lexicographic order excluding articles
  function sortBandNames(bandNames) {
    return bandNames.sort((a, b) => {
      // Function to remove articles and whitespace from band names
      const removeArticles = name => name.replace(/^(a |an |the )/i, '').trim();
      // Compare band names after removing articles
      return removeArticles(a).localeCompare(removeArticles(b));
    });
  }

  // Function to generate list items and append them to the ul element
  function generateListItems(bandNames) {
    const ulElement = document.getElementById('bands');
    // Clear existing list items
    ulElement.innerHTML = '';
    // Generate new list items
    bandNames.forEach(name => {
      const liElement = document.createElement('li');
      liElement.textContent = name;
      ulElement.appendChild(liElement);
    });
  }

  // Sort band names and generate list items
  const sortedBandNames = sortBandNames(touristSpots);
  generateListItems(sortedBandNames);
});


