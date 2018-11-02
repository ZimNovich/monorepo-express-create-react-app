(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(e){e.exports={Api:{networkError:"Network error occurred",serverError:"Server error occurred"},Main:{title:"Todos"},Navigation:{todos:"Todos"},Todos:{Filter:{search:"Search..."},addNewTodo:"Add new",empty:"No todos found",loading:"Todos are loading...",notFoundDescription:"Todo not found",notFoundHeader:"Not found",unknownError:"Unknown error occurred"}}},174:function(e){e.exports={Api:{networkError:"Geen verbinding",serverError:"Er is een fout opgetreden op de server, probeer later opnieuw"},Main:{title:"Taken"},Navigation:{todos:"Taken"},Todos:{Filter:{search:"Zoeken..."},addNewTodo:"Taak toevoegen",empty:"Geen taken gevonden",loading:"Todos are loading...",notFoundDescription:"Taak niet gevonden",notFoundHeader:"Niet gevonden",refreshed:"De takenlijst is opnieuw opgehaald",unknownError:"Onbekende fout opgetreden"},Todo:{add:"Toevoegen",added:"De taak is toegevoegd",completed:"Voltooid",description:"Omschrijving",save:"Opslaan",notes:"Notities",remove:"Verwijderen",removed:"De taak is verwijderd",saved:"De taak is gewijzigd",title:"Taak"}}},236:function(e,t,n){e.exports=n(405)},405:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(35),i=n.n(o),s=n(32),c=n(38),d=n(33),u=n(22),l=n(53),p=n(16),h=n(11),m=n.n(h),f=n(12),g=n.n(f),E=n(13),v=n.n(E),b=n(14),y=n.n(b),w=n(15),x=n.n(w),S=n(407),k=n(408),C=n(409),j=n(7),O=n.n(j),T=n(1),R=n.n(T),_=n(4),q="todos/FETCH",A="todos/REFRESH",N="todos/ROUTE_TO",I=function(e){return{type:N,meta:{isExact:e}}},L=function(){return{type:q}},D=function(e){return{type:"todos/FETCH_FAILURE",payload:{message:e}}},M=function(){return{type:"todos/FETCH_REQUEST"}},U=function(e){return{type:"todos/FETCH_SUCCESS",payload:{todos:e}}},F=n(20),P=n.n(F),H=n(167),V=n.n(H),Q=function(e){function t(){var e,n;m()(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=v()(this,(e=y()(t)).call.apply(e,[this].concat(a))),O()(P()(P()(n)),"handleQueryChange",function(e){n.props.search(e.target.value)}),n}return x()(t,e),g()(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.isLoading,r=e.query,o=e.refresh;return a.a.createElement(_.l,{divider:!0,className:t.filter},a.a.createElement(_.r,{fullWidth:!0,label:p.a.t("Todos:Filter:search"),className:t.input,value:r,onChange:this.handleQueryChange}),a.a.createElement(_.j,{className:t.refreshIcon,onClick:o,disabled:n},a.a.createElement(V.a,null)))}}]),t}(r.PureComponent);O()(Q,"propTypes",{classes:R.a.object.isRequired,isLoading:R.a.bool.isRequired,query:R.a.string.isRequired,refresh:R.a.func.isRequired,search:R.a.func.isRequired});var B=Object(u.withStyles)(function(e){return{filter:{width:"100%",backgroundColor:e.palette.background.paper,borderRight:"1px solid ".concat(e.palette.divider)},input:{flex:1}}})(Q),z=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){return a.a.createElement(B,{isLoading:this.props.isLoading,query:this.props.query,refresh:this.props.refresh,search:this.props.search})}}]),t}(r.PureComponent);O()(z,"propTypes",{isLoading:R.a.bool.isRequired,query:R.a.string.isRequired,refresh:R.a.func.isRequired,search:R.a.func.isRequired});var G=Object(s.connect)(function(e){return{isLoading:e.todosState.meta.isLoading,query:e.todosState.filter.query}},{refresh:function(){return{type:A}},search:function(e){return{type:"todos/SEARCH",query:e}}})(z),J=n(168),W=Object(J.createSelector)(function(e){return e},function(e,t){return t},function(e,t){return t?e.filter(function(e){return!!e.title.includes(t)||!!e.description.includes(t)}):e}),Y=n(10),X=n.n(Y),Z=n(406),K=n(169),$=n.n(K),ee=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){var e,t=this.props,n=t.classes,r=t.todo,o=t.selected;return e=r.completed?a.a.createElement(_.b,{className:n.completed},a.a.createElement($.a,null)):a.a.createElement(_.b,null," "),a.a.createElement(_.l,{divider:!0,button:!0,component:Z.a,to:"/todos/".concat(r._id),className:X()(o&&n.active)},e,a.a.createElement(_.o,{primary:r.title,secondary:r.description}))}}]),t}(r.PureComponent);O()(ee,"propTypes",{classes:R.a.object.isRequired,todo:R.a.object.isRequired,selected:R.a.bool.isRequired});var te=Object(u.withStyles)(function(e){return{active:{backgroundColor:e.palette.action.selected},completed:{backgroundColor:l.green[500]}}})(ee),ne=n(170),re=n.n(ne),ae=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){var e=this.props.classes;return a.a.createElement(_.l,{button:!0,component:Z.a,to:"/todos/new"},a.a.createElement(_.m,null,a.a.createElement(_.b,{className:e.addNewTodoIcon},a.a.createElement(re.a,null))),a.a.createElement(_.o,{primary:a.a.createElement(_.t,{variant:"subheading",className:e.addNewTodoText},p.a.t("Todos:addNewTodo"))}))}}]),t}(r.PureComponent);O()(ae,"propTypes",{classes:R.a.object.isRequired});var oe=Object(u.withStyles)(function(e){return{content:{flex:"1",backgroundColor:e.palette.background.paper,borderRight:"1px solid ".concat(e.palette.divider),overflow:"scroll"},addNewTodoIcon:{backgroundColor:e.palette.primary.main},addNewTodoText:{color:e.palette.primary.main}}})(ae),ie=n(28),se=n.n(ie),ce=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.message;return a.a.createElement("div",{className:t.loading},a.a.createElement(_.d,{size:50}),a.a.createElement(_.t,{className:t.loadingText},n))}}]),t}(r.PureComponent);O()(ce,"propTypes",{classes:R.a.object.isRequired,message:R.a.string.isRequired});var de=Object(u.withStyles)(function(e){return{loading:se()({},e.mixins.gutters({paddingTop:16,paddingBottom:16,textAlign:"center"})),loadingText:{marginTop:16}}})(ce),ue=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){var e,t=this.props,n=t.classes,r=t.todos,o=t.selectedTodoId;return t.isLoading?a.a.createElement(_.k,{className:n.content},a.a.createElement(de,{message:p.a.t("Todos:loading")})):(e=(e=0===r.length?[a.a.createElement(_.l,{divider:!0,key:"EmptyTodos"},a.a.createElement(_.o,{primary:p.a.t("Todos:empty")}))]:r.map(function(e){return a.a.createElement(te,{key:e._id,todo:e,selected:e._id===o})})).concat(a.a.createElement(oe,{key:"AddNew"})),a.a.createElement(_.k,{disablePadding:!0,className:n.content},e))}}]),t}(r.PureComponent);O()(ue,"propTypes",{classes:R.a.object.isRequired,isLoading:R.a.bool.isRequired,todos:R.a.array.isRequired,selectedTodoId:R.a.string});var le=Object(u.withStyles)(function(e){return{content:{flex:"1",backgroundColor:e.palette.background.paper,borderRight:"1px solid ".concat(e.palette.divider),overflow:"scroll"},addNewTodoIcon:{backgroundColor:e.palette.primary.main},addNewTodoText:{color:e.palette.primary.main}}})(ue),pe=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){return a.a.createElement(le,{selectedTodoId:this.props.selectedId,todos:this.props.todos,isLoading:this.props.isLoading})}}]),t}(r.PureComponent);O()(pe,"propTypes",{isLoading:R.a.bool.isRequired,selectedId:R.a.string,todos:R.a.array});var he=Object(s.connect)(function(e){return{todos:W(e.todosState.todos,e.todosState.filter.query),selectedId:e.todoState.selectedId,isLoading:e.todosState.meta.isLoading}})(pe),me=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){var e=this.props.classes;return a.a.createElement(_.h,{container:!0,className:e.container},a.a.createElement(G,null),a.a.createElement(he,null))}}]),t}(r.PureComponent);O()(me,"propTypes",{classes:R.a.object.isRequired});var fe=Object(u.withStyles)(function(e){return{container:{height:"100%",backgroundColor:e.palette.background.default,display:"flex",flexDirection:"column"}}})(me),ge=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){return a.a.createElement(fe,null)}}]),t}(r.PureComponent),Ee="todo/ADD",ve="todo/DESELECT",be="todo/REMOVE",ye="todo/ROUTE_TO",we="todo/SAVE",xe="todo/SELECT",Se=function(e){return{type:ye,meta:{_id:e}}},ke=function(){return{type:"todo/CREATE"}},Ce=function(e){return{type:xe,meta:{_id:e}}},je=function(){return{type:ve}},Oe=function(e,t){return{type:"todo/FETCH_FAILURE",meta:{_id:e},payload:{message:t},error:!0}},Te=function(e){return{type:"todo/FETCH_REQUEST",meta:{_id:e}}},Re=function(e){return{type:"todo/FETCH_SUCCESS",payload:{todo:e}}},_e=function(e){return{type:"todo/ADD_FAILURE",payload:{message:e},error:!0}},qe=function(){return{type:"todo/ADD_REQUEST"}},Ae=function(e){return{type:"todo/ADD_SUCCESS",payload:{todo:e}}},Ne=function(e,t){return{type:"todo/SAVE_FAILURE",meta:{_id:e},payload:{message:t},error:!0}},Ie=function(e){return{type:"todo/SAVE_REQUEST",meta:{_id:e}}},Le=function(e){return{type:"todo/SAVE_SUCCESS",payload:{todo:e}}},De=function(e,t){return{type:"todo/REMOVE_FAILURE",meta:{_id:e},payload:{message:t},error:!0}},Me=function(e){return{type:"todo/REMOVE_REQUEST",meta:{_id:e}}},Ue=function(e){return{type:"todo/REMOVE_SUCCESS",meta:{_id:e}}},Fe=function(e){return{type:"todo/MODIFY",todo:e}},Pe=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.description,r=e.notes,o=e.changeTitle,i=e.changeDescription,s=e.changeNotes;return a.a.createElement(_.k,{disablePadding:!0},a.a.createElement(_.l,null,a.a.createElement(_.r,{fullWidth:!0,label:p.a.t("Todo:title"),value:t,onChange:o})),a.a.createElement(_.l,null,a.a.createElement(_.r,{fullWidth:!0,label:p.a.t("Todo:description"),value:n,onChange:i})),a.a.createElement(_.l,null,a.a.createElement(_.r,{fullWidth:!0,multiline:!0,label:p.a.t("Todo:notes"),value:r,onChange:s})))}}]),t}(r.PureComponent);O()(Pe,"propTypes",{title:R.a.string.isRequired,description:R.a.string.isRequired,notes:R.a.string.isRequired,changeTitle:R.a.func.isRequired,changeDescription:R.a.func.isRequired,changeNotes:R.a.func.isRequired});var He=Pe,Ve=function(e){function t(){var e,n;m()(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=v()(this,(e=y()(t)).call.apply(e,[this].concat(a))),O()(P()(P()(n)),"handleTitleChange",function(e){(0,n.props.modify)({title:e.target.value})}),O()(P()(P()(n)),"handleDescriptionChange",function(e){(0,n.props.modify)({description:e.target.value})}),O()(P()(P()(n)),"handleNotesChange",function(e){(0,n.props.modify)({notes:e.target.value})}),O()(P()(P()(n)),"handleAddClick",function(){(0,n.props.add)()}),n}return x()(t,e),g()(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.todo,r=e.isAdding;return a.a.createElement("div",{className:t.rootContainer},a.a.createElement(_.p,null,a.a.createElement(He,{disabled:r,title:n.title,description:n.description,notes:n.notes,changeTitle:this.handleTitleChange,changeDescription:this.handleDescriptionChange,changeNotes:this.handleNotesChange}),a.a.createElement(_.e,null),a.a.createElement(_.l,{justify:"flex-end"},a.a.createElement(_.h,{container:!0,justify:"flex-end"},a.a.createElement(_.c,{variant:"contained",color:"primary",onClick:this.handleAddClick,className:t.button,disabled:r},p.a.t("Todo:add"))))))}}]),t}(r.PureComponent);O()(Ve,"propTypes",{classes:R.a.object.isRequired,todo:R.a.object.isRequired,isAdding:R.a.bool.isRequired,add:R.a.func.isRequired,modify:R.a.func.isRequired});var Qe=Object(u.withStyles)(function(e){return{rootContainer:se()({},e.mixins.gutters(),{height:"100%",paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,backgroundColor:e.palette.background.default,overflow:"scroll"}),button:{margin:e.spacing.unit}}})(Ve),Be=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){return a.a.createElement(Qe,{todo:this.props.todo,isAdding:this.props.isAdding,add:this.props.add,modify:this.props.modify})}}]),t}(r.PureComponent);O()(Be,"propTypes",{todo:R.a.object.isRequired,isAdding:R.a.bool.isRequired,deselect:R.a.func.isRequired,add:R.a.func.isRequired,modify:R.a.func.isRequired});var ze=Object(s.connect)(function(e){return{todo:e.todoState.todo,isAdding:e.todoState.meta.isAdding}},{deselect:je,add:function(){return{type:Ee}},modify:Fe})(Be),Ge=function(e){function t(){var e,n;m()(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=v()(this,(e=y()(t)).call.apply(e,[this].concat(a))),O()(P()(P()(n)),"handleTitleChange",function(e){(0,n.props.modify)({title:e.target.value})}),O()(P()(P()(n)),"handleDescriptionChange",function(e){(0,n.props.modify)({description:e.target.value})}),O()(P()(P()(n)),"handleNotesChange",function(e){(0,n.props.modify)({notes:e.target.value})}),O()(P()(P()(n)),"handleSaveClick",function(){(0,n.props.save)()}),O()(P()(P()(n)),"handleRemoveClick",function(){(0,n.props.remove)()}),O()(P()(P()(n)),"handleCompletedChange",function(e){(0,n.props.modify)({completed:e.target.checked})}),n}return x()(t,e),g()(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.todo,r=e.meta,o=!r.isLoaded||r.isLoading||r.isSaving;return a.a.createElement("div",{className:t.rootContainer},a.a.createElement(_.p,null,a.a.createElement(He,{disabled:o,title:n.title,description:n.description,notes:n.notes,changeTitle:this.handleTitleChange,changeDescription:this.handleDescriptionChange,changeNotes:this.handleNotesChange}),a.a.createElement(_.e,null),a.a.createElement(_.l,{justify:"space-between"},a.a.createElement(_.g,{control:a.a.createElement(_.q,{checked:n.completed,onChange:this.handleCompletedChange,color:"primary"}),label:p.a.t("Todo:completed")}),a.a.createElement(_.h,{container:!0,justify:"flex-end"},a.a.createElement(_.h,{item:!0},a.a.createElement(_.c,{variant:"contained",color:"secondary",onClick:this.handleRemoveClick,className:t.button,disabled:o},p.a.t("Todo:remove"))),a.a.createElement(_.h,{item:!0},a.a.createElement(_.c,{variant:"contained",color:"primary",onClick:this.handleSaveClick,className:t.button,disabled:o},p.a.t("Todo:save")))))))}}]),t}(r.PureComponent);O()(Ge,"propTypes",{classes:R.a.object.isRequired,todo:R.a.object.isRequired,meta:R.a.object.isRequired,save:R.a.func.isRequired,remove:R.a.func.isRequired,modify:R.a.func.isRequired});var Je=Object(u.withStyles)(function(e){return{rootContainer:se()({},e.mixins.gutters(),{height:"100%",paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,backgroundColor:e.palette.background.default,overflow:"scroll",boxSizing:"border-box"}),button:{margin:e.spacing.unit}}})(Ge),We=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){return this.props.selectedId?a.a.createElement(Je,{todo:this.props.todo,meta:this.props.meta,save:this.props.save,remove:this.props.remove,modify:this.props.modify}):null}}]),t}(r.PureComponent);O()(We,"propTypes",{selectedId:R.a.string,todo:R.a.object,meta:R.a.object,deselect:R.a.func.isRequired,save:R.a.func.isRequired,remove:R.a.func.isRequired,modify:R.a.func.isRequired});var Ye=Object(s.connect)(function(e){return{selectedId:e.todoState.selectedId,todo:e.todoState.todo,meta:e.todoState.meta}},{deselect:je,save:function(){return{type:we}},remove:function(){return{type:be}},modify:Fe})(We),Xe=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){var e,t=this.props,n=t.classes,r=t.selectedId;return t.isNew?e=a.a.createElement(ze,null):r&&(e=a.a.createElement(Ye,null)),a.a.createElement(_.h,{container:!0,className:n.container},a.a.createElement(_.i,{smDown:!!e},a.a.createElement(_.h,{item:!0,md:4,xs:12},a.a.createElement(ge,null))),a.a.createElement(_.i,{smDown:!e},a.a.createElement(_.h,{item:!0,md:8,xs:12},e)))}}]),t}(r.PureComponent);O()(Xe,"propTypes",{classes:R.a.object.isRequired,selectedId:R.a.string,isNew:R.a.bool.isRequired});var Ze=Object(u.withStyles)({container:{height:"100%"}})(Xe),Ke=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){return a.a.createElement(Ze,{selectedId:this.props.selectedId,isNew:this.props.isNew})}}]),t}(r.PureComponent);O()(Ke,"propTypes",{selectedId:R.a.string,isNew:R.a.bool});var $e=Object(s.connect)(function(e,t){return{selectedId:e.todoState.selectedId,isNew:"new"===t.match.params._id}})(Ke),et=n(89),tt=n.n(et),nt=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.isSideMenuOpen,r=e.showSideMenu;return a.a.createElement(_.a,{position:"absolute",className:X()(t.appBar,n&&t.appBarShift)},a.a.createElement(_.s,null,a.a.createElement(_.j,{className:X()(t.menuButton,n&&t.hide),color:"inherit",onClick:r},a.a.createElement(tt.a,null)),a.a.createElement(_.t,{variant:"title",color:"inherit",className:t.flex},p.a.t("Main:title"))))}}]),t}(r.PureComponent);O()(nt,"propTypes",{classes:R.a.object.isRequired,isSideMenuOpen:R.a.bool.isRequired,showSideMenu:R.a.func.isRequired});var rt=Object(u.withStyles)(function(e){return{flex:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:250,width:"calc(100% - ".concat(250,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},hide:{display:"none"}}})(nt),at=n(171),ot=n.n(at),it=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.isSideMenuOpen,o=e.hideSideMenu,i=a.a.createElement(_.k,{component:"nav",onClick:o,className:t.menuList},a.a.createElement(_.l,{divider:!0,className:t.menuHeader},a.a.createElement(_.o,null,a.a.createElement(_.t,{variant:"title"},p.a.t("Main:title"))),a.a.createElement(_.n,null,a.a.createElement(_.j,{className:t.menuIcon},a.a.createElement(tt.a,null)))),a.a.createElement(_.l,{button:!0,component:Z.a,to:"/todos"},a.a.createElement(_.j,{className:t.menuIcon},a.a.createElement(ot.a,null)),a.a.createElement(_.o,{primary:p.a.t("Navigation:todos")})));return a.a.createElement(r.Fragment,null,a.a.createElement(_.i,{xsDown:!0},a.a.createElement(_.f,{variant:"permanent",classes:{paper:X()(t.drawerPaper,!n&&t.drawerPaperClose)},open:n,onClose:o,ModalProps:{keepMounted:!0}},i)),a.a.createElement(_.i,{smUp:!0},a.a.createElement(_.f,{variant:"temporary",classes:{paper:X()(t.drawerPaper,!n&&t.drawerPaperClose)},open:n,onClose:o,ModalProps:{keepMounted:!0}},i)))}}]),t}(r.PureComponent);O()(it,"propTypes",{classes:R.a.object.isRequired,isSideMenuOpen:R.a.bool.isRequired,showSideMenu:R.a.func.isRequired,hideSideMenu:R.a.func.isRequired});var st=Object(u.withStyles)(function(e){return{menuList:{width:250,paddingTop:0},menuHeader:{"@media (min-width:0px) and (orientation: landscape)":{height:e.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight},"@media (min-width:600px)":{height:e.mixins.toolbar["@media (min-width:600px)"].minHeight},height:e.mixins.toolbar.minHeight},menuIcon:{marginLeft:-12},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:250,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:O()({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:7*e.spacing.unit},e.breakpoints.up("sm"),{width:9*e.spacing.unit})}})(it),ct=function(e){function t(){var e,n;m()(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=v()(this,(e=y()(t)).call.apply(e,[this].concat(a))),O()(P()(P()(n)),"state",{isSideMenuOpen:!1}),O()(P()(P()(n)),"handleShowSideMenu",function(){n.setState({isSideMenuOpen:!0})}),O()(P()(P()(n)),"handleHideSideMenu",function(){n.setState({isSideMenuOpen:!1})}),n}return x()(t,e),g()(t,[{key:"render",value:function(){var e=this.state.isSideMenuOpen;return a.a.createElement(r.Fragment,null,a.a.createElement(rt,{isSideMenuOpen:e,showSideMenu:this.handleShowSideMenu}),a.a.createElement(st,{hideSideMenu:this.handleHideSideMenu,isSideMenuOpen:e,showSideMenu:this.handleShowSideMenu}))}}]),t}(r.PureComponent),dt=n(86),ut=n.n(dt),lt=n(70),pt=n.n(lt),ht=n(172),mt=n.n(ht),ft=function(e){function t(){var e,n;m()(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=v()(this,(e=y()(t)).call.apply(e,[this].concat(a))),O()(P()(P()(n)),"state",{open:!1,notification:{}}),O()(P()(P()(n)),"handleClose",function(){n.setState({open:!1})}),O()(P()(P()(n)),"handleExited",function(){n.props.shift()}),n}return x()(t,e),g()(t,[{key:"componentDidUpdate",value:function(){var e=this.props.notifications,t=this.state,n=t.open,r=t.notification;e.length>1&&n?this.setState({open:!1}):e.length>0&&e[0].key!==r.key&&this.setState({open:!0,notification:e[0]})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.notification,r=t.open,o=n.key,i=n.message;return a.a.createElement(ut.a,{key:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:r,autoHideDuration:6e3,onClose:this.handleClose,onExited:this.handleExited,message:a.a.createElement("span",{id:"message-id"},i),action:[a.a.createElement(pt.a,{key:"close","aria-label":"Close",color:"inherit",className:e.close,onClick:this.handleClose},a.a.createElement(mt.a,null))]})}}]),t}(a.a.Component);O()(ft,"propTypes",{classes:R.a.object.isRequired,notifications:R.a.array.isRequired,shift:R.a.func.isRequired});var gt=Object(u.withStyles)(function(e){return{close:{padding:e.spacing.unit/2}}})(ft),Et="notifications/SHIFT",vt=function(e){return{type:"notifications/ADD",notification:e}},bt=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){return a.a.createElement(gt,{notifications:this.props.notifications,shift:this.props.shift})}}]),t}(r.PureComponent);O()(bt,"propTypes",{notifications:R.a.array.isRequired,shift:R.a.func.isRequired});var yt=Object(s.connect)(function(e){return{notifications:e.notificationsState.notifications}},{shift:function(){return{type:Et}}})(bt),wt=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes;return a.a.createElement("div",{className:n.root},a.a.createElement(ct,null),a.a.createElement(yt,null),a.a.createElement("div",{className:n.content},t))}}]),t}(r.PureComponent);O()(wt,"propTypes",{children:R.a.node,classes:R.a.object.isRequired});var xt=Object(u.withStyles)(function(e){return{root:{overflow:"hidden",position:"absolute",display:"flex",top:0,right:0,bottom:0,left:0,flexGrow:1},content:{"@media (min-width:0px) and (orientation: landscape)":{marginTop:e.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight},"@media (min-width:600px)":{marginTop:e.mixins.toolbar["@media (min-width:600px)"].minHeight},marginTop:e.mixins.toolbar.minHeight,flexGrow:1}}})(wt),St=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return x()(t,e),g()(t,[{key:"render",value:function(){return a.a.createElement(xt,null,a.a.createElement(S.a,null,a.a.createElement(k.a,{exact:!0,path:"/todos/:_id?",component:$e})))}}]),t}(r.PureComponent),kt=Object(C.a)(St),Ct={en:n(173),nl:n(174)},jt=n(36),Ot=n(175),Tt=Object(jt.c)({notifications:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"notifications/ADD":return e.concat(se()({},t.notification,{key:(new Date).getTime()}));case Et:return e.filter(function(e,t){return 0!==t});default:return e}}}),Rt={isInitial:!0,isLoading:!1,error:""},_t={query:""},qt=Object(jt.c)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todos/FETCH_SUCCESS":return t.payload.todos;case"todo/SAVE_SUCCESS":return e.map(function(e){return e._id===t.payload.todo._id?t.payload.todo:e});case"todo/ADD_SUCCESS":return e.concat(t.payload.todo);case"todo/REMOVE_SUCCESS":return e.filter(function(e){return e._id!==t.meta._id});default:return e}},meta:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todos/FETCH_REQUEST":return se()({},e,{isInitial:!1,isLoading:!0,error:""});case"todos/FETCH_SUCCESS":return se()({},e,{isLoading:!1});case"todos/FETCH_FAILURE":return se()({},e,{isLoading:!1,error:t.payload.message});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todos/SEARCH":return se()({},e,{query:t.query});default:return e}}}),At={title:"",description:"",notes:"",completed:!1},Nt={isLoading:!1,isLoaded:!1,isSaving:!1,isAdding:!1,isRemoving:!1,error:""},It=Object(jt.c)({selectedId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return t.meta._id;case"todo/CREATE":case ve:return null;default:return e}},todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todo/CREATE":case xe:case ve:return At;case"todo/FETCH_SUCCESS":case"todo/SAVE_SUCCESS":return t.payload.todo;case"todo/REMOVE_SUCCESS":return At;case"todo/MODIFY":return se()({},e,t.todo);default:return e}},meta:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return Nt;case"todo/FETCH_REQUEST":return se()({},e,{isLoading:!0});case"todo/FETCH_SUCCESS":return se()({},e,{isLoading:!1,isLoaded:!0});case"todo/FETCH_FAILURE":return se()({},e,{isLoading:!1,error:t.payload.message});case"todo/SAVE_REQUEST":return se()({},e,{isSaving:!0,error:""});case"todo/SAVE_SUCCESS":return se()({},e,{isSaving:!1});case"todo/SAVE_FAILURE":return se()({},e,{isSaving:!1,error:t.payload.message});case"todo/ADD_REQUEST":return se()({},e,{isAdding:!0,error:""});case"todo/ADD_SUCCESS":return se()({},e,{isAdding:!1});case"todo/ADD_FAILURE":return se()({},e,{isAdding:!1,error:t.payload.message});case"todo/REMOVE_REQUEST":return se()({},e,{isRemoving:!0,error:""});case"todo/REMOVE_SUCCESS":return se()({},e,{isRemoving:!1});case"todo/REMOVE_FAILURE":return se()({},e,{isRemoving:!1,error:t.payload.message});default:return e}}}),Lt=Object(jt.c)({notificationsState:Tt,todosState:qt,todoState:It}),Dt=n(18),Mt=n.n(Dt),Ut=n(5),Ft=n(410),Pt=Mt.a.mark(Vt),Ht=Mt.a.mark(Qt);function Vt(){var e;return Mt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=Mt.a.mark(function e(){var t,n,r;return Mt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ut.f)(c.LOCATION_CHANGE);case 2:return t=e.sent,n=t.payload.location.pathname,r=["/todos","/todos/:_id"].filter(function(e){return Object(Ft.a)(n,{path:e})}),e.next=8,Object(Ut.a)(r.map(function(e){var t=Object(Ft.a)(n,{path:e}),r=t.params,a=t.isExact;switch(e){case"/todos":return Object(Ut.d)(I(a));case"/todos/:_id":return Object(Ut.d)(Se(r._id));default:return null}}));case 8:case"end":return e.stop()}},e,this)});case 1:return t.delegateYield(e(),"t0",3);case 3:t.next=1;break;case 5:case"end":return t.stop()}},Pt,this)}function Qt(){return Mt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ut.a)([Vt].map(function(e){return Object(Ut.c)(e)}));case 2:case"end":return e.stop()}},Ht,this)}var Bt=n(55),zt=n.n(Bt),Gt=function(e){return"/api/todos/".concat(e)},Jt=function(){var e=zt()(Mt.a.mark(function e(){var t;return Mt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/todos");case 3:t=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error(p.a.t("Api:networkError"));case 9:if(t.ok){e.next=13;break}throw new Error(p.a.t("Api:serverError"));case 13:return e.abrupt("return",t.json());case 14:case"end":return e.stop()}},e,this,[[0,6]])}));return function(){return e.apply(this,arguments)}}(),Wt=function(){var e=zt()(Mt.a.mark(function e(t){var n;return Mt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(Gt(t));case 3:n=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error(p.a.t("Api:networkError"));case 9:if(n.ok){e.next=13;break}throw new Error(p.a.t("Api:serverError"));case 13:return e.abrupt("return",n.json());case 14:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),Yt=function(){var e=zt()(Mt.a.mark(function e(t){var n;return Mt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:n=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error(p.a.t("Api:networkError"));case 9:if(n.ok){e.next=13;break}throw new Error(p.a.t("Api:serverError"));case 13:return e.abrupt("return",n.json());case 14:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),Xt=function(){var e=zt()(Mt.a.mark(function e(t){var n;return Mt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(Gt(t._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:n=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error(p.a.t("Api:networkError"));case 9:if(n.ok){e.next=13;break}throw new Error(p.a.t("Api:serverError"));case 13:return e.abrupt("return",n.json());case 14:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),Zt=function(){var e=zt()(Mt.a.mark(function e(t){var n;return Mt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(Gt(t),{method:"DELETE"});case 3:n=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error(p.a.t("Api:networkError"));case 9:if(n.ok){e.next=11;break}throw new Error(p.a.t("Api:serverError"));case 11:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),Kt=Mt.a.mark(tn),$t=Mt.a.mark(nn),en=Mt.a.mark(rn);function tn(){var e,t;return Mt.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(Ut.f)(N);case 3:return e=n.sent,n.next=6,Object(Ut.e)(function(e){return e.todosState.meta.isInitial});case 6:if(t=n.sent,!e.meta.isExact){n.next=10;break}return n.next=10,Object(Ut.d)(je());case 10:if(!t){n.next=13;break}return n.next=13,Object(Ut.d)(L());case 13:n.next=0;break;case 15:case"end":return n.stop()}},Kt,this)}function nn(){var e,t,n;return Mt.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,Object(Ut.f)([q,A]);case 3:return e=r.sent,r.next=6,Object(Ut.d)(M());case 6:return r.prev=6,r.next=9,Object(Ut.b)(Jt);case 9:return t=r.sent,r.next=12,Object(Ut.d)(U(t));case 12:if(e.type!==A){r.next=15;break}return r.next=15,Object(Ut.d)(vt({message:p.a.t("Todos:refreshed")}));case 15:r.next=24;break;case 17:return r.prev=17,r.t0=r.catch(6),n=r.t0&&r.t0.message?r.t0.message:p.a.t("Todos:unknownError"),r.next=22,Object(Ut.d)(D(n));case 22:return r.next=24,Object(Ut.d)(vt({message:n}));case 24:r.next=0;break;case 26:case"end":return r.stop()}},$t,this,[[6,17]])}function rn(){return Mt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ut.a)([tn,nn].map(function(e){return Object(Ut.c)(e)}));case 2:case"end":return e.stop()}},en,this)}var an=Mt.a.mark(ln),on=Mt.a.mark(pn),sn=Mt.a.mark(hn),cn=Mt.a.mark(mn),dn=Mt.a.mark(fn),un=Mt.a.mark(gn);function ln(){var e,t;return Mt.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(Ut.f)(ye);case 3:return e=n.sent,n.next=6,Object(Ut.e)(function(e){return e.todoState.selectedId});case 6:if(t=n.sent,"new"!==e.meta._id){n.next=12;break}return n.next=10,Object(Ut.d)(ke());case 10:n.next=15;break;case 12:if(t===e.meta._id){n.next=15;break}return n.next=15,Object(Ut.d)(Ce(e.meta._id));case 15:n.next=0;break;case 17:case"end":return n.stop()}},an,this)}function pn(){var e,t,n;return Mt.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,Object(Ut.f)(xe);case 3:return e=r.sent,r.next=6,Object(Ut.d)(Te(e.meta._id));case 6:return r.prev=6,r.next=9,Object(Ut.b)(Wt,e.meta._id);case 9:return t=r.sent,r.next=12,Object(Ut.d)(Re(t));case 12:r.next=23;break;case 14:return r.prev=14,r.t0=r.catch(6),n=r.t0&&r.t0.message?r.t0.message:p.a.t("Todos:unknownError"),r.next=19,Object(Ut.d)(Oe(e.meta._id,n));case 19:return r.next=21,Object(Ut.d)(Object(c.push)("/"));case 21:return r.next=23,Object(Ut.d)(vt({message:n}));case 23:r.next=0;break;case 25:case"end":return r.stop()}},on,this,[[6,14]])}function hn(){var e,t,n;return Mt.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,Object(Ut.f)(Ee);case 3:return r.next=5,Object(Ut.e)(function(e){return e.todoState.todo});case 5:return e=r.sent,r.next=8,Object(Ut.d)(qe());case 8:return r.prev=8,r.next=11,Object(Ut.b)(Yt,e);case 11:return t=r.sent,r.next=14,Object(Ut.d)(Ae(t));case 14:return r.next=16,Object(Ut.d)(Object(c.push)("/".concat(t._id)));case 16:return r.next=18,Object(Ut.d)(vt({message:p.a.t("Todo:added")}));case 18:r.next=27;break;case 20:return r.prev=20,r.t0=r.catch(8),n=r.t0&&r.t0.message?r.t0.message:p.a.t("Todos:unknownError"),r.next=25,Object(Ut.d)(_e(n));case 25:return r.next=27,Object(Ut.d)(vt({message:n}));case 27:r.next=0;break;case 29:case"end":return r.stop()}},sn,this,[[8,20]])}function mn(){var e,t,n;return Mt.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,Object(Ut.f)(we);case 3:return r.next=5,Object(Ut.e)(function(e){return e.todoState.todo});case 5:return e=r.sent,r.next=8,Object(Ut.d)(Ie());case 8:return r.prev=8,r.next=11,Object(Ut.b)(Xt,e);case 11:return t=r.sent,r.next=14,Object(Ut.d)(Le(t));case 14:return r.next=16,Object(Ut.d)(vt({message:p.a.t("Todo:saved")}));case 16:r.next=25;break;case 18:return r.prev=18,r.t0=r.catch(8),n=r.t0&&r.t0.message?r.t0.message:p.a.t("Todos:unknownError"),r.next=23,Object(Ut.d)(Ne(e._id,n));case 23:return r.next=25,Object(Ut.d)(vt({message:n}));case 25:r.next=0;break;case 27:case"end":return r.stop()}},cn,this,[[8,18]])}function fn(){var e,t;return Mt.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(Ut.f)(be);case 3:return n.next=5,Object(Ut.e)(function(e){return e.todoState.todo});case 5:return e=n.sent,n.next=8,Object(Ut.d)(Me(e._id));case 8:return n.prev=8,n.next=11,Object(Ut.b)(Zt,e._id);case 11:return n.next=13,Object(Ut.d)(Ue(e._id));case 13:return n.next=15,Object(Ut.d)(Object(c.push)("/"));case 15:return n.next=17,Object(Ut.d)(vt({message:p.a.t("Todo:removed")}));case 17:n.next=26;break;case 19:return n.prev=19,n.t0=n.catch(8),t=n.t0&&n.t0.message?n.t0.message:p.a.t("Todos:unknownError"),n.next=24,Object(Ut.d)(De(e._id,t));case 24:return n.next=26,Object(Ut.d)(vt({message:t}));case 26:n.next=0;break;case 28:case"end":return n.stop()}},dn,this,[[8,19]])}function gn(){return Mt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ut.a)([ln,pn,hn,mn,fn].map(function(e){return Object(Ut.c)(e)}));case 2:case"end":return e.stop()}},un,this)}var En=Mt.a.mark(vn);function vn(){return Mt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ut.a)([Qt,rn,gn].map(function(e){return Object(Ut.c)(e)}));case 2:case"end":return e.stop()}},En,this)}var bn=vn,yn=function(e){var t=Object(Ot.a)(),n=Object(jt.d)(Object(jt.a)(Object(c.routerMiddleware)(e),t)),r=Object(jt.e)(Object(c.connectRouter)(e)(Lt),n);return t.run(bn),r};p.a.init({lng:"nl",fallbackLng:"en",resources:Ct});var wn=Object(u.createMuiTheme)({palette:{primary:l.blue}}),xn=Object(d.a)(),Sn=yn(xn);i.a.render(a.a.createElement(s.Provider,{store:Sn},a.a.createElement(u.MuiThemeProvider,{theme:wn},a.a.createElement(c.ConnectedRouter,{history:xn},a.a.createElement(kt,null)))),document.getElementById("root"))}},[[236,2,1]]]);
//# sourceMappingURL=main.6655d4f0.chunk.js.map