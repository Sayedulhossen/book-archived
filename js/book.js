const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then( data => console.log(data.docs));
}
const displaySearchResult = docs =>{
    const searchResult = document.getElementById('search-result');
    docs.forEach(doc => {
        console.log(doc);
    });

}