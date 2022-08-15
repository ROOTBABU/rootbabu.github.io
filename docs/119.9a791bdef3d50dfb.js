"use strict";(self.webpackChunksolidity_lang=self.webpackChunksolidity_lang||[]).push([[119],{9119:(Y,g,l)=>{l.r(g),l.d(g,{HomepageModule:()=>G});var s=l(6895),c=l(7117),t=l(4650),d=l(529);let u=(()=>{class o{constructor(e){this.http=e}getBlogs(){return this.http.get("assets/config/blogs.json").toPromise().then(e=>e.data).then(e=>e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(d.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();var m=l(805),p=l(3087),_=l(585),Z=l(2210),v=l(1740);const T=["dt"];function C(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",7)(1,"div",8)(2,"div",9)(3,"a",10),t._UZ(4,"img",11),t.TgZ(5,"span",12),t._uU(6,"ROOTBABU.SOL"),t.qZA()()(),t.TgZ(7,"div",13)(8,"nav",14)(9,"ol",15)(10,"li",16)(11,"a",17),t._UZ(12,"i",18),t.qZA()(),t.TgZ(13,"li",16)(14,"a",17),t._uU(15," List of Blogs "),t.qZA()()()()()(),t.TgZ(16,"div",19)(17,"div",20)(18,"a",17),t._UZ(19,"i",21),t.qZA()(),t.TgZ(20,"h1",22),t._uU(21," List of Blogs"),t.qZA(),t.TgZ(22,"span"),t._uU(23,"We are primarily focused on solidity programming, so it's best to do your own research about prerequisites. Below is a starting point for your research."),t.qZA(),t._UZ(24,"br"),t.TgZ(25,"div")(26,"span",23),t._UZ(27,"i",24),t.TgZ(28,"input",25),t.NdJ("input",function(a){t.CHM(e),t.oxw();const r=t.MAs(2);return t.KtG(r.filterGlobal(a.target,"contains"))}),t.qZA()()()()()}}function x(o,n){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Tol("blog-badge tag-"+e.value),t.xp6(1),t.Oqu(e.label)}}function y(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"th",26),t._uU(2,"Title & URL"),t._UZ(3,"p-sortIcon",27),t.qZA(),t.TgZ(4,"th",28),t._uU(5,"Author"),t._UZ(6,"p-sortIcon",29),t.qZA(),t.TgZ(7,"th",30),t._uU(8,"Tag "),t._UZ(9,"p-sortIcon",31),t.qZA(),t.TgZ(10,"th",32),t._uU(11,"Publication Date "),t._UZ(12,"p-sortIcon",33),t.qZA()(),t.TgZ(13,"tr")(14,"th")(15,"input",34),t.NdJ("input",function(a){t.CHM(e),t.oxw();const r=t.MAs(2);return t.KtG(r.filter(a.target,"title","startsWith"))}),t.qZA()(),t.TgZ(16,"th")(17,"input",35),t.NdJ("input",function(a){t.CHM(e),t.oxw();const r=t.MAs(2);return t.KtG(r.filter(a.target,"author","contains"))}),t.qZA()(),t.TgZ(18,"th")(19,"p-dropdown",36),t.NdJ("onChange",function(a){t.CHM(e),t.oxw();const r=t.MAs(2);return t.KtG(r.filter(a.value,"tag","equals"))}),t.YNc(20,x,2,3,"ng-template",37),t.qZA()(),t.TgZ(21,"th")(22,"p-calendar",38),t.NdJ("onSelect",function(a){t.CHM(e);const r=t.oxw();return t.KtG(r.onDateSelect(a))})("onClearClick",function(){t.CHM(e),t.oxw();const a=t.MAs(2);return t.KtG(a.filter("","date","equals"))}),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(19),t.Q6J("options",e.tags)("showClear",!0),t.xp6(3),t.Q6J("showButtonBar",!0)("readonlyInput",!0)}}function A(o,n){if(1&o&&(t.TgZ(0,"tr",39)(1,"td")(2,"span",40),t._uU(3,"title"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"span",40),t._uU(7,"Author"),t.qZA(),t.TgZ(8,"span",41),t._uU(9),t.qZA()(),t.TgZ(10,"td")(11,"span",40),t._uU(12,"Tag"),t.qZA(),t.TgZ(13,"span"),t._uU(14),t.qZA()(),t.TgZ(15,"td")(16,"span",40),t._uU(17,"Date"),t.qZA(),t._uU(18),t.qZA()()),2&o){const e=n.$implicit;t.xp6(4),t.hij(" ",e.title," "),t.xp6(5),t.Oqu(e.author),t.xp6(4),t.Tol("blog-badge tag-"+e.tag),t.xp6(1),t.Oqu(e.tag),t.xp6(4),t.hij(" ",e.date," ")}}function w(o,n){1&o&&(t.TgZ(0,"tr")(1,"td",42),t._uU(2,"No blogs found."),t.qZA()())}const U=function(){return[10,25,50]},q=function(){return["title","author","tag","date"]};let B=(()=>{class o{constructor(e,i){this.blogService=e,this.primengConfig=i,this.blogs=[],this.tags=[],this.loading=!0}ngOnInit(){this.blogService.getBlogs().then(e=>{this.blogs=e,this.loading=!1}),this.tags=[{label:"Basic",value:"basic"},{label:"Intermediate",value:"intermediate"},{label:"Advanced",value:"advanced"},{label:"Bug",value:"bug"},{label:"Prerequisite",value:"prerequisite"}],this.primengConfig.ripple=!0}onDateSelect(e){this.table&&this.table.filter(this.formatDate(e),"date","equals")}formatDate(e){let i=e.getMonth()+1,a=e.getDate();return i<10&&(i="0"+i),a<10&&(a="0"+a),e.getFullYear()+"-"+i+"-"+a}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u),t.Y36(m.b4))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blogs"]],viewQuery:function(e,i){if(1&e&&t.Gf(T,5),2&e){let a;t.iGM(a=t.CRH())&&(i.table=a.first)}},features:[t._Bn([u])],decls:7,vars:12,consts:[[1,"blog-list"],["dataKey","id","styleClass","p-datatable-blogs","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","responsive","rowHover","rows","showCurrentPageReport","rowsPerPageOptions","loading","paginator","filterDelay","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"row","text-center","text-white","mb-5"],[1,"table-header","d-flex","justify-content-between","align-middle"],[1,"site-logo"],["href","index.html",1,"navbar-brand"],["width","40px","src","assets/images/logo.png"],[1,"logo-text"],[1,"nav"],["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","#"],[1,"fas","fa-home"],[1,"col-lg-7","mx-auto"],[1,"homeicon"],[1,"fas","fa-blog"],[1,"display-4"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Global Search",3,"input"],["pSortableColumn","title"],["field","title"],["pSortableColumn","author"],["field","author"],["pSortableColumn","tag"],["field","tag"],["pSortableColumn","date"],["field","date"],["pInputText","","type","text","placeholder","Search by title",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Search by author",1,"p-column-filter",3,"input"],["styleClass","p-column-filter","placeholder","Select a tag",3,"options","showClear","onChange"],["pTemplate","item"],["styleClass","p-column-filter","placeholder","Publication Date","dateFormat","yy-mm-dd",3,"showButtonBar","readonlyInput","onSelect","onClearClick"],[1,"p-selectable-row"],[1,"p-column-title"],[1,"image-text"],["colspan","8"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"p-table",1,2),t.YNc(3,C,29,0,"ng-template",3),t.YNc(4,y,23,4,"ng-template",4),t.YNc(5,A,19,6,"ng-template",5),t.YNc(6,w,3,0,"ng-template",6),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("value",i.blogs)("responsive",!0)("rowHover",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(10,U))("loading",i.loading)("paginator",!0)("filterDelay",0)("globalFilterFields",t.DdM(11,q)))},dependencies:[m.jx,p.iA,p.lQ,p.fz,_.f,Z.Lt,v.o],styles:[".table-header[_ngcontent-%COMP%]{align-items:center}"]}),o})();var O=l(3577),M=l.n(O),h=l(5471),f=l(2174);function S(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"li",27)(1,"a",28),t.NdJ("click",function(){const r=t.CHM(e).$implicit,I=t.oxw(2);return t.KtG(I.onTabClick(r.href))}),t._uU(2),t.qZA()()}if(2&o){const e=n.$implicit;t.xp6(2),t.Oqu(e.title)}}function k(o,n){if(1&o&&(t.TgZ(0,"div",23)(1,"span",24),t._UZ(2,"i"),t.qZA(),t.TgZ(3,"p-accordion")(4,"p-accordionTab",25),t.YNc(5,S,3,1,"li",26),t.qZA()()()),2&o){const e=n.$implicit;t.xp6(2),t.Tol(e.icon),t.xp6(2),t.Q6J("header",e.title),t.xp6(1),t.Q6J("ngForOf",e.childs)}}const L=M()("B1G2GM9NG0","aadef574be1f9252bb48d4ea09b5cfe5");let P=(()=>{class o{constructor(e,i,a,r){this.route=e,this.viewportScroller=i,this.http=a,this.markdownService=r,this.config2={indexName:"demo_ecommerce",searchClient:L},this.contentLink="/assets/markdown/basics.md",this.breadCrumbs=[{title:"",link:"#",icon:"home"},{title:"Basics",link:"#"},{title:"Variables",link:"#"},{title:"Overview",link:"#"}],this.title="",this.icon=""}ngOnInit(){this.route.data.subscribe(e=>{this.config=e?.topicsList,this.title=e?.title,this.icon="fas fa-chess-"+e?.icon})}onTabClick(e){e&&(this.contentLink="/assets/markdown/"+e.file,setTimeout(()=>{this.viewportScroller.scrollToAnchor(e.id)},5))}onSearch(e){console.log(e),this.http.get("assets/markdown/helloworld.md",{responseType:"text"}).subscribe(i=>{let a=this.markdownService.parse(i);console.log(a)},i=>{console.log(i)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.gz),t.Y36(s.EM),t.Y36(d.eN),t.Y36(h.Zy))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-doc"]],decls:36,vars:5,consts:[[1,"docs-wrapper","basic"],["id","docs-sidebar",1,"docs-sidebar"],[1,"card"],[1,"card-body","text-center"],[1,"theme-icon-holder","me-2",2,"background","none"],["href","#"],[1,"fa-4x"],[1,"card-title"],[1,"card-text"],["id","docs-nav",1,"docs-nav","navbar"],[1,"section-items","list-unstyled","nav","flex-column","pb-3"],["class","d-flex flex-row mb-3",4,"ngFor","ngForOf"],["id","top",1,"docs-content","sidenav-content"],[1,"d-flex","content-header"],[1,"nav"],["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],[1,"fas","fa-home"],[1,"github-link"],[1,"fab","fa-github"],[1,"container"],[3,"src"],[1,"d-flex","flex-row","mb-3"],[1,"theme-icon-holder","me-2"],[3,"header"],["class","nav-item",4,"ngFor","ngForOf"],[1,"nav-item"],[1,"nav-link","scrollto",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4)(5,"a",5),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"h5",7),t._uU(8),t.qZA(),t.TgZ(9,"p",8),t._uU(10,"Solidity v0.8.15"),t.qZA()()(),t.TgZ(11,"nav",9)(12,"ul",10),t.YNc(13,k,6,4,"div",11),t.qZA()()(),t.TgZ(14,"div",12)(15,"div",13)(16,"div",14)(17,"nav",15)(18,"ol",16)(19,"li",17)(20,"a",5),t._UZ(21,"i",18),t.qZA()(),t.TgZ(22,"li",17)(23,"a",5),t._uU(24,"Basics"),t.qZA()(),t.TgZ(25,"li",17)(26,"a",5),t._uU(27,"Variables"),t.qZA()()()()(),t.TgZ(28,"div",19)(29,"a",5),t._UZ(30,"i",20),t.TgZ(31,"span"),t._uU(32,"Edit on GitHub"),t.qZA()()()(),t._UZ(33,"hr"),t.TgZ(34,"div",21),t._UZ(35,"markdown",22),t.qZA()()()),2&e&&(t.xp6(6),t.Tol(i.icon),t.xp6(2),t.Oqu(i.title),t.xp6(5),t.Q6J("ngForOf",i.config),t.xp6(22),t.Q6J("src",i.contentLink))},dependencies:[s.sg,f.UQ,f.US,h.lF],styles:[".sidenav-content[_ngcontent-%COMP%]{min-height:100vh;padding:1.2rem 3rem 2rem 4rem}.docs-content[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.nav[_ngcontent-%COMP%]{margin-right:auto}.docs-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#642070}.github-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:5px}.docs-sidebar[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.125);border-top:none;border-right:none;border-left:none;border-radius:unset}hr[_ngcontent-%COMP%]{margin-top:12px;margin-bottom:24px}.content-header[_ngcontent-%COMP%]{margin-top:10px}.container[_ngcontent-%COMP%]{padding:0}"]}),o})();function F(o,n){if(1&o&&(t.TgZ(0,"div",26)(1,"div",27)(2,"div",28)(3,"h5",29)(4,"span",30),t._UZ(5,"i"),t.qZA(),t.TgZ(6,"span",31),t._uU(7),t.qZA()(),t.TgZ(8,"div",32)(9,"p"),t._uU(10),t.qZA()(),t._UZ(11,"a",33),t.qZA()()()),2&o){const e=n.$implicit;t.xp6(5),t.Tol(e.icon),t.xp6(2),t.Oqu(e.title),t.xp6(3),t.Oqu(e.detail),t.xp6(1),t.Q6J("href",e.route,t.LSH)}}let H=(()=>{class o{constructor(e){this.route=e}ngOnInit(){this.route.data.subscribe(e=>{this.config=e.config})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-homepage"]],decls:36,vars:1,consts:[[1,"header","fixed-top"],[1,"branding","docs-branding"],[1,"container-fluid","position-relative","py-2"],[1,"docs-logo-wrapper"],[1,"site-logo"],["href","index.html",1,"navbar-brand"],["width","40px","src","./assets/images/logo.png"],[1,"logo-text"],[1,"docs-top-utilities","d-flex","justify-content-end","align-items-center"],[1,"social-list","list-inline","mx-md-3","mx-lg-5","mt-2","mb-0","d-none","d-lg-flex"],[1,"list-inline-item"],["href","https://github.com/ROOTBABU/solidity","target","_blank"],[1,"fab","fa-github","fa-fw"],["href","https://twitter.com/root_babu","target","_blank"],[1,"fab","fa-twitter","fa-fw"],["href","#"],["target","_blank",1,"fab","fa-discord"],["target","_blank",1,"fas","fa-info-circle"],[1,"page-header","theme-bg-dark","py-5","text-center","position-relative"],[1,"container"],[1,"page-heading","single-col-max","mx-auto"],[1,"page-intro","single-col-max","mx-auto"],[1,"page-content"],[1,"docs-overview","py-5"],[1,"row","justify-content-center"],["class","col-lg-4 py-3",4,"ngFor","ngForOf"],[1,"col-lg-4","py-3"],[1,"card","shadow-sm"],[1,"card-body"],[1,"card-title","mb-3"],[1,"theme-icon-holder","card-icon-holder","me-2"],[1,"card-title-text"],[1,"card-text"],[1,"card-link-mask",3,"href"]],template:function(e,i){1&e&&(t.TgZ(0,"header",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"a",5),t._UZ(6,"img",6),t.TgZ(7,"span",7),t._uU(8,"ROOTBABU.SOL"),t.qZA()()()(),t.TgZ(9,"div",8)(10,"ul",9)(11,"li",10)(12,"a",11),t._UZ(13,"i",12),t.qZA()(),t.TgZ(14,"li",10)(15,"a",13),t._UZ(16,"i",14),t.qZA()(),t.TgZ(17,"li",10)(18,"a",15),t._UZ(19,"i",16),t.qZA()(),t.TgZ(20,"li",10)(21,"a",15),t._UZ(22,"i",17),t.qZA()()()()()()(),t.TgZ(23,"div",18)(24,"div",19)(25,"h1",20),t._uU(26,"This is the perfect place"),t.qZA(),t.TgZ(27,"div",21),t._uU(28," if you want to become an expert on solidity. "),t.TgZ(29,"a",15),t._uU(30,"Join Our community"),t.qZA()()()(),t.TgZ(31,"div",22)(32,"div",19)(33,"div",23)(34,"div",24),t.YNc(35,F,12,5,"div",25),t.qZA()()()()),2&e&&(t.xp6(35),t.Q6J("ngForOf",i.config))},dependencies:[s.sg],styles:[".page-header[_ngcontent-%COMP%]{margin-top:68px}"]}),o})();const b=JSON.parse('{"title":"Basics","icon":"pawn","disscussion":"https://github.com/ROOTBABU/solidity/discussions/2","topicsList":[{"title":"Introduction","icon":"fas fa-praying-hands","childs":[{"title":"What is Solidity?","href":{"file":"helloworld.md","id":"top","githubLink":""}},{"title":"Remix IDE","href":{"file":"helloworld.md","id":"remix-ide","githubLink":""}},{"title":"Hello World!","href":{"file":"helloworld.md","id":"hello-world","githubLink":""}},{"title":"Deployment","href":{"file":"helloworld.md","id":"deployment","githubLink":""}}]},{"title":"Variables","icon":"fas fa-box-open","childs":[{"title":"Defination","href":{"file":"variables-basic.md","id":"top","githubLink":""}},{"title":"State Variables","href":{"file":"variables-basic.md","id":"state-variables","githubLink":""}},{"title":"Local Variables","href":{"file":"variables-basic.md","id":"local-variables","githubLink":""}},{"title":"Global Variables","href":{"file":"variables-basic.md","id":"global-variables","githubLink":""}}]},{"title":"Types","icon":"fas fa-map-signs","childs":[{"title":"Value Types","href":{"file":"types.md","id":"top","githubLink":""}},{"title":"Boolean","href":{"file":"types.md","id":"boolean","githubLink":""}},{"title":"Integers","href":{"file":"types.md","id":"integers","githubLink":""}},{"title":"Fixed Point Numbers","href":{"file":"types.md","id":"fixed-point-numbers","githubLink":""}},{"title":"Address","href":{"file":"types.md","id":"address","githubLink":""}},{"title":"Fixed-size Byte Arrays","href":{"file":"types.md","id":"fixed-size-byte-array","githubLink":""}}]}]}'),N=[{path:"",component:H,data:JSON.parse('{"config":[{"icon":"fas fa-asterisk","title":"Prerequisites","detail":"At the end of this section you will learn basics of blockchain which help to start with solidity programming language.","route":"prerequisites"},{"icon":"fas fa-chess-pawn","title":"Basics","detail":"Coming Soon!","route":"basic"},{"icon":"fas fa-chess-queen","title":"Intermediate","detail":"Coming Soon!","route":"#"},{"icon":"fas fa-chess-king","title":"Advanced","detail":"Coming Soon!","route":"#"},{"icon":"fas fa-file-alt","title":"Cheatsheet","detail":"Coming Soon!","route":"#"},{"icon":"fas fa-bug","title":"Bugs and Security","detail":"Coming Soon!","route":"#"},{"icon":"fas fa-map","title":"Roadmaps","detail":"Coming Soon!","route":"#"},{"icon":"fas fa-blog","title":"List of Blogs","detail":"Coming Soon!","route":"blogs"}]}')},{path:"basic",component:P,data:b},{path:"blogs",component:B,data:b}];let J=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz.forChild(N),c.Bz]}),o})(),G=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,J,d.JF]}),o})()}}]);