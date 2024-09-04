(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7685:function(e,t,s){Promise.resolve().then(s.bind(s,5949))},5949:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return C}});var a=s(7949),l=s(6265),r=s(3166),n=s(3083),i=s(6970),c=s(202),o=s(4986),d=e=>{let{categories:t,selectedCategory:s,setSelectedCategory:o,language:d}=e,u=e=>{switch(e){case"Cpu":default:return r.Z;case"Eye":return n.Z;case"Mic":return i.Z;case"Volume2":return c.Z}};return(0,a.jsx)("div",{className:"w-64 bg-gray-900 p-6 overflow-y-auto",children:(0,a.jsx)("nav",{className:"space-y-2",children:t.map(e=>(0,a.jsxs)("button",{onClick:()=>o(e.id),className:"w-full text-left p-3 rounded-md flex items-center transition-colors duration-200 ".concat(s===e.id?"bg-gray-700 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white"),children:[l.createElement(u(e.icon),{className:"mr-3",size:20}),(0,a.jsx)("span",{children:"object"==typeof e.title?e.title[d]:e.title})]},e.id))})})},u=s(7610);let x=()=>(0,a.jsx)("div",{className:"flex items-center pt-4",children:(0,a.jsx)("span",{className:"text-2xl sm:text-4xl font-bold text-gray-200 pl-0",children:"ai-opensource.com"})}),m=e=>{let{language:t,toggleLanguage:s}=e;return(0,a.jsxs)("button",{onClick:s,className:"bg-gray-800 text-gray-300 px-4 py-1.5 rounded-md hover:bg-gray-700 transition-colors duration-200 flex items-center mt-4",children:[(0,a.jsx)(u.IdY,{className:"mr-2"}),(0,a.jsx)("span",{children:"zh"===t?"Switch to English":"切换到中文"})]})},g=e=>{let{language:t}=e;return(0,a.jsx)("div",{className:"pb-0",children:(0,a.jsx)("span",{className:"text-sm text-gray-400",children:"zh"===t?"开源AI组件选型，帮助你选择最合适的开源项目。":"Open source AI component selection to help you choose the most suitable open source project."})})};var h=e=>{let{language:t,toggleLanguage:s}=e;return(0,a.jsx)("nav",{className:"bg-gray-900 shadow-md",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto  px-4 lg:pb-6 md:pb-6 sm:pb-0 sm:px-6 lg:px-8",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between h-20",children:[(0,a.jsx)(x,{}),(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)(m,{language:t,toggleLanguage:s})})]}),(0,a.jsx)(g,{language:t})]})})},f=s(1692),p=s(9323),j=s(9033),y=s(5621),b=e=>{let{onClick:t,language:s}=e;return(0,a.jsx)("button",{onClick:t,className:"\n      group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-full\n      bg-blue-600 text-white\n      transition-all duration-300 ease-out \n      hover:bg-blue-700\n      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500\n      shadow-md hover:shadow-lg\n    ",children:(0,a.jsx)("span",{className:"relative",children:"zh"===s?"更多":"Explore"})})};let v=e=>{let{product:t,language:s,onExplore:l}=e;return(0,a.jsxs)("div",{className:"bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl  hover: flex flex-col justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold text-gray-200",children:t.name}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[t.github&&(0,a.jsx)("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-gray-200",children:(0,a.jsx)(y.Z,{size:20})}),void 0!==t.stars&&(0,a.jsxs)("button",{className:"bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-sm flex items-center hover:bg-gray-600",children:[(0,a.jsx)("svg",{className:"w-4 h-4 mr-1",fill:"currentColor",viewBox:"0 0 20 20",children:(0,a.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),t.stars]})]})]}),(0,a.jsx)("p",{className:"text-gray-300 mb-6 line-clamp-3",children:t.description[s]})]}),(0,a.jsx)(b,{onClick:()=>l(t),language:s})]})};var N=s(6354),w=e=>{let{isOpen:t,onClose:s,title:l,content:r}=e;return t?(0,a.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center",children:(0,a.jsxs)("div",{className:"bg-gray-900 rounded-lg p-6 max-w-md w-full",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,a.jsx)("h3",{className:"text-xl font-bold text-gray-100",children:l}),(0,a.jsx)("button",{onClick:s,className:"text-gray-400 hover:text-gray-200",children:(0,a.jsx)(N.Z,{size:24})})]}),(0,a.jsx)("p",{className:"text-gray-300",children:r})]})}):null};let z=async e=>{let t="github_stars_".concat(e),s=localStorage.getItem(t);if(s){let{stars:e,timestamp:t}=JSON.parse(s);if(Date.now()-t<864e5)return e}let a=await fetch("https://api.github.com/repos/".concat(e)),l=(await a.json()).stargazers_count;return localStorage.setItem(t,JSON.stringify({stars:l,timestamp:Date.now()})),l},S=()=>(0,a.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,a.jsx)(o.Z,{className:"animate-spin text-blue-500",size:48})});var k=e=>{let{id:t,title:s,icon:r,gradientFrom:n,gradientTo:i,language:c,productsData:o}=e,[d,u]=(0,l.useState)(!0),[x,m]=(0,l.useState)([]),[g,h]=(0,l.useState)(!1),[f,p]=(0,l.useState)({title:"",content:""});(0,l.useEffect)(()=>{(async()=>{u(!0);try{let e=Object.values(o[t]||{}),s=await Promise.all(e.map(async e=>{let t=await z(e.github);return{...e,stars:t}}));m(s)}catch(e){console.error("加载产品时出错:",e)}finally{u(!1)}})()},[t,o]);let j=e=>{p({title:e.name,content:e.description[c]||e.description.en}),h(!0)};return(0,a.jsxs)("div",{className:"bg-gray-900 rounded-lg p-6 shadow-lg",children:[(0,a.jsxs)("h2",{className:"text-3xl font-bold mb-8 text-gray-100 flex items-center border-b border-gray-700 pb-4",children:[(0,a.jsx)(r,{className:"mr-4",size:36}),"object"==typeof s?s[c]:s]}),d?(0,a.jsx)(S,{}):(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:x.map((e,t)=>(0,a.jsx)(v,{product:e,language:c,onExplore:j},t))}),(0,a.jsx)(w,{isOpen:g,onClose:()=>h(!1),title:f.title,content:f.content})]})},C=()=>{var e,t,s;let[u,x]=(0,l.useState)("en"),[m,g]=(0,l.useState)([]),[y,b]=(0,l.useState)({}),[v,N]=(0,l.useState)(null),[w,z]=(0,l.useState)(!0),[S,C]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{(async()=>{z(!0);try{let e=await fetch("/aiData.json"),t=await e.json();g(t.categories),b(t.productsData),N(t.categories[0].id)}catch(e){console.error("加载数据时出错:",e)}finally{z(!1)}})()},[]),(0,l.useEffect)(()=>{let e=()=>{C(window.innerWidth<768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,a.jsxs)("div",{className:"min-h-screen bg-gray-950 text-gray-100 flex flex-col",children:[(0,a.jsx)(h,{language:u,toggleLanguage:()=>{x(e=>"zh"===e?"en":"zh")}}),(0,a.jsxs)("div",{className:"flex-1 flex flex-col md:flex-row",children:[S&&(0,a.jsx)("div",{className:"p-4 bg-gray-900",children:(0,a.jsxs)(f.v2,{as:"div",className:"relative inline-block text-left w-full",children:[(0,a.jsx)("div",{children:(0,a.jsxs)(f.v2.Button,{className:"inline-flex w-full justify-between items-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",children:["object"==typeof(null===(e=m.find(e=>e.id===v))||void 0===e?void 0:e.title)?null===(t=m.find(e=>e.id===v))||void 0===t?void 0:t.title[u]:null===(s=m.find(e=>e.id===v))||void 0===s?void 0:s.title,(0,a.jsx)(j.Z,{className:"ml-2 -mr-1 h-5 w-5 text-gray-400","aria-hidden":"true"})]})}),(0,a.jsx)(p.u,{as:l.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,a.jsx)(f.v2.Items,{className:"absolute right-0 mt-2 w-full origin-top-right divide-y divide-gray-700 rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:(0,a.jsx)("div",{className:"px-1 py-1",children:m.map(e=>(0,a.jsx)(f.v2.Item,{children:t=>{let{active:s}=t;return(0,a.jsx)("button",{onClick:()=>N(e.id),className:"".concat(s?"bg-gray-700 text-white":"text-gray-300"," group flex w-full items-center rounded-md px-2 py-2 text-sm"),children:"object"==typeof e.title?e.title[u]:e.title})}},e.id))})})})]})}),!S&&(0,a.jsx)(d,{categories:m,selectedCategory:v,setSelectedCategory:N,language:u}),(0,a.jsx)("div",{className:"flex-1 p-8 overflow-y-auto bg-gray-950",children:w?(0,a.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,a.jsx)(o.Z,{className:"animate-spin text-blue-500",size:48})}):v&&(0,a.jsx)(k,{...m.find(e=>e.id===v),icon:(e=>{switch(e){case"Cpu":default:return r.Z;case"Eye":return n.Z;case"Mic":return i.Z;case"Volume2":return c.Z}})(m.find(e=>e.id===v).icon),language:u,productsData:y})})]})]})}}},function(e){e.O(0,[582,436,108,47,623,744],function(){return e(e.s=7685)}),_N_E=e.O()}]);