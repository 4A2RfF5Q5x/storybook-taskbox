import{P as f}from"./PureTaskList-C9XDwlrC.js";import{ActionsData as D,Default as s}from"./Task.stories-CW1ZZ_1p.js";import"./vue.esm-bundler-BA5WuHgV.js";import"./Task-Dcg1-X3Y.js";import"./index-DZLKizrv.js";const y={component:f,title:"PureTaskList",tags:["autodocs"],decorators:[()=>({template:'<div style="margin: 3em;"><story/></div>'})],args:{...D}},a={args:{tasks:[{...s.args.task,id:"1",title:"Task 1"},{...s.args.task,id:"2",title:"Task 2"},{...s.args.task,id:"3",title:"Task 3"},{...s.args.task,id:"4",title:"Task 4"},{...s.args.task,id:"5",title:"Task 5"},{...s.args.task,id:"6",title:"Task 6"}]}},e={args:{tasks:[...a.args.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]}},t={args:{tasks:[],loading:!0}},r={args:{...t.args,loading:!1}};var n,i,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    tasks: [{
      ...TaskStories.Default.args.task,
      id: '1',
      title: 'Task 1'
    }, {
      ...TaskStories.Default.args.task,
      id: '2',
      title: 'Task 2'
    }, {
      ...TaskStories.Default.args.task,
      id: '3',
      title: 'Task 3'
    }, {
      ...TaskStories.Default.args.task,
      id: '4',
      title: 'Task 4'
    }, {
      ...TaskStories.Default.args.task,
      id: '5',
      title: 'Task 5'
    }, {
      ...TaskStories.Default.args.task,
      id: '6',
      title: 'Task 6'
    }]
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var k,d,l;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    tasks: [...Default.args.tasks.slice(0, 5), {
      id: '6',
      title: 'Task 6 (pinned)',
      state: 'TASK_PINNED'
    }]
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,c,m;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tasks: [],
    loading: true
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,p,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Loading.args,
    loading: false
  }
}`,...(T=(p=r.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};const N=["Default","WithPinnedTasks","Loading","Empty"];export{a as Default,r as Empty,t as Loading,e as WithPinnedTasks,N as __namedExportsOrder,y as default};
