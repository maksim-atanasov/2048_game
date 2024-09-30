!function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,r=Array(e);s<e;s++)r[s]=t[s];return r}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,s){if(e){if("string"==typeof e)return t(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s,r,n={},a=function(){var t;function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,s),this.state=JSON.parse(JSON.stringify(t)),this.initialState=JSON.parse(JSON.stringify(t)),this.status=s.GameStatus.idle,this.score=0}return t=[{key:"moveLeft",value:function(){if("playing"===this.getStatus()){for(var t=e(this.state),s=0;s<this.state.length;s++)t[s]=this.move(t[s]);this.canMerge(t)&&(this.state=e(t),this.isWin(),this.generateGameNumber()),this.isLose(t)}}},{key:"moveRight",value:function(){if("playing"===this.getStatus()){for(var t=e(this.state),s=0;s<this.state.length;s++){var r=e(t[s]);r.reverse(),(r=this.move(r)).reverse(),t[s]=r}this.canMerge(t)&&(this.state=e(t),this.isWin(),this.generateGameNumber()),this.isLose(t)}}},{key:"moveUp",value:function(){if("playing"===this.getStatus()){for(var t=e([,,,,]).map(function(){return[,,,,].fill(0)}),s=0;s<this.state.length;s++){var r=[this.state[0][s],this.state[1][s],this.state[2][s],this.state[3][s]];r=this.move(r);for(var n=0;n<this.state.length;n++)t[n][s]=r[n]}this.canMerge(t)&&(this.state=e(t),this.isWin(),this.generateGameNumber()),this.isLose(t)}}},{key:"moveDown",value:function(){if("playing"===this.getStatus()){for(var t=e([,,,,]).map(function(){return[,,,,].fill(0)}),s=0;s<this.state.length;s++){var r=[this.state[0][s],this.state[1][s],this.state[2][s],this.state[3][s]].reverse();r=(r=this.move(r)).reverse();for(var n=0;n<this.state.length;n++)t[n][s]=r[n]}this.canMerge(t)&&(this.state=e(t),this.isWin(),this.generateGameNumber()),this.isLose(t)}}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.status=s.GameStatus.playing,this.generateGameNumber(),this.generateGameNumber()}},{key:"restart",value:function(){this.state=JSON.parse(JSON.stringify(this.initialState)),this.status=s.GameStatus.idle,this.score=0}},{key:"move",value:function(t){for(var e=t.filter(function(t){return 0!==t}),s=0;s<e.length-1;s++)e[s]===e[s+1]&&(e[s]*=2,e[s+1]=0,this.score+=e[s]);for(var r=e.filter(function(t){return 0!==t});r.length<4;)r.push(0);return r}},{key:"isWin",value:function(){for(var t=0;t<this.state.length;t++)for(var e=0;e<this.state[t].length;e++)if(2048===this.state[t][e]){this.status=s.GameStatus.win;return}}},{key:"canMerge",value:function(t){return JSON.stringify(t)!==JSON.stringify(this.state)}},{key:"canMove",value:function(){for(var t=this.state.length,e=0;e<t;e++)for(var s=0;s<t;s++)if(s<t-1&&this.state[e][s]===this.state[e][s+1]||e<t-1&&this.state[e][s]===this.state[e+1][s])return!0;return!1}},{key:"emptyCellsCount",value:function(){for(var t=[],e=0;e<this.state.length;e++)for(var s=0;s<this.state[e].length;s++)0===this.state[e][s]&&t.push([e,s]);return t}},{key:"generateGameNumber",value:function(){var t=this.emptyCellsCount();if(0!==t.length){var e=Math.floor(Math.random()*t.length),s=t[e][1],r=t[e][0];this.state[r][s]=Math.random()>=.9?4:2}}},{key:"isLose",value:function(){0!==this.emptyCellsCount().length||this.canMove()||(this.status=s.GameStatus.lose)}}],function(t,e){for(var s=0;s<e.length;s++){var r=e[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(s.prototype,t),s}();r={idle:"idle",playing:"playing",win:"win",lose:"lose"},(s="GameStatus")in a?Object.defineProperty(a,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[s]=r;var i=new(n=a),o=document.querySelector(".button.start"),u=document.querySelector(".message-start"),l=document.querySelector(".game-score"),h=document.querySelector(".message-win"),c=document.querySelector(".message-lose");function f(){var t=e(document.querySelectorAll(".field-row")).map(function(t){return e(t.children)});i.getState().forEach(function(e,s){e.forEach(function(e,r){var n=t[s][r];n.className=e?"field-cell field-cell--".concat(e):"field-cell",n.innerHTML=e||""})})}o.addEventListener("click",function(){"Start"===o.textContent?(o.textContent="Restart",o.classList.replace("start","restart"),u.classList.add("hidden"),i.start(),f()):"Restart"===o.textContent&&(o.textContent="Start",o.classList.replace("restart","start"),u.classList.remove("hidden"),h.classList.add("hidden"),c.classList.add("hidden"),i.restart(),f(),l.textContent=i.getScore())}),document.addEventListener("keydown",function(t){"playing"===i.getStatus()&&("ArrowUp"===t.key&&i.moveUp(),"ArrowDown"===t.key&&i.moveDown(),"ArrowLeft"===t.key&&i.moveLeft(),"ArrowRight"===t.key&&i.moveRight()),i.getStatus()===n.GameStatus.lose&&c.classList.remove("hidden"),i.getStatus()===n.GameStatus.win&&h.classList.remove("hidden"),f(),l.textContent=i.getScore()})}();
//# sourceMappingURL=index.918f58d1.js.map
