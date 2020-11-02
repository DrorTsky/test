(this["webpackJsonplottery-react"]=this["webpackJsonplottery-react"]||[]).push([[0],{197:function(e,t,n){e.exports=n(477)},202:function(e,t,n){},204:function(e,t,n){},216:function(e,t){},225:function(e,t){},243:function(e,t){},245:function(e,t){},262:function(e,t){},263:function(e,t){},265:function(e,t){},266:function(e,t){},342:function(e,t){},344:function(e,t){},353:function(e,t){},355:function(e,t){},380:function(e,t){},382:function(e,t){},388:function(e,t){},389:function(e,t){},391:function(e,t){},403:function(e,t){},406:function(e,t){},411:function(e,t){},422:function(e,t){},425:function(e,t){},477:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n.n(a),o=n(194),c=n.n(o),u=(n(202),n(18)),i=n.n(u),s=n(66),l=n(3),p=n(5),m=n(10),f=n(9),h=(n(204),n(195)),y=new(n.n(h).a)(window.web3.currentProvider);window.ethereum.autoRefreshOnNetworkChange=!1;var b=y,d=new b.eth.Contract([{constant:!0,inputs:[],name:"getBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"manager",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"pickWinner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getPlayers",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"enter",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"players",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"}],"0x4d7aE5c090D1e051948090e980Fbb481b3B3e7A1"),v=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={manager:"",players:[],balance:"",value:"",message:""},e.onSubmit=function(){var t=Object(s.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,b.eth.getAccounts();case 3:return a=t.sent,e.setState({message:"Waiting on transaction success..."}),t.next=7,d.methods.enter().send({from:a[0],value:b.utils.toWei(e.state.value,"ether")});case 7:e.setState({message:"you have been entered!"});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onClick=Object(s.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.eth.getAccounts();case 2:return n=t.sent,e.setState({message:"Waiting on transaction success..."}),t.next=6,d.methods.pickWinner().send({from:n[0]});case 6:e.setState({message:"A winner has been picked!"});case 7:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.methods.manager().call();case 2:return t=e.sent,e.next=5,d.methods.getPlayers().call();case 5:return n=e.sent,e.next=8,b.eth.getBalance(d.options.address);case 8:if(a=e.sent,"undefined"===typeof(r=window.ethereum)){e.next=13;break}return e.next=13,r.enable();case 13:this.setState({manager:t,players:n,balance:a});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Lottery Contract"),r.a.createElement("p",null,"This contract is managed by ",this.state.manager,". There are currently ",this.state.players.length," people entered, competing to win ",b.utils.fromWei(this.state.balance,"ether")," ether."),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h4",null,"Want to try your luck?"),r.a.createElement("div",null,r.a.createElement("label",null,"Amount of ether to enter"),r.a.createElement("input",{value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}})),r.a.createElement("button",null,"Enter")),r.a.createElement("hr",null),r.a.createElement("h4",null,"Ready to pick a winner?"),r.a.createElement("button",{onClick:this.onClick},"Pick a winner!"),r.a.createElement("hr",null),r.a.createElement("h1",null,this.state.message))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[197,1,2]]]);
//# sourceMappingURL=main.a3897d03.chunk.js.map