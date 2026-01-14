(()=>{var g=`:host {\r
  display: inline-block;\r
  position: relative;\r
  /* width: 200px; Viene dado como propiedad JS*/\r
}\r
\r
* {\r
  box-sizing: border-box;\r
  font-family: "SAP-icons", "72-Web", Helvetica, sans-serif, Arial;\r
  font-size: 14px;\r
  color: #333;\r
}\r
\r
.filter-container {\r
  display: grid;\r
  gap: 5px;\r
}\r
`;var m=`:host {\r
  display: inline-block;\r
  position: relative;\r
  user-select: none;\r
}\r
\r
* {\r
  box-sizing: border-box;\r
  font-family: "SAP-icons", "72-Web", Helvetica, sans-serif, Arial;\r
  font-size: 14px;\r
  color: #333;\r
}\r
\r
/* Bot\xF3n principal */\r
.trigger {\r
  width: 100%;\r
  padding: 10px;\r
  border: 1px solid #ccc;\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  cursor: pointer;\r
  border-radius: 2px;\r
  background: white;\r
}\r
\r
.trigger-arrow {\r
  /* font-family: "SAP-icons"; */\r
  margin-left: 8px;\r
  /* Espacio entre texto y flecha */\r
}\r
\r
.trigger:hover {\r
  border-color: #888;\r
}\r
\r
/* Lista desplegable */\r
.dropdown-list {\r
  display: none;\r
  position: absolute;\r
  top: 100%;\r
  left: 0;\r
  right: 0;\r
  border: 1px solid #ccc;\r
  background: #fff;\r
  z-index: 10;\r
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r
  border-radius: 3px;\r
  margin-top: 4px;\r
}\r
\r
.dropdown-list.open {\r
  display: block;\r
}\r
\r
/* Buscador */\r
.search-box {\r
  padding: 6px;\r
  border-bottom: 1px solid #eee;\r
  display: flex;\r
  align-items: center;\r
}\r
\r
.search-box input {\r
  flex: 1;\r
  padding: 4px;\r
  border: 1px solid #ddd;\r
  border-radius: 3px;\r
  min-width: 0;\r
}\r
\r
.search-box input:focus {\r
  border: 1px solid rgb(134, 134, 134);\r
  outline: none;\r
  /* IMPORTANTE: Quita el brillo azul por defecto del navegador */\r
}\r
\r
.search-magnifying-glass {\r
  margin-right: 4px;\r
  /* Un poco de espacio entre el texto y la lupa */\r
}\r
\r
/* Contenedor de opciones con SCROLL */\r
.options-container {\r
  /* max-height: 200px; Viene dado como propiedad JS*/\r
  /* Altura aprox para 6-7 opciones, fuerza scroll si hay m\xE1s */\r
  overflow-y: auto;\r
}\r
\r
/* Items */\r
.option-item {\r
  display: flex;\r
  align-items: center;\r
  padding: 6px;\r
  /* padding: 8px 10px; */\r
  cursor: pointer;\r
}\r
\r
.option-item:hover {\r
  background-color: #f5f5f5;\r
}\r
\r
.option-item input {\r
  margin-right: 10px;\r
}\r
\r
.all-option {\r
  border-bottom: 1px solid #eee;\r
  background-color: #fafafa;\r
}\r
\r
/* Ocultamos la apariencia nativa del navegador */\r
.option-item input[type="checkbox"] {\r
  -webkit-appearance: none;\r
  appearance: none;\r
  /* Dimensiones del cuadrito */\r
  width: 14px;\r
  height: 14px;\r
  /* Bordes y fondo base */\r
  border: 1px solid #ccc; /* Un borde gris suave */\r
  border-radius: 2px; /* Un poco redondeado si quieres */\r
  background-color: #fff; /* Fondo BLANCO (tu petici\xF3n) */\r
  cursor: pointer;\r
  /* Flex para centrar la tilde */\r
  display: inline-flex;\r
  justify-content: center;\r
  align-items: center;\r
  position: relative;\r
  margin-right: 8px; /* Espacio con el texto */\r
  vertical-align: middle;\r
}\r
\r
/* Estado CHEQUEADO (:checked) */\r
.option-item input[type="checkbox"]:checked {\r
  background-color: #fff; /* Mantiene el fondo BLANCO */\r
  border-color: #333; /* Opcional: borde oscuro al seleccionar */\r
}\r
\r
/* Dibujamos la tilde usando ::after */\r
.option-item input[type="checkbox"]:checked::after {\r
  content: "\u2714"; /* Usamos un car\xE1cter unicode simple */\r
  font-size: 10px; /* Tama\xF1o de la tilde */\r
  color: #427cac;\r
  font-weight: bold;\r
  line-height: 1;\r
}\r
\r
/* Estilos base del bot\xF3n X */\r
.trigger-clear {\r
  display: none; /* Oculto por defecto */\r
  margin-right: 8px; /* Separaci\xF3n con la flecha */\r
  cursor: pointer;\r
  position: absolute;\r
  right: 25px;\r
  top: 50%;\r
  transform: translateY(-50%);\r
  line-height: 1;\r
  color: darkred;\r
}\r
\r
.trigger-clear:hover {\r
  color: #333; /* Color al pasar el mouse */\r
}\r
\r
/* 1. L\xD3GICA DE VISIBILIDAD */\r
/* Solo mostramos el FILTER RESET cuando el bot\xF3n padre tiene la clase 'has-filter' */\r
.trigger.has-filter .trigger-clear {\r
  display: inline-block;\r
}\r
\r
/* 2. L\xD3GICA DEL TOOLTIP (Mensaje Hover) */\r
.trigger-clear:hover::after {\r
  content: attr(data-tooltip); /* Toma el texto del HTML */\r
  position: absolute;\r
  bottom: 50%;\r
  left: 50%;\r
  transform: translateX(-50%);\r
\r
  /* Estilo del tooltip */\r
  background-color: #fff;\r
  color: #333;\r
  border: lightslategray 1px solid;\r
  padding: 4px 8px;\r
  font-size: 12px;\r
  border-radius: 1px;\r
  white-space: nowrap;\r
  pointer-events: none; /* Para que el mouse no choque con el tooltip */\r
  margin-bottom: 5px;\r
  opacity: 0;\r
  animation: fadeIn 0.2s forwards;\r
}\r
\r
@keyframes fadeIn {\r
  to {\r
    opacity: 1;\r
  }\r
}\r
`;var p=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.options=[],this._isOpen=!1,this._isFiltered=!1,this._actualFilterValues=[],this._newFilterValues=[],this._FilterValues=[],this._allFilterOptions=null,this._filterOptions=null}get getFilterValues(){return this._FilterValues}set setAllFilterOptions(e){this._allFilterOptions=e}get getIsFiltered(){return this._isFiltered}_setOptions_OnInitialization(e,s,o){this._allFilterOptions=e,this._filterColumn=s,this._dimensions=o,this._FilterValues=this._allFilterOptions.map(r=>r.label),this.style.width=this._dimensions.width,this.options=this._allFilterOptions.map(r=>({...r,checked:!0})),this.options.sort((r,a)=>r.label.localeCompare(a.label)),this._actualFilterValues=this.options.map(r=>r.label),this._render(),this._renderOptions(),this._setupEventListeners()}_setOptions_OnUpdate(e){this._filterOptions=e,this.options=this._filterOptions.map(s=>({...s,checked:!0})),this.options.sort((s,o)=>s.label.localeCompare(o.label)),this._actualFilterValues=this.options.map(s=>s.label),this._renderOptions()}_render(){this.shadowRoot.innerHTML=`
                <style>
                  ${m}
                </style>
          <button class="trigger" type="button" aria-haspopup="listbox" aria-expanded="false">
            <span class="trigger-label">${this._filterColumn}</span>
            <span class="trigger-clear" role="button" aria-label="remove filter" data-tooltip="remove filter">\uE249</span>
            <span class="trigger-arrow">\uE1EF</span>
          </button>

          <div class="dropdown-list">
            <div class="search-box">
                <input type="text" placeholder="Search..." class="search-input">
            </div>
            <div class="options-container">
              <!-- Las opciones se inyectan aqu\xED -->
            </div>
          </div>
        `,this._trigger=this.shadowRoot.querySelector(".trigger"),this._triggerArrow=this.shadowRoot.querySelector(".trigger-arrow"),this._triggerClear=this.shadowRoot.querySelector(".trigger-clear"),this._searchInput=this.shadowRoot.querySelector(".search-input"),this._list=this.shadowRoot.querySelector(".dropdown-list"),this._listContainer=this.shadowRoot.querySelector(".options-container")}_renderOptions(e=!1){this._listContainer.innerHTML="",this._listContainer.style.maxHeight=this._dimensions.maxHeight;let s=this.options.length>0&&this.options.every(t=>t.checked),o=this.options.some(t=>t.checked)&&!s,r=document.createElement("label");r.className="option-item all-option",r.innerHTML=`
          <input type="checkbox" class="cb-all" ${s?"checked":""}>
          <span><b>Select all</b></span>
        `;let a=r.querySelector(".cb-all");if(a.indeterminate=o,a.addEventListener("change",t=>this._toggleAll(t)),this._listContainer.appendChild(r),this.options.length===0){let t=document.createElement("div");t.style.padding="8px",t.textContent="No results found",this._listContainer.appendChild(t);return}this.options.forEach(t=>{if(e&&!t.checked)return;let i=document.createElement("label");i.className="option-item",i.innerHTML=`
            <input type="checkbox" value="${t.value}" ${t.checked?"checked":""}>
            <span>${t.label}</span>
          `,i.querySelector("input").addEventListener("change",()=>this._toggleOption(t.value)),this._listContainer.appendChild(i)})}_setupEventListeners(){this._trigger.addEventListener("click",e=>this._toggleDropdown()),this._triggerClear.addEventListener("click",e=>{e.stopPropagation(),this._removeFilter()}),this._searchInput.addEventListener("input",e=>this._handleSearch(e)),document.addEventListener("click",e=>this._handleClickOutside(e))}_toggleDropdown(){this._isOpen=!this._isOpen,this._isOpen?(this._list.classList.add("open"),this._trigger.setAttribute("aria-expanded","true"),this._triggerArrow.textContent="\uE1F0"):(this._list.classList.remove("open"),this._trigger.setAttribute("aria-expanded","false"),this._triggerArrow.textContent="\uE1EF",this._dispatchSelectedValues())}_dispatchSelectedValues(){this.options.some(e=>e.checked)&&(this.options.every(e=>e.checked)||(this._trigger.classList.add("has-filter"),this._isFiltered=!0),this._newFilterValues=this.options.filter(e=>e.checked).map(e=>e.label),this._compararArrays(this._actualFilterValues,this._newFilterValues)===!1&&(this._actualFilterValues=this._newFilterValues,this._FilterValues=this._newFilterValues,this.dispatchEvent(new CustomEvent("changeFilter",{}))))}_compararArrays(e,s){if(e.length!==s.length)return!1;let o=new Set(e);return s.every(r=>o.has(r))}_handleSearch(e){let s=e.target.value.toLowerCase();this.options.forEach(o=>{o.checked=o.label.toLowerCase().includes(s)}),this._renderOptions(!0)}_toggleAll(e){let s=e.target.checked;this.options.forEach(o=>{o.checked=s}),this._resetSearch(),this._renderOptions()}_toggleOption(e){let s=this.options.find(o=>o.value===e);s&&(s.checked=!s.checked,this._resetSearch(),this._renderOptions())}_resetSearch(){this._searchInput.setAttribute("placeholder","Search..."),this._searchInput.value=""}_removeFilter(){this._trigger.classList.remove("has-filter"),this._isFiltered=!1,this._newFilterValues=this._allFilterOptions.map(e=>e.label),this._actualFilterValues=this._newFilterValues,this._FilterValues=this._newFilterValues,this.dispatchEvent(new CustomEvent("changeFilter",{}))}_handleClickOutside(e){if(!this._isOpen)return;e.composedPath().includes(this)||(this._triggerArrow.textContent="\uE1EF",this._isOpen=!1,this._list&&this._list.classList.remove("open"),this._trigger&&this._trigger.setAttribute("aria-expanded","false"))}disconnectedCallback(){document.removeEventListener("click",this._handleClickOutside.bind(this))}};customElements.define("multi-select-dropdown",p);(function(){let h=document.createElement("template");h.innerHTML=`
          <style>
            ${g}
          </style>
          <div id="filters" class="filter-container">
          </div>
    `;class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(h.content.cloneNode(!0)),this.filteredData=[]}getFilteredData(){return this.filteredData}onCustomWidgetBeforeUpdate(o){}onCustomWidgetAfterUpdate(o){}_filterListFromData(o,r){let a=new Set(r.map(t=>t[o]).filter(t=>t!==void 0));return Array.from(a).map((t,i)=>({label:t,value:"id-"+i.toString()}))}initFilters(o,r){this._data=o,this._configData=r,this._wcfilters=[];let a=this.shadowRoot.getElementById("filters"),t="";this._configData.forEach(i=>{t+=i.width+" ";let n=document.createElement("multi-select-dropdown");n.id=i.column,this._wcfilters.push(n);let l=document.createElement("div");l.appendChild(n),a.appendChild(l)}),a.style.gridTemplateColumns=t.trim(),this._configData.forEach(i=>{let n=this.shadowRoot.getElementById(i.column),l=this._filterListFromData(i.column,this._data),f=i.label,_={width:i.width,maxHeight:i.maxHeight};n._setOptions_OnInitialization(l,f,_),n.addEventListener("changeFilter",v=>{let u=this._data.filter(d=>this._wcfilters.every(c=>c.getFilterValues.includes(d[c.id])));this._wcfilters.forEach(d=>{let c=this._filterListFromData(d.id,u);d._setOptions_OnUpdate(c)}),this.filteredData=u,this.dispatchEvent(new CustomEvent("dataFiltered",{}))})})}updateFiltersDB(o,r){this._data=o,this._configFilterWidgets=r,this._configFilterWidgets.forEach(t=>{let i=this.shadowRoot.getElementById(t.column),n=this._filterListFromData(t.column,this._data);i.setAllFilterOptions=n});let a=this._data.filter(t=>this._wcfilters.every(i=>i.getIsFiltered?i.getFilterValues.includes(t[i.id]):!0));if(a.length===0){let t={};Object.keys(this._data[0]).forEach(i=>{t[i]="No results found"}),a.push(t)}this._wcfilters.forEach(t=>{let i=this._filterListFromData(t.id,a);t._setOptions_OnUpdate(i)}),this.filteredData=a,this.dispatchEvent(new CustomEvent("dataFiltered",{}))}}customElements.define("com-ggh-filter",e)})();})();
