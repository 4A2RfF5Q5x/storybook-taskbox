import{w as I,a as p}from"./Task-Dcg1-X3Y.js";import{c as y,o as i,d as N,a as l,x as B,b as a}from"./vue.esm-bundler-BA5WuHgV.js";import{d as w}from"./pinia-DSAG4884.js";import{P as E}from"./PureTaskList-C9XDwlrC.js";import"./index-DZLKizrv.js";const P=[{id:"1",title:"Something",state:"TASK_INBOX"},{id:"2",title:"Something more",state:"TASK_INBOX"},{id:"3",title:"Something else",state:"TASK_INBOX"},{id:"4",title:"Something again",state:"TASK_INBOX"}],A=w({id:"taskbox",state:()=>({tasks:P,status:"idle",error:null}),actions:{archiveTask(s){const e=this.tasks.find(t=>t.id===s);e&&(e.state="TASK_ARCHIVED")},pinTask(s){const e=this.tasks.find(t=>t.id===s);e&&(e.state="TASK_PINNED")}},getters:{getFilteredTasks:s=>s.tasks.filter(t=>t.state==="TASK_INBOX"||t.state==="TASK_PINNED")}}),S={__name:"TaskList",setup(s){const e=A(),t=y(()=>e.getFilteredTasks),x=r=>e.archiveTask(r),b=r=>e.pinTask(r);return(r,V)=>(i(),N(E,{tasks:t.value,onArchiveTask:x,onPinTask:b},null,8,["tasks"]))}};S.__docgenInfo={exportName:"default",displayName:"TaskList",description:"",tags:{},sourceFiles:["C:/Frontend/2024/storybook/taskbox/src/components/TaskList.vue"]};const K={key:0,class:"page lists-show"},L=a("div",{class:"wrapper-message"},[a("span",{class:"icon-face-sad"}),a("p",{class:"title-message"},"Oh no!"),a("p",{class:"subtitle-message"},"Something went wrong")],-1),O=[L],F={key:1,class:"page lists-show"},D=a("nav",null,[a("h1",{class:"title-page"},"Taskbox")],-1),v={__name:"PureInboxScreen",props:{error:{type:Boolean,default:!1}},setup(s){return(e,t)=>(i(),l("div",null,[s.error?(i(),l("div",K,O)):(i(),l("div",F,[D,B(S)]))]))}},X=v;v.__docgenInfo={exportName:"default",displayName:"PureInboxScreen",description:"",tags:{},props:[{name:"error",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/Frontend/2024/storybook/taskbox/src/components/PureInboxScreen/PureInboxScreen.vue"]};const j={component:X,title:"PureInboxScreen",tags:["autodocs"]},o={},n={args:{error:!0}},c={play:async({canvasElement:s})=>{const e=I(s);await p.click(e.getByLabelText("pinTask-1")),await p.click(e.getByLabelText("pinTask-3"))}};var d,u,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var k,_,T;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(T=(_=n.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var f,g,h;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
  }
}`,...(h=(g=c.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const q=["Default","Error","WithInteractions"];export{o as Default,n as Error,c as WithInteractions,q as __namedExportsOrder,j as default};
