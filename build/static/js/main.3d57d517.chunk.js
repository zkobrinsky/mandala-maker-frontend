(this["webpackJsonpsketch-maker-frontend"]=this["webpackJsonpsketch-maker-frontend"]||[]).push([[0],{232:function(t,e,a){},233:function(t,e,a){},257:function(t,e){},259:function(t,e){},269:function(t,e){},271:function(t,e){},298:function(t,e){},299:function(t,e){},304:function(t,e){},306:function(t,e){},313:function(t,e){},332:function(t,e){},551:function(t,e,a){"use strict";a.r(e);var n=a(4),r=a(0),c=a.n(r),o=a(31),s=a.n(o),i=(a(232),a(7)),h=a(32),l=a(33),u=a(36),d=a(35),b=(a(233),a(82)),j=a.n(b),p=function(){var t=Math.floor(10*Math.random()+2),e=0,a=0,r=[360*Math.random()+1,Math.random(),Math.random()];return Object(n.jsx)(j.a,{setup:function(t,e){t.noCursor(),t.createCanvas(t.windowWidth,.915*t.windowHeight).parent(e),t.angleMode(t.DEGREES),t.colorMode(t.HSL,360,1,1,1),t.background(0),t.withinCanvas=function(){return t.mouseX>0&&t.mouseX<t.width&&t.mouseY>0&&t.mouseY<t.height}},draw:function(n){if(a<.2&&n.background(0,0,0,-1*a),n.background.apply(n,r.concat([a])),n.translate(.5*n.width,.5*n.height),n.withinCanvas()){var c=n.mouseX-n.width/2,o=n.mouseY-n.height/2,s=n.pmouseX-n.width/2,i=n.pmouseY-n.height/2,h=n.map(n.sin(e),-1,1,0,360),l=n.map(n.sin(e),-1,1,.6,1),u=n.map(n.sin(e),-1,1,.3,1);e+=1,n.stroke(h,l,u,1);for(var d=0;d<t;d++){var b=360/t;n.rotate(b);var j=n.dist(c,o,s,i),p=n.map(j,0,20,20,3);n.strokeWeight(p),n.line(c,o,s,i),n.push(),n.scale(1,-1),n.line(c,o,s,i),n.pop()}}a+=5e-5,n.frameCount,a>.02&&(a+=.02),a>1&&(a=0)},windowResized:function(t){t.resizeCanvas(t.windowWidth,.915*t.windowHeight),t.background(0),t.background.apply(t,r.concat([a]))}})},O=a(22),m=a(37),f=a(216);function C(t){var e=t.sketch;return Object(n.jsxs)("div",{id:e.id,className:"grid-item",children:[Object(n.jsx)(m.b,{to:"sketches/".concat(e.id),children:Object(n.jsx)(f.a,{children:Object(n.jsx)("img",{src:e.image_thumbnail,alt:e.title,className:"thumbnail"})})}),Object(n.jsx)("p",{children:e.title})]})}var k=a(558),v=a(217),S=a(554),g=a(555),x=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={value:""},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=this.props.sketches.sort((function(t,e){return e.id-t.id})).filter((function(e){return e.title.toLowerCase().includes(t.state.value.toLowerCase())}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsxs)(k.a,{className:"searchbar",children:[Object(n.jsx)(v.a,{type:"text",value:this.state.value,onChange:function(e){return t.setState({value:e.target.value})},placeholder:"Filter by title",className:"mr-sm-2"}),Object(n.jsx)("br",{})]}),Object(n.jsx)(S.a,{children:Object(n.jsx)(g.a,{children:e.map((function(t){return Object(n.jsx)(C,{sketch:t})}))})})]})}}]),a}(c.a.Component),w=Object(O.b)((function(t){return{sketches:t.sketches.all}}))(x),E=a(81),y=Object(O.b)((function(t){return{sketch:t.sketches.sketch}}))((function(t){var e=t.sketch.reflections,a=0,r=[t.sketch.currentColor.h,t.sketch.currentColor.s,t.sketch.currentColor.l],c=[t.sketch.bgColor.h,t.sketch.bgColor.s,t.sketch.bgColor.l];return Object(n.jsx)(j.a,{setup:function(t,e){t.createCanvas(.995*t.windowWidth,.8*t.windowHeight).parent(e),t.angleMode(t.DEGREES),t.colorMode(t.HSL,360,1,1,100),t.background.apply(t,c.concat([100])),t.withinCanvas=function(){return t.mouseX>0&&t.mouseX<t.width&&t.mouseY>0&&t.mouseY<t.height},t.clearCanvas=function(){t.background.apply(t,c.concat([100]))},t.drawRainbow=function(){return a+=1,[t.map(t.sin(a),-1,1,0,360),t.map(t.sin(a),-1,1,.6,1),t.map(t.sin(a),-1,1,.3,1),100]}},draw:function(a){if(a.translate(.5*a.width,.5*a.height),t.state.clearCanvas&&a.clearCanvas(),a.mouseIsPressed&&a.withinCanvas()){var n=a.mouseX-a.width/2,c=a.mouseY-a.height/2,o=a.pmouseX-a.width/2,s=a.pmouseY-a.height/2;t.state.rainbow?a.stroke(a.drawRainbow()):a.stroke.apply(a,r.concat([100]));for(var i=0;i<e;i++){var h=360/e;a.rotate(h);var l=a.dist(n,c,o,s);t.state.variableLineWidth?a.strokeWeight(a.map(l,0,20,20,3)):a.strokeWeight(t.sketch.lineWidth),a.line(n,c,o,s),a.push(),a.scale(1,-1),a.line(n,c,o,s),a.pop()}}},windowResized:function(t){t.resizeCanvas(.995*t.windowWidth,.8*t.windowHeight),t.background.apply(t,c.concat([100]))}})})),T=a(556),_=a(29),R=a.n(_),L=a(135),H=a(222),M=a.n(H),W=(a(549),function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(h.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={title:"",rainbow:!1,placeHolder:"",variableLineWidth:!1},t.placeHolder=function(){var t=[R.a.Hipster.words(1).join(" ")+" "+R.a.Space.planet().toLowerCase(),R.a.Hipster.words(1).join(" ")+" "+R.a.Space.star().toLowerCase(),R.a.Hipster.words(1).join(" ")+" "+R.a.Space.constellation().toLowerCase(),R.a.Hipster.words(1).join(" ")+" "+R.a.Space.starCluster().toLowerCase()];return t[parseInt(Math.random()*t.length)]},t.handleOnChange=function(e){var a=e.target.name;t.setState(Object(i.a)(Object(i.a)({},t.state),{},Object(E.a)({},a,e.target.value)))},t.handleReflectionChange=function(e){t.props.updateReflections(+e.target.value)},t.handleColorChange=function(e){var a=e.hsl;t.props.updateColor(a)},t.handleColorChangeComplete=function(e){t.props.addSketchColor(e)},t.postData=function(e){document.querySelector("#defaultCanvas0").toBlob((function(a){var n=new FormData;n.append("image",a),Object.keys(e).forEach((function(t){n.append(t,e[t])})),t.props.createSketch(n).then((function(){return t.props.history.push("/sketches")}))}))},t.handleSubmit=function(e){e.preventDefault(),""!==e.target.querySelector("#exampleForm\\.ControlInput1").value?t.setState(Object(i.a)(Object(i.a)({},t.state),{},{title:e.target.querySelector("#exampleForm\\.ControlInput1").value,reflections:parseInt(e.target.querySelector("#exampleForm\\.ControlSelect1").value)}),(function(){return t.postData(t.state)})):t.setState(Object(i.a)(Object(i.a)({},t.state),{},{title:e.target.querySelector("#exampleForm\\.ControlInput1").placeholder,reflections:parseInt(e.target.querySelector("#exampleForm\\.ControlSelect1").value)}),(function(){return t.postData(t.state)}))},t.handleRainbowButton=function(){t.setState(Object(i.a)(Object(i.a)({},t.state),{},{rainbow:!t.state.rainbow}))},t.handleClearCanvas=function(){t.setState(Object(i.a)(Object(i.a)({},t.state),{},{clearCanvas:!t.state.clearCanvas}))},t.handleVariableLW=function(){t.setState(Object(i.a)(Object(i.a)({},t.state),{},{variableLineWidth:!t.state.variableLineWidth}),(function(){return console.log(t.state.variableLineWidth)}))},t.renderOptions=function(t){var e=t;return Array.from({length:e},(function(t,e){return e+1})).map((function(t,e){return Object(n.jsx)("option",{value:t,children:t},e)}))},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.resetSketch(),this.setState(Object(i.a)(Object(i.a)({},this.state),{},{placeHolder:this.placeHolder()}))}},{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{className:"justify-content-center",children:[Object(n.jsx)(y,{state:this.state}),Object(n.jsx)(L.b,{color:this.props.sketch.currentColor,onChangeComplete:this.handleColorChangeComplete,onChange:this.handleColorChange}),Object(n.jsx)("br",{}),Object(n.jsx)(k.a.Label,{className:"lineWidth",children:"Line Width"}),Object(n.jsx)(M.a,{className:"linewidth",label:"Line Width",min:1,max:25,step:1,onChange:function(e){return t.props.updateLineWidth(e)},value:this.props.sketch.lineWidth}),Object(n.jsx)("br",{}),this.props.sketch.colors.length>0?Object(n.jsx)(L.a,{onChangeComplete:this.handleColorChange,width:.25*window.innerWidth,triangle:"hide",colors:this.props.sketch.colors.map((function(t){return t.hex}))}):null,Object(n.jsx)("br",{}),Object(n.jsx)("button",{onClick:this.handleRainbowButton,className:"rainbow-button",children:"Rainbow"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(T.a,{onClick:this.handleVariableLW,children:"Variable Width"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)(k.a,{className:"newform",onSubmit:this.handleSubmit,children:[Object(n.jsxs)(k.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(n.jsx)(k.a.Label,{children:"Reflection Number"}),Object(n.jsx)(k.a.Control,{as:"select",value:this.props.sketch.reflections,name:"reflections",onChange:this.handleReflectionChange,children:this.renderOptions(12)})]}),Object(n.jsxs)(k.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(n.jsx)(k.a.Label,{children:"Title: "}),Object(n.jsx)(k.a.Control,{type:"text",value:this.state.title,placeholder:this.state.placeHolder,name:"title",onChange:this.handleOnChange})]}),Object(n.jsx)(T.a,{href:"#",onFocus:this.handleClearCanvas,onClick:this.handleClearCanvas,children:"Clear Canvas"}),"",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(T.a,{as:"input",type:"submit",value:"Save Your Creation"}),""]})]})}}]),a}(c.a.Component)),D=Object(O.b)((function(t){return{sketch:t.sketches.sketch}}),{createSketch:function(t){return function(e){return fetch("https://mandala-maker.herokuapp.com/sketches",{method:"POST",body:t}).then((function(t){return t.json()})).then((function(t){return e({type:"CREATE_SKETCH_SUCCESS",payload:t})}))}},updateColor:function(t){return{type:"UPDATE_SKETCH_COLOR",payload:t}},updateReflections:function(t){return{type:"UPDATE_REFLECTIONS",payload:t}},refreshStartColor:function(){return{type:"REFRESH_START_COLOR"}},refreshStartBgColor:function(){return{type:"REFRESH_START_BG_COLOR"}},updateLineWidth:function(t){return{type:"UPDATE_LINE_WIDTH",payload:t}},addSketchColor:function(t){return{type:"ADD_SKETCH_COLOR",payload:t}},resetSketch:function(){return{type:"RESET_SKETCH"}}})(W),F=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).state={sketch:n.props.sketch},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;void 0===this.state.sketch&&this.props.getSketch(this.props.match.params.id).then((function(e){e&&t.setState({sketch:e})}))}},{key:"render",value:function(){return this.state.sketch?Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:this.state.sketch.title}),Object(n.jsx)("img",{src:this.state.sketch.image_full,alt:this.state.sketch.title,className:"photo-medium"})]}):Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Sketch not found"})})}}]),a}(c.a.Component),N=Object(O.b)((function(t,e){return{sketch:t.sketches.all.find((function(t){return t.id==e.match.params.id}))}}),{getSketch:function(t){return function(e){return fetch("https://mandala-maker.herokuapp.com/sketches/".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}))}}})(F),I=a(557),A=a(559),P=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(I.a,{className:"navbar-custom",bg:"primary",variant:"dark",children:Object(n.jsxs)(A.a,{className:"mr-auto",children:[Object(n.jsx)(A.a.Link,{as:m.b,to:"/sketches/new",children:"Create"}),Object(n.jsx)(A.a.Link,{as:m.b,to:"/sketches",children:"Gallery"}),Object(n.jsx)(A.a.Link,{as:m.b,to:"/",children:"Sandbox"})]})})})},U=a(12),K=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(h.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getSketches()}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(P,{}),Object(n.jsxs)(U.c,{children:[Object(n.jsx)(U.a,{exact:!0,path:"/",render:function(t){return Object(n.jsx)(p,Object(i.a)(Object(i.a)({},t),{},{angle:0,rotateRate:.5}))}}),Object(n.jsx)(U.a,{exact:!0,path:"/sketches",component:w}),Object(n.jsx)(U.a,{exact:!0,path:"/sketches/new",component:D}),Object(n.jsx)(U.a,{exact:!0,path:"/sketches/:id",render:function(t){return Object(n.jsx)(N,Object(i.a)({},t))}})]})]})})}}]),a}(c.a.Component),X=Object(O.b)(null,{getSketches:function(){return function(t){fetch("https://mandala-maker.herokuapp.com/sketches",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(e){return t({type:"FETCH_SKETCHES_SUCCESS",payload:e})}))}}})(K),G=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,560)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;a(t),n(t),r(t),c(t),o(t)}))},Y=(a(550),a(45)),B=a(226),q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{all:[],sketch:{title:"",colors:[],currentColor:{h:360*Math.random()+1,s:Math.random(),l:Math.random()},reflections:4,bgColor:{h:360*Math.random()+1,s:Math.random(),l:Math.random()},lineWidth:8}},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_SKETCHES_SUCCESS":return Object(i.a)(Object(i.a)({},t),{},{all:e.payload});case"CREATE_SKETCH_SUCCESS":return Object(i.a)(Object(i.a)({},t),{},{all:[].concat(Object(B.a)(t.all),[e.payload])});case"UPDATE_REFLECTIONS":return Object(i.a)(Object(i.a)({},t),{},{sketch:Object(i.a)(Object(i.a)({},t.sketch),{},{reflections:e.payload})});case"UPDATE_SKETCH_COLOR":return Object(i.a)(Object(i.a)({},t),{},{sketch:Object(i.a)(Object(i.a)({},t.sketch),{},{currentColor:e.payload})});case"REFRESH_START_COLOR":return Object(i.a)(Object(i.a)({},t),{},{sketch:Object(i.a)(Object(i.a)({},t.sketch),{},{currentColor:{h:360*Math.random()+1,s:Math.random(),l:Math.random()}})});case"REFRESH_START_BG_COLOR":return Object(i.a)(Object(i.a)({},t),{},{sketch:Object(i.a)(Object(i.a)({},t.sketch),{},{bgColor:{h:360*Math.random()+1,s:Math.random(),l:Math.random()}})});case"UPDATE_LINE_WIDTH":return Object(i.a)(Object(i.a)({},t),{},{sketch:Object(i.a)(Object(i.a)({},t.sketch),{},{lineWidth:e.payload})});case"ADD_SKETCH_COLOR":return Object(i.a)(Object(i.a)({},t),{},{sketch:Object(i.a)(Object(i.a)({},t.sketch),{},{colors:t.sketch.colors.concat(e.payload)})});case"RESET_SKETCH":return Object(i.a)(Object(i.a)({},t),{},{sketch:{title:"",colors:[],currentColor:{h:360*Math.random()+1,s:Math.random(),l:Math.random()},reflections:4,bgColor:{h:360*Math.random()+1,s:Math.random(),l:Math.random()},lineWidth:8}});default:return t}},z=a(225),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.d,J=Object(Y.c)({sketches:q}),Q=Object(Y.e)(J,V(Object(Y.a)(z.a)));s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(O.a,{store:Q,children:Object(n.jsx)(X,{})})}),document.getElementById("root")),G()}},[[551,1,2]]]);
//# sourceMappingURL=main.3d57d517.chunk.js.map