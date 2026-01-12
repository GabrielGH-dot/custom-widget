var R=(n,o)=>()=>(n&&(o=n(n=0)),o);var H=(n,o)=>()=>(o||n((o={exports:{}}).exports,o),o.exports);var T,C=R(()=>{T=`/* Contenedor de tabla */\r
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
`});var k=H(()=>{C();(function(){let n=document.createElement("template");n.innerHTML=`
		    <style>
          ${T}
        </style>
        <div class="table-container">
            <table>
                <thead></thead>
                <tbody></tbody>
            </table>
        </div>
	`;class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(n.content.cloneNode(!0))}onCustomWidgetBeforeUpdate(t){}onCustomWidgetAfterUpdate(t){t.selectionTable&&t.alignmentHeader&&t.alignmentData&&t.totals&&t.hyper&&this._setTableElements(t.selectionTable,t.alignmentHeader,t.alignmentData,t.totals,t.hyper)}_calculateTotals(t,c){let h=c.map(a=>{let r=t.reduce((e,p)=>e+parseInt(p[a]),0);return{key:a,value:r.toLocaleString("de-DE")}});return Object.keys(t[0]).map((a,r)=>{if(r===0){let e=document.createElement("th");return e.textContent="TOTAL:",e.classList.add("totals"),e}if(r===1){let e=document.createElement("th");return e.textContent="(Records: "+t.length+")",e.classList.add("record-count"),e}if(c.includes(a)){let e=document.createElement("th");return e.textContent=h[c.indexOf(a)].value,e.classList.add("totals"),e}else{let e=document.createElement("th");return e.textContent="",e}})}_setTableElements(t,c,h,b,g){let a=Object.keys(t[0]),r=a.map((l,u)=>{let d=document.createElement("th");d.textContent=l;let s="text-align: "+c[u]+";";return d.setAttribute("style",s),d}),e=document.createElement("tr");e.append(...r);let p=document.createElement("tr"),x=Object.values(t[0])[0]==="No results found";x===!1&&p.append(...this._calculateTotals(t,b));let f=this.shadowRoot.querySelector("thead");if(f.innerHTML="",f.append(e),f.append(p),x){let l=this.shadowRoot.querySelector("tbody");l.innerHTML="";return}let w=t.map(l=>Object.values(l)).map(l=>{let u=document.createElement("tr"),d=l.map((s,y)=>{let i=document.createElement("td");if(b.includes(a[y]))i.textContent=parseInt(s).toLocaleString("de-DE");else if(g.includes(a[y])){let m=document.createElement("a");m.textContent=s;let v="https://my334772-sso.crm.ondemand.com/sap/ap/ui/clogin?bo_ns=http://sap.com/thingTypes&bo=COD_GENERIC&node=Root&operation=OnExtInspect&param.InternalID="+s+"&param.Type=COD_OPPORTUNITY_THINGTYPE&sapbyd-agent=TAB&OBNRedirect=X";m.href=v,m.target="_blank",m.rel="noopener noreferrer",i.appendChild(m)}else i.textContent=s;let O="text-align: "+h[y]+";";return i.setAttribute("style",O),i});return u.append(...d),u}),E=this.shadowRoot.querySelector("tbody");E.innerHTML="",E.append(...w)}}customElements.define("com-ggh-table",o)})()});export default k();
