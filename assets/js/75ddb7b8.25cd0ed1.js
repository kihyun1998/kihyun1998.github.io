"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[3020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=l,m=u["".concat(i,".").concat(d)]||u[d]||k[d]||r;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:l,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));const r={slug:"Bloc",title:"Flutter Bloc 1",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","Bloc"]},s="Flutter Bloc 1",o={permalink:"/blog/Bloc",editUrl:"https://github.com/kihyun1998/blogsaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-16-til3/index.md",source:"@site/blog/2023-12-16-til3/index.md",title:"Flutter Bloc 1",description:"---",date:"2023-12-16T00:00:00.000Z",formattedDate:"December 16, 2023",tags:[{label:"TIL",permalink:"/blog/tags/til"},{label:"\ud50c\ub7ec\ud130",permalink:"/blog/tags/\ud50c\ub7ec\ud130"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"Bloc",permalink:"/blog/tags/bloc"}],readingTime:2.46,hasTruncateMarker:!1,authors:[{name:"Park Ki Hyun",title:"Deveploper",url:"https://github.com/kihyun1998",imageURL:"https://github.com/kihyun1998.png",key:"kihyun"}],frontMatter:{slug:"Bloc",title:"Flutter Bloc 1",authors:["kihyun"],tags:["TIL","\ud50c\ub7ec\ud130","flutter","Bloc"]},nextItem:{title:"MVVM \uc544\ud0a4\ud14d\ucc98",permalink:"/blog/mvvm"}},i={authorsImageUrls:[void 0]},c=[{value:"Bloc\uc5d0 \ub300\ud574\uc11c",id:"bloc\uc5d0-\ub300\ud574\uc11c",level:2},{value:"state",id:"state",level:3},{value:"event",id:"event",level:3},{value:"bloc",id:"bloc",level:3},{value:"\uae68\ub2ec\uc74c",id:"\uae68\ub2ec\uc74c",level:3}],p={toc:c},u="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\uc77c\ub2e8 vs code \ud655\uc7a5\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"bloc"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"dart data class generator"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"dart-import"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pubspec assist")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dart data class generator"),"\uac00 \uc788\uc73c\uba74 \ucf54\ub4dc \uc790\ub3d9 \uc0dd\uc131\uc744 \ud3b8\ud558\uac8c \ud574\uc900\ub2e4. (copyWith, constructor \ub4f1.. )"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pubspec assist"),"\uac00 \uc788\uc73c\uba74 \ud328\ud0a4\uc9c0\ub97c \uc27d\uac8c \ub123\uc744 \uc218 \uc788\uc74c"),(0,l.kt)("h2",{id:"bloc\uc5d0-\ub300\ud574\uc11c"},"Bloc\uc5d0 \ub300\ud574\uc11c"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\uc601\uc0c1\uc744 \ubcf4\uba70 \ub530\ub77c\ud558\uba74\uc11c \uc800\ubc88\uc8fc\uc5d0 KOSTA\uc5d0\uc11c \ubc30\uc6b4 Bloc \uc0ac\uc6a9\ubc95\uc5d0 \ub300\ud574 \uc775\ud788\uace0 \uc788\uc5c8\ub2e4."),(0,l.kt)("p",null,"\uc601\uc0c1\uc740 \ub2e4\ub978 \ubc29\uc2dd\uc774\ub77c \ud5f7\uac08\ub838\ub294\ub370 VS Code\uc758 Bloc extension\uc744 \uc0ac\uc6a9\ud558\uc5ec New Bloc\uc744 \ud574\uac00\uc9c0\uad6c Bloc\uc744 \ub9cc\ub4e4\uc5c8\ub2e4."),(0,l.kt)("p",null,"3\uac1c\uc758 \ud30c\uc77c\uc774 \ub098\uc628\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"bloc"),",",(0,l.kt)("inlineCode",{parentName:"p"},"event"),",",(0,l.kt)("inlineCode",{parentName:"p"},"state")),(0,l.kt)("h3",{id:"state"},"state"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"class TasksState extends Equatable {\n  const TasksState({\n    this.allTasks = const <Task>[],\n  });\n\n  final List<Task> allTasks;\n\n  @override\n  List<Object> get props => [allTasks];\n}\n")),(0,l.kt)("p",null,"\ud604\uc7ac state\uc5d0\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"List<Task>")," \ud0c0\uc785\uc758 allTasks\ub77c\ub294 \uc0c1\ud0dc\uac00 \ud558\ub098 \uc788\ub2e4."),(0,l.kt)("p",null,"\uc5ec\ub7ec \uac1c \ucd94\uac00\ud558\uba74 \uc5ec\ub7ec \uac1c \ub418\ub294\ub4ef?"),(0,l.kt)("h3",{id:"event"},"event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"sealed class TasksEvent extends Equatable {\n  const TasksEvent();\n\n  @override\n  List<Object> get props => [];\n}\n\nclass AddTask extends TasksEvent {\n  final Task task;\n  const AddTask({\n    required this.task,\n  });\n\n  @override\n  List<Object> get props => [task];\n}\n\nclass UpdateTask extends TasksEvent {\n  final Task task;\n  const UpdateTask({\n    required this.task,\n  });\n\n  @override\n  List<Object> get props => [task];\n}\n\nclass DeleteTask extends TasksEvent {\n  final Task task;\n  const DeleteTask({\n    required this.task,\n  });\n\n  @override\n  List<Object> get props => [task];\n}\n\n")),(0,l.kt)("p",null,"\uc774\ub807\uac8c \uc11c\ube44\uc2a4\ub4e4 \ub9cc\ub4e4 \uc218 \uc788\ub2e4. \ud604\uc7ac \uc804\ubd80 \uad6c\ud604\ub41c\uac74 \uc544\ub2cc.. \uac70\uac19\uc740\ub370 \uc77c\ub2e8 \uc774\ub530 \uc218\uc815"),(0,l.kt)("h3",{id:"bloc"},"bloc"),(0,l.kt)("p",null,"\ud558\ub2e4\uac00 \uae68\ub2ec\uc558\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"class TasksBloc extends Bloc<TasksEvent, TasksState> {\n  TasksBloc() : super(const TasksState()) {\n    on<AddTask>(_onAddTask);\n  }\n\n  void _onAddTask(AddTask event, emit) {\n    emit(TasksState(\n      allTasks: [...state.allTasks, event.task],\n    ));\n  }\n}\n")),(0,l.kt)("p",null,"Bloc\uc744 extends \ud560 \ub54c ",(0,l.kt)("inlineCode",{parentName:"p"},"Bloc<event, state>"),"\ub85c \ud558\ub77c\uace0 \ubc30\uc6e0\ub2e4. \uadfc\ub370 \ud560 \ub54c state\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),"\ub098 ",(0,l.kt)("inlineCode",{parentName:"p"},"bool"),"\uac19\uc740 \ud0c0\uc785\uc73c\ub85c\ub9cc \uc9c0\uc815\ud574\uc918\uc11c \uadf8\ub0e5 state\ub85c \uc0ac\uc6a9\ud558\uba74 \ub410\uc5c8\ub294\ub370 class\ub85c state \ud0c0\uc785 \uc9c0\uc815\ud574\uc8fc\ub2c8 state.allTasks\ub85c \ud574\uc57c \ud558\ub354\ub77c.. "),(0,l.kt)("h3",{id:"\uae68\ub2ec\uc74c"},"\uae68\ub2ec\uc74c"),(0,l.kt)("p",null,"bloc\uc5d0\uc11c \ud070 \uc2e4\uc218\uac00 \uc788\uc5c8\ub2e4. \uc704\ucf54\ub4dc \ucc98\ub7fc \uc791\uc131\ud558\uba74 \ub418\ub294\ub370 \ucf54\ub4dc \uc218\ub97c \uc904\uc5ec\ubcf4\uaca0\ub2e4\uace0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"  void _onAddTask(AddTask event, emit) {\n    emit(\n      [...state.allTasks, event.task],\n    );\n  }\n")),(0,l.kt)("p",null,"\uc704\ucc98\ub7fc \uc791\uc131\ud588\ub2e4\uac00 \uc791\ub3d9\uc744 \uc548\ud574\uc11c \uc0b4\uc9dd \uc5b4\uc9c0\ub7ec\uc6e0\ub2e4."),(0,l.kt)("p",null,"Bloc\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"Bloc<TasksEvent,TasksState>"),"\uc774\ub2c8 TasksState type\uc5d0 \ub9de\ucdb0\uc918\uc57c \ud558\ub098\ubcf4\ub2e4."))}k.isMDXComponent=!0}}]);