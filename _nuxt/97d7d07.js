(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{622:function(t,e,o){var content=o(759);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("b6f142fe",content,!0,{sourceMap:!1})},758:function(t,e,o){"use strict";var r=o(622),c=o.n(r);o.d(e,"default",(function(){return c.a}))},759:function(t,e,o){var r=o(11)(!1);r.push([t.i,'.contacts_58szW .wrapper_c-To6{width:100%}.contacts_58szW .wrapper_c-To6.text_RX-t0{max-width:24.6875rem}.contacts_58szW .wrapper_c-To6.text_RX-t0 .list_EWX9L{margin:2.5rem 0 0;padding:0;list-style:none}.contacts_58szW .wrapper_c-To6.text_RX-t0 .list_EWX9L .item_3gmdo{margin-top:1.5rem;display:flex;align-items:flex-start}.contacts_58szW .wrapper_c-To6.text_RX-t0 .list_EWX9L .item_3gmdo:first-of-type{margin:0}.contacts_58szW .wrapper_c-To6.text_RX-t0 .list_EWX9L .item_3gmdo .icon_kZqSc{color:var(--color-primary);margin-right:.75rem}.contacts_58szW .wrapper_c-To6.text_RX-t0 .list_EWX9L .item_3gmdo .info_eabRj .subtitle_Hhat8{margin:0;font-weight:700;font-size:.875rem;line-height:150%;color:vat(--color-gray-700)}.contacts_58szW .wrapper_c-To6.text_RX-t0 .list_EWX9L .item_3gmdo .info_eabRj .link_JyU4n{font-weight:400;font-size:1.125rem;line-height:150%;color:var(--color-gray-900);text-decoration:none;cursor:pointer;transition:.1s cubic-bezier(.37,0,.63,1)}.contacts_58szW .wrapper_c-To6.text_RX-t0 .list_EWX9L .item_3gmdo .info_eabRj .link_JyU4n:hover{opacity:.6}.contacts_58szW .wrapper_c-To6.text_RX-t0 .follow_Ikg\\+X{margin-top:3rem}.contacts_58szW .wrapper_c-To6.text_RX-t0 .follow_Ikg\\+X .subtitle_Hhat8{margin:0;font-weight:700;font-size:1rem;line-height:150%;letter-spacing:1px;text-transform:uppercase;color:var(--color-gray-900)}.contacts_58szW .wrapper_c-To6.text_RX-t0 .follow_Ikg\\+X .social_XJlyi{margin-top:1.5rem;color:var(--color-gray-700)}.contacts_58szW .wrapper_c-To6.map_aUjde{margin-left:2.5rem;align-self:flex-start;max-width:44.0625rem;position:relative;border-radius:4px;box-shadow:var(--card-shadow-grey);width:100%}.contacts_58szW .wrapper_c-To6.map_aUjde:before{content:"";display:block;padding-bottom:58.4397%}.contacts_58szW .wrapper_c-To6.map_aUjde .iframe_9-vxk{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}@media screen and (max-width:1024px){.contacts_58szW>div{flex-direction:column!important;align-items:center}.contacts_58szW .wrapper_c-To6.text_RX-t0 .follow_Ikg\\+X .subtitle_Hhat8,.contacts_58szW .wrapper_c-To6.text_RX-t0 .heading_jKPb3{text-align:center}.contacts_58szW .wrapper_c-To6.text_RX-t0 .follow_Ikg\\+X .social_XJlyi{justify-content:center}.contacts_58szW .wrapper_c-To6.map_aUjde{align-self:unset;margin:3rem auto 0}}@media screen and (max-width:450px){.contacts_58szW .wrapper_c-To6.map_aUjde:before{padding-bottom:100%}}',""]),r.locals={contacts:"contacts_58szW",wrapper:"wrapper_c-To6",text:"text_RX-t0",list:"list_EWX9L",item:"item_3gmdo",icon:"icon_kZqSc",info:"info_eabRj",subtitle:"subtitle_Hhat8",link:"link_JyU4n",follow:"follow_Ikg+X",social:"social_XJlyi",map:"map_aUjde",iframe:"iframe_9-vxk",heading:"heading_jKPb3"},t.exports=r},940:function(t,e,o){"use strict";o.r(e);o(20),o(16),o(22),o(7),o(27),o(21),o(28);var r=o(0),c=(o(102),o(56));function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={name:"AppSectionContacts",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({contactLinks:"core/contactLinks",socialLinks:"core/socialLinks"})),methods:{getAttrs:function(t){return"a"===t.tag?{href:t.link,target:"_blank",rel:"noopener noreferrer"}:{}}}},_=l,f=o(758),m=o(4);var component=Object(m.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("app-section-wrapper",{class:t.$style.contacts,attrs:{direction:"row"}},[o("div",{class:[t.$style.wrapper,t.$style.text]},[o("app-heading",{class:t.$style.heading,scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.$t("contacts.title")))]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(t._s(t.$t("contacts.subtitle")))]},proxy:!0}])}),t._v(" "),o("ul",{class:t.$style.list},t._l(t.contactLinks,(function(e,r){return o("li",{key:"contact-"+r,class:t.$style.item},[o("v-icon",{class:t.$style.icon,attrs:{size:"large",name:e.icon}}),t._v(" "),o("div",{class:t.$style.info},[o("h3",{class:t.$style.subtitle},[t._v(t._s(t.$t(e.text)))]),t._v(" "),o(e.tag,t._b({tag:"component",class:t.$style.link},"component",t.getAttrs(e),!1),[t._v(t._s(e.title))])],1)],1)})),0),t._v(" "),o("div",{class:t.$style.follow},[o("h3",{class:t.$style.subtitle},[t._v(t._s(t.$t("contacts.follow")))]),t._v(" "),o("app-social-links",{class:t.$style.social,attrs:{"social-links":t.socialLinks}})],1)],1),t._v(" "),o("div",{class:[t.$style.wrapper,t.$style.map]},[o("iframe",{class:t.$style.iframe,staticStyle:{border:"0"},attrs:{width:"100%",height:"100%",frameborder:"0",loading:"lazy",allowfullscreen:"",src:t.$config.googleMapsEmbedUrl}})])])}),[],!1,(function(t){this.$style=f.default.locals||f.default}),null,null);e.default=component.exports;installComponents(component,{AppHeading:o(278).default,VIcon:o(61).default,AppSocialLinks:o(282).default,AppSectionWrapper:o(279).default})}}]);