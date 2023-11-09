System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/EnemyController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,i,o,a,l,s,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,l=e.Node,s=e.Prefab,c=e.instantiate,u=e.Component}],execute:function(){var y,p,f,m,d,h,b;o._RF.push({},"f94d0wtFGNLYKMoHki5R4LR","EnemyController",void 0);var g=a.ccclass,v=a.property;e("EnemyController",(y=g("EnemyController"),p=v(l),f=v(s),y((h=t((d=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,r(t,"gameField",h,i(t)),r(t,"enemyPrefab",b,i(t)),t.enemyList={},t}n(t,e);var o=t.prototype;return o.updateEnemiesInfo=function(e){for(var t=e,n=0,r=Object.entries(this.enemyList);n<r.length;n++){var i=r[n],o=i[0],a=i[1];Object.keys(e).includes(o)?(a.setPosition(e[o]),delete t[o]):(a.destroy(),delete this.enemyList[o])}for(var l=0,s=Object.entries(t);l<s.length;l++){var u=s[l],y=u[0],p=u[1];this.enemyList[y]=c(this.enemyPrefab),this.enemyList[y].parent=this.gameField,this.enemyList[y].setPosition(p)}},o.update=function(e){},t}(u)).prototype,"gameField",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=t(d.prototype,"enemyPrefab",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=d))||m));o._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PlayerController.ts","./EnemyController.ts"],(function(n){var e,o,t,r,i,l,s,a,c;return{setters:[function(n){e=n.applyDecoratedDescriptor,o=n.inheritsLoose,t=n.initializerDefineProperty,r=n.assertThisInitialized},function(n){i=n.cclegacy,l=n._decorator,s=n.Component},function(n){a=n.PlayerController},function(n){c=n.EnemyController}],execute:function(){var u,f,p,y,h,C,d,w;i._RF.push({},"42f8fDiur5J6rkUWl4td45m","GameController",void 0);var m=l.ccclass,g=l.property;n("GameController",(u=m("GameController"),f=g(a),p=g(c),u((C=e((h=function(n){function e(){for(var e,o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return e=n.call.apply(n,[this].concat(i))||this,t(e,"wsUrl",C,r(e)),t(e,"playerController",d,r(e)),t(e,"enemyController",w,r(e)),e.wsConnection=null,e.id=null,e}o(e,n);var i=e.prototype;return i.wsSend=function(n){var e=this;this.wsConnection.readyState?this.wsConnection.send(n):setTimeout((function(){e.wsSend(n)}),100)},i.initWs=function(){var n=this;this.wsConnection=new WebSocket(this.wsUrl),this.wsConnection.onopen=function(){console.log("Соединение установлено.")},this.wsConnection.onclose=function(n){n.wasClean?console.log("Соединение закрыто чисто"):console.log("Обрыв соединения"),console.log("Код: "+n.code+" причина: "+n.reason)},this.wsConnection.onmessage=function(e){try{var o=JSON.parse(e.data);switch(o.event){case"PLAYER_ID":n.id=o.id;break;case"PLAYERS_UPDATE":delete o.players[n.id],n.enemyController.updateEnemiesInfo(o.players);break;default:console.log("Unknown event")}}catch(n){console.log("Wrong message format",n)}},this.wsConnection.onerror=function(n){console.log("Ws error")}},i.start=function(){this.initWs()},i.sendPlayerInfo=function(){var n={event:"PLAYER_INFO_UPDATE",position:this.playerController.GetPosition()};this.wsSend(JSON.stringify(n))},i.update=function(n){this.sendPlayerInfo()},e}(s)).prototype,"wsUrl",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"ws://localhost:8999"}}),d=e(h.prototype,"playerController",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=e(h.prototype,"enemyController",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=h))||y));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./EnemyController.ts","./GameController.ts","./PlayerController.ts"],(function(){return{setters:[null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PlayerController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,n,r,o,s,c,u,h,a,p,l,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,c=e.Camera,u=e.Vec2,h=e.RigidBody2D,a=e.input,p=e.Input,l=e.KeyCode,d=e.Component}],execute:function(){var y,T,f,b,R,S,v,_,w,E,g;o._RF.push({},"c645akidl5AB4dNJ8caZjE9","PlayerController",void 0);var x=s.ccclass,O=s.property;e("PlayerController",(y=x("PlayerController"),T=O(c),f=O(u),b=O(u),R=O(h),y((_=t((v=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o))||this,n(t,"camera",_,r(t)),n(t,"speed",w,r(t)),n(t,"threshold",E,r(t)),n(t,"rig",g,r(t)),t.currentSpeed=new u(0,0),t.isTouched=!1,t.touchPos=new u(0,0),t}i(t,e);var o=t.prototype;return o.initTouches=function(){a.on(p.EventType.KEY_DOWN,this.onKeyDown,this),a.on(p.EventType.KEY_UP,this.onKeyUp,this),a.on(p.EventType.TOUCH_START,this.onTouchStart,this),a.on(p.EventType.TOUCH_MOVE,this.onTouchMove,this),a.on(p.EventType.TOUCH_END,this.onToucEnd,this),a.on(p.EventType.TOUCH_CANCEL,this.onToucEnd,this)},o.GetPosition=function(){return this.node.getPosition()},o.onLoad=function(){this.initTouches()},o.onTouchStart=function(e){this.isTouched=!0,this.touchPos=e.getLocation()},o.onTouchMove=function(e){this.touchPos=e.getLocation()},o.onToucEnd=function(e){this.currentSpeed=new u(0,0),this.isTouched=!1},o.updateVelocity=function(){if(null!=this.rig){if(this.isTouched){var e=this.camera.worldToScreen(this.node.worldPosition),t=new u(this.touchPos);t.subtract2f(e.x,e.y);var i=Math.max(Math.abs(t.x),Math.abs(t.y));t.divide2f(i,i),this.currentSpeed.x=i>this.threshold.x?this.speed.x*t.x:0,this.currentSpeed.y=i>this.threshold.y?this.speed.y*t.y:0}this.rig.linearVelocity=this.currentSpeed}},o.onKeyDown=function(e){switch(e.keyCode){case l.ARROW_UP:this.currentSpeed.y=this.speed.y;break;case l.ARROW_RIGHT:this.currentSpeed.x=this.speed.x;break;case l.ARROW_LEFT:this.currentSpeed.x=-this.speed.x;break;case l.ARROW_DOWN:this.currentSpeed.y=-this.speed.y}},o.onKeyUp=function(e){switch(e.keyCode){case l.ARROW_UP:this.currentSpeed.y>0&&(this.currentSpeed.y=0);break;case l.ARROW_DOWN:this.currentSpeed.y<0&&(this.currentSpeed.y=0);break;case l.ARROW_RIGHT:this.currentSpeed.x>0&&(this.currentSpeed.x=0);break;case l.ARROW_LEFT:this.currentSpeed.x<0&&(this.currentSpeed.x=0)}},o.update=function(e){this.updateVelocity()},t}(d)).prototype,"camera",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(v.prototype,"speed",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new u(1,1)}}),E=t(v.prototype,"threshold",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new u(10,10)}}),g=t(v.prototype,"rig",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=v))||S));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});