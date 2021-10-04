const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(e) {
	e.preventDefault();
	// get the value of the input in the form
	const searchValue = form.elements.query.value;
	// for the search value using object for the query string
	const config = { params: { q: searchValue } };
	// fetch the API
	const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
	//calling function to display image
	displayTitleImages(res.data);
	// resetting the forms
	form.element.query = '';
});

const displayTitleImages = (titles) => {
	for (let title of titles) {
		// if the title of the show has image then pick the medium size and create new img element
		if (title.show.image) {
			const img = document.createElement('IMG');
			img.src = title.show.image.medium;
			document.body.append(img);
		}
	}
};
