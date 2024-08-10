import{T as u,f as e}from"./Task-Dcg1-X3Y.js";import"./index-DZLKizrv.js";import"./vue.esm-bundler-BA5WuHgV.js";const T={onPickTask:e(),onArchiveTask:e()},D={component:u,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...T}},s={args:{task:{id:"1",state:"TASK_INBOX",title:"Test Task"}}},a={args:{task:{...s.args.task,state:"TASK_PINNED"}}},t={args:{task:{...s.args.task,state:"TASK_ARCHIVED"}}};var r,n,o;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      state: 'TASK_INBOX',
      title: 'Test Task'
    }
  }
}`,...(o=(n=s.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,i,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var k,m,p;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const S=["ActionsData","Default","Pinned","Archived"];export{T as ActionsData,t as Archived,s as Default,a as Pinned,S as __namedExportsOrder,D as default};
