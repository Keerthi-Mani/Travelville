(function(g){var window=this;var O5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.W?{D:"div",X:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",N:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{D:"g",N:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",N:{transform:"translate(-1.000000, -3.000000)"},K:[{D:"polygon",N:{points:"0 0 24 0 24 24 0 24"}},{D:"path",N:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";g.Q(a.P().experiments,"kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.W?{D:"div",X:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",N:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{D:"g",N:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",N:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},K:[{D:"path",N:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.U.call(this,{D:"button",X:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],N:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},K:[d]});this.u=a;this.ha("click",this.w,this);this.ia("title",g.OM(a,e,"i"));g.ge(this,g.ZM(b.Ya(),this.element))},P5=function(a){g.U.call(this,{D:"div",
I:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.G=this.B=this.u=void 0;this.L(a,"minimized",this.HH);this.L(a,"onStateChange",this.pO)},Q5=function(a){g.uP.call(this,a);
this.o=new P5(this.player);this.o.hide();g.FL(this.player,this.o.element,4);a.app.H.o&&(this.load(),g.K(g.lL(a),"ytp-player-minimized",!0))};
g.r(O5,g.U);O5.prototype.w=function(){this.u.ma("onExpandMiniplayer")};g.r(P5,g.U);g.h=P5.prototype;
g.h.show=function(){this.u=new g.Ln(this.GH,null,this);this.u.start();if(!this.H){this.C=new g.PQ(this.player,this);g.B(this,this.C);g.FL(this.player,this.C.element,4);this.C.B=.6;this.T=new g.OP(this.player);g.B(this,this.T);this.w=new g.U({D:"div",I:"ytp-miniplayer-scrim"});g.B(this,this.w);this.w.ca(this.element);this.L(this.w.element,"click",this.jA);var a=new g.U({D:"button",X:["ytp-miniplayer-close-button","ytp-button"],N:{"aria-label":"Close"},K:[g.hM()]});g.B(this,a);a.ca(this.w.element);
this.L(a.element,"click",this.Iy);a=new O5(this.player,this);g.B(this,a);a.ca(this.w.element);this.A=new g.U({D:"div",I:"ytp-miniplayer-controls"});g.B(this,this.A);this.A.ca(this.w.element);this.L(this.A.element,"click",this.jA);var b=new g.U({D:"div",I:"ytp-miniplayer-button-container"});g.B(this,b);b.ca(this.A.element);a=new g.U({D:"div",I:"ytp-miniplayer-play-button-container"});g.B(this,a);a.ca(this.A.element);var c=new g.U({D:"div",I:"ytp-miniplayer-button-container"});g.B(this,c);c.ca(this.A.element);
this.O=new g.GN(this.player,this,!1);g.B(this,this.O);this.O.ca(b.element);b=new g.CN(this.player,this);g.B(this,b);b.ca(a.element);this.J=new g.GN(this.player,this,!0);g.B(this,this.J);this.J.ca(c.element);this.G=new g.aP(this.player,this);g.B(this,this.G);this.G.ca(this.w.element);this.B=new g.PN(this.player,this);g.B(this,this.B);g.FL(this.player,this.B.element,4);this.F=new g.U({D:"div",I:"ytp-miniplayer-buttons"});g.B(this,this.F);g.FL(this.player,this.F.element,4);a=new g.U({D:"button",X:["ytp-miniplayer-close-button",
"ytp-button"],N:{"aria-label":"Close"},K:[g.hM()]});g.B(this,a);a.ca(this.F.element);this.L(a.element,"click",this.Iy);a=new g.U({D:"button",X:["ytp-miniplayer-replay-button","ytp-button"],N:{"aria-label":"Close"},K:[g.wM()]});g.B(this,a);a.ca(this.F.element);this.L(a.element,"click",this.jM);this.L(this.player,"presentingplayerstatechange",this.IH);this.L(this.player,"appresize",this.ds);this.L(this.player,"fullscreentoggled",this.ds);this.ds();this.H=!0}0!=this.player.getPlayerState()&&g.U.prototype.show.call(this);
this.B.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.u&&(this.u.dispose(),this.u=void 0);g.U.prototype.hide.call(this);this.player.app.H.o||(this.H&&this.B.hide(),this.player.loadModule("annotations_module"))};
g.h.Y=function(){this.u&&(this.u.dispose(),this.u=void 0);g.U.prototype.Y.call(this)};
g.h.Iy=function(){this.player.stopVideo();this.player.ma("onCloseMiniplayer")};
g.h.jM=function(){this.player.playVideo()};
g.h.jA=function(a){if(a.target==this.w.element||a.target==this.A.element)g.Q(this.player.P().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.uD(g.nL(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.ma("onExpandMiniplayer")};
g.h.HH=function(){g.K(g.lL(this.player),"ytp-player-minimized",this.player.app.H.o)};
g.h.GH=function(){g.RN(this.B);this.G.w();this.u&&this.u.start()};
g.h.IH=function(a){g.V(a.state,32)&&this.C.hide()};
g.h.ds=function(){var a=this.B,b=g.kL(this.player).getPlayerSize().width;a.wa=0;a.B=b;a.F=!1;g.TN(a)};
g.h.pO=function(a){this.player.app.H.o&&(0==a?this.hide():this.show())};
g.h.Ya=function(){return this.C};
g.h.ac=function(){return!1};
g.h.ae=function(){return!1};
g.h.Si=function(){return!1};
g.h.Kt=function(){};
g.h.rh=function(){};
g.h.ck=function(){};
g.h.Xk=function(){return null};
g.h.Zr=function(){return new g.mh(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.qj=function(a,b,c,d,e){var f=0,k=d=0,l=g.Jh(a);if(b){c=g.ln(b,"ytp-prev-button")||g.ln(b,"ytp-next-button");var m=g.ln(b,"ytp-play-button"),n=g.ln(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Gh(b,this.element),k=b.x,f=b.y-12):n&&(k=g.ln(b,"ytp-miniplayer-button-top-left"),f=g.Gh(b,this.element),b=g.Jh(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=g.kL(this.player).getPlayerSize().width;e=f+(e||0);l=g.nd(k,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.gs=function(){};
g.h.Nf=function(){};g.r(Q5,g.uP);Q5.prototype.create=function(){};
Q5.prototype.wf=function(){return!1};
Q5.prototype.load=function(){this.player.hideControls();this.o.show()};
Q5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.JP.miniplayer=Q5;})(_yt_player);
