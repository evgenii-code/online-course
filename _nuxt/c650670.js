(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{566:function(t,e,r){var content=r(685);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("3d8ae8bb",content,!0,{sourceMap:!1})},684:function(t,e,r){"use strict";var l=r(566),n=r.n(l);r.d(e,"default",(function(){return n.a}))},685:function(t,e,r){var l=r(11)(!1);l.push([t.i,".card_tTgdp{background-color:var(--color-light);border:1px solid var(--color-gray-300);border-radius:4px;padding:2.5rem 2rem;box-shadow:var(--card-shadow-grey)}.card_tTgdp .detail_AhryP{margin-bottom:2rem}.card_tTgdp .detail_AhryP:last-of-type{margin-bottom:0}.card_tTgdp .detail_AhryP .title_lrIsU{margin:0;font-weight:700;font-size:.875rem;line-height:150%;letter-spacing:1px;text-transform:uppercase;color:var(--color-gray-900)}.card_tTgdp .detail_AhryP .title_lrIsU .value_nPxty{display:block;margin:.25rem 0 0;font-size:1.5rem;line-height:130%;color:var(--color-primary);text-transform:none}.card_tTgdp .detail_AhryP .text_eN9L2{margin:.5rem 0 0;font-size:1rem;line-height:160%;color:var(--color-gray-700)}.card_tTgdp .link_H7v9e{display:inline-block;margin:1.875rem 0 0;color:var(--color-primary);text-transform:uppercase;font-size:.875rem;line-height:150%;letter-spacing:1px;-webkit-text-decoration-line:underline;text-decoration-line:underline;transition:.1s cubic-bezier(.37,0,.63,1)}.card_tTgdp .link_H7v9e:hover{opacity:.6}.card_tTgdp .button_CSOq9{margin:2.5rem 0 0;width:100%}",""]),l.locals={card:"card_tTgdp",detail:"detail_AhryP",title:"title_lrIsU",value:"value_nPxty",text:"text_eN9L2",link:"link_H7v9e",button:"button_CSOq9"},t.exports=l},697:function(t,e,r){"use strict";r.r(e);var l={name:"AppCardDetails",props:{details:{type:Array,required:!0},externalLink:{type:Object,default:null},button:{type:String,default:""},date:{type:String,default:""}},methods:{getValueText:function(t){return"{date}"===t?this.date:t}}},n=r(684),o=r(4);var component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.card},[t._l(t.details,(function(e,l){return r("div",{key:"detail-"+l,class:t.$style.detail},[r("h3",{class:t.$style.title},[t._v("\n      "+t._s(e.title)+"\n      "),r("span",{class:t.$style.value},[t._v(t._s(t.getValueText(e.value)))])]),t._v(" "),r("p",{class:t.$style.text},[t._v(t._s(e.text))])])})),t._v(" "),t.externalLink?r("a",{class:t.$style.link,attrs:{href:t.externalLink.url,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.externalLink.text))]):t._e(),t._v(" "),t._t("button",(function(){return[r("v-button",t._g({class:t.$style.button},t.$listeners),[t._v(t._s(t.button))])]}))],2)}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports;installComponents(component,{VButton:r(101).default})}}]);