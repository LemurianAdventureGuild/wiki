"use strict";(self.webpackChunklemurian_adventure_guild=self.webpackChunklemurian_adventure_guild||[]).push([[3608],{8151:(e,r,a)=>{a.r(r),a.d(r,{default:()=>o});a(7294);var t=a(3699),s=a(7325),i=a(5463),n=a(1949),l=a(3899),c=a(5893);function d(e){let{year:r,posts:a}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{as:"h3",id:r,children:r}),(0,c.jsx)("ul",{children:a.map((e=>(0,c.jsx)("li",{children:(0,c.jsxs)(t.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function h(e){let{years:r}=e;return(0,c.jsx)("section",{className:"margin-vert--lg",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:r.map(((e,r)=>(0,c.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,c.jsx)(d,{...e})},r)))})})})}function o(e){let{archive:r}=e;const a=(0,s.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),t=(0,s.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),d=function(e){const r=e.reduce(((e,r)=>{const a=r.metadata.date.split("-")[0],t=e.get(a)??[];return e.set(a,[r,...t])}),new Map);return Array.from(r,(e=>{let[r,a]=e;return{year:r,posts:a}}))}(r.blogPosts);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.d,{title:a,description:t}),(0,c.jsxs)(n.Z,{children:[(0,c.jsx)("header",{className:"hero hero--primary",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(l.Z,{as:"h1",className:"hero__title",children:a}),(0,c.jsx)("p",{className:"hero__subtitle",children:t})]})}),(0,c.jsx)("main",{children:d.length>0&&(0,c.jsx)(h,{years:d})})]})]})}}}]);