(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[681],{1330:function(e,t,a){"use strict";var n=a(1574),r=a(7294),l=a(1070),i=a.n(l),s=a(4382);t.Z=function(e){var t=e.image,a=e.title,l=e.subtitle,o=e.nameFieldLable,c=e.phoneFieldLable,m=e.emailFieldLable,f=e.commentsFieldLable,d=e.ctaText,u=(0,n.Z)("div",{target:"ehjz8bg0"})("background-repeat:no-repeat;background-position:center;background-size:cover;background-image:url(",t.file.url,");"),b=r.useState({submitting:!1,status:null}),_=(b[0],b[1]),p=function(e,t,a){_({submitting:!1,status:{ok:e,msg:t}}),e&&a.reset()};return(0,s.tZ)(u,{className:"feedback-form col-xs"},(0,s.tZ)("div",{className:"container"},(0,s.tZ)("div",{className:"feedback-form__inner-wrap col-xs-12"},(0,s.tZ)("h2",{className:"feedback-form__title"},a),(0,s.tZ)("p",{className:"feedback-form__subtitle"},l),(0,s.tZ)("form",{onSubmit:function(e){e.preventDefault();var t=e.target;_({submitting:!0}),i()({method:"post",url:"https://getform.io/f/fd79ffaa-e0d5-42b2-b125-41458a780f9e",data:new FormData(t)}).then((function(e){p(!0,"Thanks!",t)})).catch((function(e){p(!1,e.response.data.error,t)}))},className:"feedback-form__form form-body",id:"feedback-form"},(0,s.tZ)("div",{className:"feedback-form__fieldset form-fieldset"},(0,s.tZ)("label",{htmlFor:"name",className:"feedback-form__label form-label"},o),(0,s.tZ)("input",{required:!0,type:"text",id:"name",name:"name",className:"feedback-form__input form-input"})),(0,s.tZ)("div",{className:"feedback-form__fieldset form-fieldset"},(0,s.tZ)("label",{htmlFor:"phone",className:"feedback-form__label form-label"},c),(0,s.tZ)("input",{required:!0,type:"phone",id:"phone",name:"phone",className:"feedback-form__input form-input"})),(0,s.tZ)("div",{className:"feedback-form__fieldset form-fieldset"},(0,s.tZ)("label",{htmlFor:"email",className:"feedback-form__label form-label"},m),(0,s.tZ)("input",{required:!0,type:"email",id:"email",name:"email",className:"feedback-form__input form-input"})),(0,s.tZ)("div",{className:"feedback-form__fieldset form-fieldset"},(0,s.tZ)("label",{htmlFor:"comment",className:"feedback-form__label form-label"},f),(0,s.tZ)("input",{type:"text",id:"comment",name:"comment",className:"feedback-form__input form-input"})),(0,s.tZ)("button",{type:"submit",className:"feedback-form__submit cta-link"},d)))))}},4766:function(e,t,a){"use strict";var n=a(1574),r=(a(7294),a(4382));t.Z=function(e){var t=e.heading,a=e.description,l=e.image,i=(0,n.Z)("div",{target:"e1ln9nvo0"})("background-repeat:no-repeat;background-position:center;background-size:cover;background-image:url(",(null==l?void 0:l.file.url)||[],");");return(0,r.tZ)(i,{className:"top-banner"},(0,r.tZ)("div",{className:"top-banner__inner-wrap container"},(0,r.tZ)("h1",{className:"top-banner__title col-xs"},t),Boolean(null==a?void 0:a.childMarkdownRemark)&&(0,r.tZ)("p",{className:"top-banner__description col-xs"},a.childMarkdownRemark.rawMarkdownBody)))}},7259:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});a(7294);var n=a(4671),r=a(4766),l=a(2122),i=a(5444),s=a(4382),o=function(e){var t=e.image,a=e.title,n=e.shortDescription,r=e.ctaText,l=e.ctaLink,o=e.currentLocale,c=e.listingPage;return(0,s.tZ)(i.Link,{to:l?"/"+o+"/"+c+"/"+l.serviceSlug:null,className:"services-list__item col-xs-12 col-xm-6"},(0,s.tZ)("div",{className:"services-list__image-wrap"},(0,s.tZ)("img",{src:t.file.url,alt:"",className:"services-list__image"})),(0,s.tZ)("h4",{className:"services-list__heading"},a),(0,s.tZ)("p",{className:"services-list__description"},n),(0,s.tZ)("span",{className:"learn-more"},r))},c=function(e){var t=e.component,a=e.currentLocale,n=e.listingPage,r=Boolean(null==t?void 0:t.content),i=t.content;return r?(0,s.tZ)("section",{className:"services-list container"},(0,s.tZ)("div",{className:"services-list__inner-wrap"},i.map((function(e,t){return(0,s.tZ)(o,(0,l.Z)({key:t.toString()},e,{currentLocale:a,listingPage:n}))})))):(0,s.tZ)("div",null,"no content")},m=a(1330),f=a(4799),d=(a(6534).g.Ua,function(e){var t=e.pageContext,a=t.page,l=t.allLocales,i=(0,f.q)(a,f.r.ServicesListTopBanner),o=(0,f.q)(a,f.r.ServicesList),d=(0,f.q)(a,f.r.FeedbackForm);return(0,s.tZ)(n.Z,{allLocales:l,currentLocale:a.node_locale},(0,s.tZ)(r.Z,i),(0,s.tZ)(c,{component:o,currentLocale:a.node_locale,listingPage:a.slug}),(0,s.tZ)(m.Z,d))})}}]);
//# sourceMappingURL=component---src-templates-services-list-tsx-310af5b5c9ca3ac2a0d8.js.map