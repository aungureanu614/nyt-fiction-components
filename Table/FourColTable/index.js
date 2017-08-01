class FourColTable extends HTMLElement {
    constructor() {
        super();
        let el = this;
        const shadowRoot = el.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
					ul{
						display: inline-block;
						width: 20%;
            list-style-type: none;
            font-weight: bold;

					}
        ul li{
          font-weight: normal;
          padding: 4px 0;
        }

        </style>
          <ul id="col-1"></ul>
          <ul id="col-2"></ul>
          <ul id="col-3"></ul>
          <ul id="col-4"></ul>
        `
       
    }

}

window.customElements.define('four-col-table', FourColTable);