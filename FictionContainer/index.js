class FictionContainer extends HTMLElement{
	constructor(){
		super();
	}
//dummy data
	connectedCallback() {
    let el = this;
    // el.addEventListener('initSearch', () => {
      fetch("https://api.nytimes.com/svc/books/v3/lists.json?api-key=40ea26fc62c9450683c5d6183ac81f89&list=hardcover-fiction")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        let data = Array(res.results);

        let titles = data[0].map((book) => {
          return book['book_details'][0].title;
        });

        let authors = data[0].map((book)=>{
        	return book['book_details'][0].author;
        })

        let isbns = data[0].map((book)=>{
        	return book['book_details'][0].primary_isbn10;
        })

        let publishers = data[0].map((book)=>{
        	return book['book_details'][0].publisher;
        })

        el._update(titles, authors, isbns, publishers);
      });
    // });
  }
  _update(titles, authors, isbns, publishers) {
    let el = this;
    let appChild = el.childNodes[3];
    let dataObj = {'titles': titles, 'authors': authors, 'isbns': isbns, 'publishers': publishers}
     let test = JSON.stringify(dataObj)
    appChild.setAttribute('book-stuff', test)

  }


}

window.customElements.define('fiction-container', FictionContainer);