(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{60:function(e,t,n){e.exports=n(87)},65:function(e,t,n){},77:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(65),n(122)),l=n(124),s=n(125),d=n(126),u=Object(i.a)({root:{flexGrow:1,margin:"1%"}});var m=function(){return u(),o.a.createElement("div",null,o.a.createElement(l.a,{position:"static",color:"default"},o.a.createElement(s.a,null,o.a.createElement(d.a,{variant:"h6",color:"inherit"},"QrCode Generator"))))},f=n(26),p=n(27),h=n(30),w=n(28),E=n(31),_=n(44),g=n.n(_),v=n(130),b=n(131),j=n(127),O=(n(77),function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(h.a)(this,Object(w.a)(t).call(this))).onsubmit=function(){var t=e.state.code_text.split("\n");e.props.generate_code(t),e.setState({code_text:"",show_pdf:!0})},e.handleChange=function(t){e.setState({code_text:t.target.value})},e.handleClick=function(t){e.props.open_print_window()},e.state={code_text:"",show_pdf:!1},e}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{marginTop:"2%",marginBottom:"2%"}},o.a.createElement(j.a,{container:!0,direction:"row",alignItems:"center",justify:"center",style:{marginBottom:"2%"}},o.a.createElement(j.a,{item:!0,xs:12},o.a.createElement(v.a,{label:"Enter Value To Generate Codes",fullWidth:!0,multiline:!0,rows:"15",margin:"normal",variant:"filled",className:"code_area",onChange:function(t){return e.handleChange(t)},value:this.state.code_text,InputLabelProps:{shrink:!0}}))),o.a.createElement(j.a,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-end"},o.a.createElement(j.a,{item:!0,xs:3},o.a.createElement(b.a,{variant:"contained",color:"default",onClick:this.onsubmit,style:{backgroundColor:"#f4f4f4"}},"Generate")),this.state.show_pdf?o.a.createElement(j.a,{item:!0,xs:1},o.a.createElement(b.a,{variant:"contained",color:"default",onClick:this.handleClick,style:{backgroundColor:"#f4f4f4",textAlign:"right",alignItems:"left"}},"Print")):""))}}]),t}(o.a.Component)),k=n(129),x=n(88),y=(n(85),function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.codes.map(function(e){return o.a.createElement(j.a,{item:!0,xs:2},o.a.createElement("p",null,o.a.createElement(g.a,{value:e,size:60})),o.a.createElement("p",{class:"qr_code"},e))});return o.a.createElement(x.a,{style:{paddingLeft:"4%"},id:"code_container"},o.a.createElement(j.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},e))}}]),t}(o.a.Component)),C=n(58),I=n.n(C),B=function(e){return o.a.createElement(I.a,null,o.a.createElement("div",null,o.a.createElement(y,{codes:e.codes})))},G=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(h.a)(this,Object(w.a)(t).call(this,e))).generate_code=function(e){n.setState({codes:e,open_window:!1})},n.open_print_window=function(){n.setState({open_window:!0}),console.log(n.state.open_window)},n.state={},n.state={codes:[],open_window:!1},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(k.a,{fixed:!0},o.a.createElement("div",null,o.a.createElement(O,{generate_code:this.generate_code,open_print_window:this.open_print_window})),o.a.createElement(y,{codes:this.state.codes}),this.state.open_window?o.a.createElement(B,{codes:this.state.codes}):"")}}]),t}(a.Component);n(86);var S=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null),o.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[60,1,2]]]);
//# sourceMappingURL=main.16a9aea2.chunk.js.map