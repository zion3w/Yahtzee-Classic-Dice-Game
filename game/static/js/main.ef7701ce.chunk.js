(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/dice.6ab220e5.wav"},function(e,t,n){e.exports=n(32)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(6),a=n.n(o),r=n(16),i=n.n(r),c=(n(23),n(1)),l=n(2),s=n(4),u=n(0),d=n(3),h=n(12),f=n(9),m=n(13),p=n(8),v=n(10),y=n(7),b=n(14),w=(n(24),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){this.props.handleClick(this.props.idx)}},{key:"render",value:function(){var e=this.props,t=e.numberWords,n=e.locked,o=e.val,r=e.disabled,i=e.rolling,c="Die fas fa-dice-".concat(t[o-1]," fa-5x ");return n&&(c+="Die-locked"),i&&(c+="Die-rolling"),document.querySelector("body").className=i?"rolling":"",a.a.createElement("i",{className:c,onClick:this.handleClick,disabled:r})}}]),t}(o.Component));w.defaultProps={numberWords:["one","two","three","four","five","six"],val:5};var g=w,S=(n(25),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"Dice"},this.props.dice.map(function(t,n){return a.a.createElement(g,{handleClick:e.props.handleClick,val:t,locked:e.props.locked[n],idx:n,key:n,disabled:e.props.disabled,rolling:e.props.rolling&&!e.props.locked[n]})}))}}]),t}(o.Component)),O=(n(26),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.score,n=e.name,o=e.doScore,r=e.description,i=void 0!==t;return a.a.createElement("tr",{className:"RuleRow RuleRow-".concat(i?"disabled":"active"),onClick:i?null:o},a.a.createElement("td",{className:"RuleRow-name"},n),a.a.createElement("td",{className:"RuleRow-score"},a.a.createElement("span",null,i?t:r)))}}]),t}(o.Component));n(27);function j(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,r=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw r}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var E=function(){function e(t){Object(c.a)(this,e),Object.assign(this,t)}return Object(l.a)(e,[{key:"sum",value:function(e){return e.reduce(function(e,t){return e+t})}},{key:"freq",value:function(e){var t,n=new Map,o=j(e);try{for(o.s();!(t=o.n()).done;){var a=t.value;n.set(a,(n.get(a)||0)+1)}}catch(r){o.e(r)}finally{o.f()}return Array.from(n.values())}},{key:"count",value:function(e,t){return e.filter(function(e){return e===t}).length}}]),e}(),x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).evalRoll=function(e){return n.val*n.count(e,n.val)},n}return Object(d.a)(t,e),t}(E),R=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).evalRoll=function(e){return n.freq(e).some(function(e){return e>=n.count})?n.sum(e):0},n}return Object(d.a)(t,e),t}(E),z=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).evalRoll=function(e){var t=n.freq(e);return t.includes(2)&&t.includes(3)?n.score:0},n}return Object(d.a)(t,e),t}(E),M=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).evalRoll=function(e){var t=new Set(e);return t.has(2)&&t.has(3)&&t.has(4)&&(t.has(1)||t.has(5))?n.score:t.has(3)&&t.has(4)&&t.has(5)&&(t.has(2)||t.has(6))?n.score:0},n}return Object(d.a)(t,e),t}(E),L=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).evalRoll=function(e){var t=new Set(e);return 5!==t.size||t.has(1)&&t.has(6)?0:n.score},n}return Object(d.a)(t,e),t}(E),N=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).evalRoll=function(e){return 5===n.freq(e)[0]?n.score:0},n}return Object(d.a)(t,e),t}(E),T=new x({val:1,description:"1 point per 1"}),A=new x({val:2,description:"2 points per 2"}),C=new x({val:3,description:"3 points per 3"}),I=new x({val:4,description:"4 points per 4"}),q=new x({val:5,description:"5 points per 5"}),P=new x({val:6,description:"6 points per 6"}),D=new R({count:3,description:"Sum all dice if 3 are the same"}),G=new R({count:4,description:"Sum all dice if 4 are the same"}),H=new z({score:25,description:"25 points for a full house"}),B=new M({score:30,description:"30 points for a small straight"}),W=new L({score:40,description:"40 points for a large straight"}),K=new N({score:50,description:"50 points for yahtzee"}),F=new R({count:0,description:"Sum of all dice"}),J=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"getTotalScore",value:function(){var e=this.props.scores,t=0;for(var n in e)e[n]&&(t+=e[n]);return document.querySelector("#userScore").innerHTML=t,t}},{key:"restartGame",value:function(){localStorage.clear(),window.location.reload()}},{key:"reloadGame",value:function(){window.location.reload()}},{key:"render",value:function(){var e=this.props,t=e.scores,n=e.doScore;return a.a.createElement("div",{className:"ScoreTable"},a.a.createElement("section",{className:"ScoreTable-section"},a.a.createElement("h2",null,"Upper"),a.a.createElement("table",{cellSpacing:"0"},a.a.createElement("tbody",null,a.a.createElement(O,{name:"Ones",score:t.ones,description:T.description,doScore:function(e){return n("ones",T.evalRoll)}}),a.a.createElement(O,{name:"Twos",score:t.twos,description:A.description,doScore:function(e){return n("twos",A.evalRoll)}}),a.a.createElement(O,{name:"Threes",score:t.threes,description:C.description,doScore:function(e){return n("threes",C.evalRoll)}}),a.a.createElement(O,{name:"Fours",score:t.fours,description:I.description,doScore:function(e){return n("fours",I.evalRoll)}}),a.a.createElement(O,{name:"Fives",score:t.fives,description:q.description,doScore:function(e){return n("fives",q.evalRoll)}}),a.a.createElement(O,{name:"Sixes",score:t.sixes,description:P.description,doScore:function(e){return n("sixes",P.evalRoll)}})))),a.a.createElement("section",{className:"ScoreTable-section ScoreTable-section-lower"},a.a.createElement("h2",null,"Lower"),a.a.createElement("table",{cellSpacing:"0"},a.a.createElement("tbody",null,a.a.createElement(O,{name:"Three of Kind",score:t.threeOfKind,description:D.description,doScore:function(e){return n("threeOfKind",D.evalRoll)}}),a.a.createElement(O,{name:"Four of Kind",score:t.fourOfKind,description:G.description,doScore:function(e){return n("fourOfKind",G.evalRoll)}}),a.a.createElement(O,{name:"Full House",score:t.fullHouse,description:H.description,doScore:function(e){return n("fullHouse",H.evalRoll)}}),a.a.createElement(O,{name:"Small Straight",score:t.smallStraight,description:B.description,doScore:function(e){return n("smallStraight",B.evalRoll)}}),a.a.createElement(O,{name:"Large Straight",score:t.largeStraight,description:W.description,doScore:function(e){return n("largeStraight",W.evalRoll)}}),a.a.createElement(O,{name:"Yahtzee",score:t.yahtzee,description:K.description,doScore:function(e){return n("yahtzee",K.evalRoll)}}),a.a.createElement(O,{name:"Chance",score:t.chance,description:F.description,doScore:function(e){return n("chance",F.evalRoll)}})))),a.a.createElement("h2",{className:"totalScoreHeader"},"TOTAL SCORE:",a.a.createElement("span",{id:"totalScore",className:"ScoreTable-totalScore"},this.getTotalScore())),a.a.createElement("button",{id:"reload",className:"gameBtn Game-reroll",onClick:this.reloadGame},"Reload"),a.a.createElement("button",{id:"restart",className:"gameBtn Game-reroll",onClick:this.restartGame},"Start New Game"),a.a.createElement("div",{id:"game-links"},a.a.createElement("a",{href:"./game-rules.html"},"\u2754 Game Rules"),a.a.createElement("a",{href:"./privacy-policy.html"},"\ud83d\udcdc Privacy Policy")),a.a.createElement("div",{id:"best-players"},a.a.createElement("a",{href:"./stats.html"},"\ud83c\udfc6 Best Players")))}}]),t}(o.Component),Y=(n(28),n(17)),V=n.n(Y),U=5,X=3;var Z,$,_,Q,ee,te=void 0,ne=void 0,oe={numberOfDice:5,segments:40,edgeRadius:.07,notchRadius:.12,notchDepth:.1},ae=[],re={finished:!1},ie=[];function ce(){(Z=new y.v({alpha:!0,antialias:!0,canvas:te})).shadowMap.enabled=!0,Z.setPixelRatio(Math.min(window.devicePixelRatio,2)),$=new y.p,(_=new y.m(45,window.innerWidth/window.innerHeight,.1,300)).position.set(0,.5,3).multiplyScalar(5),_.rotation.set(-.5,-.075,0),he();var e=new y.a(16777215,.5);$.add(e);var t=new y.o(16777215,.5);t.position.set(5,5,15),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=5,t.shadow.camera.far=400,$.add(t),function(){var e=new y.k(new y.n(1e3,1e3),new y.q({opacity:.25}));e.receiveShadow=!0,e.position.y=-7,e.quaternion.setFromAxisAngle(new y.u(-1,0,0),.5*Math.PI),$.add(e);var t=new v.a({type:v.a.STATIC,shape:new v.c});t.position.copy(e.position),t.quaternion.copy(e.quaternion),ee.addBody(t)}(),Q=function(){var e=new y.l({color:15658734}),t=new y.l({color:0,roughness:0,metalness:1,side:y.e}),n=new y.g,o=new y.k(function(){var e=new y.n(1-2*oe.edgeRadius,1-2*oe.edgeRadius);return b.a([e.clone().translate(0,0,.48),e.clone().translate(0,0,-.48),e.clone().rotateX(.5*Math.PI).translate(0,-.48,0),e.clone().rotateX(.5*Math.PI).translate(0,.48,0),e.clone().rotateY(.5*Math.PI).translate(-.48,0,0),e.clone().rotateY(.5*Math.PI).translate(.48,0,0)],!1)}(),t),a=new y.k(function(){for(var e=new y.b(1,1,1,oe.segments,oe.segments,oe.segments),t=e.attributes.position,n=.5-oe.edgeRadius,o=function(){var e=(new y.u).fromBufferAttribute(t,a),o=new y.u(Math.sign(e.x),Math.sign(e.y),Math.sign(e.z)).multiplyScalar(n),r=(new y.u).subVectors(e,o);Math.abs(e.x)>n&&Math.abs(e.y)>n&&Math.abs(e.z)>n?(r.normalize().multiplyScalar(oe.edgeRadius),e=o.add(r)):Math.abs(e.x)>n&&Math.abs(e.y)>n?(r.z=0,r.normalize().multiplyScalar(oe.edgeRadius),e.x=o.x+r.x,e.y=o.y+r.y):Math.abs(e.x)>n&&Math.abs(e.z)>n?(r.y=0,r.normalize().multiplyScalar(oe.edgeRadius),e.x=o.x+r.x,e.z=o.z+r.z):Math.abs(e.y)>n&&Math.abs(e.z)>n&&(r.x=0,r.normalize().multiplyScalar(oe.edgeRadius),e.y=o.y+r.y,e.z=o.z+r.z);var i=function(e){return e=1/oe.notchRadius*e,e=Math.PI*Math.max(-1,Math.min(1,e)),oe.notchDepth*(Math.cos(e)+1)},c=function(e){return i(e[0])*i(e[1])};.5===e.y?e.y-=c([e.x,e.z]):.5===e.x?(e.x-=c([e.y+.23,e.z+.23]),e.x-=c([e.y-.23,e.z-.23])):.5===e.z?(e.z-=c([e.x-.23,e.y+.23]),e.z-=c([e.x,e.y]),e.z-=c([e.x+.23,e.y-.23])):-.5===e.z?(e.z+=c([e.x+.23,e.y+.23]),e.z+=c([e.x+.23,e.y-.23]),e.z+=c([e.x-.23,e.y+.23]),e.z+=c([e.x-.23,e.y-.23])):-.5===e.x?(e.x+=c([e.y+.23,e.z+.23]),e.x+=c([e.y+.23,e.z-.23]),e.x+=c([e.y,e.z]),e.x+=c([e.y-.23,e.z+.23]),e.x+=c([e.y-.23,e.z-.23])):-.5===e.y&&(e.y+=c([e.x+.23,e.z+.23]),e.y+=c([e.x+.23,e.z]),e.y+=c([e.x+.23,e.z-.23]),e.y+=c([e.x-.23,e.z+.23]),e.y+=c([e.x-.23,e.z]),e.y+=c([e.x-.23,e.z-.23])),t.setXYZ(a,e.x,e.y,e.z)},a=0;a<t.count;a++)o();return e.deleteAttribute("normal"),e.deleteAttribute("uv"),(e=b.b(e)).computeVertexNormals(),e}(),e);return a.castShadow=!0,n.add(o,a),n}();for(var n=0;n<oe.numberOfDice;n++)ie.push(le()),se(ie[n]);fe(),de()}function le(){var e=Q.clone();$.add(e);var t=new v.a({mass:1,shape:new v.b(new v.d(.5,.5,.5)),sleepTimeLimit:.1});return ee.addBody(t),{mesh:e,body:t,diceLocked:!1}}function se(e){e.body.addEventListener("sleep",function(t){e.body.allowSleep=!1;var n=new v.d;t.target.quaternion.toEuler(n);var o,a=function(e){return Math.abs(e)<.1},r=function(e){return Math.abs(e-.5*Math.PI)<.1},i=function(e){return Math.abs(.5*Math.PI+e)<.1};a(n.z)?a(n.x)?(e.currentNum=1,ue(1)):r(n.x)?(e.currentNum=4,ue(4)):i(n.x)?(e.currentNum=3,ue(3)):(o=n.x,Math.abs(Math.PI-o)<.1||Math.abs(Math.PI+o)<.1?(e.currentNum=6,ue(6)):e.body.allowSleep=!0):r(n.z)?(e.currentNum=2,ue(2)):i(n.z)?(e.currentNum=5,ue(5)):e.body.allowSleep=!0})}function ue(e){""===ne.innerHTML?ne.innerHTML+=e:ne.innerHTML+="+"+e,ae.push(e);var t=ie.filter(function(e,t,n){return!1===e.diceLocked});ae.length===t.length&&(re.finished="1",ae=[],re.finished="0")}function de(){ee.fixedStep();for(var e=0,t=ie;e<t.length;e++){var n=t[e];n.mesh.position.copy(n.body.position),n.mesh.quaternion.copy(n.body.quaternion)}Z.render($,_),requestAnimationFrame(de)}function he(){_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),Z.setSize(window.innerWidth,window.innerHeight)}function fe(e){ne.innerHTML="",e&&e.forEach(function(e,t){ie[t].diceLocked=e});var t=ie;e&&(t=t.filter(function(e,t,n){return!1===e.diceLocked})),t.forEach(function(e,t){e.body.velocity.setZero(),e.body.angularVelocity.setZero(),e.body.position=new v.d(6,1.5*t,0),e.mesh.position.copy(e.body.position),e.mesh.rotation.set(2*Math.PI*Math.random(),0,2*Math.PI*Math.random()),e.body.quaternion.copy(e.mesh.quaternion);var n=3+5*Math.random();e.body.applyImpulse(new v.d(-n,n,0),new v.d(0,0,.2)),e.body.allowSleep=!0})}var me=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={dice:Array.from({length:U}),locked:Array(U).fill(!1),rollsLeft:X,rolling:!1,scores:{ones:void 0,twos:void 0,threes:void 0,fours:void 0,fives:void 0,sixes:void 0,threeOfKind:void 0,fourOfKind:void 0,fullHouse:void 0,smallStraight:void 0,largeStraight:void 0,yahtzee:void 0,chance:void 0}},n.roll=n.roll.bind(Object(p.a)(Object(p.a)(n))),n.doScore=n.doScore.bind(Object(p.a)(Object(p.a)(n))),n.toggleLocked=n.toggleLocked.bind(Object(p.a)(Object(p.a)(n))),n.animateRoll=n.animateRoll.bind(Object(p.a)(Object(p.a)(n))),n.throwDices=n.throwDices.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(localStorage.getItem("scores"))try{var t=JSON.parse(localStorage.getItem("scores")),n=function(n){e.setState(function(e){return{scores:Object(m.a)({},e.scores,Object(f.a)({},n,t[n]))}})};for(var o in t)n(o)}catch(a){window.console.log(a)}te=document.querySelector("#canvas"),ne=document.querySelector("#score-result"),(ee=new v.e({allowSleep:!0,gravity:new v.d(0,-50,0)})).defaultContactMaterial.restitution=.3,ce(),window.addEventListener("resize",he);re=new Proxy(re,{set:function(t,n,o){return"finished"!==n||"1"!==o||(window.console.log(n,o),e.animateRoll(),o)}})}},{key:"animateRoll",value:function(){var e=this;this.setState({rolling:!0},function(){e.roll()})}},{key:"throwDices",value:function(){var e=this;ae=[],window.setTimeout(function(){var e;e=V.a,new Audio(e).play()},500),this.setState({rolling:!0},function(){fe(e.state.locked),setTimeout(function(){window.console.log(ae),window.console.log(ae.length),ae.length>0&&(window.console.log("tempArrToKnowWhenRollingEnds.length > 0"),ae=[],e.throwDices())},5e3)})}},{key:"roll",value:function(e){localStorage.setItem("scores",JSON.stringify(this.state.scores)),this.setState(function(e){return{dice:e.dice.map(function(t,n){return e.locked[n]?t:ie[n].currentNum}),locked:e.rollsLeft>1?e.locked:Array(U).fill(!0),rollsLeft:e.rollsLeft-1,rolling:!1}});var t=Object.values(this.state.scores);if(0===(t=t.filter(function(e){return void 0===e})).length&&"1"!==localStorage.endGameState){if(document.querySelector("html").classList.add("endGame"),localStorage.endGameState,navigator.onLine){var n=new Date,o=["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()],a=document.querySelector("#userScore").innerHTML;window.console.log(document.querySelector("#userScore").innerHTML),function(e,t){var n=document.querySelector("[data-stats-url]").getAttribute("data-stats-url"),o=n+e;t.gameType&&(o=o+"&game_type="+t.gameType),t.gameScore&&(o=o+"&score="+t.gameScore),fetch(o).then(function(e){return e.json()}).then(function(e){if(console.log(e),e.success.position){var o="";for(localStorage.getItem("uname")&&(o=localStorage.getItem("uname"));!a;){var a=prompt("You are in the top players in position "+e.success.position+".\nPlease enter your name:",o);if("string"!==typeof a)return}localStorage.setItem("uname",a),fetch(n+"?set-stats&game_type="+t.gameType+"&score="+t.gameScore+"&uname="+a).then(function(e){return e.json()}).then(function(e){console.log(e),window.localStorage.clear(),window.location.reload()})}})}("?check-stats",{gameType:o+" "+n.getFullYear(),gameScore:a})}window.setTimeout(function(){localStorage.removeItem("endGameState")},1500)}}},{key:"toggleLocked",value:function(e){this.state.rollsLeft>0&&!this.state.rolling&&this.setState(function(t){return{locked:[].concat(Object(h.a)(t.locked.slice(0,e)),[!t.locked[e]],Object(h.a)(t.locked.slice(e+1)))}})}},{key:"doScore",value:function(e,t){var n=this;this.setState(function(o){return{scores:Object(m.a)({},o.scores,Object(f.a)({},e,t(n.state.dice))),rollsLeft:X,locked:Array(U).fill(!1)}}),this.throwDices()}},{key:"displayRollInfo",value:function(){return["0 Rolls Left. Choose Combination","1 Roll Left","2 Rolls Left","Starting Round"][this.state.rollsLeft]}},{key:"displayRollCounter",value:function(){return["0","1","2","\u27f3"][this.state.rollsLeft]}},{key:"toogleRerolButtonVisibility",value:function(){return["dn","","",""][this.state.rollsLeft]}},{key:"render",value:function(){var e=this.state,t=e.dice,n=e.locked,o=e.rollsLeft,r=e.rolling,i=e.scores;return a.a.createElement("div",{className:"Game"},a.a.createElement("canvas",{id:"canvas"}),a.a.createElement("header",{className:"Game-header"},a.a.createElement("div",{id:"score-result"}),a.a.createElement("section",{className:"Game-dice-section"},a.a.createElement("div",{className:"Game-button-wrapper"},a.a.createElement("button",{className:"Game-reroll rerollBtn "+this.toogleRerolButtonVisibility(),disabled:n.every(function(e){return e})||0===o||r,onClick:this.throwDices,title:this.displayRollInfo()},a.a.createElement("span",{className:"icon-dice"},"\ud83c\udfb2")," ",this.displayRollCounter())),a.a.createElement(S,{dice:t,locked:n,handleClick:this.toggleLocked,disabled:0===o,rolling:r}))),a.a.createElement(J,{doScore:this.doScore,scores:i}))}}]),t}(o.Component),pe=(n(29),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(me,null))}}]),t}(o.Component)),ve=(n(30),n(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ye(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(pe,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat(".","/service-worker.js");ve?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ye(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ye(e)})}}()}],[[18,1,2]]]);