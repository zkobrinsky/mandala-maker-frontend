(this["webpackJsonpsketch-maker-frontend"]=this["webpackJsonpsketch-maker-frontend"]||[]).push([[0],{233:function(e,t,n){},234:function(e,t,n){},258:function(e,t){},260:function(e,t){},270:function(e,t){},272:function(e,t){},299:function(e,t){},300:function(e,t){},305:function(e,t){},307:function(e,t){},314:function(e,t){},333:function(e,t){},552:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(0),c=n.n(r),o=n(31),s=n.n(o),i=(n(233),n(7)),l=n(32),h=n(33),u=n(36),d=n(35),b=(n(234),n(82)),j=n.n(b),p=function(){document.body.style.overflow="hidden";var e=Math.floor(8*Math.random()+4),t=0,n=0,r=[360*Math.random()+1,Math.random(),Math.random()];return Object(a.jsx)(j.a,{setup:function(e,t){e.noCursor(),e.createCanvas(e.windowWidth,e.windowHeight).parent(t),e.angleMode(e.DEGREES),e.colorMode(e.HSL,360,1,1,1),e.background(0),e.withinCanvas=function(){return e.mouseX>0&&e.mouseX<e.width&&e.mouseY>0&&e.mouseY<e.height}},draw:function(a){if(n<.2&&a.background(0,0,0,-1*n),a.background.apply(a,r.concat([n])),a.translate(.5*a.width,.5*a.height),a.withinCanvas()){var c=a.mouseX-a.width/2,o=a.mouseY-a.height/2,s=a.pmouseX-a.width/2,i=a.pmouseY-a.height/2,l=a.map(a.sin(t),-1,1,0,360),h=a.map(a.sin(t),-1,1,.6,1),u=a.map(a.sin(t),-1,1,.3,1);t+=1,a.stroke(l,h,u,1);for(var d=0;d<e;d++){var b=360/e;a.rotate(b);var j=a.dist(c,o,s,i),p=a.map(j,0,20,20,3);a.strokeWeight(p),a.line(c,o,s,i),a.push(),a.scale(1,-1),a.line(c,o,s,i),a.pop()}}n+=5e-5,a.frameCount,n>.02&&(n+=.02),n>1&&(n=0)},windowResized:function(e){e.resizeCanvas(e.windowWidth,e.windowHeight),e.background(0),e.background.apply(e,r.concat([n]))}})},O=n(22),m=n(37),f=n(216);function C(e){var t=e.sketch;return Object(a.jsxs)("div",{id:t.id,className:"grid-item",children:[Object(a.jsx)(m.b,{to:"sketches/".concat(t.id),children:Object(a.jsx)(f.a,{children:Object(a.jsx)("img",{src:t.image_thumbnail,alt:t.title,className:"thumbnail"})})}),Object(a.jsx)("p",{children:t.title})]})}var k=n(559),v=n(218),g=n(555),S=n(556),x=n(217),w=n.n(x),y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this;document.body.style.overflow="visible";var t=this.props.sketches.sort((function(e,t){return t.id-e.id})).filter((function(t){return t.title.toLowerCase().includes(e.state.value.toLowerCase())}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("br",{}),0===this.props.sketches.length?Object(a.jsxs)("div",{children:[Object(a.jsx)("br",{}),Object(a.jsx)(w.a,{className:"loading",type:"spinningBubbles",color:"#0275d8",height:"10%",width:"10%"})]}):Object(a.jsxs)("div",{children:[Object(a.jsxs)(k.a,{className:"searchbar",onSubmit:function(e){return e.preventDefault()},children:[Object(a.jsx)(v.a,{type:"text",value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})},placeholder:"Filter by title",className:"mr-sm-2"}),Object(a.jsx)("br",{})]}),Object(a.jsx)(g.a,{children:Object(a.jsx)(S.a,{children:t.map((function(e){return Object(a.jsx)(C,{sketch:e})}))})})]})]})}}]),n}(c.a.Component),E=Object(O.b)((function(e){return{sketches:e.sketches.all}}))(y),T=n(81),_=Object(O.b)((function(e){return{sketch:e.sketches.sketch}}))((function(e){var t=e.sketch.reflections,n=0,r=[e.sketch.currentColor.h,e.sketch.currentColor.s,e.sketch.currentColor.l],c=[e.sketch.bgColor.h,e.sketch.bgColor.s,e.sketch.bgColor.l];return Object(a.jsx)(j.a,{setup:function(e,t){e.createCanvas(.995*e.windowWidth,.8*e.windowHeight).parent(t),e.angleMode(e.DEGREES),e.colorMode(e.HSL,360,1,1,100),e.background.apply(e,c.concat([100])),e.withinCanvas=function(){return e.mouseX>0&&e.mouseX<e.width&&e.mouseY>0&&e.mouseY<e.height},e.clearCanvas=function(){e.background.apply(e,c.concat([100]))},e.drawRainbow=function(){return n+=1,[e.map(e.sin(n),-1,1,0,360),e.map(e.sin(n),-1,1,.6,1),e.map(e.sin(n),-1,1,.3,1),100]}},draw:function(n){if(n.translate(.5*n.width,.5*n.height),e.state.clearCanvas&&n.clearCanvas(),n.mouseIsPressed&&n.withinCanvas()){var a=n.mouseX-n.width/2,c=n.mouseY-n.height/2,o=n.pmouseX-n.width/2,s=n.pmouseY-n.height/2;e.state.rainbow?n.stroke(n.drawRainbow()):n.stroke.apply(n,r.concat([100]));for(var i=0;i<t;i++){var l=360/t;n.rotate(l);var h=n.dist(a,c,o,s);e.state.variableLineWidth?n.strokeWeight(n.map(h,0,20,20,3)):n.strokeWeight(e.sketch.lineWidth),n.line(a,c,o,s),n.push(),n.scale(1,-1),n.line(a,c,o,s),n.pop()}}},windowResized:function(e){e.resizeCanvas(.995*e.windowWidth,.8*e.windowHeight),e.background.apply(e,c.concat([100]))}})})),R=n(557),L=n(29),M=n.n(L),H=n(135),W=n(223),D=n.n(W),N=(n(550),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={title:"",rainbow:!1,placeHolder:"",variableLineWidth:!1},e.placeHolder=function(){var e=[M.a.Hipster.words(1).join(" ")+" "+M.a.Space.planet().toLowerCase(),M.a.Hipster.words(1).join(" ")+" "+M.a.Space.star().toLowerCase(),M.a.Hipster.words(1).join(" ")+" "+M.a.Space.constellation().toLowerCase(),M.a.Hipster.words(1).join(" ")+" "+M.a.Space.starCluster().toLowerCase()];return e[parseInt(Math.random()*e.length)]},e.handleOnChange=function(t){var n=t.target.name;e.setState(Object(i.a)(Object(i.a)({},e.state),{},Object(T.a)({},n,t.target.value)))},e.handleReflectionChange=function(t){e.props.updateReflections(+t.target.value)},e.handleColorChange=function(t){var n=t.hsl;e.props.updateColor(n)},e.handleColorChangeComplete=function(t){e.props.addSketchColor(t)},e.postData=function(t){document.querySelector("#defaultCanvas0").toBlob((function(n){var a=new FormData;a.append("image",n),Object.keys(t).forEach((function(e){a.append(e,t[e])})),e.props.createSketch(a).then((function(){return e.props.history.push("/sketches")}))}))},e.handleSubmit=function(t){t.preventDefault(),""!==t.target.querySelector("#exampleForm\\.ControlInput1").value?e.setState(Object(i.a)(Object(i.a)({},e.state),{},{title:t.target.querySelector("#exampleForm\\.ControlInput1").value,reflections:parseInt(t.target.querySelector("#exampleForm\\.ControlSelect1").value)}),(function(){return e.postData(e.state)})):e.setState(Object(i.a)(Object(i.a)({},e.state),{},{title:t.target.querySelector("#exampleForm\\.ControlInput1").placeholder,reflections:parseInt(t.target.querySelector("#exampleForm\\.ControlSelect1").value)}),(function(){return e.postData(e.state)}))},e.handleRainbowButton=function(){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{rainbow:!e.state.rainbow}))},e.handleClearCanvas=function(){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{clearCanvas:!e.state.clearCanvas}))},e.handleVariableLW=function(){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{variableLineWidth:!e.state.variableLineWidth}),(function(){return console.log(e.state.variableLineWidth)}))},e.renderOptions=function(e){var t=e;return Array.from({length:t},(function(e,t){return t+1})).map((function(e,t){return Object(a.jsx)("option",{value:e,children:e},t)}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.resetSketch(),this.setState(Object(i.a)(Object(i.a)({},this.state),{},{placeHolder:this.placeHolder()}))}},{key:"render",value:function(){var e=this;return document.body.style.overflow="visible",Object(a.jsxs)("div",{className:"justify-content-center",children:[Object(a.jsx)(_,{state:this.state}),Object(a.jsx)(H.b,{color:this.props.sketch.currentColor,onChangeComplete:this.handleColorChangeComplete,onChange:this.handleColorChange}),Object(a.jsx)("br",{}),Object(a.jsx)(k.a.Label,{className:"lineWidth",children:"Line Width"}),Object(a.jsx)(D.a,{className:"linewidth",label:"Line Width",min:1,max:25,step:1,onChange:function(t){return e.props.updateLineWidth(t)},value:this.props.sketch.lineWidth}),Object(a.jsx)("br",{}),this.props.sketch.colors.length>0?Object(a.jsx)(H.a,{onChangeComplete:this.handleColorChange,width:.25*window.innerWidth,triangle:"hide",colors:this.props.sketch.colors.map((function(e){return e.hex}))}):null,Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:this.handleRainbowButton,className:"rainbow-button",children:"Rainbow"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(R.a,{onClick:this.handleVariableLW,children:"Variable Width"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)(k.a,{className:"newform",onSubmit:this.handleSubmit,children:[Object(a.jsxs)(k.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(a.jsx)(k.a.Label,{children:"Reflection Number"}),Object(a.jsx)(k.a.Control,{as:"select",value:this.props.sketch.reflections,name:"reflections",onChange:this.handleReflectionChange,children:this.renderOptions(12)})]}),Object(a.jsxs)(k.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(a.jsx)(k.a.Label,{children:"Title: "}),Object(a.jsx)(k.a.Control,{type:"text",value:this.state.title,placeholder:this.state.placeHolder,name:"title",onChange:this.handleOnChange})]}),Object(a.jsx)(R.a,{href:"#",onFocus:this.handleClearCanvas,onClick:this.handleClearCanvas,children:"Clear Canvas"}),"",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(R.a,{as:"input",type:"submit",value:"Save Your Creation"}),""]})]})}}]),n}(c.a.Component)),F=Object(O.b)((function(e){return{sketch:e.sketches.sketch}}),{createSketch:function(e){return function(t){return fetch("https://mandala-maker.herokuapp.com/sketches",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){return t({type:"CREATE_SKETCH_SUCCESS",payload:e})}))}},updateColor:function(e){return{type:"UPDATE_SKETCH_COLOR",payload:e}},updateReflections:function(e){return{type:"UPDATE_REFLECTIONS",payload:e}},refreshStartColor:function(){return{type:"REFRESH_START_COLOR"}},refreshStartBgColor:function(){return{type:"REFRESH_START_BG_COLOR"}},updateLineWidth:function(e){return{type:"UPDATE_LINE_WIDTH",payload:e}},addSketchColor:function(e){return{type:"ADD_SKETCH_COLOR",payload:e}},resetSketch:function(){return{type:"RESET_SKETCH"}}})(N),I=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={sketch:a.props.sketch},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;void 0===this.state.sketch&&this.props.getSketch(this.props.match.params.id).then((function(t){t&&e.setState({sketch:t})}))}},{key:"render",value:function(){return this.state.sketch?Object(a.jsxs)("div",{className:"image-large",children:[Object(a.jsx)("h1",{children:this.state.sketch.title}),Object(a.jsx)("img",{src:this.state.sketch.image_full,alt:this.state.sketch.title,className:"photo-medium"})]}):Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Sketch not found"})})}}]),n}(c.a.Component),A=Object(O.b)((function(e,t){return{sketch:e.sketches.all.find((function(e){return e.id==t.match.params.id}))}}),{getSketch:function(e){return function(t){return fetch("https://mandala-maker.herokuapp.com/sketches/".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}}})(I),P=n(558),U=n(560),K=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(P.a,{className:"navbar-custom",bg:"primary",variant:"dark",children:Object(a.jsxs)(U.a,{className:"mr-auto",children:[Object(a.jsx)(U.a.Link,{as:m.b,to:"/sketches/new",children:"Create"}),Object(a.jsx)(U.a.Link,{as:m.b,to:"/sketches",children:"Gallery"}),Object(a.jsx)(U.a.Link,{as:m.b,to:"/",children:"Sandbox"})]})})})},X=n(12),B=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.getSketches()}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(m.a,{children:[Object(a.jsx)(K,{}),Object(a.jsxs)(X.c,{children:[Object(a.jsx)(X.a,{path:"/sketches/new",children:function(e){return Object(a.jsx)(F,Object(i.a)({},e))}}),Object(a.jsx)(X.a,{path:"/sketches/:id",children:function(e){return Object(a.jsx)(A,Object(i.a)({},e))}}),Object(a.jsx)(X.a,{path:"/sketches",children:Object(a.jsx)(E,{})}),Object(a.jsx)(X.a,{path:"/",children:function(e){return Object(a.jsx)(p,Object(i.a)(Object(i.a)({},e),{},{angle:0,rotateRate:.5,className:"sandbox"}))}})]})]})})}}]),n}(c.a.Component),G=Object(O.b)(null,{getSketches:function(){return function(e){fetch("https://mandala-maker.herokuapp.com/sketches",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_SKETCHES_SUCCESS",payload:t})}))}}})(B),Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,561)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},q=(n(551),n(45)),z=n(227),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{all:[],sketch:{title:"",colors:[],currentColor:{h:360*Math.random()+1,s:Math.random(),l:Math.random()},reflections:parseInt(8*Math.random()+4),bgColor:{h:360*Math.random()+1,s:Math.random(),l:Math.random()},lineWidth:8}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SKETCHES_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{all:t.payload});case"CREATE_SKETCH_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{all:[].concat(Object(z.a)(e.all),[t.payload])});case"UPDATE_REFLECTIONS":return Object(i.a)(Object(i.a)({},e),{},{sketch:Object(i.a)(Object(i.a)({},e.sketch),{},{reflections:t.payload})});case"UPDATE_SKETCH_COLOR":return Object(i.a)(Object(i.a)({},e),{},{sketch:Object(i.a)(Object(i.a)({},e.sketch),{},{currentColor:t.payload})});case"REFRESH_START_COLOR":return Object(i.a)(Object(i.a)({},e),{},{sketch:Object(i.a)(Object(i.a)({},e.sketch),{},{currentColor:{h:360*Math.random()+1,s:Math.random(),l:Math.random()}})});case"REFRESH_START_BG_COLOR":return Object(i.a)(Object(i.a)({},e),{},{sketch:Object(i.a)(Object(i.a)({},e.sketch),{},{bgColor:{h:360*Math.random()+1,s:Math.random(),l:Math.random()}})});case"UPDATE_LINE_WIDTH":return Object(i.a)(Object(i.a)({},e),{},{sketch:Object(i.a)(Object(i.a)({},e.sketch),{},{lineWidth:t.payload})});case"ADD_SKETCH_COLOR":return Object(i.a)(Object(i.a)({},e),{},{sketch:Object(i.a)(Object(i.a)({},e.sketch),{},{colors:e.sketch.colors.concat(t.payload)})});case"RESET_SKETCH":return Object(i.a)(Object(i.a)({},e),{},{sketch:{title:"",colors:[],currentColor:{h:360*Math.random()+1,s:Math.random(),l:Math.random()},reflections:parseInt(8*Math.random()+4),bgColor:{h:360*Math.random()+1,s:Math.random(),l:Math.random()},lineWidth:8}});default:return e}},J=n(226),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.d,Z=Object(q.c)({sketches:V}),$=Object(q.e)(Z,Q(Object(q.a)(J.a)));s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(O.a,{store:$,children:Object(a.jsx)(G,{})})}),document.getElementById("root")),Y()}},[[552,1,2]]]);
//# sourceMappingURL=main.55f8eb56.chunk.js.map