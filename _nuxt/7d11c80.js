(window.webpackJsonp=window.webpackJsonp||[]).push([[10,42],{547:function(t,e,n){var content=n(578);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("0ba8fb40",content,!0,{sourceMap:!1})},577:function(t,e,n){"use strict";var l=n(547),r=n.n(l);n.d(e,"default",(function(){return r.a}))},578:function(t,e,n){var l=n(11)(!1);l.push([t.i,".list_Tb4hp{margin:0;padding:0;list-style:none;font:inherit}.list_Tb4hp .item_6b-WY{margin-bottom:1rem;display:flex;align-items:center}.list_Tb4hp .item_6b-WY:last-of-type{margin-bottom:0}.list_Tb4hp .item_6b-WY .icon_u4Sy0{margin-right:1rem;color:var(--color-primary)}.list_Tb4hp .item_6b-WY .text_d3Nkn{margin:0;font:inherit}",""]),l.locals={list:"list_Tb4hp",item:"item_6b-WY",icon:"icon_u4Sy0",text:"text_d3Nkn"},t.exports=l},579:function(t,e,n){"use strict";n.r(e);var l={name:"AppTextList",props:{icon:{type:String,default:"check"}}},r=n(577),o=n(4);var component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.list},t._l(t.$slots,(function(e,l,r){return n("li",{key:"slot-"+r,class:t.$style.item},[n("v-icon",{class:t.$style.icon,attrs:{name:t.icon,size:"small"}}),t._v(" "),n("p",{class:t.$style.text},[t._t("item-"+(r+1))],2)],1)})),0)}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports;installComponents(component,{VIcon:n(61).default})},602:function(t,e,n){var content=n(721);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("038b76a4",content,!0,{sourceMap:!1})},720:function(t,e,n){"use strict";var l=n(602),r=n.n(l);n.d(e,"default",(function(){return r.a}))},721:function(t,e,n){var l=n(11)(!1);l.push([t.i,".audience_KKLy2{display:flex;justify-content:space-between;grid-gap:2.5rem;gap:2.5rem}.audience_KKLy2 .heading_S77Ub{width:100%;max-width:30.9375rem}.audience_KKLy2 .list_QOZU0{width:100%;max-width:37.5rem;margin:2rem 0 0;font-weight:700;font-size:1.25rem;line-height:150%}@media screen and (max-width:1024px){.audience_KKLy2{flex-direction:column;align-items:center;grid-gap:unset;gap:unset}.audience_KKLy2 .heading_S77Ub{text-align:center}.audience_KKLy2 .list_QOZU0{font-weight:400;font-size:inherit}}",""]),l.locals={audience:"audience_KKLy2",heading:"heading_S77Ub",list:"list_QOZU0"},t.exports=l},756:function(t,e,n){"use strict";n.r(e);var l={name:"AppAudience",props:{audienceList:{type:Array,required:!0}},methods:{getSlotName:function(t){return"item-".concat(t+1)}}},r=n(720),o=n(4);var component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{class:t.$style.audience},[n("app-heading",{class:t.$style.heading,scopedSlots:t._u([{key:"title",fn:function(){return[t._t("title")]},proxy:!0},{key:"subtitle",fn:function(){return[t._t("subtitle")]},proxy:!0}],null,!0)}),t._v(" "),n("app-text-list",{class:t.$style.list,scopedSlots:t._u([t._l(t.audienceList,(function(e,l){return{key:t.getSlotName(l),fn:function(){return[n("span",{key:"audience-"+l},[t._v(t._s(e.text))])]},proxy:!0}}))],null,!0)})],1)}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports;installComponents(component,{AppHeading:n(278).default,AppTextList:n(579).default})}}]);