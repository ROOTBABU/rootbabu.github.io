"use strict";(self.webpackChunkrootbabu_sol=self.webpackChunkrootbabu_sol||[]).push([[592],{3625:(d,l,n)=>{n.d(l,{L:()=>f});var s=n(2687),o=n(4650),t=n(6895),m=n(2216);function u(e,r){if(1&e&&(o.TgZ(0,"a",3),o._UZ(1,"fa-icon",5),o.qZA()),2&e){const i=o.oxw().$implicit,a=o.oxw();o.Q6J("href",i.url,o.LSH),o.xp6(1),o.Q6J("icon",a.iconComponents[i.icon])}}function c(e,r){if(1&e&&(o.TgZ(0,"li",2)(1,"a",3),o._uU(2),o.qZA(),o.YNc(3,u,2,2,"a",4),o.qZA()),2&e){const i=r.$implicit;o.xp6(1),o.Q6J("href",i.url,o.LSH),o.xp6(1),o.hij(" ",i.label," "),o.xp6(1),o.Q6J("ngIf",i.icon)}}let f=(()=>{class e{constructor(){this.breadcrumbs=[],this.iconComponents={faHouseChimney:s.L2e}}ngOnInit(){}setBreadcrumbs(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-breadcrumb"]],inputs:{breadcrumbs:"breadcrumbs"},decls:2,vars:1,consts:[[1,"breadcrumb"],["class","breadcrumb-item",4,"ngFor","ngForOf"],[1,"breadcrumb-item"],[3,"href"],[3,"href",4,"ngIf"],[1,"fa-1x",3,"icon"]],template:function(i,a){1&i&&(o.TgZ(0,"ul",0),o.YNc(1,c,4,3,"li",1),o.qZA()),2&i&&(o.xp6(1),o.Q6J("ngForOf",a.breadcrumbs))},dependencies:[t.sg,t.O5,m.BN],styles:[".breadcrumb[_ngcontent-%COMP%]{font-size:16px;font-weight:400;margin-bottom:0}.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),e})()},4662:(d,l,n)=>{n.d(l,{c:()=>u});var s=n(8712),o=n(2687),t=n(4650),m=n(2216);let u=(()=>{class c{constructor(){this.iconComponents={faGithub:s.zhw,faDiscord:s.omb,faInfo:o.YHc,faMedium:s.$tD,faTwitter:s.mdU,faGitter:s.hV2}}ngOnInit(){}}return c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-footer"]],decls:22,vars:5,consts:[[1,"footer"],[1,"container","text-center","py-5"],[1,"copyright"],["href",""],[1,"social-list","list-unstyled","pt-4","mb-0"],[1,"list-inline-item"],["href","https://github.com/ROOTBABU","target","_blank"],[3,"icon"],["href","https://discord.gg/UqrZ78gYg3","target","_blank"],["href","https://rootbabu.medium.com/","target","_blank"],["href","https://twitter.com/root_babu","target","_blank"],["href","https://gitter.im/ROOTBABU/ROOTBABU.SOL","target","_blank"]],template:function(e,r){1&e&&(t.TgZ(0,"footer",0)(1,"div",1)(2,"small",2),t._uU(3,"Template Copyright \xa9 "),t.TgZ(4,"a",3),t._uU(5,"rootbabu"),t.qZA()(),t.TgZ(6,"ul",4)(7,"li",5)(8,"a",6),t._UZ(9,"fa-icon",7),t.qZA()(),t.TgZ(10,"li",5)(11,"a",8),t._UZ(12,"fa-icon",7),t.qZA()(),t.TgZ(13,"li",5)(14,"a",9),t._UZ(15,"fa-icon",7),t.qZA()(),t.TgZ(16,"li",5)(17,"a",10),t._UZ(18,"fa-icon",7),t.qZA()(),t.TgZ(19,"li",5)(20,"a",11),t._UZ(21,"fa-icon",7),t.qZA()()()()()),2&e&&(t.xp6(9),t.Q6J("icon",r.iconComponents.faGithub),t.xp6(3),t.Q6J("icon",r.iconComponents.faDiscord),t.xp6(3),t.Q6J("icon",r.iconComponents.faMedium),t.xp6(3),t.Q6J("icon",r.iconComponents.faTwitter),t.xp6(3),t.Q6J("icon",r.iconComponents.faGitter))},dependencies:[m.BN],styles:[".footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{font-size:.875rem}.social-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.125rem;width:32px;height:32px;text-align:center;border-radius:50%;padding-top:2px}"]}),c})()},3646:(d,l,n)=>{n.d(l,{G:()=>i});var s=n(8712),o=n(2687),t=n(4650),m=n(6895),u=n(2216),c=n(3683),f=n(3625);function e(a,g){1&a&&t._UZ(0,"span",4)}function r(a,g){if(1&a&&(t.TgZ(0,"a",9),t._UZ(1,"fa-icon",10),t.TgZ(2,"span",11),t._uU(3,"Edit on GitHub"),t.qZA()()),2&a){const _=t.oxw();t.Q6J("href",_.githubLink,t.LSH),t.xp6(1),t.Q6J("icon",_.faGithub)}}let i=(()=>{class a{constructor(){this.logo="rootbabu.sol",this.breadcrumb=[],this.defaultGithubLink="https://github.com/ROOTBABU/solidity/blob/dev/src/assets/"}ngOnInit(){this.faGithub=s.zhw,this.faDiscord=s.omb,this.faInfo=o.DBf,this.faTwitter=s.mdU,this.faMedium=s.$tD,this.faHome=o.J9Y,this.breadcrumb=this.config.breadcrumb,this.githubLink=this.config.file?this.defaultGithubLink.concat(this.config.file):""}}return a.\u0275fac=function(_){return new(_||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-header"]],inputs:{config:"config"},decls:12,vars:6,consts:[[1,"header"],["href","./",1,"d-flex","flex-row","align-items-center","text-decoration-none","logo"],["width","40px","src","./assets/images/logo.png"],[1,"logo-text"],[1,"spacer"],[3,"breadcrumbs"],["class","spacer",4,"ngIf"],[1,"github-link"],["class","d-flex flex-row ","target","_blank",3,"href",4,"ngIf"],["target","_blank",1,"d-flex","flex-row",3,"href"],[1,"d-flex","align-items-center",3,"icon"],[1,"edit-on-github"]],template:function(_,p){1&_&&(t.TgZ(0,"mat-toolbar",0)(1,"a",1),t._UZ(2,"img",2),t.TgZ(3,"h1",3),t._uU(4),t.ALo(5,"uppercase"),t.qZA()(),t._UZ(6,"span",4),t.TgZ(7,"div"),t._UZ(8,"app-breadcrumb",5),t.qZA(),t.YNc(9,e,1,0,"span",6),t.TgZ(10,"div",7),t.YNc(11,r,4,2,"a",8),t.qZA()()),2&_&&(t.xp6(4),t.Oqu(t.lcZ(5,4,p.logo)),t.xp6(4),t.Q6J("breadcrumbs",p.breadcrumb),t.xp6(1),t.Q6J("ngIf",p.githubLink),t.xp6(2),t.Q6J("ngIf",p.githubLink))},dependencies:[m.O5,u.BN,c.Ye,f.L,m.gd],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}.header[_ngcontent-%COMP%]{background:none}.logo-text[_ngcontent-%COMP%]{font-size:24px!important}"]}),a})()}}]);