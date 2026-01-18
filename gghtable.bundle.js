(()=>{var x=`/* Contenedor de tabla */\r
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
`;(function(){let f=document.createElement("template");f.innerHTML=`
		    <style>
          ${x}
        </style>
        <div class="table-container">
            <table>
                <thead></thead>
                <tbody></tbody>
            </table>
        </div>
	`;class C extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(f.content.cloneNode(!0))}onCustomWidgetBeforeUpdate(e){}onCustomWidgetAfterUpdate(e){e.selectionTable&&e.configTable&&e.tableContainerHeight&&this.setTableElements(e.selectionTable,e.configTable,e.tableContainerHeight)}_calculateTotals(e,p){let s=p.filter(o=>o.total==="true").map(o=>o.column),r=s.map(o=>{let l=e.reduce((t,d)=>t+parseInt(d[o]),0);return{key:o,value:l.toLocaleString("de-DE")}});return Object.keys(e[0]).map((o,l)=>{if(l===0){let t=document.createElement("th");return t.textContent="TOTAL:",t.classList.add("totals"),t}if(l===1){let t=document.createElement("th");return t.textContent="(Records: "+e.length+")",t.classList.add("record-count"),t}if(s.includes(o)){let t=document.createElement("th");return t.textContent=r[s.indexOf(o)].value,t.classList.add("totals"),t}else{let t=document.createElement("th");return t.textContent="",t}})}setTableElements(e,p,s){let r=Object.keys(e[0]),c=p.reduce((n,a)=>(n[a.column]=a,n),{}),g=r.map(n=>{let a=document.createElement("th");a.textContent=n;let m="text-align: "+c[n].header+";";return a.setAttribute("style",m),a}),o=document.createElement("tr");o.append(...g);let l=document.createElement("tr"),t=Object.values(e[0])[0]==="No results found";t===!1&&l.append(...this._calculateTotals(e,p));let d=this.shadowRoot.querySelector("thead");if(d.innerHTML="",d.append(o),d.append(l),t){let n=this.shadowRoot.querySelector("tbody");n.innerHTML="";return}let E=e.map(n=>Object.values(n)).map(n=>{let a=document.createElement("tr"),m=n.map((h,b)=>{let i=document.createElement("td");if(c[r[b]].total==="true")i.textContent=parseInt(h).toLocaleString("de-DE");else if(c[r[b]].hyper==="true"){let u=document.createElement("a");u.textContent=h;let O="https://my334772-sso.crm.ondemand.com/sap/ap/ui/clogin?bo_ns=http://sap.com/thingTypes&bo=COD_GENERIC&node=Root&operation=OnExtInspect&param.InternalID="+h+"&param.Type=COD_OPPORTUNITY_THINGTYPE&sapbyd-agent=TAB&OBNRedirect=X";u.href=O,u.target="_blank",u.rel="noopener noreferrer",i.appendChild(u)}else i.textContent=h;let w="text-align: "+c[r[b]].data+";";return i.setAttribute("style",w),i});return a.append(...m),a}),y=this.shadowRoot.querySelector("tbody");y.innerHTML="",y.append(...E);let T=this.shadowRoot.querySelector(".table-container");T.style.maxHeight=s}}customElements.define("com-ggh-table",C)})();})();
