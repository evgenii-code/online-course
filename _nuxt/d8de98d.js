(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{598:function(t,e,n){var content=n(711);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("610ac6e6",content,!0,{sourceMap:!1})},710:function(t,e,n){"use strict";var l=n(598),o=n.n(l);n.d(e,"default",(function(){return o.a}))},711:function(t,e,n){var l=n(11)(!1);l.push([t.i,".tabs_Kd7ll{width:100%}.tabs_Kd7ll .header_X1mdd{width:100%;display:grid;grid-template-columns:repeat(auto-fit,minmax(13.75rem,1fr));margin:0;padding:0;list-style:none}.tabs_Kd7ll .header_X1mdd .tab_gq8Hk.wide_QNs83{width:100%;display:flex}.tabs_Kd7ll .header_X1mdd .tab_gq8Hk .button_93uvd{width:100%;font-weight:700;font-size:1rem;border:1px solid transparent;box-sizing:border-box;border-radius:.25rem;color:var(--color-gray-600);padding:.625rem 1.25rem;min-height:2.625rem;transition:.1s cubic-bezier(.37,0,.63,1)}.tabs_Kd7ll .header_X1mdd .tab_gq8Hk .button_93uvd.selected_9gmnO{border-color:var(--color-primary);color:var(--color-primary)}.tabs_Kd7ll .header_X1mdd .tab_gq8Hk .button_93uvd:hover{opacity:1}.tabs_Kd7ll .header_X1mdd .tab_gq8Hk .button_93uvd:not(.tabs_Kd7ll .header_X1mdd .tab_gq8Hk .button_93uvd.selected_9gmnO):hover{color:var(--color-gray-800)}.tabs_Kd7ll .header_X1mdd .tab_gq8Hk .button_93uvd .icon_Eyq8m{margin-right:.5rem}",""]),l.locals={tabs:"tabs_Kd7ll",header:"header_X1mdd",tab:"tab_gq8Hk",wide:"wide_QNs83",button:"button_93uvd",selected:"selected_9gmnO",icon:"icon_Eyq8m"},t.exports=l},753:function(t,e,n){"use strict";n.r(e);n(22),n(7),n(21);var l={name:"AppTabs",props:{fullWidthTabs:{type:Boolean,default:!1}},data:function(){return{tabs:[]}},computed:{tabsItemComponents:function(){return this.$children.filter((function(t){return t.$options._isTabComponent}))}},mounted:function(){this.tabs=this.tabsItemComponents},methods:{selectTab:function(t){this.tabs.forEach((function(e,n){e.isActive=t===n}))}}},o=n(710),d=n(4);var component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.tabs},[n("ul",{class:t.$style.header},t._l(t.tabs,(function(e,l){var o,d;return n("li",{key:"tab-title-"+l,class:[t.$style.tab,(o={},o[t.$style.wide]=t.fullWidthTabs,o)]},[n("v-button-clear",{class:[t.$style.button,(d={},d[t.$style.selected]=e.isActive,d)],on:{click:function(e){return t.selectTab(l)}}},[e.icon?n("v-icon",{class:t.$style.icon,attrs:{name:e.icon,size:"small"}}):t._e(),t._v("\n        "+t._s(e.title)+"\n      ")],1)],1)})),0),t._v(" "),t._t("default")],2)}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.default=component.exports;installComponents(component,{VIcon:n(61).default,VButtonClear:n(75).default})}}]);