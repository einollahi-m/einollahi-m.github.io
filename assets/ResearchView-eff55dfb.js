import{_ as p,o as i,c as r,b as n,g as d,t,F as o,d as h,u,e as _}from"./index-f0fb005b.js";const m=[{id:1,image_url:"images/paper_default.png",paper:"Shi Zhao, Peihua Cao, Daozhou Gao, Zian Zhuang, Weiming Wang, Jinjun Ran, Kai Wang, Lin Yang, Mohammad R. Einollahi, Yijun Lou, Daihai He, Maggie H. Wang, “Modelling COVID-19 outbreak on the Diamond Princess ship using the public surveillance data, Infectious Disease Modelling”, 2022."},{id:2,image_url:"images/paper_default.png",paper:"hra Einollahi, Manouchehr Amini, Behzad Einollahi, Mohammad-Reza Einollahi, Mohammad Javanbakht, “Application of Machine Learning Models in Acute Kidney Injury: Incidence, Risk factors, Severity, and Impact on Outcome of AKI in 8,033 Hospitalized COVID-19 Patients”, 2023 – (under review)"},{id:3,image_url:"images/paper_default.png",paper:"Mohammadreza Einollahi, Behzad Einollahi, Zahra Einollahi, Mohammad Javanbakht, “Comprehensive Evaluation of COVID-19 Treatments: A Focus on Methylprednisolone, Remdesivir, Cinnora, and Actemra Therapy, Utilizing Supervised and Unsupervised Learning Approaches” – (In progress)"}],g={research:m};const f={props:{id:[String,Number],image_url:String,paper:String}},v={class:"research_list_item"},M=["src"],I={class:"research_list_item_descriptipn"};function y(l,s,a,c,e,k){return i(),r("div",v,[n("img",{class:"paper_image",src:a.image_url,alt:"image"},null,8,M),n("p",I,[d(t(a.id)+". ",1),n("a",null,t(a.paper),1)])])}const E=p(f,[["render",y]]),R=n("h1",null,"Research",-1),z={__name:"ResearchView",setup(l){const s=g.research;return(a,c)=>(i(),r(o,null,[R,(i(!0),r(o,null,h(u(s),e=>(i(),_(E,{key:e.id,id:e.id,image_url:e.image_url,paper:e.paper},null,8,["id","image_url","paper"]))),128))],64))}};export{z as default};
