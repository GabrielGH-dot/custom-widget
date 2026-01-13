(()=>{var E=`/* Contenedor de tabla */\r
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
  font-weight: bold;\r
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
  max-height: 561px;\r
  /* Altura m\xE1xima para el \xE1rea desplazable */\r
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
          ${E}
        </style>
        <div class="table-container">
            <table>
                <thead></thead>
                <tbody></tbody>
            </table>
        </div>
	`;class C extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(f.content.cloneNode(!0))}onCustomWidgetBeforeUpdate(t){}onCustomWidgetAfterUpdate(t){t.selectionTable&&t.alignmentHeader&&t.alignmentData&&t.totals&&t.hyper&&this._setTableElements(t.selectionTable,t.alignmentHeader,t.alignmentData,t.totals,t.hyper)}_calculateTotals(t,r){let p=r.map(o=>{let n=t.reduce((e,i)=>e+parseInt(i[o]),0);return{key:o,value:n.toLocaleString("de-DE")}});return Object.keys(t[0]).map((o,n)=>{if(n===0){let e=document.createElement("th");return e.textContent="TOTAL:",e.classList.add("totals"),e}if(n===1){let e=document.createElement("th");return e.textContent="(Records: "+t.length+")",e.classList.add("record-count"),e}if(r.includes(o)){let e=document.createElement("th");return e.textContent=p[r.indexOf(o)].value,e.classList.add("totals"),e}else{let e=document.createElement("th");return e.textContent="",e}})}_setTableElements(t,r,p,u,y){let o=Object.keys(t[0]),n=o.map((a,m)=>{let s=document.createElement("th");s.textContent=a;let l="text-align: "+r[m]+";";return s.setAttribute("style",l),s}),e=document.createElement("tr");e.append(...n);let i=document.createElement("tr"),g=Object.values(t[0])[0]==="No results found";g===!1&&i.append(...this._calculateTotals(t,u));let h=this.shadowRoot.querySelector("thead");if(h.innerHTML="",h.append(e),h.append(i),g){let a=this.shadowRoot.querySelector("tbody");a.innerHTML="";return}let T=t.map(a=>Object.values(a)).map(a=>{let m=document.createElement("tr"),s=a.map((l,b)=>{let c=document.createElement("td");if(u.includes(o[b]))c.textContent=parseInt(l).toLocaleString("de-DE");else if(y.includes(o[b])){let d=document.createElement("a");d.textContent=l;let O="https://my334772-sso.crm.ondemand.com/sap/ap/ui/clogin?bo_ns=http://sap.com/thingTypes&bo=COD_GENERIC&node=Root&operation=OnExtInspect&param.InternalID="+l+"&param.Type=COD_OPPORTUNITY_THINGTYPE&sapbyd-agent=TAB&OBNRedirect=X";d.href=O,d.target="_blank",d.rel="noopener noreferrer",c.appendChild(d)}else c.textContent=l;let w="text-align: "+p[b]+";";return c.setAttribute("style",w),c});return m.append(...s),m}),x=this.shadowRoot.querySelector("tbody");x.innerHTML="",x.append(...T)}}customElements.define("com-ggh-table",C)})();})();
