(()=>{var v=`* {\r
  box-sizing: border-box;\r
  font-family: "SAP-icons", "72-Web", Helvetica, sans-serif, Arial;\r
  font-size: 14px;\r
}\r
com-ggh-filter {\r
  width: 1920px;\r
  height: 50px;\r
  top: 10px;\r
  position: absolute;\r
  z-index: 3;\r
}\r
com-ggh-tabs {\r
  width: 1920px;\r
  height: 948px;\r
  top: 60px;\r
  position: absolute;\r
  z-index: 1;\r
}\r
`;(function(){let d=document.createElement("template");d.innerHTML=`
        <div class="calculus">
        </div>
	`;class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(d.content.cloneNode(!0)),this.rs=[],this.rs_crm_a010=[]}onCustomWidgetAfterUpdate(t){t.rs&&t.rs_crm_a010&&(this.rs=t.rs,this.rs_crm_a010=t.rs_crm_a010)}generateList_status_MajorOpenOpps(){if(!this.rs||!this.rs_crm_a010)return console.error("Missing rs or rs_crm data."),[];let t=[],a=new Map;for(let e=0;e<this.rs.length;e+=2){let r=this.rs[e].Opportunity_ID.id;a.set(r,{FiscalYear:this.rs[e].Fiscal_year.id,OpportunityID:this.rs[e].Opportunity_ID.id,CloseDate:this.rs[e].Close_Date.id,Evaluation:this.rs[e].Evaluation.id,[this.rs[e]["@MeasureDimension"].id]:this.rs[e]["@MeasureDimension"].rawValue,[this.rs[e+1]["@MeasureDimension"].id]:this.rs[e+1]["@MeasureDimension"].rawValue})}let s=new Map;for(let e=0;e<this.rs_crm_a010.length;e+=2){let r=this.rs_crm_a010[e].KSDOCID.id;s.set(r,{FiscalYear:this.rs_crm_a010[e]["0FISCYEAR"].id,OpportunityID:this.rs_crm_a010[e].KSDOCID.id,Description:this.rs_crm_a010[e].KSOPPDSC2.id.slice(0,50),Region:this.rs_crm_a010[e].ZSDISO01__SDISR11.id,SubRegion:this.rs_crm_a010[e].ZSDISO01__SDISR12.id,MarketSegm:this.rs_crm_a010[e].ZMMARSEG__CRPARMSEG.id,Segment:this.rs_crm_a010[e]["0ORD_REASON"].description,Country:this.rs_crm_a010[e].ZMLANDEK.id,CloseDate:this.rs_crm_a010[e].KSOPPCLO.id,[this.rs_crm_a010[e]["@MeasureDimension"].id]:this.rs_crm_a010[e]["@MeasureDimension"].rawValue,[this.rs_crm_a010[e+1]["@MeasureDimension"].id]:this.rs_crm_a010[e+1]["@MeasureDimension"].rawValue})}for(let[e,r]of a.entries()){let n=s.get(e);n&&t.push({"Fiscal year":n.FiscalYear.slice(-4),"Opp ID":e,"Opportunity Description":n.Description,Region:n.Region,"Sub Region":n.SubRegion,"Market Segm":n.MarketSegm,Segment:n.Segment,Country:n.Country,"Close Date":n.CloseDate,"OPP EXP (in k\u20AC)":parseInt(n["00O2TNE12Q3GUG1C4B5KLM71D"]/1e3,10),"OPP WTD (in k\u20AC)":parseInt(n["00O2TNE12Q3GUG1C4B5KLMQ01"]/1e3,10),Evaluation:r.Evaluation,"Alignment (in k\u20AC)":parseInt(r.Alignment/1e3,10)})}return t.sort((e,r)=>r["OPP EXP (in k\u20AC)"]-e["OPP EXP (in k\u20AC)"])}generateList_excluded_MajorOpps(){if(!this.rs||!this.rs_crm_a010)return console.error("Missing rs or rs_crm data."),[];let t=[],a=new Set(this.rs_crm_a010.map(s=>s.KSDOCID.id));for(let s=0;s<this.rs.length;s+=2){let e=this.rs[s].Opportunity_ID.id;a.has(e)||t.push({"Fiscal year":this.rs[s].Fiscal_year.id,"Opp ID":e,"Close Date":this.rs[s].Close_Date.id,Evaluation:this.rs[s].Evaluation.id,"Alignment (in k\u20AC)":parseInt(this.rs[s]["@MeasureDimension"].rawValue,10)/1e3,"OPP EXP (in k\u20AC)":parseInt(this.rs[s+1]["@MeasureDimension"].rawValue,10)/1e3})}return t.sort((s,e)=>e["OPP EXP (in k\u20AC)"]-s["OPP EXP (in k\u20AC)"])}generateList_new_MajorOpenOpps(){if(!this.rs||!this.rs_crm_a010)return console.error("Missing rs or rs_crm data."),[];let t=[],a=new Set(this.rs.map(s=>s.Opportunity_ID.id));for(let s=0;s<this.rs_crm_a010.length;s+=2){let e=this.rs_crm_a010[s].KSDOCID.id,r=parseInt(this.rs_crm_a010[s]["@MeasureDimension"].rawValue,10);r>=7e6&&!a.has(e)&&t.push({"Fiscal year":this.rs_crm_a010[s]["0FISCYEAR"].id.slice(-4),"Opp ID":e,"Opportunity Description":this.rs_crm_a010[s].KSOPPDSC2.id.slice(0,50),Region:this.rs_crm_a010[s].ZSDISO01__SDISR11.id,"Sub Region":this.rs_crm_a010[s].ZSDISO01__SDISR12.id,"Market Segm":this.rs_crm_a010[s].ZMMARSEG__CRPARMSEG.id,Segment:this.rs_crm_a010[s]["0ORD_REASON"].description,Country:this.rs_crm_a010[s].ZMLANDEK.id,"Close Date":this.rs_crm_a010[s].KSOPPCLO.id,"OPP EXP (in k\u20AC)":r/1e3,"OPP WTD (in k\u20AC)":parseInt(this.rs_crm_a010[s+1]["@MeasureDimension"].rawValue,10)/1e3})}return t.sort((s,e)=>e["OPP EXP (in k\u20AC)"]-s["OPP EXP (in k\u20AC)"])}}customElements.define("com-ggh-calculus",i)})();var S=`:host {\r
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
  margin-left: 30px;\r
}\r
`;var D=`:host {\r
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
`;var E=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.options=[],this._isOpen=!1,this._isFiltered=!1,this._actualFilterValues=[],this._newFilterValues=[],this._FilterValues=[],this._allFilterOptions=null,this._filterOptions=null}get getFilterValues(){return this._FilterValues}get getIsFiltered(){return this._isFiltered}_setOptions_OnInitialization(i,o,t){this._filterColumn=o,this._dimensions=t,this.style.width=this._dimensions.width,this._allFilterOptions=i,this._FilterValues=this._allFilterOptions.map(a=>a.label),this.options=this._allFilterOptions.map(a=>({...a,checked:!0})),this.options.sort((a,s)=>a.label.localeCompare(s.label)),this._actualFilterValues=this.options.map(a=>a.label),this._render(),this._renderOptions(),this._setupEventListeners()}_onChangeDB_Initialization(i){this._allFilterOptions=i}_setOptions_OnUpdate(i){this._filterOptions=i,this.options=this._filterOptions.map(o=>({...o,checked:!0})),this.options.sort((o,t)=>o.label.localeCompare(t.label)),this._actualFilterValues=this.options.map(o=>o.label),this._renderOptions()}_render(){this.shadowRoot.innerHTML=`
                <style>
                  ${D}
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
        `,this._trigger=this.shadowRoot.querySelector(".trigger"),this._triggerArrow=this.shadowRoot.querySelector(".trigger-arrow"),this._triggerClear=this.shadowRoot.querySelector(".trigger-clear"),this._searchInput=this.shadowRoot.querySelector(".search-input"),this._list=this.shadowRoot.querySelector(".dropdown-list"),this._listContainer=this.shadowRoot.querySelector(".options-container")}_renderOptions(i=!1){this._listContainer.innerHTML="",this._listContainer.style.maxHeight=this._dimensions.maxHeight;let o=this.options.length>0&&this.options.every(e=>e.checked),t=this.options.some(e=>e.checked)&&!o,a=document.createElement("label");a.className="option-item all-option",a.innerHTML=`
          <input type="checkbox" class="cb-all" ${o?"checked":""}>
          <span><b>Select all</b></span>
        `;let s=a.querySelector(".cb-all");if(s.indeterminate=t,s.addEventListener("change",e=>this._toggleAll(e)),this._listContainer.appendChild(a),this.options.length===0){let e=document.createElement("div");e.style.padding="8px",e.textContent="No results found",this._listContainer.appendChild(e);return}this.options.forEach(e=>{if(i&&!e.checked)return;let r=document.createElement("label");r.className="option-item",r.innerHTML=`
            <input type="checkbox" value="${e.value}" ${e.checked?"checked":""}>
            <span>${e.label}</span>
          `,r.querySelector("input").addEventListener("change",()=>this._toggleOption(e.value)),this._listContainer.appendChild(r)})}_setupEventListeners(){this._trigger.addEventListener("click",i=>this._toggleDropdown()),this._triggerClear.addEventListener("click",i=>{i.stopPropagation(),this._removeFilter()}),this._searchInput.addEventListener("input",i=>this._handleSearch(i)),document.addEventListener("click",i=>this._handleClickOutside(i))}_toggleDropdown(){this._isOpen=!this._isOpen,this._isOpen?(this._list.classList.add("open"),this._trigger.setAttribute("aria-expanded","true"),this._triggerArrow.textContent="\uE1F0"):(this._list.classList.remove("open"),this._trigger.setAttribute("aria-expanded","false"),this._triggerArrow.textContent="\uE1EF",this._dispatchSelectedValues())}_dispatchSelectedValues(){this.options.some(i=>i.checked)&&(this.options.every(i=>i.checked)||(this._trigger.classList.add("has-filter"),this._isFiltered=!0),this._newFilterValues=this.options.filter(i=>i.checked).map(i=>i.label),this._compararArrays(this._actualFilterValues,this._newFilterValues)===!1&&(this._actualFilterValues=this._newFilterValues,this._FilterValues=this._newFilterValues,this.dispatchEvent(new CustomEvent("changeFilter",{}))))}_compararArrays(i,o){if(i.length!==o.length)return!1;let t=new Set(i);return o.every(a=>t.has(a))}_handleSearch(i){let o=i.target.value.toLowerCase();this.options.forEach(t=>{t.checked=t.label.toLowerCase().includes(o)}),this._renderOptions(!0)}_toggleAll(i){let o=i.target.checked;this.options.forEach(t=>{t.checked=o}),this._resetSearch(),this._renderOptions()}_toggleOption(i){let o=this.options.find(t=>t.value===i);o&&(o.checked=!o.checked,this._resetSearch(),this._renderOptions())}_resetSearch(){this._searchInput.setAttribute("placeholder","Search..."),this._searchInput.value=""}_removeFilter(){this._trigger.classList.remove("has-filter"),this._isFiltered=!1,this._newFilterValues=this._allFilterOptions.map(i=>i.label),this._actualFilterValues=this._newFilterValues,this._FilterValues=this._newFilterValues,this.dispatchEvent(new CustomEvent("changeFilter",{}))}_handleClickOutside(i){if(!this._isOpen)return;i.composedPath().includes(this)||(this._triggerArrow.textContent="\uE1EF",this._isOpen=!1,this._list&&this._list.classList.remove("open"),this._trigger&&this._trigger.setAttribute("aria-expanded","false"))}disconnectedCallback(){document.removeEventListener("click",this._handleClickOutside.bind(this))}};customElements.define("multi-select-dropdown",E);(function(){let d=document.createElement("template");d.innerHTML=`
          <style>
            ${S}
          </style>
          <div id="filters" class="filter-container">
          </div>
    `;class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(d.content.cloneNode(!0)),this.filteredData=[],this._isOpen=!1}get_isOpen(){return this._isOpen}getFilteredData(){return this.filteredData}onCustomWidgetBeforeUpdate(t){}onCustomWidgetAfterUpdate(t){}_filterListFromData(t,a){let s=new Set(a.map(e=>e[t]).filter(e=>e!==void 0));return Array.from(s).map((e,r)=>({label:e,value:"id-"+r.toString()}))}initFilters(t,a){this._data=t,this._configData=a,this._wcfilters=[];let s=this.shadowRoot.getElementById("filters"),e="";this._configData.forEach(r=>{e+=r.width+" ";let n=document.createElement("multi-select-dropdown");n.id=r.column,this._wcfilters.push(n);let c=document.createElement("div");c.appendChild(n),s.appendChild(c)}),s.style.gridTemplateColumns=e.trim(),this._configData.forEach(r=>{let n=this.shadowRoot.getElementById(r.column),c=this._filterListFromData(r.column,this._data),p=r.label,l={width:r.width,maxHeight:r.maxHeight};n._setOptions_OnInitialization(c,p,l),n.addEventListener("changeFilter",h=>{let b=this._data.filter(f=>this._wcfilters.every(g=>g.getIsFiltered?g.getFilterValues.includes(f[g.id]):!0));this._wcfilters.forEach(f=>{let g=this._filterListFromData(f.id,b);f._setOptions_OnUpdate(g)}),this.filteredData=b,this.dispatchEvent(new CustomEvent("dataFiltered",{}))})})}updateFiltersDB(t,a){this._data=t,this._configFilterWidgets=a;let s=this._data.filter(e=>this._wcfilters.every(r=>r.getIsFiltered?r.getFilterValues.includes(e[r.id]):!0));if(s.length===0){let e={};Object.keys(this._data[0]).forEach(r=>{e[r]="No results found"}),s.push(e)}this._wcfilters.forEach(e=>{let r=this._filterListFromData(e.id,this._data);e._onChangeDB_Initialization(r);let n=this._filterListFromData(e.id,s);e._setOptions_OnUpdate(n)}),this.filteredData=s,this.dispatchEvent(new CustomEvent("dataFiltered",{}))}}customElements.define("com-ggh-filter",i)})();var k=`:host {\r
  display: block;\r
  font-family: sans-serif;\r
  border: 1px solid #ccc;\r
  overflow: hidden;\r
}\r
\r
* {\r
  box-sizing: border-box;\r
  font-family: "SAP-icons", "72-Web", Helvetica, sans-serif, Arial;\r
  font-size: 14px;\r
}\r
\r
.tab-bar {\r
  display: flex;\r
  background: #354a5f;\r
  height: 48px;\r
  align-items: center;\r
  position: relative;\r
}\r
\r
.tab-button {\r
  padding: 15px 20px;\r
  margin-left: 10px;\r
  margin-right: 10px;\r
  border: none;\r
  background: none;\r
  cursor: pointer;\r
  transition: 0.3s;\r
  color: #a9b4be;\r
  position: relative;\r
}\r
\r
.tab-button:hover {\r
  color: #4b79a9;\r
}\r
\r
.tab-button.active {\r
  color: #ffffff;\r
}\r
\r
.tab-button.active::after {\r
  content: "";\r
  position: absolute;\r
  bottom: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 2px;\r
  background: #ffffff;\r
}\r
\r
.tab-content {\r
  padding: 20px;\r
}\r
\r
.tab-content-item {\r
  display: none;\r
}\r
`;var I=`/* Contenedor de tabla */\r
:host {\r
  display: block;\r
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
/* Estilo de la tabla */\r
table {\r
  border-spacing: 0;\r
  width: 100%;\r
}\r
\r
/* Celdas generales */\r
/* th {\r
  font-weight: normal;\r
  border: 1px solid #ccc;\r
} */\r
\r
td {\r
  padding: 4px;\r
}\r
\r
/* Filas pares del cuerpo con color de fondo */\r
tbody tr:nth-child(even) {\r
  background-color: #f1f1f1;\r
}\r
\r
/* Cabecera: estilo base + sticky para TODAS las celdas de thead */\r
table thead th {\r
  position: sticky;\r
  z-index: 2;\r
  background-color: #58595b;\r
  /* fondo de la cabecera */\r
}\r
\r
/* Primera fila del thead (t\xEDtulos) */\r
table thead tr:nth-child(1) th {\r
  top: 0px;\r
  height: 32px;\r
  /* altura fija de la primera fila */\r
  line-height: 32px;\r
  /* opcional: centra texto verticalmente */\r
  color: #ffffff;\r
  font-weight: normal;\r
}\r
\r
/* Segunda fila del thead (totales) */\r
table thead tr:nth-child(2) th {\r
  top: 34px;\r
  /* igual a la altura de la primera fila + padding!!!*/\r
  padding: 4px;\r
  background-color: #ffffff;\r
  /* totales en blanco para distinguirlos */\r
  font-weight: normal;\r
  border-bottom: 1px solid #58595b;\r
}\r
\r
a {\r
  text-decoration: underline;\r
  color: #0070b1;\r
}\r
\r
.table-container {\r
  overflow-y: auto;\r
  /* Activar desplazamiento vertical */\r
  border: 1px solid #ccc;\r
  /* Opcional: a\xF1adir un borde */\r
}\r
\r
.record-count {\r
  text-align: center;\r
}\r
\r
.totals {\r
  text-align: right;\r
}\r
`;(function(){let d=document.createElement("template");d.innerHTML=`
		    <style>
          ${I}
        </style>
        <div class="table-container">
            <table>
                <thead></thead>
                <tbody></tbody>
            </table>
        </div>
	`;class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(d.content.cloneNode(!0))}onCustomWidgetBeforeUpdate(t){}onCustomWidgetAfterUpdate(t){t.selectionTable&&t.configTable&&t.tableContainerHeight&&this.setTableElements(t.selectionTable,t.configTable,t.tableContainerHeight)}_calculateTotals(t,a){let s=a.filter(c=>c.total==="true").map(c=>c.column),e=s.map(c=>{let p=t.reduce((l,h)=>l+parseInt(h[c]),0);return{key:c,value:p.toLocaleString("de-DE")}});return Object.keys(t[0]).map((c,p)=>{if(p===0){let l=document.createElement("th");return l.textContent="TOTAL:",l.classList.add("totals"),l}if(p===1){let l=document.createElement("th");return l.textContent="(Records: "+t.length+")",l.classList.add("record-count"),l}if(s.includes(c)){let l=document.createElement("th");return l.textContent=e[s.indexOf(c)].value,l.classList.add("totals"),l}else{let l=document.createElement("th");return l.textContent="",l}})}setTableElements(t,a,s){let e=Object.keys(t[0]),r=a.reduce((u,m)=>(u[m.column]=m,u),{}),n=e.map(u=>{let m=document.createElement("th");m.textContent=u;let O="text-align: "+r[u].header+";";return m.setAttribute("style",O),m}),c=document.createElement("tr");c.append(...n);let p=document.createElement("tr"),l=Object.values(t[0])[0]==="No results found";l===!1&&p.append(...this._calculateTotals(t,a));let h=this.shadowRoot.querySelector("thead");if(h.innerHTML="",h.append(c),h.append(p),l){let u=this.shadowRoot.querySelector("tbody");u.innerHTML="";return}let f=t.map(u=>Object.values(u)).map(u=>{let m=document.createElement("tr"),O=u.map((x,w)=>{let _=document.createElement("td");if(r[e[w]].total==="true")_.textContent=parseInt(x).toLocaleString("de-DE");else if(r[e[w]].hyper==="true"){let y=document.createElement("a");y.textContent=x;let L="https://my334772-sso.crm.ondemand.com/sap/ap/ui/clogin?bo_ns=http://sap.com/thingTypes&bo=COD_GENERIC&node=Root&operation=OnExtInspect&param.InternalID="+x+"&param.Type=COD_OPPORTUNITY_THINGTYPE&sapbyd-agent=TAB&OBNRedirect=X";y.href=L,y.target="_blank",y.rel="noopener noreferrer",_.appendChild(y)}else _.textContent=x;let F="text-align: "+r[e[w]].data+";";return _.setAttribute("style",F),_});return m.append(...O),m}),g=this.shadowRoot.querySelector("tbody");g.innerHTML="",g.append(...f);let M=this.shadowRoot.querySelector(".table-container");M.style.maxHeight=s}}customElements.define("com-ggh-table",i)})();var C=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.renderInitialDOM(),this.addEventListeners()}static get observedAttributes(){return["selected-index"]}attributeChangedCallback(i,o,t){i==="selected-index"&&(this.updateTabs(),this.notifyTabChange())}addEventListeners(){this.shadowRoot.querySelectorAll(".tab-button").forEach((o,t)=>{o.addEventListener("click",()=>{this.setAttribute("selected-index",t)})})}updateTabs(){let i=parseInt(this.getAttribute("selected-index"),10)||0,o=this.shadowRoot.querySelectorAll(".tab-button"),t=this.shadowRoot.querySelectorAll(".tab-content-item");o.forEach((a,s)=>{a.classList.toggle("active",s===i)}),t.forEach((a,s)=>{a.style.display=s===i?"block":"none"})}notifyTabChange(){let i=parseInt(this.getAttribute("selected-index"),10)||0;this.dispatchEvent(new CustomEvent("tab-changed",{detail:{selectedIndex:i}}))}renderTableMajOpenOpps(i,o,t){this.shadowRoot.querySelector("#ggh-table-open").setTableElements(i,o,t)}renderTableNewMajOpenOpps(i,o,t){this.shadowRoot.querySelector("#ggh-table-new").setTableElements(i,o,t)}renderTableClosedMajorOpps(i,o,t){this.shadowRoot.querySelector("#ggh-table-closed").setTableElements(i,o,t)}renderInitialDOM(){this.shadowRoot.innerHTML=`
      <style>
        ${k}
      </style>
      <div class="tab-bar">
      <button class="tab-button active">
            \uE14B Major Opps Open
      </button>
      <button class="tab-button">
            \uE14B New Major Opps Open
      </button>
      <button class="tab-button ">
            \uE14B Major Opps Closed
      </button>
      </div>
      <div class="tab-content">
      <div class="tab-content-item" style="display: block;">
        <div><com-ggh-table id="ggh-table-open" class="ggh-table-open"></com-ggh-table></div>
      </div>
      <div class="tab-content-item" style="display: none;">
        <div><com-ggh-table id="ggh-table-new" class="ggh-table-new"></com-ggh-table></div>
      </div>
      <div class="tab-content-item" style="display: none;">
        <div>... under development ...</div>
      </div>
      </div>
    `}};customElements.define("com-ggh-tabs",C);(function(){let d=document.createElement("template");d.innerHTML=`
  <style>
        ${v}
  </style>
  <com-ggh-calculus id="ggh-calculus"></com-ggh-calculus>
  <com-ggh-filter id="ggh-filter"></com-ggh-filter>
  <com-ggh-tabs id="ggh-tabs" selected-index="0"></com-ggh-tabs>
	`;class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(d.content.cloneNode(!0)),this.rs=[],this.rs_crm_a010=[]}onCustomWidgetAfterUpdate(t){t.rs&&t.rs_crm_a010&&(this.rs=t.rs,this.rs_crm_a010=t.rs_crm_a010,this.renderMajorOpps())}renderMajorOpps(){if(!this.rs||!this.rs_crm_a010){console.error("Missing rs or rs_crm data.");return}let t=this.shadowRoot.querySelector("#ggh-calculus"),a=this.shadowRoot.querySelector("#ggh-tabs"),s=this.shadowRoot.querySelector("#ggh-filter");t.onCustomWidgetAfterUpdate({rs:this.rs,rs_crm_a010:this.rs_crm_a010});let e=[{column:"Fiscal year",header:"center",data:"center",total:"false",hyper:"false"},{column:"Opp ID",header:"center",data:"center",total:"false",hyper:"true"},{column:"Opportunity Description",header:"left",data:"left",total:"false",hyper:"false"},{column:"Region",header:"center",data:"center",total:"false",hyper:"false"},{column:"Sub Region",header:"center",data:"center",total:"false",hyper:"false"},{column:"Market Segm",header:"center",data:"center",total:"false",hyper:"false"},{column:"Segment",header:"center",data:"center",total:"false",hyper:"false"},{column:"Country",header:"center",data:"center",total:"false",hyper:"false"},{column:"Close Date",header:"center",data:"center",total:"false",hyper:"false"},{column:"OPP EXP (in k\u20AC)",header:"right",data:"right",total:"true",hyper:"false"},{column:"OPP WTD (in k\u20AC)",header:"right",data:"right",total:"true",hyper:"false"},{column:"Evaluation",header:"center",data:"center",total:"false",hyper:"false"},{column:"Alignment (in k\u20AC)",header:"right",data:"right",total:"true",hyper:"false"}],r=[{column:"Fiscal year",header:"center",data:"center",total:"false",hyper:"false"},{column:"Opp ID",header:"center",data:"center",total:"false",hyper:"true"},{column:"Opportunity Description",header:"left",data:"left",total:"false",hyper:"false"},{column:"Region",header:"center",data:"center",total:"false",hyper:"false"},{column:"Sub Region",header:"center",data:"center",total:"false",hyper:"false"},{column:"Market Segm",header:"center",data:"center",total:"false",hyper:"false"},{column:"Segment",header:"center",data:"center",total:"false",hyper:"false"},{column:"Country",header:"center",data:"center",total:"false",hyper:"false"},{column:"Close Date",header:"center",data:"center",total:"false",hyper:"false"},{column:"OPP EXP (in k\u20AC)",header:"right",data:"right",total:"true",hyper:"false"},{column:"OPP WTD (in k\u20AC)",header:"right",data:"right",total:"true",hyper:"false"}],n=[{column:"Fiscal year",label:"Fiscal year",width:"200px",maxHeight:"250px"},{column:"Region",label:"Region",width:"200px",maxHeight:"250px"},{column:"Sub Region",label:"Sub Region",width:"200px",maxHeight:"250px"},{column:"Market Segm",label:"Market Segm",width:"200px",maxHeight:"250px"},{column:"Segment",label:"Segment",width:"200px",maxHeight:"250px"},{column:"Country",label:"Country",width:"200px",maxHeight:"250px"},{column:"Evaluation",label:"Evaluation",width:"200px",maxHeight:"250px"}],c=t.generateList_status_MajorOpenOpps(),p=t.generateList_new_MajorOpenOpps();s.initFilters(c,n);let l="859px";a.renderTableMajOpenOpps(c,e,l);let h=0;a.addEventListener("tab-changed",b=>{h=b.detail.selectedIndex,h===0&&s.updateFiltersDB(c,n),h===1&&s.updateFiltersDB(p,n)}),s.addEventListener("dataFiltered",()=>{h===0&&a.renderTableMajOpenOpps(s.getFilteredData(),e,l),h===1&&a.renderTableNewMajOpenOpps(s.getFilteredData(),r,l)})}}customElements.define("com-ggh-majoropps",i)})();})();
