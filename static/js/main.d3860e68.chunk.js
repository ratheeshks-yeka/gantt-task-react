(this["webpackJsonpgantt-task-react-example"]=this["webpackJsonpgantt-task-react-example"]||[]).push([[0],{10:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);a(10);var n,r=a(0),o=a.n(r),i=a(9),s=a.n(i),c=a(4),l=a.n(c),u=a(5),d=a(1),g=(a(8),a(3)),h=a(7);!function(e){e.QuarterDay="Quarter Day",e.HalfDay="Half Day",e.Day="Day",e.Week="Week",e.Month="Month"}(n||(n={}));var m=function(e,t,a){return new Date(e.getFullYear()+("year"===a?t:0),e.getMonth()+("month"===a?t:0),e.getDate()+("day"===a?t:0),e.getHours()+("hour"===a?t:0),e.getMinutes()+("minute"===a?t:0),e.getSeconds()+("second"===a?t:0),e.getMilliseconds()+("millisecond"===a?t:0))},f=function(e,t){var a=["millisecond","second","minute","hour","day","month","year"],n=function(e){var n=a.indexOf(t);return a.indexOf(e)<=n};return new Date(e.getFullYear(),n("year")?0:e.getMonth(),n("month")?1:e.getDate(),n("day")?0:e.getHours(),n("hour")?0:e.getMinutes(),n("minute")?0:e.getSeconds(),n("second")?0:e.getMilliseconds())},v=function(e,t){var a,r=e[0].start,o=e[0].start,i=Object(h.a)(e);try{for(i.s();!(a=i.n()).done;){var s=a.value;s.start<r&&(r=s.start),s.end>o&&(o=s.end)}}catch(c){i.e(c)}finally{i.f()}switch(t){case n.Month:r=m(r,-1,"month"),r=f(r,"month"),o=m(o,1,"year"),o=f(o,"year");break;case n.Week:r=f(r,"day"),o=f(o,"day"),r=m(y(r),-7,"day"),o=m(o,1.5,"month");break;default:r=f(r,"day"),o=f(o,"day"),r=m(r,-1,"day"),o=m(o,19,"day")}return[r,o]},b=function(e,t,a){for(var r=new Date(e),o=[r];r<t;){switch(a){case n.Month:r=m(r,1,"month");break;case n.Week:r=m(r,7,"day");break;case n.Day:r=m(r,1,"day");break;case n.HalfDay:r=m(r,12,"hour");break;case n.QuarterDay:r=m(r,6,"hour")}o.push(r)}return o},k=function(e,t){var a=new Intl.DateTimeFormat(t,{month:"long"}).format(e);return a=a.replace(a[0],a[0].toLocaleUpperCase())},y=function(e){var t=e.getDay(),a=e.getDate()-t+(0===t?-6:1);return new Date(e.setDate(a))},x=function(e){var t=new Date(e.valueOf()),a=(t.getDay()+6)%7;t.setDate(t.getDate()-a+3);var n=t.valueOf();t.setMonth(0,1),4!==t.getDay()&&t.setMonth(0,1+(4-t.getDay()+7)%7);var r=(1+Math.ceil((n-t.valueOf())/6048e5)).toString();return 1===r.length?"0".concat(r):r},p="_task-list-header-module__ganttTable__3_ygE",w="_task-list-header-module__ganttTable_Header__1nBOt",T="_task-list-header-module__ganttTable_HeaderSeparator__2eZzQ",_="_task-list-header-module__ganttTable_HeaderItem__WuQ0f",O=function(e){var t=e.headerHeight,a=e.fontFamily,n=e.fontSize,r=e.rowWidth;return o.a.createElement("div",{className:p,style:{fontFamily:a,fontSize:n}},o.a.createElement("div",{className:w,style:{height:t-2}},o.a.createElement("div",{className:_,style:{minWidth:r}},"\xa0Name"),o.a.createElement("div",{className:T,style:{height:.5*t,marginTop:.2*t}}),o.a.createElement("div",{className:_,style:{minWidth:r}},"\xa0From"),o.a.createElement("div",{className:T,style:{height:.5*t,marginTop:.25*t}}),o.a.createElement("div",{className:_,style:{minWidth:r}},"\xa0To")))},j="_task-list-table-module__taskListWrapper__3ZbQT",E="_task-list-table-module__taskListTableRow__34SS0",D="_task-list-table-module__taskListCell__3lLk3",C=function(e){var t=e.rowHeight,a=e.rowWidth,n=e.tasks,r=e.fontFamily,i=e.fontSize,s=e.locale,c={weekday:"short",year:"numeric",month:"long",day:"numeric"};return o.a.createElement("div",{className:j,style:{fontFamily:r,fontSize:i}},n.map((function(e){return o.a.createElement("div",{className:E,style:{height:t},key:"".concat(e.id,"row")},o.a.createElement("div",{className:D,style:{minWidth:a,maxWidth:a},title:e.name},"\xa0",e.name),o.a.createElement("div",{className:D,style:{minWidth:a,maxWidth:a}},"\xa0",e.start.toLocaleDateString(s,c)),o.a.createElement("div",{className:D,style:{minWidth:a,maxWidth:a}},"\xa0",e.end.toLocaleDateString(s,c)))})))},S="_tooltip-module__tooltipDefaultContainer__3T42e",M="_tooltip-module__tooltipDefaultContainerParagraph__29NTg",N="_tooltip-module__tooltipDetailsContainer__25P-K",F=function(e){var t=e.x,a=e.rowHeight,n=e.svgHeight,i=e.task,s=e.fontSize,c=e.fontFamily,l=e.TooltipContent,u=Object(r.useRef)(null),g=Object(r.useState)(1e3),h=Object(d.a)(g,2),m=h[0],f=h[1],v=Object(r.useState)((i.index-1)*a),b=Object(d.a)(v,2),k=b[0],y=b[1];return Object(r.useEffect)((function(){if(u.current){var e=u.current.offsetHeight,t=i.index*a+a;e>t?y(.5*e):t+e>n&&y(n-1.05*e),f(1.1*u.current.scrollWidth)}}),[u,i]),o.a.createElement("foreignObject",{x:t,y:k,width:m,height:1e3},o.a.createElement("div",{ref:u,className:N},o.a.createElement(l,{task:i,fontSize:s,fontFamily:c})))},H=function(e){var t=e.task,a=e.fontSize,n={fontSize:a,fontFamily:e.fontFamily};return o.a.createElement("div",{className:S,style:n},o.a.createElement("b",{style:{fontSize:a+6}},"".concat(t.name,": ").concat(t.start.getDate(),"-").concat(t.start.getMonth()+1,"-").concat(t.start.getFullYear()," - ").concat(t.end.getDate(),"-").concat(t.end.getMonth()+1,"-").concat(t.end.getFullYear())),t.end.getTime()-t.start.getTime()!==0&&o.a.createElement("p",{className:M},"Duration: ".concat(~~((t.end.getTime()-t.start.getTime())/864e5)," day(s)")),o.a.createElement("p",{className:M},!!t.progress&&"Progress: ".concat(t.progress," %")))},W="_scroll-module__scroll__3f9LK",L=function(e){var t=e.scroll,a=e.ganttHeight,n=e.ganttFullHeight,i=e.headerHeight,s=e.onScroll,c=Object(r.useRef)(null);return Object(r.useEffect)((function(){c.current&&(c.current.scrollTop=t)}),[t]),o.a.createElement("div",{style:{height:a,marginTop:i},className:W,onScroll:s,ref:c},o.a.createElement("div",{style:{height:n,width:1}}))},R=function(e){var t=e.headerHeight,a=e.fontFamily,n=e.fontSize,i=e.rowWidth,s=e.rowHeight,c=e.scrollY,l=e.tasks,u=e.selectedTask,d=e.setSelectedTask,g=e.locale,h=e.ganttHeight,m=e.horizontalContainerClass,f=e.TaskListHeader,v=e.TaskListTable,b=Object(r.useRef)(null);Object(r.useEffect)((function(){b.current&&(b.current.scrollTop=c)}),[c]);var k={headerHeight:t,fontFamily:a,fontSize:n,rowWidth:i},y={rowHeight:s,rowWidth:i,fontFamily:a,fontSize:n,tasks:l,locale:g,selectedTaskId:u?u.id:"",setSelectedTask:d};return o.a.createElement("div",null,o.a.createElement(f,Object.assign({},k)),o.a.createElement("div",{ref:b,className:m,style:h?{height:h}:{}},o.a.createElement(v,Object.assign({},y))))},z="_gantt-module__ganttVerticalContainer__CZjuD",Y="_gantt-module__horizontalContainer__2B2zv",P="_gantt-module__wrapper__3eULf",B="_grid-module__gridRow__2dZTy",I="_grid-module__gridRowLine__3rUKi",K="_grid-module__gridTick__RuwuK",Q=function(e){var t,a=e.tasks,n=e.dates,r=e.rowHeight,i=e.gridWidth,s=e.columnWidth,c=e.todayColor,l=0,u=[],d=[o.a.createElement("line",{key:"RowLineFirst",x:"0",y1:0,x2:i,y2:0,className:I})],g=Object(h.a)(a);try{for(g.s();!(t=g.n()).done;){var f=t.value;u.push(o.a.createElement("rect",{key:"Row"+f.id,x:"0",y:l,width:i,height:r,className:B})),d.push(o.a.createElement("line",{key:"RowLine"+f.id,x:"0",y1:l+r,x2:i,y2:l+r,className:I})),l+=r}}catch(w){g.e(w)}finally{g.f()}for(var v=new Date,b=0,k=[],y=o.a.createElement("rect",null),x=0;x<n.length;x++){var p=n[x];k.push(o.a.createElement("line",{key:p.getTime(),x1:b,y1:0,x2:b,y2:l,className:K})),(x+1!==n.length&&p.getTime()<v.getTime()&&n[x+1].getTime()>=v.getTime()||0!==x&&x+1===n.length&&p.getTime()<v.getTime()&&m(p,p.getTime()-n[x-1].getTime(),"millisecond").getTime()>=v.getTime())&&(y=o.a.createElement("rect",{x:b,y:0,width:s,height:l,fill:c})),b+=s}return o.a.createElement("g",{className:"gridBody"},o.a.createElement("g",{className:"rows"},u),o.a.createElement("g",{className:"rowLines"},d),o.a.createElement("g",{className:"ticks"},k),o.a.createElement("g",{className:"today"},y))},V=function(e){return o.a.createElement("g",{className:"grid"},o.a.createElement(Q,Object.assign({},e)))},A="_calendar-module__calendarBottomText__9w8d5",U="_calendar-module__calendarTopTick__1rLuZ",X="_calendar-module__calendarTopText__2q1Kt",G="_calendar-module__calendarHeader__35nLX",Z=function(e){var t=e.value,a=e.x1Line,n=e.y1Line,r=e.y2Line,i=e.xText,s=e.yText;return o.a.createElement("g",{className:"calendarTop"},o.a.createElement("line",{x1:a,y1:n,x2:a,y2:r,className:U,key:t+"line"}),o.a.createElement("text",{key:t+"text",y:s,x:i,className:X},t))},J=function(e){var t=e.dateSetup,a=e.locale,r=e.viewMode,i=e.headerHeight,s=e.columnWidth,c=e.fontFamily,l=e.fontSize,u=[],g=[];switch(t.viewMode){case n.Month:var h=function(){for(var e=[],n=[],r=6*s,c=.5*i,l=0;l<t.dates.length;l++){var u=t.dates[l],d=k(u,a);if(n.push(o.a.createElement("text",{key:d+u.getFullYear(),y:.8*i,x:s*l+.5*s,className:A},d)),0===l||u.getFullYear()!==t.dates[l-1].getFullYear()){var g=u.getFullYear().toString();e.push(o.a.createElement(Z,{key:g,value:g,x1Line:s*l,y1Line:0,y2Line:c,xText:r+s*l-u.getMonth()*s,yText:.9*c}))}}return[e,n]}(),m=Object(d.a)(h,2);u=m[0],g=m[1];break;case n.Week:var f=function(){for(var e=[],n=[],r=1,c=.5*i,l=t.dates,u=l.length-1;u>=0;u--){var d=l[u],g="";0!==u&&d.getMonth()===l[u-1].getMonth()||(g="".concat(k(d,a),", ").concat(d.getFullYear()));var h="W".concat(x(d));n.push(o.a.createElement("text",{key:d.getTime(),y:.8*i,x:s*u,className:A},h)),g&&(u!==l.length-1&&e.push(o.a.createElement(Z,{key:g,value:g,x1Line:s*u+r*s,y1Line:0,y2Line:c,xText:s*u+s*r*.5,yText:.9*c})),r=0),r++}return[e,n]}(),v=Object(d.a)(f,2);u=v[0],g=v[1];break;case n.Day:var b=function(){for(var e=[],n=[],r=.5*i,c=t.dates,l=0;l<c.length;l++){var u=c[l],d=u.getDate().toString();if(n.push(o.a.createElement("text",{key:u.getTime(),y:.8*i,x:s*l+.5*s,className:A},d)),l+1!==c.length&&u.getMonth()!==c[l+1].getMonth()){var g=k(u,a);e.push(o.a.createElement(Z,{key:g+u.getFullYear(),value:g,x1Line:s*(l+1),y1Line:0,y2Line:r,xText:s*(l+1)-u.getDate()*s*.5,yText:.9*r}))}}return[e,n]}(),y=Object(d.a)(b,2);u=y[0],g=y[1];break;default:var p=function(){for(var e=[],l=[],u=r===n.HalfDay?2:4,d=.5*i,g=t.dates,h=0;h<g.length;h++){var m=g[h],f=Intl.DateTimeFormat(a,{hour:"numeric"}).format(m);if(l.push(o.a.createElement("text",{key:m.getTime(),y:.8*i,x:s*h,className:A,fontFamily:c},f)),0===h||m.getDate()!==g[h-1].getDate()){var v="".concat(m.getDate()," ").concat(k(m,a));e.push(o.a.createElement(Z,{key:v+m.getFullYear(),value:v,x1Line:s*h+u*s,y1Line:0,y2Line:d,xText:s*h+u*s*.5,yText:.9*d}))}}return[e,l]}(),w=Object(d.a)(p,2);u=w[0],g=w[1]}return o.a.createElement("g",{className:"calendar",fontSize:l,fontFamily:c},o.a.createElement("rect",{x:0,y:0,width:s*t.dates.length,height:i,className:G}),g," ",u)},q=function(e){var t=e.taskFrom,a=e.taskTo,n=e.rowHeight,r=e.taskHeight,i=e.arrowIndent,s=t.index>a.index?-1:1,c=a.y+r/2,l="M ".concat(t.x2," ").concat(t.y+r/2," \n  h ").concat(i," \n  v ").concat(s*n/2," \n  H ").concat(a.x1-i," \n  V ").concat(c," \n  h ").concat(i),u="".concat(a.x1,",").concat(c," \n  ").concat(a.x1-5,",").concat(c-5," \n  ").concat(a.x1-5,",").concat(c+5);return o.a.createElement("g",{className:"arrow"},o.a.createElement("path",{strokeWidth:"1.5",d:l,fill:"none"}),o.a.createElement("polygon",{points:u}))},$=function(e,t,a,n,r,o,i,s,c,l,u,d,g,h,m){var f;switch(e.type){case"milestone":f=te(e,t,a,n,r,o,i,s,c,h,m);break;default:f=ee(e,t,a,n,r,o,i,s,c,l,u,d,g)}return f},ee=function(e,t,a,n,r,o,i,s,c,l,u,d,h){var m=ae(e.start,a,n,r),f=ae(e.end,a,n,r),v=ne(t,o,i),b=Object(g.a)({backgroundColor:d,backgroundSelectedColor:h,progressColor:l,progressSelectedColor:u},e.styles);return Object(g.a)(Object(g.a)({},e),{},{x1:m,x2:f,y:v,index:t,barCornerRadius:s,handleWidth:c,height:i,barChildren:[],styles:b})},te=function(e,t,a,n,r,o,i,s,c,l,u){var d=ae(e.start,a,n,r),h=ne(t,o,i),m=d-.5*i,f=d+.5*i,v=i/1.414,b=Object(g.a)({backgroundColor:l,backgroundSelectedColor:u,progressColor:"",progressSelectedColor:""},e.styles);return Object(g.a)(Object(g.a)({},e),{},{end:e.start,x1:m,x2:f,y:h,index:t,barCornerRadius:s,handleWidth:c,progress:0,height:v,barChildren:[],styles:b})},ae=function(e,t,a,n){var r=~~((e.getTime()-t[0].getTime()+e.getTimezoneOffset()-t[0].getTimezoneOffset())/a);return Math.round((r+(e.getTime()-t[r].getTime()-60*e.getTimezoneOffset()*1e3+60*t[r].getTimezoneOffset()*1e3)/a)*n)},ne=function(e,t,a){return e*t+(t-a)/2},re=function(e,t,a){var n=Math.round((e-a.x1)/t)*t,r=a.x1+n;return[r,r+a.x2-a.x1]},oe=function(e,t,a,n,r){var o=new Date((e-t)/n*r+a.getTime());return o=new Date(o.getTime()+6e4*(o.getTimezoneOffset()-a.getTimezoneOffset()))},ie=function(e,t,a,n,r,o){var i;switch(a.type){case"milestone":i=ce(e,t,a,n,r,o);break;default:i=se(e,t,a,n,r,o)}return i},se=function(e,t,a,n,r,o){var i=Object(g.a)({},a),s=!1;switch(t){case"progress":i.progress=function(e,t){if(e>=t.x2)return 100;if(e<=t.x1)return 0;var a=t.x2-t.x1;return Math.round(100*(e-t.x1)/a)}(e,a),s=i.progress!==a.progress;break;case"start":var c=function(e,t,a){e>=a.x2-2*a.handleWidth&&(e=a.x2-2*a.handleWidth);var n=Math.round((e-a.x1)/t)*t;return a.x1+n}(e,n,a);i.x1=c,(s=i.x1!==a.x1)&&(i.start=oe(c,a.x1,a.start,n,r));break;case"end":var l=function(e,t,a){e<=a.x1+2*a.handleWidth&&(e=a.x1+2*a.handleWidth);var n=Math.round((e-a.x2)/t)*t;return a.x2+n}(e,n,a);i.x2=l,(s=i.x2!==a.x2)&&(i.end=oe(l,a.x2,a.end,n,r));break;case"move":var u=re(e-o,n,a),h=Object(d.a)(u,2),m=h[0],f=h[1];(s=m!==a.x1)&&(i.start=oe(m,a.x1,a.start,n,r),i.end=oe(f,a.x2,a.end,n,r),i.x1=m,i.x2=f)}return{isChanged:s,changedTask:i}},ce=function(e,t,a,n,r,o){var i=Object(g.a)({},a),s=!1;switch(t){case"move":var c=re(e-o,n,a),l=Object(d.a)(c,2),u=l[0],h=l[1];(s=u!==a.x1)&&(i.start=oe(u,a.x1,a.start,n,r),i.end=i.start,i.x1=u,i.x2=h)}return{isChanged:s,changedTask:i}};function le(e){return void 0!==e.key}var ue="_bar-module__barWrapper__KxSXS",de="_bar-module__barHandle__3w_5u",ge="_bar-module__barBackground__31ERP",he=function(e){var t=e.x,a=e.y,n=e.width,r=e.height,i=e.isSelected,s=e.progressWidth,c=e.barCornerRadius,l=e.styles,u=e.onMouseDown;return o.a.createElement("g",{onMouseDown:u},o.a.createElement("rect",{x:t,width:n,y:a,height:r,ry:c,rx:c,fill:i?l.backgroundSelectedColor:l.backgroundColor,className:ge}),o.a.createElement("rect",{x:t,width:s,y:a,height:r,ry:c,rx:c,fill:i?l.progressSelectedColor:l.progressColor}))},me=function(e){var t=e.x,a=e.y,n=e.width,r=e.height,i=e.barCornerRadius,s=e.onMouseDown;return o.a.createElement("rect",{x:t,y:a,width:n,height:r,className:de,ry:i,rx:i,onMouseDown:s})},fe=function(e){var t=e.progressPoint,a=e.onMouseDown;return o.a.createElement("polygon",{className:de,points:t,onMouseDown:a})},ve=function(e){var t,a,n,r,i,s,c=e.task,l=e.isProgressChangeable,u=e.isDateChangeable,d=e.onEventStart,g=e.isSelected,h=(t=c.x1,a=c.x2,n=c.progress,(a-t)*n*.01),m=(r=h+c.x1,i=c.y,s=c.height,[r-5,i+s,r+5,i+s,r,i+s-8.66].join(",")),f=c.height-2;return o.a.createElement("g",{className:ue,tabIndex:0},o.a.createElement(he,{x:c.x1,y:c.y,width:c.x2-c.x1,height:c.height,progressWidth:h,barCornerRadius:c.barCornerRadius,styles:c.styles,isSelected:g,onMouseDown:function(e){u&&d("move",c,e)}}),o.a.createElement("g",{className:"handleGroup"},u&&o.a.createElement("g",null,o.a.createElement(me,{x:c.x1+1,y:c.y+1,width:c.handleWidth,height:f,barCornerRadius:c.barCornerRadius,onMouseDown:function(e){d("start",c,e)}}),o.a.createElement(me,{x:c.x2-c.handleWidth-1,y:c.y+1,width:c.handleWidth,height:f,barCornerRadius:c.barCornerRadius,onMouseDown:function(e){d("end",c,e)}})),l&&o.a.createElement(fe,{progressPoint:m,onMouseDown:function(e){d("progress",c,e)}})))},be="_milestone-module__milestoneWrapper__RRr13",ke="_milestone-module__milestoneBackground__2P2B1",ye=function(e){var t=e.task,a=e.isDateChangeable,n=e.onEventStart,r=e.isSelected,i="rotate(45 ".concat(t.x1+.356*t.height," \n    ").concat(t.y+.85*t.height,")");return o.a.createElement("g",{tabIndex:0,className:be},o.a.createElement("rect",{fill:r?t.styles.backgroundSelectedColor:t.styles.backgroundColor,x:t.x1,width:t.height,y:t.y,height:t.height,rx:t.barCornerRadius,ry:t.barCornerRadius,transform:i,className:ke,onMouseDown:function(e){a&&n("move",t,e)}}))},xe="_task-list-module__barLabel__3zRJQ",pe="_task-list-module__barLabelOutside__3KcaM",we=function(e){var t=Object(g.a)({},e),a=t.task,n=t.arrowIndent,i=t.isDelete,s=t.taskHeight,c=t.isSelected,l=t.onEventStart,u=Object(r.useRef)(null),h=Object(r.useState)(o.a.createElement("div",null)),m=Object(d.a)(h,2),f=m[0],v=m[1],b=Object(r.useState)(!0),k=Object(d.a)(b,2),y=k[0],x=k[1];Object(r.useEffect)((function(){switch(a.type){case"milestone":v(o.a.createElement(ye,Object.assign({},e)));break;default:v(o.a.createElement(ve,Object.assign({},e)))}}),[a,c]),Object(r.useEffect)((function(){u.current&&x(u.current.getBBox().width<a.x2-a.x1)}),[u,a]);return o.a.createElement("g",{onKeyDown:function(e){switch(e.key){case"Delete":i&&l("delete",a,e)}e.stopPropagation()},onMouseEnter:function(e){l("mouseenter",a,e)},onMouseLeave:function(e){l("mouseleave",a,e)},onDoubleClick:function(e){l("dblclick",a,e)},onFocus:function(){l("select",a)}},f,o.a.createElement("text",{x:function(){var e=a.x2-a.x1,t=a.barChildren.length>0;return y?a.x1+.5*e:a.x1+e+n*+t+.2*n}(),y:a.y+.5*s,className:y?xe:pe,ref:u},a.name))},Te=function(e){var t,a=e.tasks,n=e.dates,i=e.ganttEvent,s=e.selectedTask,c=e.rowHeight,g=e.columnWidth,h=e.timeStep,m=e.svg,f=e.svgHeight,v=e.taskHeight,b=e.arrowColor,k=e.arrowIndent,y=e.fontFamily,x=e.fontSize,p=e.setGanttEvent,w=e.setFailedTask,T=e.setSelectedTask,_=e.onDateChange,O=e.onProgressChange,j=e.onDoubleClick,E=e.onTaskDelete,D=e.TooltipContent,C=null===m||void 0===m||null===(t=m.current)||void 0===t?void 0:t.createSVGPoint(),S=Object(r.useState)(0),M=Object(d.a)(S,2),N=M[0],H=M[1],W=Object(r.useState)(0),L=Object(d.a)(W,2),R=L[0],z=L[1],Y=Object(r.useState)(!1),P=Object(d.a)(Y,2),B=P[0],I=P[1];Object(r.useEffect)((function(){var e=n[1].getTime()-n[0].getTime()-60*n[1].getTimezoneOffset()*1e3+60*n[0].getTimezoneOffset()*1e3;H(h*g/e)}),[g,n,h]),Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,r,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.changedTask&&C&&null!==m&&void 0!==m&&m.current){e.next=2;break}return e.abrupt("return");case 2:t.preventDefault(),C.x=t.clientX,n=C.matrixTransform(null===m||void 0===m||null===(a=m.current.getScreenCTM())||void 0===a?void 0:a.inverse()),r=ie(n.x,i.action,i.changedTask,N,h,R),o=r.isChanged,s=r.changedTask,o&&p({action:i.action,changedTask:s});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var a=Object(u.a)(l.a.mark((function a(n){var r,o,s,c,u,d,g,f,v,b,k;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=i.action,s=i.originalSelectedTask,(c=i.changedTask)&&C&&null!==m&&void 0!==m&&m.current&&s){a.next=3;break}return a.abrupt("return");case 3:if(n.preventDefault(),C.x=n.clientX,u=C.matrixTransform(null===m||void 0===m||null===(r=m.current.getScreenCTM())||void 0===r?void 0:r.inverse()),d=ie(u.x,o,c,N,h,R),g=d.changedTask,f=s.start!==g.start||s.end!==g.end||s.progress!==g.progress,m.current.removeEventListener("mousemove",e),m.current.removeEventListener("mouseup",t),p({action:""}),I(!1),v=!0,"move"!==o&&"end"!==o&&"start"!==o||!_||!f){a.next=26;break}return a.prev=14,a.next=17,_(g);case 17:void 0!==(b=a.sent)&&(v=b),a.next=24;break;case 21:a.prev=21,a.t0=a.catch(14),v=!1;case 24:a.next=37;break;case 26:if(!O||!f){a.next=37;break}return a.prev=27,a.next=30,O(g);case 30:void 0!==(k=a.sent)&&(v=k),a.next=37;break;case 34:a.prev=34,a.t1=a.catch(27),v=!1;case 37:v||w(s);case 38:case"end":return a.stop()}}),a,null,[[14,21],[27,34]])})));return function(e){return a.apply(this,arguments)}}();B||"move"!==i.action&&"end"!==i.action&&"start"!==i.action&&"progress"!==i.action||null===m||void 0===m||!m.current||(m.current.addEventListener("mousemove",e),m.current.addEventListener("mouseup",t),I(!0))}),[i,N,R,O,h,_,m,B]);var K=function(){var e=Object(u.a)(l.a.mark((function e(t,a,n){var r,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=4;break}"select"===t&&T(a.id),e.next=41;break;case 4:if(!le(n)){e.next=19;break}if("delete"!==t){e.next=17;break}if(!E){e.next=17;break}return e.prev=7,e.next=10,E(a);case 10:void 0!==(r=e.sent)&&r&&p({action:t,changedTask:a}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.error("Error on Delete. "+e.t0);case 17:e.next=41;break;case 19:if("mouseenter"!==t){e.next=23;break}i.action||p({action:t,changedTask:a,originalSelectedTask:a}),e.next=41;break;case 23:if("mouseleave"!==t){e.next=27;break}"mouseenter"===i.action&&p({action:""}),e.next=41;break;case 27:if("dblclick"!==t){e.next=31;break}j&&j(a),e.next=41;break;case 31:if("move"!==t){e.next=40;break}if(null!==m&&void 0!==m&&m.current&&C){e.next=34;break}return e.abrupt("return");case 34:C.x=n.clientX,s=C.matrixTransform(null===(o=m.current.getScreenCTM())||void 0===o?void 0:o.inverse()),z(s.x-a.x1),p({action:t,changedTask:a,originalSelectedTask:a}),e.next=41;break;case 40:p({action:t,changedTask:a,originalSelectedTask:a});case 41:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t,a,n){return e.apply(this,arguments)}}();return o.a.createElement("g",{className:"content"},o.a.createElement("g",{className:"arrows",fill:b,stroke:b},a.map((function(e){return e.barChildren.map((function(t){return o.a.createElement(q,{key:"Arrow from ".concat(e.id," to ").concat(a[t].id),taskFrom:e,taskTo:a[t],rowHeight:c,taskHeight:v,arrowIndent:k})}))}))),o.a.createElement("g",{className:"bar",fontFamily:y,fontSize:x},a.map((function(e){return o.a.createElement(we,{task:e,arrowIndent:k,taskHeight:v,isProgressChangeable:!!O&&!e.isDisabled,isDateChangeable:!!_&&!e.isDisabled,isDelete:!e.isDisabled,onEventStart:K,key:e.id,isSelected:!!s&&e.id===s.id})}))),o.a.createElement("g",{className:"toolTip"},i.changedTask&&o.a.createElement(F,{x:i.changedTask.x2+k+.5*k,rowHeight:c,svgHeight:f,task:i.changedTask,fontFamily:y,fontSize:x,TooltipContent:D})))},_e=function(e){var t=e.gridProps,a=e.calendarProps,n=e.barProps,i=e.ganttHeight,s=e.scrollY,c=e.scrollX,l=e.onScroll,u=Object(r.useRef)(null),d=Object(r.useRef)(null),h=Object(r.useRef)(null),m=Object(g.a)(Object(g.a)({},n),{},{svg:u});return Object(r.useEffect)((function(){d.current&&(d.current.scrollTop=s)}),[s]),Object(r.useEffect)((function(){h.current&&(h.current.scrollLeft=c)}),[c]),o.a.createElement("div",{className:z,ref:h,onScroll:l},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.gridWidth,height:a.headerHeight,fontFamily:n.fontFamily},o.a.createElement(J,Object.assign({},a))),o.a.createElement("div",{ref:d,className:Y,style:i?{height:i,width:t.gridWidth}:{width:t.gridWidth}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.gridWidth,height:n.rowHeight*n.tasks.length,fontFamily:n.fontFamily,ref:u},o.a.createElement(V,Object.assign({},t)),o.a.createElement(Te,Object.assign({},m)))))},Oe=function(e){var t=e.tasks,a=e.headerHeight,i=void 0===a?50:a,s=e.columnWidth,c=void 0===s?60:s,l=e.listCellWidth,u=void 0===l?"155px":l,g=e.rowHeight,h=void 0===g?50:g,m=e.ganttHeight,f=void 0===m?0:m,k=e.viewMode,y=void 0===k?n.Day:k,x=e.locale,p=void 0===x?"en-GB":x,w=e.barFill,T=void 0===w?60:w,_=e.barCornerRadius,j=void 0===_?3:_,E=e.barProgressColor,D=void 0===E?"#a3a3ff":E,S=e.barProgressSelectedColor,M=void 0===S?"#8282f5":S,N=e.barBackgroundColor,F=void 0===N?"#b8c2cc":N,W=e.barBackgroundSelectedColor,z=void 0===W?"#aeb8c2":W,B=e.milestoneBackgroundColor,I=void 0===B?"#f1c453":B,K=e.milestoneBackgroundSelectedColor,Q=void 0===K?"#f29e4c":K,V=e.handleWidth,A=void 0===V?8:V,U=e.timeStep,X=void 0===U?3e5:U,G=e.arrowColor,Z=void 0===G?"grey":G,J=e.fontFamily,q=void 0===J?"Arial, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue":J,ee=e.fontSize,te=void 0===ee?"14px":ee,ae=e.arrowIndent,ne=void 0===ae?20:ae,re=e.todayColor,oe=void 0===re?"rgba(252, 248, 227, 0.5)":re,ie=e.TooltipContent,se=void 0===ie?H:ie,ce=e.TaskListHeader,le=void 0===ce?O:ce,ue=e.TaskListTable,de=void 0===ue?C:ue,ge=e.onDateChange,he=e.onProgressChange,me=e.onDoubleClick,fe=e.onTaskDelete,ve=e.onSelect,be=Object(r.useRef)(null),ke=Object(r.useState)((function(){var e=v(t,y),a=Object(d.a)(e,2),n=a[0],r=a[1];return{viewMode:y,dates:b(n,r,y)}})),ye=Object(d.a)(ke,2),xe=ye[0],pe=ye[1],we=Object(r.useState)(h*T/100),Te=Object(d.a)(we,2),Oe=Te[0],je=Te[1],Ee=Object(r.useState)([]),De=Object(d.a)(Ee,2),Ce=De[0],Se=De[1],Me=Object(r.useState)({action:""}),Ne=Object(d.a)(Me,2),Fe=Ne[0],He=Ne[1],We=Object(r.useState)(),Le=Object(d.a)(We,2),Re=Le[0],ze=Le[1],Ye=Object(r.useState)(null),Pe=Object(d.a)(Ye,2),Be=Pe[0],Ie=Pe[1],Ke=Object(r.useState)(0),Qe=Object(d.a)(Ke,2),Ve=Qe[0],Ae=Qe[1],Ue=Object(r.useState)(0),Xe=Object(d.a)(Ue,2),Ge=Xe[0],Ze=Xe[1],Je=Object(r.useState)(!1),qe=Object(d.a)(Je,2),$e=qe[0],et=qe[1],tt=h*Ce.length,at=xe.dates.length*c,nt=Ce.length*h;Object(r.useEffect)((function(){var e=v(t,y),a=Object(d.a)(e,2),n=a[0],r=a[1],o=b(n,r,y);pe({dates:o,viewMode:y}),Se(function(e,t,a,n,r,o,i,s,c,l,u,d,g){var h=t[1].getTime()-t[0].getTime()-60*t[1].getTimezoneOffset()*1e3+60*t[0].getTimezoneOffset()*1e3,m=e.map((function(e,m){return $(e,m,t,h,a,n,r,o,i,s,c,l,u,d,g)}));return m=m.map((function(e,t){for(var a=e.dependencies||[],n=function(e){var n=m.findIndex((function(t){return t.id===a[e]}));-1!==n&&m[n].barChildren.push(t)},r=0;r<a.length;r++)n(r);return e}))}(t,o,c,h,Oe,j,A,D,M,F,z,I,Q))}),[t,y,h,j,c,Oe,A,D,M,F,z]),Object(r.useEffect)((function(){var e=Fe.changedTask,t=Fe.action;if(e)if("delete"===t)He({action:""}),Se(Ce.filter((function(t){return t.id!==e.id})));else if("move"===t||"end"===t||"start"===t||"progress"===t){var a=Ce.find((function(t){return t.id===e.id}));if(a&&(a.start.getTime()!==e.start.getTime()||a.end.getTime()!==e.end.getTime()||a.progress!==e.progress)){var n=Ce.map((function(t){return t.id===e.id?e:t}));Se(n)}}}),[Fe,Ce]),Object(r.useEffect)((function(){Be&&(Se(Ce.map((function(e){return e.id!==Be.id?e:Be}))),Ie(null))}),[Be,Ce]),Object(r.useEffect)((function(){var e=h*T/100;e!==Oe&&je(e)}),[h,T,Oe]),Object(r.useEffect)((function(){var e=function(e){e.preventDefault();var t=Ve+e.deltaY;Ae(t<0?0:t>nt-f?nt-f:t),et(!0)};return be.current&&f&&f<Ce.length*h&&be.current.addEventListener("wheel",e,{passive:!1}),function(){be.current&&be.current.removeEventListener("wheel",e)}}),[be.current,Ve,f,Ce,h]);var rt=function(e){var t=Ce.find((function(t){return t.id===e})),a=Ce.find((function(e){return!!Re&&e.id===Re.id}));ve&&(a&&ve(a,!1),t&&ve(t,!0)),ze(t)},ot={columnWidth:c,gridWidth:at,tasks:t,rowHeight:h,dates:xe.dates,todayColor:oe},it={dateSetup:xe,locale:p,viewMode:y,headerHeight:i,columnWidth:c,fontFamily:q,fontSize:te},st={tasks:Ce,dates:xe.dates,ganttEvent:Fe,selectedTask:Re,rowHeight:h,taskHeight:Oe,columnWidth:c,arrowColor:Z,timeStep:X,fontFamily:q,fontSize:te,arrowIndent:ne,svgHeight:tt,setGanttEvent:He,setFailedTask:Ie,setSelectedTask:rt,onDateChange:ge,onProgressChange:he,onDoubleClick:me,onTaskDelete:fe,TooltipContent:se},ct={rowHeight:h,rowWidth:u,fontFamily:q,fontSize:te,tasks:Ce,locale:p,headerHeight:i,scrollY:Ve,ganttHeight:f,horizontalContainerClass:Y,selectedTask:Re,setSelectedTask:rt,TaskListHeader:le,TaskListTable:de};return o.a.createElement("div",{className:P,onKeyDown:function(e){e.preventDefault();var t=Ve,a=Ge,n=!0;switch(e.key){case"Down":case"ArrowDown":t+=h,n=!1;break;case"Up":case"ArrowUp":t-=h,n=!1;break;case"Left":case"ArrowLeft":a-=c;break;case"Right":case"ArrowRight":a+=c}n?Ze(a<0?0:a>at?at:a):Ae(t<0?0:t>nt-f?nt-f:t),et(!0)},tabIndex:0,ref:be},u&&o.a.createElement(R,Object.assign({},ct)),o.a.createElement(_e,{gridProps:ot,calendarProps:it,barProps:st,ganttHeight:f,scrollY:Ve,scrollX:Ge,onScroll:function(e){Ge===e.currentTarget.scrollLeft||$e||Ze(e.currentTarget.scrollLeft),et(!1)}}),o.a.createElement(L,{ganttFullHeight:nt,ganttHeight:f,headerHeight:i,scroll:Ve,onScroll:function(e){Ve===e.currentTarget.scrollTop||$e||Ae(e.currentTarget.scrollTop),et(!1)}}))},je=a(2),Ee=function(e){var t=e.onViewModeChange,a=e.onViewListChange,r=e.isChecked;return Object(je.jsxs)("div",{className:"ViewContainer",children:[Object(je.jsx)("button",{className:"Button",onClick:function(){return t(n.QuarterDay)},children:"Quarter of Day"}),Object(je.jsx)("button",{className:"Button",onClick:function(){return t(n.HalfDay)},children:"Half of Day"}),Object(je.jsx)("button",{className:"Button",onClick:function(){return t(n.Day)},children:"Day"}),Object(je.jsx)("button",{className:"Button",onClick:function(){return t(n.Week)},children:"Week"}),Object(je.jsx)("button",{className:"Button",onClick:function(){return t(n.Month)},children:"Month"}),Object(je.jsxs)("div",{className:"Switch",children:[Object(je.jsxs)("label",{className:"Switch_Toggle",children:[Object(je.jsx)("input",{type:"checkbox",defaultChecked:r,onClick:function(){return a(!r)}}),Object(je.jsx)("span",{className:"Slider"})]}),"Show Task List"]})]})};var De=function(){var e=o.a.useState(n.Day),t=Object(d.a)(e,2),a=t[0],r=t[1],i=o.a.useState(function(){var e=new Date;return[{start:new Date(e.getFullYear(),e.getMonth(),1),end:new Date(e.getFullYear(),e.getMonth(),2,12,28),name:"Idea",id:"Task 0",progress:45,type:"task"},{start:new Date(e.getFullYear(),e.getMonth(),2),end:new Date(e.getFullYear(),e.getMonth(),4,0,0),name:"Research",id:"Task 1",progress:25,dependencies:["Task 0"],type:"task"},{start:new Date(e.getFullYear(),e.getMonth(),4),end:new Date(e.getFullYear(),e.getMonth(),8,0,0),name:"Discussion with team",id:"Task 2",progress:10,dependencies:["Task 1"],type:"task"},{start:new Date(e.getFullYear(),e.getMonth(),8),end:new Date(e.getFullYear(),e.getMonth(),9,0,0),name:"Developing",id:"Task 3",progress:2,dependencies:["Task 2"],type:"task"},{start:new Date(e.getFullYear(),e.getMonth(),8),end:new Date(e.getFullYear(),e.getMonth(),10),name:"Review",id:"Task 4",type:"task",progress:70,dependencies:["Task 2"]},{start:new Date(e.getFullYear(),e.getMonth(),15),end:new Date(e.getFullYear(),e.getMonth(),16),name:"Release",id:"Task 6",progress:e.getMonth(),type:"milestone",dependencies:["Task 4"],styles:{progressColor:"#ffbb54",progressSelectedColor:"#ff9e0d"}},{start:new Date(e.getFullYear(),e.getMonth(),24),end:new Date(e.getFullYear(),e.getMonth(),25),name:"Closing",id:"Task 9",progress:0,isDisabled:!0,type:"task"}]}()),s=Object(d.a)(i,2),c=s[0],g=s[1],h=o.a.useState(!0),m=Object(d.a)(h,2),f=m[0],v=m[1],b=60;a===n.Month?b=300:a===n.Week&&(b=250);var k=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(c.map((function(e){return e.id===t.id?t:e}))),console.log("On progress change Id:"+t.id);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(je.jsxs)("div",{children:[Object(je.jsx)(Ee,{onViewModeChange:function(e){return r(e)},onViewListChange:v,isChecked:f}),Object(je.jsx)("h3",{children:"Gantt With Unlimited Height"}),Object(je.jsx)(Oe,{tasks:c,viewMode:a,onDateChange:function(e){console.log("On date change Id:"+e.id);var t=c.map((function(t){return t.id===e.id?e:t}));g(t)},onTaskDelete:function(e){var t=window.confirm("Are you sure about "+e.name+" ?");return t&&g(c.filter((function(t){return t.id!==e.id}))),t},onProgressChange:k,onDoubleClick:function(e){alert("On Double Click event Id:"+e.id)},onSelect:function(e,t){console.log(e.name+" has "+(t?"selected":"unselected"))},listCellWidth:f?"155px":"",columnWidth:b})]})};s.a.render(Object(je.jsx)(De,{}),document.getElementById("root"))},8:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.d3860e68.chunk.js.map