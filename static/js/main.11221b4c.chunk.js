(this["webpackJsonpmy-react"]=this["webpackJsonpmy-react"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n(22)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),l=n(6),i=n(1),u=n(2),s=n(3),m=n(5),b=n(4),d=n(9),f=(n(15),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDeleted,a=t.onToggleImportant,r=t.onToggleDone,c="todo-list-item";return t.done&&(c+=" done"),t.important&&(c+=" important"),o.a.createElement("span",{className:"list-item"},o.a.createElement("span",{className:c,onClick:r},e),o.a.createElement("button",{className:"btn btn-outline-danger btn-sm",type:"button",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})),o.a.createElement("button",{className:"btn btn-outline-success btn-sm",type:"button",onClick:a},o.a.createElement("i",{className:"fa fa-exclamation"})))}}]),n}(o.a.Component)),p=(n(16),function(t){var e=t.todoData,n=t.onDeleted,a=t.onToggleImportant,r=t.onToggleDone,c=e.map((function(t){var e="list-group-item",c=t.id,l=t.display,i=Object(d.a)(t,["id","display"]);return l||(e+=" invisible"),o.a.createElement("li",{key:c,className:e},o.a.createElement(f,Object.assign({},i,{onDeleted:function(){return n(c)},onToggleImportant:function(){return a(c)},onToggleDone:function(){return r(c)}})))}));return o.a.createElement("ul",{className:"list-group todo-list"},c)}),h=(n(17),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).onLabelChange=function(t){a.props.onSearchLabelChange(t.target.value)},a}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control",placeholder:"type to search",onChange:this.onLabelChange})}}]),n}(a.Component)),g=(n(18),function(t){var e=t.done,n=t.todo;return o.a.createElement("div",{className:"app-header"},o.a.createElement("h1",null,"Todo List"),o.a.createElement("h2",null,n," more to do, ",e," done"))}),j=(n(19),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).buttons=[{name:"all",label:"all",className:"btn btn-info"},{name:"active",label:"active",className:"btn btn-outline-secondary"},{name:"done",label:"done",className:"btn btn-outline-secondary"}],a.onBtnClick=function(e){t.onFilterBtn(e.target.name),a.buttons=a.buttons.map((function(t){return t.name===e.target.name?Object(i.a)(Object(i.a)({},t),{},{className:"btn btn-info"}):Object(i.a)(Object(i.a)({},t),{},{className:"btn btn-outline-secondary"})}))},a}return Object(s.a)(n,[{key:"render",value:function(){var t=this.buttons.map((function(t){var e=t.name,n=t.label,a=t.className;return o.a.createElement("button",{name:e,className:a,type:"button",key:e},n)}));return o.a.createElement("div",{className:"btn-group",onClick:this.onBtnClick},t)}}]),n}(a.Component)),D=(n(20),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={label:""},t.onLabelChange=function(e){t.setState({label:e.target.value})},t.onSubmit=function(e){e.preventDefault(),""!==t.state.label&&(t.props.onAddItem(t.state.label),t.setState({label:""}))},t}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{className:"add-item",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"what needs to be done",value:this.state.label}),o.a.createElement("button",{className:"btn btn-outline-info"},"Add item"))}}]),n}(a.Component)),O=(n(21),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).idGenerator=100,t.state={todoData:[t.createToDoItem("learn promises"),t.createToDoItem("learn react"),t.createToDoItem("learn React.js")]},t.deleteComponent=function(e){t.setState((function(t){return{todoData:t.todoData.filter((function(t){return t.id!==e}))}}))},t.addItem=function(e){t.setState((function(n){return{todoData:n.todoData.concat(t.createToDoItem(e))}}))},t.onToggleImportant=function(e){t.setState((function(n){return{todoData:t.changeProperty(n.todoData,e,"important")}}))},t.onToggleDone=function(e){t.setState((function(n){return{todoData:t.changeProperty(n.todoData,e,"done")}}))},t.onSearchLabelChange=function(e){t.setState((function(t){return{todoData:t.todoData.map((function(t){return""===e||t.label.startsWith(e)?Object(i.a)(Object(i.a)({},t),{},{display:!0}):Object(i.a)(Object(i.a)({},t),{},{display:!1})}))}}))},t.onFilterBtn=function(e){"all"===e?t.setState((function(t){return{todoData:t.todoData.map((function(t){return Object(i.a)(Object(i.a)({},t),{},{display:!0})}))}})):"active"===e?t.setState((function(e){return{todoData:t.filterByDoneProp(e.todoData,!1)}})):"done"===e&&t.setState((function(e){return{todoData:t.filterByDoneProp(e.todoData,!0)}}))},t}return Object(s.a)(n,[{key:"filterByDoneProp",value:function(t,e){return t.map((function(t){return t.done===e?Object(i.a)(Object(i.a)({},t),{},{display:!0}):Object(i.a)(Object(i.a)({},t),{},{display:!1})}))}},{key:"changeProperty",value:function(t,e,n){return t.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},Object(l.a)({},n,!t[n])):t}))}},{key:"createToDoItem",value:function(t){return{label:t,important:!1,done:!1,id:this.idGenerator++,display:!0}}},{key:"render",value:function(){var t=this.state.todoData,e=t.filter((function(t){return t.done})).length,n=t.length-e;return o.a.createElement("div",{className:"todo-app"},o.a.createElement(g,{done:e,todo:n}),o.a.createElement("div",{className:"search-block"},o.a.createElement(h,{onSearchLabelChange:this.onSearchLabelChange}),o.a.createElement(j,{onFilterBtn:this.onFilterBtn})),o.a.createElement(p,{todoData:this.state.todoData,onDeleted:this.deleteComponent,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(D,{onAddItem:this.addItem}))}}]),n}(a.Component));c.a.render(o.a.createElement(O,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.11221b4c.chunk.js.map