class AutocompleteSearch extends HTMLElement {
    constructor() {
        super();
        let el = this;
        el.text = el.getAttribute('text');
        const shadowRoot = el.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
      <!-- styles are scoped to autocomplete-search component -->
			<style>

				.input-style{
					width: 25rem;
					border-radius: .25rem;
					border: 1px solid #bbb;
					height: 35px;
				}
				.hide{
					display: none;
				}
			</style>
				<input id="autocomplete-search" class="input-style" type="search" placeholder="${el.text}">
					<ul class="hide" id="search-results"></ul>
				</input>		
    `
    }
    connectedCallback() {
        let el = this;
        el._initSearch();
    }

    _initSearch() {
        let el = this;
        el.addEventListener('keyup', (e) => {
        		// console.log(el)
        	 //  console.log(el.shadowRoot.querySelector('#autocomplete-search').value);
            let event = new CustomEvent('initSearch', {
                bubbles: true,
                composed: true
            });

            el.dispatchEvent(event);
        })
    }

}

window.customElements.define('autocomplete-search', AutocompleteSearch);