(this["webpackJsonpcharger-emulator-interface"]=this["webpackJsonpcharger-emulator-interface"]||[]).push([[0],{42:function(e,t,s){},44:function(e,t,s){},48:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s(1),a=s.n(i),r=s(32),o=s.n(r),c=(s(42),s(8)),l=s.n(c),u=s(16),d=s(17),h=s(15),p=s(3),m=s(19),j=s(18),b=s(69),g=s(34),v=s(68),O=(s(44),function(e){Object(m.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(d.a)(this,s),(n=t.call(this,e)).theme=Object(b.a)(Object(g.a)({typography:{h1:{fontSize:200},h2:{fontSize:15}}})),n.portReader={},n.portWriter={},n.rawData="",n.role="",n.state={printOutCom:"",toggleToRefresh:!1,role:"PEV",checked:!1,percentage:0,started:!1,continuousTest:!1},n.queryInterval={},n.initializePEVStrings(),n.pevSendStartCommand=n.pevSendStartCommand.bind(Object(p.a)(n)),n.pevSendStopCommand=n.pevSendStopCommand.bind(Object(p.a)(n)),n.handleContToggleSwitch=n.handleContToggleSwitch.bind(Object(p.a)(n)),n.showDetailedProgress=n.showDetailedProgress.bind(Object(p.a)(n)),n.showLinkPanel=n.showLinkPanel.bind(Object(p.a)(n)),n.setContinuosState=n.setContinuosState.bind(Object(p.a)(n)),n.resetLinkMeasurementsList=n.resetLinkMeasurementsList.bind(Object(p.a)(n)),n.linkMeasurements=[],n.timeoutStartInterval={},n.timeoutStopInterval={},n}return Object(h.a)(s,[{key:"pevSendStartCommand",value:function(){console.log("Send Start Command");var e=new Uint8Array([32]);this.portWriter.write(e).then((function(e){})),this.setState({printOutCom:this.printOutCom,toggleToRefresh:this.toggleToRefresh,role:this.state.role,percentage:0,started:!0,continuousTest:this.state.continuousTest})}},{key:"handleContToggleSwitch",value:function(e){}},{key:"pevSendStopCommand",value:function(){var e=new Uint8Array([100]);this.portWriter.write(e).then((function(e){})),clearInterval(this.timeoutStartInterval),clearInterval(this.timeoutStopInterval),this.initializePEVStrings(),this.setState({printOutCom:this.printOutCom,toggleToRefresh:!0,role:this.role,percentage:0,started:!1,continuousTest:this.state.continuousTest})}},{key:"initializePEVStrings",value:function(){this.pevStrings=[{details:"CM_SLAC_PARAM.REQ sent",display:"CM_SLAC_PARAM.REQ sent",found:!1,warning:!1},{details:"CM_SLAC_PARAM.CNF received",display:"CM_SLAC_PARAM.CNF received",found:!1,warning:!1},{details:"CM_START_ATTEN_CHAR.IND sent",display:"CM_START_ATTEN_CHAR.IND sent",found:!1,warning:!1},{details:"CM_MNBC_SOUND.IND sent",display:"CM_MNBC_SOUND.IND sent",found:!1,warning:!1},{details:"CM_ATTEN_CHAR.IND received",display:"CM_ATTEN_CHAR.IND received",found:!1,warning:!1},{details:"CM_ATTEN_CHAR.RSP sent",display:"CM_ATTEN_CHAR.RSP sent",found:!1,warning:!1},{details:"CM_SLAC_MATCH.REQ sent",display:"CM_SLAC_MATCH.REQ sent",found:!1,warning:!1},{details:"CM_SLAC_MATCH.CNF received",display:"CM_SLAC_MATCH.CNF received",found:!1,warning:!1},{details:"Link Measurement:",display:"Link Measurement:",found:!1,warning:!1},{details:"Sending IPv6.",display:"Sending IPv6.",found:!1,warning:!1},{details:"IPv6 Message is received",display:"IPv6 Message is received",found:!1,warning:!1},{details:"TIMEOUT",display:"Timeout Occured",found:!1,warning:!0},{details:"TIMEOUT FOR CONNECT",display:"Timeout To Reconnect",found:!1,warning:!1}]}},{key:"setTimedoutStartCommand",value:function(e){var t=this,s=e;console.log("setTimedoutStartCommand | begin"),this.timeoutStartInterval=setInterval((function(){s-- >1?(t.pevStrings[12].display="Reconnecting in "+s+" sec(s).",t.pevStrings[12].found=!0,t.pevStrings[12].warning=!0,console.log("setTimedoutStartCommand | set text to ",t.pevStrings[12].display),t.setState({printOutCom:t.printOutCom,toggleToRefresh:!t.state.toggleToRefresh,role:t.state.role,percentage:t.state.percentage,started:!0,continuousTest:t.state.continuousTest})):(t.pevStrings[12].found=!1,console.log("setTimedoutStartCommand | SEND start"),t.pevSendStartCommand(),t.setState({printOutCom:t.printOutCom,toggleToRefresh:!t.state.toggleToRefresh,role:t.state.role,percentage:t.state.percentage,started:!0,continuousTest:t.state.continuousTest}),clearInterval(t.timeoutStartInterval))}),1e3)}},{key:"setTimedoutStopCommand",value:function(e){var t=this,s=e;this.timeoutStopInterval=setInterval((function(){s-- >0?(t.pevStrings[11].display="Disconnecting in "+s+" sec(s).",t.pevStrings[11].found=!0,console.log("setInterval | set text to ",t.pevStrings[11].display),t.setState({printOutCom:t.printOutCom,toggleToRefresh:!t.state.toggleToRefresh,role:t.state.role,percentage:t.state.percentage,started:!0,continuousTest:t.state.continuousTest})):(console.log("setInterval | SEND Stop"),t.pevSendStopCommand(),t.pevStrings[11].found=!1,t.setTimedoutStartCommand(20),clearInterval(t.timeoutStopInterval))}),1e3)}},{key:"componentDidMount",value:function(){this.OpenReadComPort()}},{key:"ProcessSplittedCommand",value:function(e){if(e.length>5)if(e.includes("ROLE:PEV"))this.role="PEV",clearInterval(this.queryInterval),this.setState({printOutCom:this.printOutCom,toggleToRefresh:this.toggleToRefresh,role:this.role,percentage:this.state.percentage,started:this.state.started,continuousTest:this.state.continuousTest});else if(e.includes("ROLE:EVSE"))this.role="EVSE",clearInterval(this.queryInterval),this.setState({printOutCom:this.printOutCom,toggleToRefresh:this.toggleToRefresh,role:this.role,percentage:this.state.percentage,started:this.state.started,continuousTest:this.state.continuousTest});else{for(var t=!1,s=0;s<this.pevStrings.length;s++)if(e.includes(this.pevStrings[s].details)&&!1===this.pevStrings[s].found){if(this.pevStrings[s].found=!0,t=!0,8===s){var n=e.split(":");n.length>1&&(this.pevStrings[8].display="Link Measurement: "+Number(n[1].trim())+"ms.",this.linkMeasurements.push(n[1].trim()))}else 10===s&&!0===this.state.continuousTest?this.setTimedoutStopCommand(15):11===s&&(console.warn("ProcessSplittedCommand  | this.linkMeasurements.push(Timeout) "),this.linkMeasurements.push("Timeout"),!0===this.state.continuousTest&&this.setTimedoutStopCommand(5));break}if(!0===t){console.warn("OKKKKKKKK");var i=this.state.percentage+1/(this.pevStrings.length-2)*100;i>=90&&(i=100),i=Math.round(i),this.setState({printOutCom:this.printOutCom,toggleToRefresh:!this.state.toggleToRefresh,role:this.role,percentage:i,started:!0,continuousTest:this.state.continuousTest})}}}},{key:"ProcessRawData",value:function(){var e=this,t=this.rawData.split("*");t.length>1&&(t.forEach((function(t){e.ProcessSplittedCommand(t)})),this.rawData=t[t.length-1])}},{key:"ReadValues",value:function(){var e=this;this.portReader.read().then((function(t){console.log("VALUE ",t.value),e.rawData+=new TextDecoder("utf-8").decode(t.value),console.log("rawData ",e.rawData),setTimeout(e.ProcessRawData(),0),e.ReadValues()}))}},{key:"OpenReadComPort",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,s,n=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("OpenReadComPort | begin"),console.log("Port..",this.props.port),t=this.props.port,e.prev=3,e.next=6,t.port.open({baudRate:115200});case 6:e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(3),t.port.close(),e.next=13,t.port.open({baudRate:115200});case 13:this.portReader=t.port.readable.getReader(),this.portWriter=t.port.writable.getWriter(),setTimeout((function(){n.ReadValues()}),0),s=new Uint8Array([114]),this.portWriter.write(s).then((function(e){})),console.log("ask role"),console.log("OpenReadComPort | end");case 20:case"end":return e.stop()}}),e,this,[[3,8]])})));return function(){return e.apply(this,arguments)}}()}]),Object(h.a)(s,[{key:"resetLinkMeasurementsList",value:function(){this.linkMeasurements=[],this.setState({printOutCom:this.printOutCom,toggleToRefresh:!this.state.toggleToRefresh,role:this.state.role,percentage:this.state.percentage,started:this.state.started,continuousTest:this.state.continuousTest})}},{key:"showDetailedProgress",value:function(){return null!=this.pevStrings&&this.pevStrings.length>0?this.pevStrings.map((function(e,t){return e.found?!1===e.warning?Object(n.jsxs)("p",{children:[e.display,t<15?".......................................OK":""]},"detailed_"+t):Object(n.jsx)("p",{style:{color:"#c20b0b",textShadow:"0 0 0.4em #c20b0b"},id:"warningTextFeature",children:e.display},"detailed_"+t):null})):null}},{key:"showLinkPanel",value:function(){return console.log("Show Link Panel",this.linkMeasurements.length),null!=this.linkMeasurements&&this.linkMeasurements.length>0?Object(n.jsx)("div",{id:"linkpanelid1",children:Object(n.jsx)("div",{className:"ui panel",children:Object(n.jsxs)("div",{className:"ui panel content",children:[this.linkMeasurements.map((function(e,t){return"Timeout"===e?Object(n.jsxs)("div",{children:[Object(n.jsx)("strong",{style:{color:"#c20b0b",textShadow:"0 0 0.4em #c20b0b"},children:e},"mykey"+t),Object(n.jsx)("br",{})]},"mydivkey"+t):Object(n.jsxs)("div",{children:[Object(n.jsx)("strong",{children:"Link Time"},"mykey"+t)," ",e," ms.",Object(n.jsx)("br",{})]},"mydivkey"+t)})),Object(n.jsxs)("div",{style:{textAlign:"right",justifyContent:"right",float:"right",height:"50px",width:"50px"},children:[" ",Object(n.jsx)("div",{className:"linkMeasurementsReset ",onClick:this.resetLinkMeasurementsList})," "]})]})})}):null}},{key:"setContinuosState",value:function(){this.setState({printOutCom:this.printOutCom,toggleToRefresh:this.state.toggleToRefresh,role:this.state.role,percentage:this.state.percentage,started:this.state.started,continuousTest:!this.state.continuousTest})}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"cs",children:"FoE-Charger"}),Object(n.jsxs)("div",{className:"circle cir",children:[Object(n.jsx)("p",{className:"c",children:"F"}),Object(n.jsx)("div",{className:"circle one"}),Object(n.jsx)("div",{className:"circle two",children:Object(n.jsx)("div",{className:"circle three"})})]}),Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("div",{className:"bar left"}),Object(n.jsx)("div",{className:"bar top"}),Object(n.jsx)("div",{className:"bar right"}),Object(n.jsx)("div",{className:"bar bottom"}),Object(n.jsx)("br",{}),Object(n.jsxs)(v.a,{container:!0,children:[Object(n.jsx)(v.a,{item:!0,xs:2}),Object(n.jsx)(v.a,{item:!0,xs:2,children:Object(n.jsx)("div",{className:"Action_button_1",onClick:this.pevSendStartCommand})}),Object(n.jsx)(v.a,{item:!0,xs:2,children:Object(n.jsx)("div",{className:"Action_button_2",onClick:this.pevSendStopCommand})}),Object(n.jsx)(v.a,{item:!0,xs:2,children:Object(n.jsxs)("div",{style:{marginTop:"20px"},children:[Object(n.jsx)("span",{className:"continuousText",children:"Continuous Test"}),this.state.continuousTest?Object(n.jsx)("div",{style:{marginLeft:"30px"},className:"continuousSelectionSelected",onClick:this.setContinuosState}):Object(n.jsx)("div",{style:{marginLeft:"30px"},className:"continuousSelectionUnselected",onClick:this.setContinuosState})]})}),Object(n.jsx)(v.a,{item:!0,xs:2}),Object(n.jsx)(v.a,{item:!0,xs:2,children:Object(n.jsxs)("div",{className:"parentWheel",children:[Object(n.jsx)("div",{className:"Outer_wheel"}),Object(n.jsx)("div",{className:"Wheel_Base"}),this.state.started?Object(n.jsx)("div",{className:"Ineer_wheel Ineer_wheel_Animation"}):Object(n.jsx)("div",{className:"Ineer_wheel"}),Object(n.jsxs)("div",{className:"Percentage_wheel",children:[Object(n.jsx)("span",{id:"percentage",children:this.state.percentage}),"%"]})]})})]}),Object(n.jsxs)(v.a,{container:!0,children:[Object(n.jsx)(v.a,{item:!0,xs:6,children:this.showDetailedProgress()}),Object(n.jsx)(v.a,{item:!0,xs:6,children:this.showLinkPanel()})]})]})]})}}]),s}(i.Component)),f=s(20),x=s(4),C=s(33);s(48);function S(){return Object(n.jsxs)("div",{className:"bodyWrapper",children:[Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"signBlock",children:[Object(n.jsx)("div",{className:"topCover"}),Object(n.jsx)("div",{className:"headerContent",children:Object(n.jsxs)("div",{className:"headerLinks",children:[Object(n.jsx)("h1",{children:"PONTIS EMC"}),Object(n.jsx)("div",{className:"signLinks",children:Object(n.jsx)("h3",{children:"Test Web Interface"})})]})}),Object(n.jsx)("div",{className:"boxEdges1",children:Object(n.jsxs)("div",{className:"boxEdges2",children:[Object(n.jsx)("div",{className:"slider"}),Object(n.jsx)("div",{className:"headerLine"})]})})]})}),Object(n.jsx)(C.a,{children:function(e){var t=e.toggle,s=e.setCollapsibleElement;return Object(n.jsxs)("div",{className:"my-collapsible",children:[Object(n.jsxs)("div",{id:"navButton",className:"open",onClick:t,children:["- Menu -",Object(n.jsx)("div",{className:"bar left"}),Object(n.jsx)("div",{className:"bar top"}),Object(n.jsx)("div",{className:"bar right"}),Object(n.jsx)("div",{className:"bar bottom"})]}),Object(n.jsx)("div",{className:"my-collapsible__content",ref:s,children:Object(n.jsx)("div",{className:"my-collapsible__content-inner",children:Object(n.jsxs)("div",{className:"navContent",children:[Object(n.jsx)(f.b,{to:"index",children:"Testing"})," |",Object(n.jsx)(f.b,{to:"about",children:"About"})," |",Object(n.jsx)(f.b,{to:"contact",children:"Contact"})]})})})]})}}),Object(n.jsx)("body-container",{}),Object(n.jsx)("footer",{})]})}var T=s(25),k=(s(50),0),y="Ex aliquip nisi velit eu quis Lorem ullamco labore irure veniam. Excepteur non velit nisi qui sint ad excepteur. Do sit proident occaecat ea ullamco nostrud exercitation incididunt qui cupidatat consectetur. Id veniam cillum dolore sunt duis minim cupidatat eu.Sunt consequat excepteur tempor do elit non cillum ex incididunt. Dolor qui incididunt qui cupidatat laborum officia duis pariatur occaecat cupidatat aliqua Lorem laborum. Commodo dolor ad eu anim nostrud veniam sunt velit. Do amet sit ea tempor sint adipisicing magna exercitation commodo laboris veniam commodo. Laboris nulla ipsum in incididunt non incididunt exercitation proident qui occaecat cupidatat ipsum aliqua aliqua. Pariatur eu Lorem nostrud exercitation nulla ea minim laborum amet cupidatat officia adipisicing. Fugiat dolore est qui voluptate incididunt aute fugiat non laborum.";function N(){var e=a.a.useState(""),t=Object(T.a)(e,2),s=t[0],r=t[1];return Object(i.useEffect)((function(){var e=setInterval((function(){++k<y.length&&r(y.substr(0,k))}),50);return function(){return clearInterval(e)}}),[]),Object(n.jsxs)("div",{children:[s,Object(n.jsx)("span",{className:"blinker",children:" "})]})}s(51);var w=0,R="Ipsum esse anim dolor in aliqua. Consectetur ad nostrud nisi ea dolor pariatur. Irure fugiat ipsum adipisicing incididunt eu sint nulla. Nisi fugiat magna eiusmod nostrud consequat fugiat velit labore duis occaecat Lorem aliquip. Duis aliqua id do cillum occaecat occaecat aliquip deserunt. Cillum incididunt magna excepteur est quis proident in aute amet est in mollit.";function M(){var e=a.a.useState(""),t=Object(T.a)(e,2),s=t[0],r=t[1];return Object(i.useEffect)((function(){var e=setInterval((function(){++w<R.length&&r(R.substr(0,w))}),50);return function(){return clearInterval(e)}}),[]),Object(n.jsxs)("div",{children:[s,Object(n.jsx)("span",{className:"blinker",children:" "})]})}s(52);var _=function(e){Object(m.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(d.a)(this,s),(n=t.call(this,e)).state={p1:{id:1,selected:!1,port:{},onClickHandler:n.selectCom1},p2:{id:2,selected:!1,port:{},onClickHandler:n.selectCom2},supported:!1},n.selectCom1=n.selectCom1.bind(Object(p.a)(n)),n.selectCom2=n.selectCom2.bind(Object(p.a)(n)),n}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("list of serial ports the website has been granted access to previously",navigator.serial.getPorts()),e.next=4,navigator.serial.getPorts();case 4:2===(t=e.sent).length?this.setState({p1:{id:t[0].id,selected:!0,port:t[0]},p2:{id:t[1].id,selected:!1,port:t[1]},supported:!0}):1===t.length?this.setState({p1:{id:t[0].id,selected:!0,port:t[0]},p2:this.state.p2,supported:!0}):this.setState({p1:this.state.p1,p2:this.state.p2,supported:!0}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),s=!1,s="Cannot read property 'getPorts' of undefined"!==e.t0.message,this.setState({p1:this.state.p1,p2:this.state.p2,supported:s});case 13:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"AskUserForComport",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,e.t0=t,e.next=1===e.t0?4:2===e.t0?12:18;break;case 4:if(this.state.p1.selected){e.next=11;break}return console.log("list of serial ports the website has been granted access to previously",navigator.serial.getPorts()),e.next=8,navigator.serial.requestPort();case 8:s=e.sent,console.log("AskUserForComport p1",s),this.setState({p1:{id:this.state.p1.id,selected:!0,port:s},p2:this.state.p2,supported:this.state.supported});case 11:return e.abrupt("break",20);case 12:if(this.state.p2.selected){e.next=17;break}return e.next=15,navigator.serial.requestPort();case 15:n=e.sent,this.setState({p1:this.state.p1,p2:{id:this.state.p2.id,selected:!0,port:n},supported:this.state.supported});case 17:return e.abrupt("break",20);case 18:return console.error("Default switch-case"),e.abrupt("break",20);case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(0),console.log("An error was caught: ",e.t1);case 25:case"end":return e.stop()}}),e,this,[[0,22]])})));return function(t){return e.apply(this,arguments)}}()},{key:"selectCom1",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.AskUserForComport(1);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"selectCom2",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.AskUserForComport(2);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"tryToCloseComPort",value:function(){try{if(!0===this.state.p1.selected)try{this.state.p1.port.close()}catch(e){}}catch(t){console.error(t)}}},{key:"prepareComPortSelectButtons",value:function(){return console.log("Create Message box"),this.state.supported?!1===this.state.p1.selected?Object(n.jsx)("div",{className:"parentMessageBox",children:Object(n.jsx)("div",{className:"messageBoxSelectButton",onClick:this.selectCom1},"c1")}):null:Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"warningMessageBox"})})}},{key:"render",value:function(){return console.log("render...."),Object(n.jsx)("div",{children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(S,{}),Object(n.jsxs)(x.c,{children:[Object(n.jsx)(x.a,{exact:!0,path:"/contact",children:Object(n.jsx)(N,{})}),Object(n.jsx)(x.a,{exact:!0,path:"/about",children:Object(n.jsx)(M,{})}),Object(n.jsxs)(x.a,{exact:!0,path:"/index",children:[this.prepareComPortSelectButtons(),Object(n.jsx)(v.a,{container:!0,justify:"center",children:Object(n.jsx)(v.a,{item:!0,xs:12,children:Object(n.jsx)("div",{children:!0===this.state.p1.selected?Object(n.jsx)(O,{port:this.state.p1}):null})})})]})]})]})})}}]),s}(i.Component),P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,70)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),i(e),a(e),r(e)}))};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(_,{})}),document.getElementById("root")),P()}},[[53,1,2]]]);
//# sourceMappingURL=main.5ce0a4bf.chunk.js.map