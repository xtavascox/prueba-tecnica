"use strict";(self.webpackChunkprueba_tecnica=self.webpackChunkprueba_tecnica||[]).push([[250],{3250:(K,x,o)=>{o.r(x),o.d(x,{AuthModule:()=>m});var C=o(6895),h=o(2019),s=o(433),v=o(805),t=o(1571),T=o(4482),A=o(5403),b=o(4671),I=o(9751),M=o(4986),N=o(3532);var L=o(8421),Y=o(529);class l{constructor(e){this.http=e,this.serviceUrl="https://prueba-tecnica-idecide.azurewebsites.net/api"}login(e,r){return this.http.post(this.serviceUrl+"/auth/login",{correo:e,password:r}).pipe(function P(n=1/0){let e;e=n&&"object"==typeof n?n:{count:n};const{count:r=1/0,delay:i,resetOnSuccess:a=!1}=e;return r<=0?b.y:(0,T.e)((c,u)=>{let f,y=0;const Z=()=>{let S=!1;f=c.subscribe((0,A.x)(u,g=>{a&&(y=0),u.next(g)},void 0,g=>{if(y++<r){const F=()=>{f?(f.unsubscribe(),f=null,Z()):S=!0};if(null!=i){const w="number"==typeof i?function J(n=0,e,r=M.P){let i=-1;return null!=e&&((0,N.K)(e)?r=e:i=e),new I.y(a=>{let c=function z(n){return n instanceof Date&&!isNaN(n)}(n)?+n-r.now():n;c<0&&(c=0);let u=0;return r.schedule(function(){a.closed||(a.next(u++),0<=i?this.schedule(void 0,i):a.complete())},c)})}(i):(0,L.Xf)(i(g,y)),U=(0,A.x)(u,()=>{U.unsubscribe(),F()},()=>{u.complete()});w.subscribe(U)}else F()}else u.error(g)})),S&&(f.unsubscribe(),f=null,Z())};Z()})}(3))}}l.\u0275fac=function(e){return new(e||l)(t.LFG(Y.eN))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"});var j=o(5593),B=o(4247),D=o(1740),G=o(2453);function R(n,e){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Inicio de sesion"),t.qZA())}const X=function(){return{width:"35rem",padding:"10px"}};class d{constructor(e,r,i,a){this.fb=e,this.messageService=r,this.router=i,this._authService=a,this.loginForm=this.fb.group({username:["test1@gmail.com",[s.kI.required]],password:["123456",[s.kI.required]]})}login(){const{username:e,password:r}=this.loginForm.value;this._authService.login(e,r).subscribe({next:i=>{localStorage.setItem("U-PT",JSON.stringify(i.usuario)),sessionStorage.setItem("token",i.token),console.log(i.token),this.router.navigate(["dashboard"])},error:i=>{if(i.error.msg)return void this.messageService.add({severity:"error",summary:"Error",detail:i.error.msg,life:1500});const a=i.error.errors.map(c=>({severity:"error",summary:"Error",detail:c.msg,life:1500}));this.messageService.addAll(a)}})}}d.\u0275fac=function(e){return new(e||d)(t.Y36(s.qu),t.Y36(v.ez),t.Y36(h.F0),t.Y36(l))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-login"]],features:[t._Bn([v.ez])],decls:16,vars:4,consts:[[1,"container","content-center"],["pTemplate","header"],[1,"content-center"],["autocomplete","off",1,"forms","content-center",3,"formGroup","ngSubmit"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],[1,"pi","pi-user"],["type","text","formControlName","username","pInputText","","placeholder","Username"],[1,"pi","pi-key"],["type","password","pInputText","","placeholder","Password","formControlName","password"],[1,"content-center","mt-10"],["type","submit","label","iniciar sesion"],["position","top-right"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"p-card"),t.YNc(2,R,2,0,"ng-template",1),t.TgZ(3,"div",2)(4,"form",3),t.NdJ("ngSubmit",function(){return r.login()}),t.TgZ(5,"div",4)(6,"span",5),t._UZ(7,"i",6),t.qZA(),t._UZ(8,"input",7),t.qZA(),t.TgZ(9,"div",4)(10,"span",5),t._UZ(11,"i",8),t.qZA(),t._UZ(12,"input",9),t.qZA(),t.TgZ(13,"div",10),t._UZ(14,"p-button",11),t.qZA()()()(),t._UZ(15,"p-toast",12),t.qZA()),2&e&&(t.xp6(1),t.Akn(t.DdM(3,X)),t.xp6(3),t.Q6J("formGroup",r.loginForm))},dependencies:[j.zx,B.Z,v.jx,D.o,G.FN,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],styles:[".content-center[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:nowrap}.container[_ngcontent-%COMP%]{width:100%;height:95vh}h2[_ngcontent-%COMP%]{text-align:center}.forms[_ngcontent-%COMP%]{flex-direction:column;gap:10px;width:70%}"]});const E=[{path:"",component:d}];class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[h.Bz.forChild(E),h.Bz]});var O=o(2221);class m{}m.\u0275fac=function(e){return new(e||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[C.ez,p,O.g,s.UX]})}}]);