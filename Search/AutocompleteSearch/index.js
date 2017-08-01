class AutocompleteSearch extends HTMLElement {
    constructor() {
        super();
        let el = this;
        el.text = el.getAttribute('text');
        const shadowRoot = el.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
      <!-- styles are scoped to custom-search component -->
			<style>

				.input-style{
					width: 25rem;
					border-radius: .25rem;
					border: 1px solid #bbb;
					height: 35px;
				}
			</style>
				<input class="input-style" type="search" placeholder="${el.text}"></input>		
    `
    }
    connectedCallback() {
        let el = this;
        el._initSearch();
    }

    _initSearch() {
        let el = this;
        el.addEventListener('keyup', () => {
        	
            let event = new CustomEvent('initSearch', {
                bubbles: true,
                composed: true
            });

            el.dispatchEvent(event);
        })
    }

}

window.customElements.define('autocomplete-search', AutocompleteSearch);