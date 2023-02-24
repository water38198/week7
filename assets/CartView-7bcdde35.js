import{_ as $,r as V,o as i,c as u,d as t,e as a,w as y,n as h,F as g,f as v,g as C,t as _,h as E,v as k}from"./index-f4ac1680.js";const{VITE_URL:T,VITE_PATH:I}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payroom",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},U={data(){return{user:{}}},methods:{sentOrder(){const s={user:this.user};this.$http.post(`${T}/v2/api/${I}/order`,{data:s}).then(e=>{alert(e.data.message),this.getCart(),this.$refs.userForm.resetForm()}).catch(e=>{console.log(e)})},isPhone(s){return/^(09)[0-9]{8}$/.test(s)?!0:"需要正確的電話號碼"}},props:["getCart"]},F={class:"row justify-content-center"},R={class:"col-4"},S={class:"mb-3"},w=t("label",{for:"name",class:"h5"},"姓名:",-1),A={class:"mb-3"},O=t("label",{for:"tel",class:"h5"},"電話:",-1),P={class:"mb-3"},D=t("label",{for:"email",class:"h5"},"電子郵件:",-1),L={class:"mb-3"},q=t("label",{for:"address",class:"h5"},"地址:",-1),N={class:"mb-3"},B=t("label",{for:"message",class:"h5"},"附註:",-1),H=t("div",{class:"text-center"},[t("button",{type:"submit",class:"btn btn-primary w-100"},"送出")],-1);function M(s,e,b,x,l,r){const c=V("VField"),d=V("ErrorMessage"),m=V("VForm");return i(),u("div",F,[t("div",R,[a(m,{onSubmit:r.sentOrder,class:"my-5",ref:"userForm"},{default:y(({errors:n})=>[t("div",S,[w,a(c,{id:"name",name:"姓名",type:"text",class:h(["form-control",{"is-invalid":n.姓名}]),placeholder:"請輸入 姓名",rules:"required",modelValue:l.user.name,"onUpdate:modelValue":e[0]||(e[0]=o=>l.user.name=o)},null,8,["class","modelValue"]),a(d,{name:"姓名",class:"invalid-feedback"})]),t("div",A,[O,a(c,{id:"tel",name:"電話",type:"text",class:h(["form-control",{"is-invalid":n.電話}]),placeholder:"請輸入 電話",rules:r.isPhone,modelValue:l.user.tel,"onUpdate:modelValue":e[1]||(e[1]=o=>l.user.tel=o)},null,8,["class","rules","modelValue"]),a(d,{name:"電話",class:"invalid-feedback"})]),t("div",P,[D,a(c,{id:"email",name:"電子郵件",type:"email",class:h(["form-control",{"is-invalid":n.電子郵件}]),placeholder:"請輸入 電子郵件",rules:"required||email",modelValue:l.user.email,"onUpdate:modelValue":e[2]||(e[2]=o=>l.user.email=o)},null,8,["class","modelValue"]),a(d,{name:"電子郵件",class:"invalid-feedback"})]),t("div",L,[q,a(c,{id:"address",name:"地址",type:"text",class:h(["form-control",{"is-invalid":n.地址}]),placeholder:"請輸入 地址",rules:"required",modelValue:l.user.address,"onUpdate:modelValue":e[3]||(e[3]=o=>l.user.address=o)},null,8,["class","modelValue"]),a(d,{name:"地址",class:"invalid-feedback"})]),t("div",N,[B,a(c,{id:"message",name:"附註",type:"text",class:h(["form-control",{"is-invalid":n.附註}]),placeholder:"請輸入 附註",modelValue:l.user.message,"onUpdate:modelValue":e[4]||(e[4]=o=>l.user.message=o),as:"textarea",cols:"10",rows:"10"},null,8,["class","modelValue"]),a(d,{name:"地址",class:"invalid-feedback"})]),H]),_:1},8,["onSubmit"])])])}const j=$(U,[["render",M]]),{VITE_URL:p,VITE_PATH:f}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payroom",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},z={data(){return{cart:{},loader:{}}},methods:{getCart(){this.loader=this.$loading.show(),this.$http.get(`${p}/v2/api/${f}/cart`).then(s=>{this.cart=s.data.data,this.loader.hide()}).catch(s=>{console.log(s)})},deleteCartItem(s){this.loader=this.$loading.show(),this.$http.delete(`${p}/v2/api/${f}/cart/${s}`).then(()=>{alert("刪除成功"),this.getCart()}).catch(e=>{console.log(e)})},deleteCartAll(){this.$http.delete(`${p}/v2/api/${f}/carts`).then(()=>{this.getCart()}).catch(s=>{console.log(s)})},updateItemNum(s){const e={product_id:s.product.id,qty:s.qty};this.$http.put(`${p}/v2/api/${f}/cart/${s.id}`,{data:e}).then(()=>{this.getCart()}).catch(b=>{console.log(b.response.data.message)})}},mounted(){this.getCart()},components:{OrderForm:j}},X=t("h3",{class:"mt-5 mb-3 text-center"},"購物車",-1),G={class:"table mt-5 align-middle"},J=t("thead",null,[t("tr",null,[t("th"),t("th",null,"產品名稱"),t("th",null,"數量/單位"),t("th",{class:"text-end"},"單價"),t("th",{class:"text-end"},"總價")])],-1),K=["onClick"],Q=["onUpdate:modelValue","onChange"],W=["value"],Y={class:"text-end"},Z={class:"text-end"},tt={key:1},et=t("td",{colspan:"5",class:"text-center"},"目前購物車中沒有東西喔",-1),st=[et],lt={key:0},ot=t("td",null,null,-1),nt=t("td",null,null,-1),at=t("td",null,null,-1),dt=t("td",null,null,-1),rt={class:"text-end"},ct=t("td",null,null,-1),it=t("td",null,null,-1),ut=t("td",null,null,-1),_t=t("td",{class:"text-end"},"總金額",-1),ht={class:"text-end"},mt=t("td",null,null,-1),pt=t("td",null,null,-1),ft=t("td",null,null,-1),Vt=t("td",{class:"text-end"},"付款金額",-1),bt={class:"text-end"};function gt(s,e,b,x,l,r){var d,m;const c=V("OrderForm");return i(),u(g,null,[X,t("table",G,[J,t("tbody",null,[(d=l.cart.carts)!=null&&d.length?(i(!0),u(g,{key:0},v(l.cart.carts,n=>(i(),u("tr",{key:n.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:o=>r.deleteCartItem(n.id)}," X ",8,K)]),t("td",null,_(n.product.title),1),t("td",null,[E(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":o=>n.qty=o,onChange:o=>r.updateItemNum(n)},[(i(),u(g,null,v(15,o=>t("option",{value:o,key:o+"123"},_(o),9,W)),64))],40,Q),[[k,n.qty]])]),t("td",Y,_(n.product.price),1),t("td",Z,_(n.final_total),1)]))),128)):(i(),u("tr",tt,st))]),t("tfoot",null,[(m=l.cart.carts)!=null&&m.length?(i(),u("tr",lt,[ot,nt,at,dt,t("td",rt,[t("button",{type:"button",class:"btn btn-outline-danger",onClick:e[0]||(e[0]=n=>r.deleteCartAll())}," 清空全部 ")])])):C("",!0),t("tr",null,[ct,it,ut,_t,t("td",ht,_(l.cart.total),1)]),t("tr",null,[mt,pt,ft,Vt,t("td",bt,_(l.cart.final_total),1)])])]),a(c,{cart:l.cart,"get-cart":r.getCart},null,8,["cart","get-cart"])],64)}const $t=$(z,[["render",gt]]);export{$t as default};