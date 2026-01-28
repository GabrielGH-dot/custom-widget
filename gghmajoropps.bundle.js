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
`;var X={"0FISCYEAR":"FiscalYear",KSOPPDSC2:"OppDesc",ZSDISO01__SDISR11:"Region",ZSDISO01__SDISR12:"SubRegion",ZMMARSEG__CRPARMSEG:"MarketSegm","0ORD_REASON":"Segment",ZMLANDEK:"Country",KSOPPCLO:"CloseDate",KSDCOPP:"OppStatus",KSREASON:"Reason"};function _(p,t){let i=Object.values(p.reduce((e,o)=>{let l=o[t].id,n=o["@MeasureDimension"].description.replace(/ |\r\n/g,"_").replace(/_C4C$/,"");return e[l]?(e[l][n]=o["@MeasureDimension"],e[l][n].id=n,e[l][n].description=n.replace("_"," ")):(e[l]={...o},e[l][n]=o["@MeasureDimension"],e[l][n].id=n,e[l][n].description=n.replace("_"," "),delete e[l]["@MeasureDimension"],e[l].OppId=o[t],delete e[l][t]),e},{}));return z(i,X)}function R(p,t){return p.reduce((i,e)=>(i[e[t]]=e,i),{})}function C(p,t,i,e){let o=R(t,i);return p.map(n=>{let c=o[n[i]];return c?{...n,...c}:{...n,...e}})}function I(p,t,i){let e=R(t,i);return p.map(l=>{let n=e[l[i]];return n?{...l,...n}:null}).filter(l=>l!==null)}function z(p,t){return p.map(i=>{let e={};for(let o in i){let l=t[o]||o;e[l]=i[o]}return e})}function F(p,t,i){let e=p.reduce((o,l)=>(o[l[t]]||(o[l[t]]={...l},i.forEach(n=>{o[l[t]][n]=0})),i.forEach(n=>{o[l[t]][n]+=parseFloat(l[n],10)}),o),{});return Object.values(e)}function D(p,t){p.forEach(i=>{t.forEach(e=>{delete i[e]})})}(function(){let p=document.createElement("template");p.innerHTML=`
        <div class="calculus">
        </div>
	`;class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(p.content.cloneNode(!0)),this.rs=[],this.rs_poi=[],this.rs_crm_a010=[],this.rs_crm_a011=[]}onCustomWidgetAfterUpdate(e){e.rs&&e.rs_poi&&e.rs_crm_a010&&e.rs_crm_a011&&(this.rs=e.rs,this.rs_poi=e.rs_poi,this.rs_crm_a010=e.rs_crm_a010,this.rs_crm_a011=e.rs_crm_a011)}generateList_status_MajorOpenOpps(){if(!this.rs||!this.rs_crm_a010)return console.error("Missing rs or rs_crm data."),[];let l=_(this.rs_crm_a010,"KSDOCID").filter(r=>parseInt(r.OPP_EXP.rawValue,10)>=7e6).map(r=>({FiscalYear:r.FiscalYear.id.slice(-4),OppID:r.OppId.id,OppDesc:r.OppDesc.id.slice(0,40),Region:r.Region.id,SubRegion:r.SubRegion.id,MarketSegm:r.MarketSegm.id,Segment:r.Segment.description,Country:r.Country.id,CloseDate:r.CloseDate.id,OPP_EXP:parseInt(r.OPP_EXP.rawValue,10)/1e3,OPP_WTD:parseInt(r.OPP_WTD.rawValue,10)/1e3})),c=_(this.rs,"Opportunity_ID").map(r=>({OppID:r.OppId.id,Evaluation:r.Evaluation.id,Alignment:parseInt(r.Alignment.rawValue,10)/1e3}));return C(l,c,"OppID",{Evaluation:"NEW",Alignment:0}).sort((r,s)=>s.OPP_EXP-r.OPP_EXP)}generateList_status_potentialOI(e){if(!this.rs_poi||!this.rs_crm_a010)return console.error("Missing rs or rs_crm data."),[];let n=_(this.rs_crm_a010,"KSDOCID").filter(s=>parseInt(s.OPP_EXP.rawValue,10)<7e6).map(s=>{let d=s.SubRegion.id;return d!=="DEU"&&(d="notDEU"),{OppID:`${s.FiscalYear.id.slice(-4)}|${s.Region.id}|${d}|${s.MarketSegm.id}|${s.Segment.description}`,FiscalYear:s.FiscalYear.id.slice(-4),Region:s.Region.id,SubRegion:d,MarketSegm:s.MarketSegm.id,Segment:s.Segment.description,OPP_EXP:parseInt(s.OPP_EXP.rawValue,10)/1e3,OPP_WTD:parseInt(s.OPP_WTD.rawValue,10)/1e3}}),c=F(n,"OppID",["OPP_EXP","OPP_WTD"]),a=this.rs_poi.map(s=>({OppID:`${s.Fiscal_year.id}|${s.Region.id}|${s.Sub_Region.id}|${s.Market_Segment.id}|${s.Segment.description}`,Alignment:parseInt(s["@MeasureDimension"].rawValue,10)/1e3})),r=C(c,a,"OppID",{Alignment:0});return e||D(r,["OppID"]),r.sort((s,d)=>d.OPP_EXP-s.OPP_EXP)}generateList_status_MajorClosedOpps(){if(!this.rs||!this.rs_crm_a011)return console.error("Missing rs or rs_crm data."),[];let o=_(this.rs_crm_a011,"KSDOCID").map(a=>{let r=a.Reason.description;return r.includes("Not assigned")||(r=r.slice(5)),{FiscalYear:a.FiscalYear.id.slice(-4),OppID:a.OppId.id,OppDesc:a.OppDesc.id,Region:a.Region.id,SubRegion:a.SubRegion.id,MarketSegm:a.MarketSegm.id,Segment:a.Segment.description,Country:a.Country.id,CloseDate:a.CloseDate.id,OppStatus:a.OppStatus.description,Reason:r,OPP_EXP:parseInt(a.OPP_EXP.rawValue,10)/1e3}}),n=_(this.rs,"Opportunity_ID").map(a=>({OppID:a.OppId.id,Evaluation:a.Evaluation.id,Alignment:parseInt(a.Alignment.rawValue,10)/1e3}));return I(o,n,"OppID").sort((a,r)=>r.OPP_EXP-a.OPP_EXP)}}customElements.define("com-ggh-calculus",t)})();var T=`:host {\r
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
`;var A=`:host {\r
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
`;var k=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.options=[],this._isOpen=!1,this._isFiltered=!1,this._actualFilterValues=[],this._newFilterValues=[],this._FilterValues=[],this._allFilterOptions=null,this._filterOptions=null}get getFilterValues(){return this._FilterValues}get getIsFiltered(){return this._isFiltered}_setOptions_OnInitialization(t,i,e){this._filterColumn=i,this._dimensions=e,this.style.width=this._dimensions.width,this._allFilterOptions=t,this._FilterValues=this._allFilterOptions.map(o=>o.label),this.options=this._allFilterOptions.map(o=>({...o,checked:!0})),this.options.sort((o,l)=>o.label.localeCompare(l.label)),this._actualFilterValues=this.options.map(o=>o.label),this._render(),this._renderOptions(),this._setupEventListeners()}_onChangeDB_Initialization(t){this._allFilterOptions=t}_setOptions_OnUpdate(t){this._filterOptions=t,this.options=this._filterOptions.map(i=>({...i,checked:!0})),this.options.sort((i,e)=>i.label.localeCompare(e.label)),this._actualFilterValues=this.options.map(i=>i.label),this._renderOptions()}_render(){this.shadowRoot.innerHTML=`
                <style>
                  ${A}
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
        `,this._trigger=this.shadowRoot.querySelector(".trigger"),this._triggerArrow=this.shadowRoot.querySelector(".trigger-arrow"),this._triggerClear=this.shadowRoot.querySelector(".trigger-clear"),this._searchInput=this.shadowRoot.querySelector(".search-input"),this._list=this.shadowRoot.querySelector(".dropdown-list"),this._listContainer=this.shadowRoot.querySelector(".options-container")}_renderOptions(t=!1){this._listContainer.innerHTML="",this._listContainer.style.maxHeight=this._dimensions.maxHeight;let i=this.options.length>0&&this.options.every(n=>n.checked),e=this.options.some(n=>n.checked)&&!i,o=document.createElement("label");o.className="option-item all-option",o.innerHTML=`
          <input type="checkbox" class="cb-all" ${i?"checked":""}>
          <span><b>Select all</b></span>
        `;let l=o.querySelector(".cb-all");if(l.indeterminate=e,l.addEventListener("change",n=>this._toggleAll(n)),this._listContainer.appendChild(o),this.options.length===0){let n=document.createElement("div");n.style.padding="8px",n.textContent="No results found",this._listContainer.appendChild(n);return}this.options.forEach(n=>{if(t&&!n.checked)return;let c=document.createElement("label");c.className="option-item",c.innerHTML=`
            <input type="checkbox" value="${n.value}" ${n.checked?"checked":""}>
            <span>${n.label}</span>
          `,c.querySelector("input").addEventListener("change",()=>this._toggleOption(n.value)),this._listContainer.appendChild(c)})}_setupEventListeners(){this._trigger.addEventListener("click",t=>this._toggleDropdown()),this._triggerClear.addEventListener("click",t=>{t.stopPropagation(),this._removeFilter()}),this._searchInput.addEventListener("input",t=>this._handleSearch(t)),document.addEventListener("click",t=>this._handleClickOutside(t))}_toggleDropdown(){this._isOpen=!this._isOpen,this._isOpen?(this._list.classList.add("open"),this._trigger.setAttribute("aria-expanded","true"),this._triggerArrow.textContent="\uE1F0"):(this._list.classList.remove("open"),this._trigger.setAttribute("aria-expanded","false"),this._triggerArrow.textContent="\uE1EF",this._dispatchSelectedValues())}_dispatchSelectedValues(){this.options.some(t=>t.checked)&&(this.options.every(t=>t.checked)||(this._trigger.classList.add("has-filter"),this._isFiltered=!0),this._newFilterValues=this.options.filter(t=>t.checked).map(t=>t.label),this._compararArrays(this._actualFilterValues,this._newFilterValues)===!1&&(this._actualFilterValues=this._newFilterValues,this._FilterValues=this._newFilterValues,this.dispatchEvent(new CustomEvent("changeFilter",{}))))}_compararArrays(t,i){if(t.length!==i.length)return!1;let e=new Set(t);return i.every(o=>e.has(o))}_handleSearch(t){let i=t.target.value.toLowerCase();this.options.forEach(e=>{e.checked=e.label.toLowerCase().includes(i)}),this._renderOptions(!0)}_toggleAll(t){let i=t.target.checked;this.options.forEach(e=>{e.checked=i}),this._resetSearch(),this._renderOptions()}_toggleOption(t){let i=this.options.find(e=>e.value===t);i&&(i.checked=!i.checked,this._resetSearch(),this._renderOptions())}_resetSearch(){this._searchInput.setAttribute("placeholder","Search..."),this._searchInput.value=""}_removeFilter(){this._trigger.classList.remove("has-filter"),this._isFiltered=!1,this._newFilterValues=this._allFilterOptions.map(t=>t.label),this._actualFilterValues=this._newFilterValues,this._FilterValues=this._newFilterValues,this.dispatchEvent(new CustomEvent("changeFilter",{}))}_handleClickOutside(t){if(!this._isOpen)return;t.composedPath().includes(this)||(this._triggerArrow.textContent="\uE1EF",this._isOpen=!1,this._list&&this._list.classList.remove("open"),this._trigger&&this._trigger.setAttribute("aria-expanded","false"))}disconnectedCallback(){document.removeEventListener("click",this._handleClickOutside.bind(this))}};customElements.define("multi-select-dropdown",k);(function(){let p=document.createElement("template");p.innerHTML=`
          <style>
            ${T}
          </style>
          <div id="filters" class="filter-container">
          </div>
    `;class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(p.content.cloneNode(!0)),this.filteredData=[],this._isOpen=!1}get_isOpen(){return this._isOpen}getFilteredData(){return this.filteredData}onCustomWidgetBeforeUpdate(e){}onCustomWidgetAfterUpdate(e){}_filterListFromData(e,o){let l=new Set(o.map(n=>n[e]).filter(n=>n!==void 0));return Array.from(l).map((n,c)=>({label:n,value:"id-"+c.toString()}))}initFilters(e,o){this._data=e,this._configData=o,this._wcfilters=[];let l=this.shadowRoot.getElementById("filters"),n="";this._configData.forEach(c=>{n+=c.width+" ";let a=document.createElement("multi-select-dropdown");a.id=c.column,this._wcfilters.push(a);let r=document.createElement("div");r.appendChild(a),l.appendChild(r)}),l.style.gridTemplateColumns=n.trim(),this._configData.forEach(c=>{let a=this.shadowRoot.getElementById(c.column),r=this._filterListFromData(c.column,this._data),s=c.label,d={width:c.width,maxHeight:c.maxHeight};a._setOptions_OnInitialization(r,s,d),a.addEventListener("changeFilter",h=>{let b=this._data.filter(u=>this._wcfilters.every(m=>m.getIsFiltered?m.getFilterValues.includes(u[m.id]):!0));this._wcfilters.forEach(u=>{let m=this._filterListFromData(u.id,b);u._setOptions_OnUpdate(m)}),this.filteredData=b,this.dispatchEvent(new CustomEvent("dataFiltered",{}))})})}updateFiltersDB(e,o){this._data=e,this._configFilterWidgets=o;let l=this._data.filter(n=>this._wcfilters.every(c=>c.getIsFiltered?c.getFilterValues.includes(n[c.id]):!0));if(l.length===0){let n={};Object.keys(this._data[0]).forEach(c=>{n[c]="No results found"}),l.push(n)}this._wcfilters.forEach(n=>{let c=this._filterListFromData(n.id,this._data);n._onChangeDB_Initialization(c);let a=this._filterListFromData(n.id,l);n._setOptions_OnUpdate(a)}),this.filteredData=l,this.dispatchEvent(new CustomEvent("dataFiltered",{}))}}customElements.define("com-ggh-filter",t)})();var M=`:host {\r
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
`;var L=`/* Contenedor de tabla */\r
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
`;(function(){let p=document.createElement("template");p.innerHTML=`
		    <style>
          ${L}
        </style>
        <div class="table-container">
            <table>
                <thead></thead>
                <tbody></tbody>
            </table>
        </div>
	`;class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(p.content.cloneNode(!0))}onCustomWidgetBeforeUpdate(e){}onCustomWidgetAfterUpdate(e){e.selectionTable&&e.configTable&&e.tableContainerHeight&&this.setTableElements(e.selectionTable,e.configTable,e.tableContainerHeight)}_calculateTotals(e,o){let l=o.filter(r=>r.total==="true").map(r=>r.column),n=l.map(r=>{let s=e.reduce((d,h)=>d+parseInt(h[r]),0);return{key:r,value:s.toLocaleString("de-DE")}});return Object.keys(e[0]).map((r,s)=>{if(s===0){let d=document.createElement("th");return d.textContent="TOTAL:",d.classList.add("totals"),d}if(s===1){let d=document.createElement("th");return d.textContent="(Records: "+e.length+")",d.classList.add("record-count"),d}if(l.includes(r)){let d=document.createElement("th");return d.textContent=n[l.indexOf(r)].value,d.classList.add("totals"),d}else{let d=document.createElement("th");return d.textContent="",d}})}setTableElements(e,o,l){let n=Object.keys(e[0]),c=o.reduce((g,f)=>(g[f.column]=f,g),{}),a=n.map(g=>{let f=document.createElement("th");f.textContent=c[g].label;let E="text-align: "+c[g].header+";";return f.setAttribute("style",E),f}),r=document.createElement("tr");r.append(...a);let s=document.createElement("tr"),d=Object.values(e[0])[0]==="No results found";d===!1&&s.append(...this._calculateTotals(e,o));let h=this.shadowRoot.querySelector("thead");if(h.innerHTML="",h.append(r),h.append(s),d){let g=this.shadowRoot.querySelector("tbody");g.innerHTML="";return}let u=e.map(g=>Object.values(g)).map(g=>{let f=document.createElement("tr"),E=g.map((O,S)=>{let y=document.createElement("td");if(c[n[S]].total==="true")y.textContent=parseInt(O).toLocaleString("de-DE");else if(c[n[S]].hyper==="true"){let x=document.createElement("a");x.textContent=O;let j="https://my334772-sso.crm.ondemand.com/sap/ap/ui/clogin?bo_ns=http://sap.com/thingTypes&bo=COD_GENERIC&node=Root&operation=OnExtInspect&param.InternalID="+O+"&param.Type=COD_OPPORTUNITY_THINGTYPE&sapbyd-agent=TAB&OBNRedirect=X";x.href=j,x.target="_blank",x.rel="noopener noreferrer",y.appendChild(x)}else y.textContent=O;let W="text-align: "+c[n[S]].data+";";return y.setAttribute("style",W),y});return f.append(...E),f}),m=this.shadowRoot.querySelector("tbody");m.innerHTML="",m.append(...u);let V=this.shadowRoot.querySelector(".table-container");V.style.maxHeight=l}}customElements.define("com-ggh-table",t)})();var H=`:host {\r
  display: inline-block;\r
}\r
\r
* {\r
  box-sizing: border-box;\r
  font-family: "SAP-icons", "72-Web", Helvetica, sans-serif, Arial;\r
  font-size: 14px;\r
}\r
\r
button {\r
  padding: 5px 5px;\r
  font-size: 16px;\r
  color: green;\r
  background-color: #dadada;\r
  border: none;\r
  border-radius: 5px;\r
  cursor: pointer;\r
}\r
\r
button:hover {\r
  background-color: #b0b0b0;\r
}\r
`;var w=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.shadowRoot.querySelector("button").addEventListener("click",()=>this.manejarClickExportar())}setupDB(t,i){this.dataArray=t,this.exportWhat=i}disconnectedCallback(){this.shadowRoot.querySelector("button").removeEventListener("click",()=>this.manejarClickExportar())}async initExcel(){return new Promise((t,i)=>{if(window.ExcelJS)return t(window.ExcelJS);let e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js",e.integrity="sha512-dlPw+ytv/6JyepmelABrgeYgHI0O+frEwgfnPdXDTOIZz+eDgfW07QXG02/O8COfivBdGNINy+Vex+lYmJ5rxw==",e.crossOrigin="anonymous",e.onload=()=>{window.ExcelJS?t(window.ExcelJS):i(new Error("Excel library not found."))},e.onerror=()=>{i(new Error("There was a problem loading Excel Library."))},document.head.appendChild(e)})}async manejarClickExportar(){if(!this.dataArray||!this.exportWhat){console.error("No data available to export."),alert("No data available to export.");return}if(this.exportWhat==="MajorOpportunities")try{let t=await this.initExcel();this.dataArray.sort((a,r)=>a.FiscalYear.localeCompare(r.FiscalYear)||a.Region.localeCompare(r.Region)||a.SubRegion.localeCompare(r.SubRegion)||a.MarketSegm.localeCompare(r.MarketSegm)||a.Segment.localeCompare(r.Segment));let i=new t.Workbook,e=i.addWorksheet("Major Opportunities"),o=[{header:"Fiscal Year",key:"FiscalYear",width:12,alignment:"center"},{header:"Opp ID",key:"OppID",width:12,alignment:"center"},{header:"Opp Description",key:"OppDesc",width:65,alignment:"left"},{header:"Region",key:"Region",width:10,alignment:"center"},{header:"Sub Region",key:"SubRegion",width:14,alignment:"center"},{header:"Market Segment",key:"MarketSegm",width:20,alignment:"center"},{header:"Segment",key:"Segment",width:25,alignment:"center"},{header:"Country",key:"Country",width:10,alignment:"center"},{header:"Close Date",key:"CloseDate",width:12,alignment:"center"},{header:"OPP EXP (in k\u20AC)",key:"OPP_EXP",width:23,alignment:"right"},{header:"OPP WTD (in k\u20AC)",key:"OPP_WTD",width:23,alignment:"right"},{header:"Evaluation",key:"Evaluation",width:15,alignment:"center"},{header:"Alignment (in k\u20AC)",key:"Alignment",width:23,alignment:"right"}];e.columns=o,o.forEach((a,r)=>{let s=e.getCell(1,r+1);s.font={bold:!0,size:12,color:{argb:"FFFFFF"}},s.fill={type:"pattern",pattern:"solid",fgColor:{argb:"4472C4"}},s.alignment={vertical:"middle",horizontal:"center"}}),this.dataArray.forEach(a=>{e.addRow({FiscalYear:a.FiscalYear,OppID:a.OppID,OppDesc:a.OppDesc,Region:a.Region,SubRegion:a.SubRegion,MarketSegm:a.MarketSegm,Segment:a.Segment,Country:a.Country,CloseDate:a.CloseDate,OPP_EXP:parseInt(a.OPP_EXP,10),OPP_WTD:parseInt(a.OPP_WTD,10),Evaluation:a.Evaluation,Alignment:parseInt(a.Alignment,10)})}),e.eachRow((a,r)=>{r!==1&&(a.eachCell({includeEmpty:!0},(s,d)=>{let h=o[d-1];h&&h.alignment&&(s.alignment={vertical:"middle",horizontal:h.alignment},(h.key==="OPP_EXP"||h.key==="OPP_WTD"||h.key==="Alignment")&&(s.numFmt="#,##0"))}),r%2===0&&a.eachCell(s=>{s.fill={type:"pattern",pattern:"solid",fgColor:{argb:"DCE6F1"}}}))}),e.autoFilter={from:"A1",to:`M${this.dataArray.length+1}`},e.eachRow((a,r)=>{a.eachCell({includeEmpty:!0},s=>{if(r===1){s.protection={locked:!1};return}s.protection={locked:!0}})}),e.getColumn("Evaluation").eachCell((a,r)=>{r>1&&(a.protection={locked:!1},a.dataValidation={type:"list",allowBlank:!1,formula1:'"PLAN,NOT IN PLAN,BEST,NEW"',showErrorMessage:!0,errorStyle:"error",errorTitle:"Invalid Selection",error:"Please select a value from the list: PLAN, NOT IN PLAN, BEST, NEW."})}),e.getColumn("Alignment").eachCell((a,r)=>{r>1&&(a.protection={locked:!1},a.dataValidation={type:"decimal",operator:"greaterThanOrEqual",formula1:"0",showErrorMessage:!0,errorStyle:"error",errorTitle:"valid",error:"Only numerical values are allowed. Please enter a valid number."})}),await e.protect("8s1only",{selectLockedCells:!1,selectUnlockedCells:!0});let l=await i.xlsx.writeBuffer(),n=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),c=document.createElement("a");c.href=URL.createObjectURL(n),c.download="MajorOpportunities.xlsx",c.click(),console.log("XLSX file download successfully")}catch(t){console.error("Error while exporting the Excel file:",t),alert("There was an issue generating the Excel file. Please check the console for more details.")}if(this.exportWhat==="PotentialOI")try{let t=await this.initExcel();this.dataArray.sort((a,r)=>a.FiscalYear.localeCompare(r.FiscalYear)||a.Region.localeCompare(r.Region)||a.SubRegion.localeCompare(r.SubRegion)||a.MarketSegm.localeCompare(r.MarketSegm)||a.Segment.localeCompare(r.Segment));let i=new t.Workbook,e=i.addWorksheet("Potential OI"),o=[{header:"Fiscal Year",key:"FiscalYear",width:15,alignment:"center"},{header:"Region",key:"Region",width:12,alignment:"center"},{header:"Sub Region",key:"SubRegion",width:16,alignment:"center"},{header:"Market Segment",key:"MarketSegm",width:20,alignment:"center"},{header:"Segment",key:"Segment",width:37,alignment:"center"},{header:"OPP EXP (in k\u20AC)",key:"OPP_EXP",width:23,alignment:"right"},{header:"OPP WTD (in k\u20AC)",key:"OPP_WTD",width:23,alignment:"right"},{header:"Alignment (in k\u20AC)",key:"Alignment",width:23,alignment:"right"}];e.columns=o,o.forEach((a,r)=>{let s=e.getCell(1,r+1);s.font={bold:!0,size:12,color:{argb:"FFFFFF"}},s.fill={type:"pattern",pattern:"solid",fgColor:{argb:"4472C4"}},s.alignment={vertical:"middle",horizontal:"center"}}),this.dataArray.forEach(a=>{e.addRow({FiscalYear:a.FiscalYear,Region:a.Region,SubRegion:a.SubRegion,MarketSegm:a.MarketSegm,Segment:a.Segment,OPP_EXP:parseInt(a.OPP_EXP,10),OPP_WTD:parseInt(a.OPP_WTD,10),Alignment:parseInt(a.Alignment,10)})}),e.eachRow((a,r)=>{r!==1&&(a.eachCell({includeEmpty:!0},(s,d)=>{let h=o[d-1];h&&h.alignment&&(s.alignment={vertical:"middle",horizontal:h.alignment},(h.key==="OPP_EXP"||h.key==="OPP_WTD"||h.key==="Alignment")&&(s.numFmt="#,##0"))}),r%2===0&&a.eachCell(s=>{s.fill={type:"pattern",pattern:"solid",fgColor:{argb:"DCE6F1"}}}))}),e.autoFilter={from:"A1",to:`H${this.dataArray.length+1}`},e.eachRow((a,r)=>{a.eachCell({includeEmpty:!0},s=>{if(r===1){s.protection={locked:!1};return}s.protection={locked:!0}})}),e.getColumn("Alignment").eachCell((a,r)=>{r>1&&(a.protection={locked:!1},a.dataValidation={type:"decimal",operator:"greaterThanOrEqual",formula1:"0",showErrorMessage:!0,errorStyle:"error",errorTitle:"valid",error:"Only numerical values are allowed. Please enter a valid number."})}),await e.protect("8s1only",{selectLockedCells:!1,selectUnlockedCells:!0});let l=await i.xlsx.writeBuffer(),n=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),c=document.createElement("a");c.href=URL.createObjectURL(n),c.download="PotentialOI.xlsx",c.click(),console.log("XLSX file download successfully")}catch(t){console.error("Error while exporting the Excel file:",t),alert("There was an issue generating the Excel file. Please check the console for more details.")}}render(){this.shadowRoot.innerHTML=`
            <style>
                ${H}
            </style>

            <button alt="Export to Excel" title="Export to Excel">\uE034</button>
        `}};customElements.define("com-ggh-excel",w);var P=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.renderInitialDOM(),this.addEventListeners()}static get observedAttributes(){return["selected-index"]}attributeChangedCallback(t,i,e){t==="selected-index"&&(this.updateTabs(),this.notifyTabChange())}addEventListeners(){this.shadowRoot.querySelectorAll(".tab-button").forEach((i,e)=>{i.addEventListener("click",()=>{this.setAttribute("selected-index",e)})})}updateTabs(){let t=parseInt(this.getAttribute("selected-index"),10)||0,i=this.shadowRoot.querySelectorAll(".tab-button"),e=this.shadowRoot.querySelectorAll(".tab-content-item");i.forEach((o,l)=>{o.classList.toggle("active",l===t)}),e.forEach((o,l)=>{o.style.display=l===t?"block":"none"})}notifyTabChange(){let t=parseInt(this.getAttribute("selected-index"),10)||0;this.dispatchEvent(new CustomEvent("tab-changed",{detail:{selectedIndex:t}}))}renderTableMajOpenOpps(t,i,e){this.shadowRoot.querySelector("#ggh-table-open").setTableElements(t,i,e)}renderTablePotentialOI(t,i,e){this.shadowRoot.querySelector("#ggh-table-poi").setTableElements(t,i,e)}renderTableClosedMajorOpps(t,i,e){this.shadowRoot.querySelector("#ggh-table-closed").setTableElements(t,i,e)}setupExcelExport(t,i){this.shadowRoot.querySelector("#ggh-excel").setupDB(t,i)}excelVisibility(t){let i=this.shadowRoot.querySelector("#ggh-excel");i&&(i.style.display=t?"block":"none")}renderInitialDOM(){this.shadowRoot.innerHTML=`
      <style>
        ${M}
      </style>
      <div class="tab-bar">
      <button class="tab-button active">
            \uE14B Major Opps Open
      </button>
      <button class="tab-button">
            \uE14B Potential OI
      </button>
      <button class="tab-button ">
            \uE14B Major Opps Closed
      </button>
      <com-ggh-excel id="ggh-excel" class="ggh-excel"></com-ggh-excel>
      </div>
      <div class="tab-content">
      <div class="tab-content-item" style="display: block;">
        <div><com-ggh-table id="ggh-table-open" class="ggh-table-open"></com-ggh-table></div>
      </div>
      <div class="tab-content-item" style="display: none;">
        <div><com-ggh-table id="ggh-table-poi" class="ggh-table-poi"></com-ggh-table></div>
      </div>
      <div class="tab-content-item" style="display: none;">
        <div><com-ggh-table id="ggh-table-closed" class="ggh-table-closed"></com-ggh-table></div>
      </div>
      </div>
    `}};customElements.define("com-ggh-tabs",P);(function(){let p=document.createElement("template");p.innerHTML=`
  <style>
        ${v}
  </style>
  <com-ggh-calculus id="ggh-calculus"></com-ggh-calculus>
  <com-ggh-filter id="ggh-filter"></com-ggh-filter>
  <com-ggh-tabs id="ggh-tabs" selected-index="0"></com-ggh-tabs>
	`;class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(p.content.cloneNode(!0)),this.rs=[],this.rs_poi=[],this.rs_crm_a010=[],this.rs_crm_a011=[]}onCustomWidgetAfterUpdate(e){e.rs&&e.rs_poi&&e.rs_crm_a010&&e.rs_crm_a011&&(this.rs=e.rs,this.rs_poi=e.rs_poi,this.rs_crm_a010=e.rs_crm_a010,this.rs_crm_a011=e.rs_crm_a011,this.renderMajorOpps())}renderMajorOpps(){if(!this.rs||!this.rs_crm_a010){console.error("Missing rs or rs_crm data.");return}let e=this.shadowRoot.querySelector("#ggh-calculus"),o=this.shadowRoot.querySelector("#ggh-tabs"),l=this.shadowRoot.querySelector("#ggh-filter");e.onCustomWidgetAfterUpdate({rs:this.rs,rs_poi:this.rs_poi,rs_crm_a010:this.rs_crm_a010,rs_crm_a011:this.rs_crm_a011});let n=[{column:"FiscalYear",label:"Fiscal year",header:"center",data:"center",total:"false",hyper:"false"},{column:"OppID",label:"Opp ID",header:"center",data:"center",total:"false",hyper:"true"},{column:"OppDesc",label:"Opportunity Description",header:"center",data:"left",total:"false",hyper:"false"},{column:"Region",label:"Region",header:"center",data:"center",total:"false",hyper:"false"},{column:"SubRegion",label:"Sub-Region",header:"center",data:"center",total:"false",hyper:"false"},{column:"MarketSegm",label:"Market Segment",header:"center",data:"center",total:"false",hyper:"false"},{column:"Segment",label:"Segment",data:"center",total:"false",hyper:"false"},{column:"Country",label:"Country",header:"center",data:"center",total:"false",hyper:"false"},{column:"CloseDate",label:"Close Date",header:"center",data:"center",total:"false",hyper:"false"},{column:"OPP_EXP",label:"OPP EXP (in k\u20AC)",header:"center",data:"right",total:"true",hyper:"false"},{column:"OPP_WTD",label:"OPP WTD (in k\u20AC)",header:"center",data:"right",total:"true",hyper:"false"},{column:"Evaluation",label:"Evaluation",header:"center",data:"center",total:"false",hyper:"false"},{column:"Alignment",label:"Alignment (in k\u20AC)",header:"center",data:"right",total:"true",hyper:"false"}],c=[{column:"FiscalYear",label:"Fiscal year",header:"center",data:"center",total:"false",hyper:"false"},{column:"Region",label:"Region",header:"center",data:"center",total:"false",hyper:"false"},{column:"SubRegion",label:"Sub-Region",header:"center",data:"center",total:"false",hyper:"false"},{column:"MarketSegm",label:"Market Segment",header:"center",data:"center",total:"false",hyper:"false"},{column:"Segment",label:"Segment",header:"center",data:"center",total:"false",hyper:"false"},{column:"Country",label:"Country",header:"center",data:"center",total:"false",hyper:"false"},{column:"OPP_EXP",label:"OPP EXP (in k\u20AC)",header:"center",data:"right",total:"true",hyper:"false"},{column:"OPP_WTD",label:"OPP WTD (in k\u20AC)",header:"center",data:"right",total:"true",hyper:"false"},{column:"Alignment",label:"Alignment (in k\u20AC)",header:"center",data:"right",total:"true",hyper:"false"}],a=[{column:"FiscalYear",label:"Fiscal year",header:"center",data:"center",total:"false",hyper:"false"},{column:"OppID",label:"Opp ID",header:"center",data:"center",total:"false",hyper:"true"},{column:"OppDesc",label:"Opportunity Description",header:"center",data:"left",total:"false",hyper:"false"},{column:"Region",label:"Region",header:"center",data:"center",total:"false",hyper:"false"},{column:"SubRegion",label:"Sub-Region",header:"center",data:"center",total:"false",hyper:"false"},{column:"MarketSegm",label:"Market Segment",header:"center",data:"center",total:"false",hyper:"false"},{column:"Segment",label:"Segment",data:"center",total:"false",hyper:"false"},{column:"Country",label:"Country",header:"center",data:"center",total:"false",hyper:"false"},{column:"CloseDate",label:"Close Date",header:"center",data:"center",total:"false",hyper:"false"},{column:"OppStatus",label:"Status",header:"center",data:"center",total:"false",hyper:"false"},{column:"Reason",label:"Reason",header:"center",data:"center",total:"false",hyper:"false"},{column:"OPP_EXP",label:"OPP EXP (in k\u20AC)",header:"center",data:"right",total:"true",hyper:"false"},{column:"Evaluation",label:"Evaluation",header:"center",data:"center",total:"false",hyper:"false"},{column:"Alignment",label:"Alignment (in k\u20AC)",header:"center",data:"right",total:"true",hyper:"false"}],r=[{column:"FiscalYear",label:"Fiscal year",width:"200px",maxHeight:"250px"},{column:"Region",label:"Region",width:"200px",maxHeight:"250px"},{column:"SubRegion",label:"Sub Region",width:"200px",maxHeight:"250px"},{column:"MarketSegm",label:"Market Segm",width:"200px",maxHeight:"250px"},{column:"Segment",label:"Segment",width:"200px",maxHeight:"250px"},{column:"Country",label:"Country",width:"200px",maxHeight:"250px"},{column:"Evaluation",label:"Evaluation",width:"200px",maxHeight:"250px"}],s=e.generateList_status_MajorOpenOpps(),d=e.generateList_status_potentialOI(!1),h=e.generateList_status_MajorClosedOpps();l.initFilters(s,r);let b="860px";o.renderTableMajOpenOpps(s,n,b),o.setupExcelExport(s,"MajorOpportunities");let u=0;o.addEventListener("tab-changed",m=>{u=m.detail.selectedIndex,u===0&&(l.updateFiltersDB(s,r),o.setupExcelExport(s,"MajorOpportunities"),o.excelVisibility(!0)),u===1&&(l.updateFiltersDB(d,r),o.setupExcelExport(d,"PotentialOI"),o.excelVisibility(!0)),u===2&&(l.updateFiltersDB(h,r),o.excelVisibility(!1))}),l.addEventListener("dataFiltered",()=>{u===0&&(o.renderTableMajOpenOpps(l.getFilteredData(),n,b),o.setupExcelExport(l.getFilteredData(),"MajorOpportunities")),u===1&&(o.renderTablePotentialOI(l.getFilteredData(),c,b),o.setupExcelExport(l.getFilteredData(),"PotentialOI")),u===2&&o.renderTableClosedMajorOpps(l.getFilteredData(),a,b)})}}customElements.define("com-ggh-majoropps",t)})();})();
