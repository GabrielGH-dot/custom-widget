(()=>{var F=`* {\r
  box-sizing: border-box;\r
  font-family: "SAP-icons", "72-Web", Helvetica, sans-serif, Arial;\r
  font-size: 14px;\r
}\r
com-ggh-filter {\r
  width: 1900px;\r
  height: 50px;\r
  top: 10px;\r
  position: absolute;\r
  z-index: 3;\r
}\r
com-ggh-tabs {\r
  width: 1900px;\r
  height: 948px;\r
  top: 60px;\r
  position: absolute;\r
  z-index: 1;\r
}\r
`;var B={"0FISCYEAR":"FiscalYear",KSOPPDSC2:"OppDesc",ZSDISO01__SDISR11:"Region",ZSDISO01__SDISR12:"SubRegion",ZMMARSEG__CRPARMSEG:"MarketSegm","0ORD_REASON":"Segment",ZMLANDEK:"Country",KSOPPCLO:"CloseDate",KSDCOPP:"OppStatus",KSREASON:"Reason"};function _(p,a){let l=Object.values(p.reduce((e,o)=>{let r=o[a].id,i=o["@MeasureDimension"].description.replace(/ |\r\n/g,"_").replace(/_C4C$/,"");return e[r]?(e[r][i]=o["@MeasureDimension"],e[r][i].id=i,e[r][i].description=i.replace("_"," ")):(e[r]={...o},e[r][i]=o["@MeasureDimension"],e[r][i].id=i,e[r][i].description=i.replace("_"," "),delete e[r]["@MeasureDimension"],e[r].OppId=o[a],delete e[r][a]),e},{}));return z(l,B)}function I(p,a){return p.reduce((l,e)=>(l[e[a]]=e,l),{})}function k(p,a,l,e){let o=I(a,l);return p.map(i=>{let c=o[i[l]];return c?{...i,...c}:{...i,...e}})}function A(p,a,l){let e=I(a,l);return p.map(r=>{let i=e[r[l]];return i?{...r,...i}:null}).filter(r=>r!==null)}function z(p,a){return p.map(l=>{let e={};for(let o in l){let r=a[o]||o;e[r]=l[o]}return e})}function E(p,a,l){let e=p.reduce((o,r)=>(o[r[a]]||(o[r[a]]={...r},l.forEach(i=>{o[r[a]][i]=0})),l.forEach(i=>{o[r[a]][i]+=parseFloat(r[i],10)}),o),{});return Object.values(e)}function T(p,a){p.forEach(l=>{a.forEach(e=>{delete l[e]})})}(function(){let p=document.createElement("template");p.innerHTML=`
        <div class="calculus">
        </div>
	`;class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(p.content.cloneNode(!0)),this.rs=[],this.rs_poi=[],this.rs_crm_a010=[],this.rs_crm_a011=[]}onCustomWidgetAfterUpdate(e){e.rs&&e.rs_poi&&e.rs_crm_a010&&e.rs_crm_a011&&(this.rs=e.rs,this.rs_poi=e.rs_poi,this.rs_crm_a010=e.rs_crm_a010,this.rs_crm_a011=e.rs_crm_a011)}generateList_status_MajorOpenOpps(){if(!this.rs||!this.rs_crm_a010)return console.error("Missing rs or rs_crm data."),[];let r=_(this.rs_crm_a010,"KSDOCID").filter(n=>parseInt(n.OPP_EXP.rawValue,10)>=7e6).map(n=>({FiscalYear:n.FiscalYear.id.slice(-4),OppID:n.OppId.id,OppDesc:n.OppDesc.id.slice(0,40),Region:n.Region.id,SubRegion:n.SubRegion.id,MarketSegm:n.MarketSegm.id,Segment:n.Segment.description,Country:n.Country.id,CloseDate:n.CloseDate.id,OPP_EXP:parseInt(n.OPP_EXP.rawValue,10)/1e3,OPP_WTD:parseInt(n.OPP_WTD.rawValue,10)/1e3})),c=_(this.rs,"Opportunity_ID").map(n=>({OppID:n.OppId.id,Evaluation:n.Evaluation.id,Alignment:parseInt(n.Alignment.rawValue,10)/1e3})),t=k(r,c,"OppID",{Evaluation:"NEW",Alignment:0});return t.forEach(n=>{n.Evaluation==="BEST"&&n.Alignment!==n.OPP_EXP&&(n.Alignment=n.OPP_EXP)}),t.sort((n,s)=>s.OPP_EXP-n.OPP_EXP)}generateList_status_potentialOI(){if(!this.rs_poi||!this.rs_crm_a010)return console.error("Missing rs or rs_crm data."),[];let r=_(this.rs_crm_a010,"KSDOCID").filter(s=>parseInt(s.OPP_EXP.rawValue,10)<7e6).map(s=>{let d=s.SubRegion.id;return d!=="DEU"&&(d="notDEU"),{OppID:`${s.FiscalYear.id.slice(-4)}|${s.Region.id}|${d}|${s.MarketSegm.id}|${s.Segment.description}`,FiscalYear:s.FiscalYear.id.slice(-4),Region:s.Region.id,SubRegion:d,MarketSegm:s.MarketSegm.id,Segment:s.Segment.description,OPP_EXP:parseInt(s.OPP_EXP.rawValue,10)/1e3,OPP_WTD:parseInt(s.OPP_WTD.rawValue,10)/1e3}}),i=E(r,"OppID",["OPP_EXP","OPP_WTD"]),c=this.rs_poi.map(s=>({OppID:`${s.Fiscal_year.id}|${s.Region.id}|${s.Sub_Region.id}|${s.Market_Segment.id}|${s.Segment.description}`,Alignment:parseInt(s["@MeasureDimension"].rawValue,10)/1e3}));return k(i,c,"OppID",{Alignment:0}).map(s=>{let d="PLAN";return s.Alignment===0&&(d="NOT IN PLAN"),{OppID:s.OppID+`|${d}`,FiscalYear:s.FiscalYear,Region:s.Region,SubRegion:s.SubRegion,MarketSegm:s.MarketSegm,Segment:s.Segment,OPP_EXP:s.OPP_EXP,OPP_WTD:s.OPP_WTD,Evaluation:d,Alignment:s.Alignment}}).sort((s,d)=>d.OPP_EXP-s.OPP_EXP)}generateList_status_MajorClosedOpps(){if(!this.rs||!this.rs_crm_a011)return console.error("Missing rs or rs_crm data."),[];let o=_(this.rs_crm_a011,"KSDOCID").map(t=>{let n=t.Reason.description;return n.includes("Not assigned")||(n=n.slice(5)),{FiscalYear:t.FiscalYear.id.slice(-4),OppID:t.OppId.id,OppDesc:t.OppDesc.id,Region:t.Region.id,SubRegion:t.SubRegion.id,MarketSegm:t.MarketSegm.id,Segment:t.Segment.description,Country:t.Country.id,CloseDate:t.CloseDate.id,OppStatus:t.OppStatus.description,Reason:n,OPP_EXP:parseInt(t.OPP_EXP.rawValue,10)/1e3}}),i=_(this.rs,"Opportunity_ID").map(t=>({OppID:t.OppId.id,Evaluation:t.Evaluation.id,Alignment:parseInt(t.Alignment.rawValue,10)/1e3}));return A(o,i,"OppID").sort((t,n)=>n.OPP_EXP-t.OPP_EXP)}generateList_status_PlanData(e,o){let r=e.map(t=>({OppID:`${t.FiscalYear}|${t.Region}|${t.SubRegion}|${t.MarketSegm}|${t.Segment}|${t.Evaluation}`,FiscalYear:t.FiscalYear,Region:t.Region,SubRegion:t.SubRegion,MarketSegm:t.MarketSegm,Segment:t.Segment,OPP_EXP:t.OPP_EXP,OPP_WTD:t.OPP_WTD,Evaluation:t.Evaluation,Alignment:t.Alignment})),i=E(r,"OppID",["OPP_EXP","OPP_WTD","Alignment"]);return E([...i,...o],"OppID",["OPP_EXP","OPP_WTD","Alignment"])}}customElements.define("com-ggh-calculus",a)})();var M=`:host {\r
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
`;var L=`:host {\r
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
`;var v=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.options=[],this._isOpen=!1,this._isFiltered=!1,this._actualFilterValues=[],this._newFilterValues=[],this._FilterValues=[],this._allFilterOptions=null,this._filterOptions=null}get getFilterValues(){return this._FilterValues}get getIsFiltered(){return this._isFiltered}_setOptions_OnInitialization(a,l,e){this._filterColumn=l,this._dimensions=e,this.style.width=this._dimensions.width,this._allFilterOptions=a,this._FilterValues=this._allFilterOptions.map(o=>o.label),this.options=this._allFilterOptions.map(o=>({...o,checked:!0})),this.options.sort((o,r)=>o.label.localeCompare(r.label)),this._actualFilterValues=this.options.map(o=>o.label),this._render(),this._renderOptions(),this._setupEventListeners()}_onChangeDB_Initialization(a){this._allFilterOptions=a}_setOptions_OnUpdate(a){this._filterOptions=a,this.options=this._filterOptions.map(l=>({...l,checked:!0})),this.options.sort((l,e)=>l.label.localeCompare(e.label)),this._actualFilterValues=this.options.map(l=>l.label),this._renderOptions()}_render(){this.shadowRoot.innerHTML=`
                <style>
                  ${L}
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
        `,this._trigger=this.shadowRoot.querySelector(".trigger"),this._triggerArrow=this.shadowRoot.querySelector(".trigger-arrow"),this._triggerClear=this.shadowRoot.querySelector(".trigger-clear"),this._searchInput=this.shadowRoot.querySelector(".search-input"),this._list=this.shadowRoot.querySelector(".dropdown-list"),this._listContainer=this.shadowRoot.querySelector(".options-container")}_renderOptions(a=!1){this._listContainer.innerHTML="",this._listContainer.style.maxHeight=this._dimensions.maxHeight;let l=this.options.length>0&&this.options.every(i=>i.checked),e=this.options.some(i=>i.checked)&&!l,o=document.createElement("label");o.className="option-item all-option",o.innerHTML=`
          <input type="checkbox" class="cb-all" ${l?"checked":""}>
          <span><b>Select all</b></span>
        `;let r=o.querySelector(".cb-all");if(r.indeterminate=e,r.addEventListener("change",i=>this._toggleAll(i)),this._listContainer.appendChild(o),this.options.length===0){let i=document.createElement("div");i.style.padding="8px",i.textContent="No results found",this._listContainer.appendChild(i);return}this.options.forEach(i=>{if(a&&!i.checked)return;let c=document.createElement("label");c.className="option-item",c.innerHTML=`
            <input type="checkbox" value="${i.value}" ${i.checked?"checked":""}>
            <span>${i.label}</span>
          `,c.querySelector("input").addEventListener("change",()=>this._toggleOption(i.value)),this._listContainer.appendChild(c)})}_setupEventListeners(){this._trigger.addEventListener("click",a=>this._toggleDropdown()),this._triggerClear.addEventListener("click",a=>{a.stopPropagation(),this._removeFilter()}),this._searchInput.addEventListener("input",a=>this._handleSearch(a)),document.addEventListener("click",a=>this._handleClickOutside(a))}_toggleDropdown(){this._isOpen=!this._isOpen,this._isOpen?(this._list.classList.add("open"),this._trigger.setAttribute("aria-expanded","true"),this._triggerArrow.textContent="\uE1F0"):(this._list.classList.remove("open"),this._trigger.setAttribute("aria-expanded","false"),this._triggerArrow.textContent="\uE1EF",this._dispatchSelectedValues())}_dispatchSelectedValues(){this.options.some(a=>a.checked)&&(this.options.every(a=>a.checked)||(this._trigger.classList.add("has-filter"),this._isFiltered=!0),this._newFilterValues=this.options.filter(a=>a.checked).map(a=>a.label),this._compararArrays(this._actualFilterValues,this._newFilterValues)===!1&&(this._actualFilterValues=this._newFilterValues,this._FilterValues=this._newFilterValues,this.dispatchEvent(new CustomEvent("changeFilter",{}))))}_compararArrays(a,l){if(a.length!==l.length)return!1;let e=new Set(a);return l.every(o=>e.has(o))}_handleSearch(a){let l=a.target.value.toLowerCase();this.options.forEach(e=>{e.checked=e.label.toLowerCase().includes(l)}),this._renderOptions(!0)}_toggleAll(a){let l=a.target.checked;this.options.forEach(e=>{e.checked=l}),this._resetSearch(),this._renderOptions()}_toggleOption(a){let l=this.options.find(e=>e.value===a);l&&(l.checked=!l.checked,this._resetSearch(),this._renderOptions())}_resetSearch(){this._searchInput.setAttribute("placeholder","Search..."),this._searchInput.value=""}_removeFilter(){this._trigger.classList.remove("has-filter"),this._isFiltered=!1,this._newFilterValues=this._allFilterOptions.map(a=>a.label),this._actualFilterValues=this._newFilterValues,this._FilterValues=this._newFilterValues,this.dispatchEvent(new CustomEvent("changeFilter",{}))}_handleClickOutside(a){if(!this._isOpen)return;a.composedPath().includes(this)||(this._triggerArrow.textContent="\uE1EF",this._isOpen=!1,this._list&&this._list.classList.remove("open"),this._trigger&&this._trigger.setAttribute("aria-expanded","false"))}disconnectedCallback(){document.removeEventListener("click",this._handleClickOutside.bind(this))}};customElements.define("multi-select-dropdown",v);(function(){let p=document.createElement("template");p.innerHTML=`
          <style>
            ${M}
          </style>
          <div id="filters" class="filter-container">
          </div>
    `;class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(p.content.cloneNode(!0)),this.filteredData=[],this._isOpen=!1}get_isOpen(){return this._isOpen}getFilteredData(){return this.filteredData}onCustomWidgetBeforeUpdate(e){}onCustomWidgetAfterUpdate(e){}_filterListFromData(e,o){let r=new Set(o.map(i=>i[e]).filter(i=>i!==void 0));return Array.from(r).map((i,c)=>({label:i,value:"id-"+c.toString()}))}initFilters(e,o){this._data=e,this._configData=o,this._wcfilters=[];let r=this.shadowRoot.getElementById("filters"),i="";this._configData.forEach(c=>{i+=c.width+" ";let t=document.createElement("multi-select-dropdown");t.id=c.column,this._wcfilters.push(t);let n=document.createElement("div");n.appendChild(t),r.appendChild(n)}),r.style.gridTemplateColumns=i.trim(),this._configData.forEach(c=>{let t=this.shadowRoot.getElementById(c.column),n=this._filterListFromData(c.column,this._data),s=c.label,d={width:c.width,maxHeight:c.maxHeight};t._setOptions_OnInitialization(n,s,d),t.addEventListener("changeFilter",h=>{let b=this._data.filter(m=>this._wcfilters.every(u=>u.getIsFiltered?u.getFilterValues.includes(m[u.id]):!0));this._wcfilters.forEach(m=>{let u=this._filterListFromData(m.id,b);m._setOptions_OnUpdate(u)}),this.filteredData=b,this.dispatchEvent(new CustomEvent("dataFiltered",{}))})})}updateFiltersDB(e,o){this._data=e,this._configFilterWidgets=o;let r=this._data.filter(i=>this._wcfilters.every(c=>c.getIsFiltered?c.getFilterValues.includes(i[c.id]):!0));if(r.length===0){let i={};Object.keys(this._data[0]).forEach(c=>{i[c]="No results found"}),r.push(i)}this._wcfilters.forEach(i=>{let c=this._filterListFromData(i.id,this._data);i._onChangeDB_Initialization(c);let t=this._filterListFromData(i.id,r);i._setOptions_OnUpdate(t)}),this.filteredData=r,this.dispatchEvent(new CustomEvent("dataFiltered",{}))}}customElements.define("com-ggh-filter",a)})();var W=`:host {\r
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
`;var N=`/* Contenedor de tabla */\r
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
          ${N}
        </style>
        <div class="table-container">
            <table>
                <thead></thead>
                <tbody></tbody>
            </table>
        </div>
	`;class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(p.content.cloneNode(!0))}onCustomWidgetBeforeUpdate(e){}onCustomWidgetAfterUpdate(e){e.selectionTable&&e.configTable&&e.tableContainerHeight&&this.setTableElements(e.selectionTable,e.configTable,e.tableContainerHeight)}_calculateTotals(e,o){let r=o.filter(n=>n.total==="true").map(n=>n.column),i=r.map(n=>{let s=e.reduce((d,h)=>d+parseInt(h[n]),0);return{key:n,value:s.toLocaleString("de-DE")}});return Object.keys(e[0]).map((n,s)=>{if(s===0){let d=document.createElement("th");return d.textContent="TOTAL:",d.classList.add("totals"),d}if(s===1){let d=document.createElement("th");return d.textContent="(Records: "+e.length+")",d.classList.add("record-count"),d}if(r.includes(n)){let d=document.createElement("th");return d.textContent=i[r.indexOf(n)].value,d.classList.add("totals"),d}else{let d=document.createElement("th");return d.textContent="",d}})}setTableElements(e,o,r){let i=Object.keys(e[0]),c=o.reduce((g,f)=>(g[f.column]=f,g),{}),t=i.map(g=>{let f=document.createElement("th");f.textContent=c[g].label;let S="text-align: "+c[g].header+";";return f.setAttribute("style",S),f}),n=document.createElement("tr");n.append(...t);let s=document.createElement("tr"),d=Object.values(e[0])[0]==="No results found";d===!1&&s.append(...this._calculateTotals(e,o));let h=this.shadowRoot.querySelector("thead");if(h.innerHTML="",h.append(n),h.append(s),d){let g=this.shadowRoot.querySelector("tbody");g.innerHTML="";return}let m=e.map(g=>Object.values(g)).map(g=>{let f=document.createElement("tr"),S=g.map((x,C)=>{let y=document.createElement("td");if(c[i[C]].total==="true")y.textContent=parseInt(x).toLocaleString("de-DE");else if(c[i[C]].hyper==="true"){let O=document.createElement("a");O.textContent=x;let V="https://my334772-sso.crm.ondemand.com/sap/ap/ui/clogin?bo_ns=http://sap.com/thingTypes&bo=COD_GENERIC&node=Root&operation=OnExtInspect&param.InternalID="+x+"&param.Type=COD_OPPORTUNITY_THINGTYPE&sapbyd-agent=TAB&OBNRedirect=X";O.href=V,O.target="_blank",O.rel="noopener noreferrer",y.appendChild(O)}else y.textContent=x;let X="text-align: "+c[i[C]].data+";";return y.setAttribute("style",X),y});return f.append(...S),f}),u=this.shadowRoot.querySelector("tbody");u.innerHTML="",u.append(...m);let P=this.shadowRoot.querySelector(".table-container");P.style.maxHeight=r}}customElements.define("com-ggh-table",a)})();var j=`:host {\r
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
`;var w=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.shadowRoot.querySelector("button").addEventListener("click",()=>this.manejarClickExportar())}setupDB(a,l){this.dataArray=a,this.exportWhat=l}disconnectedCallback(){this.shadowRoot.querySelector("button").removeEventListener("click",()=>this.manejarClickExportar())}async initExcel(){return new Promise((a,l)=>{if(window.ExcelJS)return a(window.ExcelJS);let e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js",e.integrity="sha512-dlPw+ytv/6JyepmelABrgeYgHI0O+frEwgfnPdXDTOIZz+eDgfW07QXG02/O8COfivBdGNINy+Vex+lYmJ5rxw==",e.crossOrigin="anonymous",e.onload=()=>{window.ExcelJS?a(window.ExcelJS):l(new Error("Excel library not found."))},e.onerror=()=>{l(new Error("There was a problem loading Excel Library."))},document.head.appendChild(e)})}async manejarClickExportar(){if(!this.dataArray||!this.exportWhat){console.error("No data available to export."),alert("No data available to export.");return}if(this.exportWhat==="MajorOpportunities")try{let a=await this.initExcel();this.dataArray.sort((t,n)=>t.FiscalYear.localeCompare(n.FiscalYear)||t.Region.localeCompare(n.Region)||t.SubRegion.localeCompare(n.SubRegion)||t.MarketSegm.localeCompare(n.MarketSegm)||t.Segment.localeCompare(n.Segment));let l=new a.Workbook,e=l.addWorksheet("Major Opportunities"),o=[{header:"Fiscal Year",key:"FiscalYear",width:12,alignment:"center"},{header:"Opp ID",key:"OppID",width:12,alignment:"center"},{header:"Opp Description",key:"OppDesc",width:65,alignment:"left"},{header:"Region",key:"Region",width:10,alignment:"center"},{header:"Sub Region",key:"SubRegion",width:14,alignment:"center"},{header:"Market Segment",key:"MarketSegm",width:20,alignment:"center"},{header:"Segment",key:"Segment",width:25,alignment:"center"},{header:"Country",key:"Country",width:10,alignment:"center"},{header:"Close Date",key:"CloseDate",width:12,alignment:"center"},{header:"OPP EXP (in k\u20AC)",key:"OPP_EXP",width:23,alignment:"right"},{header:"OPP WTD (in k\u20AC)",key:"OPP_WTD",width:23,alignment:"right"},{header:"Evaluation",key:"Evaluation",width:15,alignment:"center"},{header:"Alignment (in k\u20AC)",key:"Alignment",width:23,alignment:"right"}];e.columns=o,o.forEach((t,n)=>{let s=e.getCell(1,n+1);s.font={bold:!0,size:12,color:{argb:"FFFFFF"}},s.fill={type:"pattern",pattern:"solid",fgColor:{argb:"4472C4"}},s.alignment={vertical:"middle",horizontal:"center"}}),this.dataArray.forEach(t=>{e.addRow({FiscalYear:t.FiscalYear,OppID:t.OppID,OppDesc:t.OppDesc,Region:t.Region,SubRegion:t.SubRegion,MarketSegm:t.MarketSegm,Segment:t.Segment,Country:t.Country,CloseDate:t.CloseDate,OPP_EXP:parseInt(t.OPP_EXP,10),OPP_WTD:parseInt(t.OPP_WTD,10),Evaluation:t.Evaluation,Alignment:parseInt(t.Alignment,10)})}),e.eachRow((t,n)=>{n!==1&&(t.eachCell({includeEmpty:!0},(s,d)=>{let h=o[d-1];h&&h.alignment&&(s.alignment={vertical:"middle",horizontal:h.alignment},(h.key==="OPP_EXP"||h.key==="OPP_WTD"||h.key==="Alignment")&&(s.numFmt="#,##0"))}),n%2===0&&t.eachCell(s=>{s.fill={type:"pattern",pattern:"solid",fgColor:{argb:"DCE6F1"}}}))}),e.autoFilter={from:"A1",to:`M${this.dataArray.length+1}`},e.eachRow((t,n)=>{t.eachCell({includeEmpty:!0},s=>{if(n===1){s.protection={locked:!1};return}s.protection={locked:!0}})}),e.getColumn("Evaluation").eachCell((t,n)=>{n>1&&(t.protection={locked:!1},t.dataValidation={type:"list",allowBlank:!1,formula1:'"PLAN,NOT IN PLAN,BEST,NEW"',showErrorMessage:!0,errorStyle:"error",errorTitle:"Invalid Selection",error:"Please select a value from the list: PLAN, NOT IN PLAN, BEST, NEW."})}),e.getColumn("Alignment").eachCell((t,n)=>{n>1&&(t.protection={locked:!1},t.dataValidation={type:"decimal",operator:"greaterThanOrEqual",formula1:"0",showErrorMessage:!0,errorStyle:"error",errorTitle:"valid",error:"Only numerical values are allowed. Please enter a valid number."})}),await e.protect("8s1only",{selectLockedCells:!1,selectUnlockedCells:!0});let r=await l.xlsx.writeBuffer(),i=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),c=document.createElement("a");c.href=URL.createObjectURL(i),c.download="MajorOpportunities.xlsx",c.click(),console.log("XLSX file download successfully")}catch(a){console.error("Error while exporting the Excel file:",a),alert("There was an issue generating the Excel file. Please check the console for more details.")}if(this.exportWhat==="PotentialOI")try{let a=await this.initExcel();this.dataArray.sort((t,n)=>t.FiscalYear.localeCompare(n.FiscalYear)||t.Region.localeCompare(n.Region)||t.SubRegion.localeCompare(n.SubRegion)||t.MarketSegm.localeCompare(n.MarketSegm)||t.Segment.localeCompare(n.Segment));let l=new a.Workbook,e=l.addWorksheet("Potential OI"),o=[{header:"Fiscal Year",key:"FiscalYear",width:15,alignment:"center"},{header:"Region",key:"Region",width:12,alignment:"center"},{header:"Sub Region",key:"SubRegion",width:16,alignment:"center"},{header:"Market Segment",key:"MarketSegm",width:20,alignment:"center"},{header:"Segment",key:"Segment",width:37,alignment:"center"},{header:"OPP EXP (in k\u20AC)",key:"OPP_EXP",width:23,alignment:"right"},{header:"OPP WTD (in k\u20AC)",key:"OPP_WTD",width:23,alignment:"right"},{header:"Evaluation",key:"Evaluation",width:15,alignment:"center"},{header:"Alignment (in k\u20AC)",key:"Alignment",width:23,alignment:"right"}];e.columns=o,o.forEach((t,n)=>{let s=e.getCell(1,n+1);s.font={bold:!0,size:12,color:{argb:"FFFFFF"}},s.fill={type:"pattern",pattern:"solid",fgColor:{argb:"4472C4"}},s.alignment={vertical:"middle",horizontal:"center"}}),this.dataArray.forEach(t=>{e.addRow({FiscalYear:t.FiscalYear,Region:t.Region,SubRegion:t.SubRegion,MarketSegm:t.MarketSegm,Segment:t.Segment,OPP_EXP:parseInt(t.OPP_EXP,10),OPP_WTD:parseInt(t.OPP_WTD,10),Evaluation:t.Evaluation,Alignment:parseInt(t.Alignment,10)})}),e.eachRow((t,n)=>{n!==1&&(t.eachCell({includeEmpty:!0},(s,d)=>{let h=o[d-1];h&&h.alignment&&(s.alignment={vertical:"middle",horizontal:h.alignment},(h.key==="OPP_EXP"||h.key==="OPP_WTD"||h.key==="Alignment")&&(s.numFmt="#,##0"))}),n%2===0&&t.eachCell(s=>{s.fill={type:"pattern",pattern:"solid",fgColor:{argb:"DCE6F1"}}}))}),e.autoFilter={from:"A1",to:`I${this.dataArray.length+1}`},e.eachRow((t,n)=>{t.eachCell({includeEmpty:!0},s=>{if(n===1){s.protection={locked:!1};return}s.protection={locked:!0}})}),e.getColumn("Evaluation").eachCell((t,n)=>{n>1&&(t.protection={locked:!1},t.dataValidation={type:"list",allowBlank:!1,formula1:'"PLAN,NOT IN PLAN"',showErrorMessage:!0,errorStyle:"error",errorTitle:"Invalid Selection",error:"Please select a value from the list: PLAN, NOT IN PLAN, BEST, NEW."})}),e.getColumn("Alignment").eachCell((t,n)=>{n>1&&(t.protection={locked:!1},t.dataValidation={type:"decimal",operator:"greaterThanOrEqual",formula1:"0",showErrorMessage:!0,errorStyle:"error",errorTitle:"valid",error:"Only numerical values are allowed. Please enter a valid number."})}),await e.protect("8s1only",{selectLockedCells:!1,selectUnlockedCells:!0});let r=await l.xlsx.writeBuffer(),i=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),c=document.createElement("a");c.href=URL.createObjectURL(i),c.download="PotentialOI.xlsx",c.click(),console.log("XLSX file download successfully")}catch(a){console.error("Error while exporting the Excel file:",a),alert("There was an issue generating the Excel file. Please check the console for more details.")}}render(){this.shadowRoot.innerHTML=`
            <style>
                ${j}
            </style>

            <button alt="Export to Excel" title="Export to Excel">\uE034</button>
        `}};customElements.define("com-ggh-excel",w);var H=`* {\r
  box-sizing: border-box;\r
  font-family: "SAP-icons", "72-Web", Helvetica, sans-serif, Arial;\r
  font-size: 14px;\r
}\r
\r
#chartContainer {\r
  width: 1730px;\r
  height: 860px; /* Ajusta el alto del gr\xE1fico igual que el de la tabla */\r
  position: absolute;\r
  margin-left: 60px;\r
  border: 1px solid gray;\r
  background-color: #393939; /* Color de fondo del contenedor */\r
}\r
`;var D=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}loadChartData(a){this.prepareSeries(a),this.renderChart()}preFilterData(a){return a.filter(l=>l.Evaluation==="PLAN")}prepareDataForChart(a,l){let e=a.reduce((r,i)=>{let c=i.FiscalYear;return r[c]||(r[c]={FiscalYear:c,[l]:0}),r[c][l]+=i[l],r},{}),o=Object.values(e);return o.sort((r,i)=>r.FiscalYear-i.FiscalYear),o}prepareSeries(a){this.dataSeriesOppExp=this.prepareDataForChart(a,"OPP_EXP"),this.dataSeriesAlignment=this.prepareDataForChart(a,"Alignment"),this.dataSeriesBest=this.dataSeriesAlignment,this.dataSeriesPlan=this.prepareDataForChart(this.preFilterData(a),"Alignment")}renderChart(){this.shadowRoot.innerHTML=`
          <style>
               ${H}
          </style>
          <div id="chartContainer">
            <canvas id="gghTargetChart"></canvas>
          </div>
          `;let a=this.shadowRoot.querySelector("#gghTargetChart");function l(e,o){return new Promise((r,i)=>{let c=document.createElement("script");c.src=e,c.integrity=o,c.crossOrigin="anonymous",c.onload=()=>r(e),c.onerror=()=>i(new Error(`Error al cargar ${e}`)),document.head.appendChild(c)})}l("https://cdn.jsdelivr.net/npm/chart.js@4.5.1/dist/chart.umd.min.js","sha256-SERKgtTty1vsDxll+qzd4Y2cF9swY9BCq62i9wXJ9Uo=").then(()=>l("https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0/dist/chartjs-plugin-datalabels.min.js","sha256-IMCPPZxtLvdt9tam8RJ8ABMzn+Mq3SQiInbDmMYwjDg=")).then(()=>{Chart.register(ChartDataLabels),Chart.defaults.color="#f2f2f2",Chart.defaults.font.family="'SAP-icons', '72-Web', 'Helvetica', 'sans-serif', 'Arial'",Chart.defaults.font.size=14;let e=new Intl.NumberFormat("de-DE",{style:"decimal",minimumFractionDigits:0}),o=a.getContext("2d");new Chart(o,{options:{animation:!0,responsive:!0,plugins:{layout:{padding:10},title:{display:!0,text:"Target Plan - Division 8 (in m\u20AC)",font:{size:24}},legend:{display:!0,position:"right"},tooltip:{enabled:!0,callbacks:{label:function(r){return e.format(r.raw)}}},datalabels:{display:!0,color:"#f2f2f2",anchor:"end",align:"top",formatter:function(r){return e.format(r)}}},scales:{x:{grid:{display:!1}},y:{grid:{display:!0,color:"#f2f2f27b",borderColor:"#f2f2f2"},ticks:{callback:function(r){return e.format(r)}}}}},data:{labels:this.dataSeriesOppExp.map(r=>r.FiscalYear),datasets:[{type:"line",label:"OPP EXP",data:this.dataSeriesOppExp.map(r=>Math.round(parseInt(r.OPP_EXP,10)/1e3)),backgroundColor:"#427cac",borderColor:"#427cac",borderWidth:2,datalabels:{display:!0}},{type:"line",label:"BEST",data:this.dataSeriesBest.map(r=>Math.round(parseInt(r.Alignment,10)/1e3)),backgroundColor:"#D9D9D9",borderColor:"#D9D9D9",borderWidth:2,datalabels:{display:!0}},{type:"bar",label:"PLAN",data:this.dataSeriesPlan.map(r=>Math.round(parseInt(r.Alignment,10)/1e3)),backgroundColor:"#00B0F0",datalabels:{display:!0}}]}})}).catch(e=>{console.error(e.message)})}};customElements.define("com-ggh-chartplan",D);var R=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.renderInitialDOM(),this.addEventListeners()}static get observedAttributes(){return["selected-index"]}attributeChangedCallback(a,l,e){a==="selected-index"&&(this.updateTabs(),this.notifyTabChange())}addEventListeners(){this.shadowRoot.querySelectorAll(".tab-button").forEach((l,e)=>{l.addEventListener("click",()=>{this.setAttribute("selected-index",e)})})}updateTabs(){let a=parseInt(this.getAttribute("selected-index"),10)||0,l=this.shadowRoot.querySelectorAll(".tab-button"),e=this.shadowRoot.querySelectorAll(".tab-content-item");l.forEach((o,r)=>{o.classList.toggle("active",r===a)}),e.forEach((o,r)=>{o.style.display=r===a?"block":"none"})}notifyTabChange(){let a=parseInt(this.getAttribute("selected-index"),10)||0;this.dispatchEvent(new CustomEvent("tab-changed",{detail:{selectedIndex:a}}))}renderTableMajOpenOpps(a,l,e){this.shadowRoot.querySelector("#ggh-table-open").setTableElements(a,l,e)}renderTablePotentialOI(a,l,e){let o=this.shadowRoot.querySelector("#ggh-table-poi");T(a,["OppID"]),o.setTableElements(a,l,e)}renderTableClosedMajorOpps(a,l,e){this.shadowRoot.querySelector("#ggh-table-closed").setTableElements(a,l,e)}setupExcelExport(a,l){this.shadowRoot.querySelector("#ggh-excel").setupDB(a,l)}excelVisibility(a){let l=this.shadowRoot.querySelector("#ggh-excel");l&&(l.style.display=a?"block":"none")}renderChartPlan(a){this.shadowRoot.querySelector("#ggh-chartplan").loadChartData(a)}renderInitialDOM(){this.shadowRoot.innerHTML=`
      <style>
        ${W}
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
            <button class="tab-button ">
            \uE14B Target Plan Chart
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
      <div class="tab-content-item" style="display: none;">
        <div><com-ggh-chartplan id="ggh-chartplan" class="ggh-chartplan"></com-ggh-chartplan></div>
      </div>
      </div>
    `}};customElements.define("com-ggh-tabs",R);(function(){let p=document.createElement("template");p.innerHTML=`
  <style>
        ${F}
  </style>
  <com-ggh-calculus id="ggh-calculus"></com-ggh-calculus>
  <com-ggh-filter id="ggh-filter"></com-ggh-filter>
  <com-ggh-tabs id="ggh-tabs" selected-index="0"></com-ggh-tabs>
	`;class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(p.content.cloneNode(!0)),this.rs=[],this.rs_poi=[],this.rs_crm_a010=[],this.rs_crm_a011=[]}onCustomWidgetAfterUpdate(e){e.rs&&e.rs_poi&&e.rs_crm_a010&&e.rs_crm_a011&&(this.rs=e.rs,this.rs_poi=e.rs_poi,this.rs_crm_a010=e.rs_crm_a010,this.rs_crm_a011=e.rs_crm_a011,this.renderMajorOpps())}renderMajorOpps(){if(!this.rs||!this.rs_crm_a010){console.error("Missing rs or rs_crm data.");return}let e=this.shadowRoot.querySelector("#ggh-calculus"),o=this.shadowRoot.querySelector("#ggh-tabs"),r=this.shadowRoot.querySelector("#ggh-filter");e.onCustomWidgetAfterUpdate({rs:this.rs,rs_poi:this.rs_poi,rs_crm_a010:this.rs_crm_a010,rs_crm_a011:this.rs_crm_a011});let i=[{column:"FiscalYear",label:"Fiscal year",header:"center",data:"center",total:"false",hyper:"false"},{column:"OppID",label:"Opp ID",header:"center",data:"center",total:"false",hyper:"true"},{column:"OppDesc",label:"Opportunity Description",header:"center",data:"left",total:"false",hyper:"false"},{column:"Region",label:"Region",header:"center",data:"center",total:"false",hyper:"false"},{column:"SubRegion",label:"Sub-Region",header:"center",data:"center",total:"false",hyper:"false"},{column:"MarketSegm",label:"Market Segment",header:"center",data:"center",total:"false",hyper:"false"},{column:"Segment",label:"Segment",data:"center",total:"false",hyper:"false"},{column:"Country",label:"Country",header:"center",data:"center",total:"false",hyper:"false"},{column:"CloseDate",label:"Close Date",header:"center",data:"center",total:"false",hyper:"false"},{column:"OPP_EXP",label:"OPP EXP (in k\u20AC)",header:"center",data:"right",total:"true",hyper:"false"},{column:"OPP_WTD",label:"OPP WTD (in k\u20AC)",header:"center",data:"right",total:"true",hyper:"false"},{column:"Evaluation",label:"Evaluation",header:"center",data:"center",total:"false",hyper:"false"},{column:"Alignment",label:"Alignment (in k\u20AC)",header:"center",data:"right",total:"true",hyper:"false"}],c=[{column:"FiscalYear",label:"Fiscal year",header:"center",data:"center",total:"false",hyper:"false"},{column:"Region",label:"Region",header:"center",data:"center",total:"false",hyper:"false"},{column:"SubRegion",label:"Sub-Region",header:"center",data:"center",total:"false",hyper:"false"},{column:"MarketSegm",label:"Market Segment",header:"center",data:"center",total:"false",hyper:"false"},{column:"Segment",label:"Segment",header:"center",data:"center",total:"false",hyper:"false"},{column:"Country",label:"Country",header:"center",data:"center",total:"false",hyper:"false"},{column:"OPP_EXP",label:"OPP EXP (in k\u20AC)",header:"center",data:"right",total:"true",hyper:"false"},{column:"OPP_WTD",label:"OPP WTD (in k\u20AC)",header:"center",data:"right",total:"true",hyper:"false"},{column:"Evaluation",label:"Evaluation",header:"center",data:"center",total:"false",hyper:"false"},{column:"Alignment",label:"Alignment (in k\u20AC)",header:"center",data:"right",total:"true",hyper:"false"}],t=[{column:"FiscalYear",label:"Fiscal year",header:"center",data:"center",total:"false",hyper:"false"},{column:"OppID",label:"Opp ID",header:"center",data:"center",total:"false",hyper:"true"},{column:"OppDesc",label:"Opportunity Description",header:"center",data:"left",total:"false",hyper:"false"},{column:"Region",label:"Region",header:"center",data:"center",total:"false",hyper:"false"},{column:"SubRegion",label:"Sub-Region",header:"center",data:"center",total:"false",hyper:"false"},{column:"MarketSegm",label:"Market Segment",header:"center",data:"center",total:"false",hyper:"false"},{column:"Segment",label:"Segment",data:"center",total:"false",hyper:"false"},{column:"Country",label:"Country",header:"center",data:"center",total:"false",hyper:"false"},{column:"CloseDate",label:"Close Date",header:"center",data:"center",total:"false",hyper:"false"},{column:"OppStatus",label:"Status",header:"center",data:"center",total:"false",hyper:"false"},{column:"Reason",label:"Reason",header:"center",data:"center",total:"false",hyper:"false"},{column:"OPP_EXP",label:"OPP EXP (in k\u20AC)",header:"center",data:"right",total:"true",hyper:"false"},{column:"Evaluation",label:"Evaluation",header:"center",data:"center",total:"false",hyper:"false"},{column:"Alignment",label:"Alignment (in k\u20AC)",header:"center",data:"right",total:"true",hyper:"false"}],n=[{column:"FiscalYear",label:"Fiscal year",width:"200px",maxHeight:"250px"},{column:"Region",label:"Region",width:"200px",maxHeight:"250px"},{column:"SubRegion",label:"Sub Region",width:"200px",maxHeight:"250px"},{column:"MarketSegm",label:"Market Segm",width:"200px",maxHeight:"250px"},{column:"Segment",label:"Segment",width:"200px",maxHeight:"250px"},{column:"Country",label:"Country",width:"200px",maxHeight:"250px"},{column:"Evaluation",label:"Evaluation",width:"200px",maxHeight:"250px"}],s=e.generateList_status_MajorOpenOpps(),d=e.generateList_status_potentialOI(),h=e.generateList_status_MajorClosedOpps();r.initFilters(s,n);let b="860px";o.renderTableMajOpenOpps(s,i,b),o.setupExcelExport(s,"MajorOpportunities");let m=e.generateList_status_PlanData(s,d);o.renderChartPlan(m);let u=0;o.addEventListener("tab-changed",P=>{u=P.detail.selectedIndex,u===0&&(r.updateFiltersDB(s,n),o.setupExcelExport(s,"MajorOpportunities"),o.excelVisibility(!0)),u===1&&(r.updateFiltersDB(d,n),o.setupExcelExport(d,"PotentialOI"),o.excelVisibility(!0)),u===2&&(r.updateFiltersDB(h,n),o.excelVisibility(!1)),u===3&&(r.updateFiltersDB(m,n),o.excelVisibility(!1))}),r.addEventListener("dataFiltered",()=>{u===0&&(o.renderTableMajOpenOpps(r.getFilteredData(),i,b),o.setupExcelExport(r.getFilteredData(),"MajorOpportunities")),u===1&&(o.renderTablePotentialOI(r.getFilteredData(),c,b),o.setupExcelExport(r.getFilteredData(),"PotentialOI")),u===2&&o.renderTableClosedMajorOpps(r.getFilteredData(),t,b),u===3&&o.renderChartPlan(r.getFilteredData())})}}customElements.define("com-ggh-targetplan",a)})();})();
