class BooksTable extends FourColTable {
    constructor() {
        super()

    }

    connectedCallback() {
        let el = this;
        el.title = el.getAttribute('book-title')
        el.author = el.getAttribute('book-author')
        el.isbn = el.getAttribute('book-isbn')
        el.publisher = el.getAttribute('book-publisher')

        let colOne = this.shadowRoot.querySelector('#col-1');
        colOne.innerHTML = `<h3>${el.title}</h3>`;
        let colTwo = this.shadowRoot.querySelector('#col-2');
        colTwo.innerHTML = `<h3>${el.author}</h3>`;
        let colThree = this.shadowRoot.querySelector('#col-3');
        colThree.innerHTML = `<h3>${el.isbn}</h3>`;
        let colFour = this.shadowRoot.querySelector('#col-4');
        colFour.innerHTML = `<h3>${el.publisher}</h3>`;
    }


    static get observedAttributes() {
        return ['book-stuff'];
    }
    attributeChangedCallback(attr, oldVal, newVal) {


        let newValue = JSON.parse(newVal)
        let titles = newValue.titles
        let authors = newValue.authors
        let isbns = newValue.isbns
        let publishers = newValue.publishers

        titles.forEach((title) => {
            let colOne = this.shadowRoot.querySelector('#col-1')
            let li = document.createElement('li');
            li.innerText = title;
            colOne.appendChild(li)
        })

        authors.forEach((author) => {
            let colTwo = this.shadowRoot.querySelector('#col-2')
            let li = document.createElement('li');
            li.innerText = author;
            colTwo.appendChild(li)
        })

        isbns.forEach((isbn) => {
            let colThree = this.shadowRoot.querySelector('#col-3')
            let li = document.createElement('li');
            li.innerText = isbn;
            colThree.appendChild(li)
        })

        publishers.forEach((publisher) => {
            let colFour = this.shadowRoot.querySelector('#col-4')
            let li = document.createElement('li');
            li.innerText = publisher;
            colFour.appendChild(li)
        })

    }

}

window.customElements.define('books-table', BooksTable);