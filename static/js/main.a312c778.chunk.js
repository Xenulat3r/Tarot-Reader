(this["webpackJsonptarot-reader"]=this["webpackJsonptarot-reader"]||[]).push([[0],{109:function(e,r,n){"use strict";n.r(r);var t=n(3),i=n.n(t),a=n(19),c=n.n(a),s=(n(55),n(5)),l=(n(42),n(2));var d=function(e){var r=e.item;return Object(l.jsxs)("div",{children:[null!=r.when&&Object(l.jsx)("h4",{children:r.when}),Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h4",{children:r.name}),null!=r.reverse&&Object(l.jsx)("p",{children:r.reverse?"reversed":"upright"}),Object(l.jsx)("img",{src:r.url,alt:r.name,className:r.reverse?"cardimage  reversed":""}),Object(l.jsx)("h1",{children:"Meaning:"}),Object(l.jsxs)("p",{children:[" ",r.reverse?r.reversed:r.upright]})]})]})},u=n(7);var o=function(){return Object(l.jsxs)("nav",{children:[Object(l.jsx)(u.b,{to:"/ShowDeck",children:"See All Cards"}),Object(l.jsx)(u.b,{to:"/TodaysCard",children:"Todays Card"}),Object(l.jsx)(u.b,{to:"/OneCard",children:"One Card Reading"}),Object(l.jsx)(u.b,{to:"/ThreeCards",children:"Three Card Reading"}),Object(l.jsx)(u.b,{to:"/",children:"Home"})]})},h=n(14),j=n(23),g=[{id:"0",url:"img/fool.jpg",name:"The Fool",upright:"New beginnings",reversed:"Recklessness",reverse:null,when:null},{id:"1",url:"img/magician.jpg",name:"The Magician",upright:"Manifestation",reversed:"Manipulation",reverse:null,when:null},{id:"2",url:"img/high_priestess.jpg",name:"The High Priestess",upright:"Intuition",reversed:"Secrets",reverse:null,when:null},{id:"3",url:"img/empress.jpg",name:"The Empress",upright:"Abundance, Femininity",reversed:"Creative Block",reverse:null,when:null},{id:"4",url:"img/emperor.jpg",name:"The Emporer",upright:"Authority figure",reversed:"Overcontrolling nature",reverse:null,when:null},{id:"5",url:"img/Hierophant.jpg",name:"The Hierophant",upright:"Tradition",reversed:"Freedom",reverse:null,when:null},{id:"6",url:"img/lovers.jpg",name:"The Lovers",upright:"Alignment of Values",reversed:"Imbalance",reverse:null,when:null},{id:"7",url:"img/chariot.jpg",name:"The Chariot",upright:"Action, willpower",reversed:"Lack of direction",reverse:null,when:null},{id:"8",url:"img/strength.jpg",name:"Strength",upright:"Courage",reversed:"Self-doubt",reverse:null,when:null},{id:"9",url:"img/hermit.jpg",name:"The Hermit",upright:"Soul-searching",reversed:"Isolation",reverse:null,when:null},{id:"10",url:"img/wheel_of_fortune.jpg",name:"Wheel of Fortune",upright:"Good Luck",reversed:"Resistance to change",reverse:null,when:null},{id:"11",url:"img/justice.jpg",name:"Justice",upright:"Fairness, in your favor",reversed:"Unfairness, lack of accountability",reverse:null,when:null},{id:"12",url:"img/hanged_man.jpg",name:"The Hanged Man",upright:"New perspective, Empathy",reversed:"Unwilling to see the otherside",reverse:null,when:null},{id:"13",url:"img/death.jpg",name:"Death",upright:"Change, transformation",reversed:"Resistance to change",reverse:null,when:null},{id:"14",url:"img/temperance.jpg",name:"Temperance",upright:"Moderation",reversed:"Excess",reverse:null,when:null},{id:"15",url:"img/devil.jpg",name:"The Devil",upright:"Addiction, attachment",reversed:"Letting go of negativity",reverse:null,when:null},{id:"16",url:"img/tower.jpg",name:"The Tower",upright:"Upheaval",reversed:"Fear of change",reverse:null,when:null},{id:"17",url:"img/star.jpg",name:"The Star",upright:"Renewal",reversed:"Lack of faith",reverse:null,when:null},{id:"18",url:"img/moon.jpg",name:"The Moon",upright:"Fear of the unknown",reversed:"Clarity",reverse:null,when:null},{id:"19",url:"img/sun.jpg",name:"The Sun",upright:"Positivity",reversed:"Inner child",reverse:null,when:null},{id:"20",url:"img/judgement.jpg",name:"Judgement",upright:"Inner Calling",reversed:"Inner Critic",reverse:null,when:null},{id:"21",url:"img/world.jpg",name:"The World",upright:"Completion of a cycle",reversed:"Seeking Closure",reverse:null,when:null}],b=i.a.createContext();function m(e){var r=e.children;Object(t.useEffect)((function(){m()}),[]);var n=Object(t.useState)([]),i=Object(j.a)(n,2),a=i[0],c=i[1],s=Object(t.useState)([]),d=Object(j.a)(s,2),u=d[0],o=d[1];function m(){o([]),o(g),c([])}return Object(l.jsx)(b.Provider,{value:{drawThree:function(){if(u.length>0){var e=Math.floor(Math.random()*u.length),r=u[e],n=Math.floor(100*Math.random());r.reverse=n<50,0===a.length?r.when="Past":1===a.length?r.when="Present":2===a.length&&(r.when="Future"),c((function(e){return[].concat(Object(h.a)(e),[r])})),o((function(e){return e.filter((function(e){return e.id!==r.id}))}))}else alert("No More Cards!")},drawnCards:a,deck:u,draw:function(){var e=Math.floor(Math.random()*u.length),r=u[e],n=Math.floor(100*Math.random());r.reverse=n<50,0===a.length&&(r.when="The card is an overall look at your situation."),c((function(e){return[].concat(Object(h.a)(e),[r])})),o((function(e){return e.filter((function(e){return e.id!==r.id}))}))},getCard:function(e){function r(e){return e.getMonth()+1+e.getDate()+e.getFullYear()}function n(e){return e.toString().split("").map(Number)}var t=n(r(new Date)+r(e)).reduce((function(e,r){return e+r}));if(t>22){var i=n(t).reduce((function(e,r){return e+r})),a=u[i];c((function(e){return[].concat(Object(h.a)(e),[a])}))}else{var s=u[t];c((function(e){return[].concat(Object(h.a)(e),[s])}))}},findCard:function(e){var r;function n(e){return e.toString().split("").map(Number)}var t=n((r=e).getMonth()+1+r.getDate()+r.getFullYear()).reduce((function(e,r){return e+r}));if(t>22){var i=n(t).reduce((function(e,r){return e+r})),a=u[i];c((function(e){return[].concat(Object(h.a)(e),[a])}))}else{var s=u[t];c((function(e){return[].concat(Object(h.a)(e),[s])}))}},startOver:m},children:r})}var v=function(){var e=Object(t.useContext)(b),r=e.drawnCards,n=e.drawThree,i=e.startOver;Object(t.useEffect)((function(){i(),document.title="Three Card Reading - Tarot Reader"}),[]);var a=r.map((function(e){return Object(l.jsx)(d,{item:e},e.id)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{}),0===r.length?Object(l.jsx)("header",{children:"Ready for your reading?"}):"",Object(l.jsxs)("div",{className:"buttoncontainer",children:[r.length>0?Object(l.jsx)("button",{onClick:function(){return i()},children:"Start Over"}):"",r.length<3?Object(l.jsx)("button",{onClick:function(){return n()},children:"Draw"}):""]}),Object(l.jsx)("div",{className:"cardcontainer",children:a})]})};var O=function(){return Object(t.useEffect)((function(){document.title="Tarot Reader"}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("header",{children:"What kind of reading are you looking for today?"}),Object(l.jsxs)("div",{className:"cardcontainer",children:[Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)(u.b,{to:"/OneCard",children:[Object(l.jsx)("h1",{children:"One Card Reading"}),Object(l.jsx)("img",{src:"img/fool.jpg",alt:"Three Card Reading",className:"cardimage"})]}),Object(l.jsx)("p",{children:"Just a one card summary reading."})]}),Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)(u.b,{to:"/ThreeCards",children:[Object(l.jsx)("h1",{children:"Three Card Reading"}),Object(l.jsx)("img",{src:"img/magician.jpg",alt:"Three Card Reading",className:"cardimage"})]}),Object(l.jsx)("p",{children:'"Past Present Future" reading.'})]}),Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)(u.b,{to:"/TodaysCard",children:[Object(l.jsx)("h1",{children:"Todays Card"}),Object(l.jsx)("img",{src:"img/high_priestess.jpg",alt:"Three Card Reading",className:"cardimage"})]}),Object(l.jsx)("p",{children:"Your card of the day according to numerology."})]})]})]})};var f=function(){var e=Object(t.useContext)(b),r=e.drawnCards,n=e.draw,i=e.startOver;Object(t.useEffect)((function(){i(),document.title="One Card Reading - Tarot Reader"}),[]);var a=r.map((function(e){return Object(l.jsx)(d,{item:e},e.id)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{}),0===r.length?Object(l.jsx)("h3",{children:"Ready for your reading?"}):"",Object(l.jsxs)("div",{className:"buttoncontainer",children:[r.length>0?Object(l.jsx)("button",{onClick:function(){return i()},children:"Draw a new card."}):"",r.length<1&&Object(l.jsx)("button",{onClick:function(){return n()},children:"Draw One Card"})]}),Object(l.jsx)("div",{className:"cardcontainer",children:a})]})};var x=function(e){var r=e.item;return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h4",{children:r.name}),Object(l.jsx)("img",{src:r.url,alt:r.name}),Object(l.jsx)("h1",{children:"Meaning:"}),Object(l.jsxs)("p",{children:[" ",r.upright]})]})})},p=n(46),w=n.n(p);n(64);var C=function(){var e=Object(t.useContext)(b),r=e.drawnCards,n=e.getCard,i=e.startOver,a=e.findCard,c=Object(t.useState)(new Date),s=Object(j.a)(c,2),d=s[0],u=s[1],h=new Date;Object(t.useEffect)((function(){i(),document.title="Todays Card - Tarot Reader"}),[]);var g=r.map((function(e){return Object(l.jsx)(x,{item:e},e.id)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{}),Object(l.jsxs)("div",{className:"buttoncontainer",children:[r.length>0&&Object(l.jsxs)("div",{children:[h.getMonth()+1===d.getMonth()+1&&h.getDate()===d.getDate()?Object(l.jsx)("header",{children:"Happy Birthday!"}):"",Object(l.jsx)("button",{onClick:function(){return i()},children:"Use a New Birthday!"})]}),r.length<1&&Object(l.jsxs)("div",{children:[Object(l.jsx)("header",{children:"Ready for your reading? Tell us your birthday!"}),Object(l.jsxs)("h1",{children:["Birthday:",d.getMonth()+1,"/",d.getDate(),"/",d.getFullYear()]}),Object(l.jsx)(w.a,{selected:d,onChange:function(e){return u(e)}}),Object(l.jsx)("button",{onClick:function(){return n(d)},children:"Draw Your Card for today!"}),Object(l.jsx)("button",{onClick:function(){return a(d)},children:"Just Birthday card!"})]})]}),Object(l.jsx)("div",{className:"cardcontainer",children:g})]})};var T=function(){var e=Object(t.useContext)(b),r=e.deck,n=e.startOver;Object(t.useEffect)((function(){n(),document.title="See The Deck - Tarot Reader"}),[]);var i=r.map((function(e){return Object(l.jsx)(x,{item:e},e.id)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{}),Object(l.jsx)("div",{className:"deckcontainer",children:i})]})};var y=function(){return Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{exact:!0,path:"/",children:Object(l.jsx)(O,{})}),Object(l.jsx)(s.a,{path:"/ThreeCards",children:Object(l.jsx)(v,{})}),Object(l.jsx)(s.a,{path:"/OneCard",children:Object(l.jsx)(f,{})}),Object(l.jsx)(s.a,{path:"/TodaysCard",children:Object(l.jsx)(C,{})}),Object(l.jsx)(s.a,{path:"/ShowDeck",children:Object(l.jsx)(T,{})})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(r){var n=r.getCLS,t=r.getFID,i=r.getFCP,a=r.getLCP,c=r.getTTFB;n(e),t(e),i(e),a(e),c(e)}))};c.a.render(Object(l.jsx)(u.a,{children:Object(l.jsx)(m,{children:Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(y,{})})})}),document.getElementById("root")),k()},42:function(e,r,n){},55:function(e,r,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.a312c778.chunk.js.map