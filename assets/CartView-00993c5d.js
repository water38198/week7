import{_ as $,r as V,o as i,c as u,d as e,e as a,w as y,n as h,F as g,f as v,g as C,t as _,h as E,v as k}from"./index-18bbf854.js";const{VITE_URL:T,VITE_PATH:I}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payroom",BASE_URL:"/week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},U={data(){return{user:{}}},methods:{sentOrder(){const s={user:this.user};this.$http.post(`${T}/v2/api/${I}/order`,{data:s}).then(t=>{alert(t.data.message),this.getCart(),this.$refs.userForm.resetForm()}).catch(t=>{console.log(t)})},isPhone(s){return/^(09)[0-9]{8}$/.test(s)?!0:"需要正確的電話號碼"}},props:["getCart"]},F={class:"row justify-content-center"},w={class:"col-4"},R={class:"mb-3"},S=e("label",{for:"name",class:"h5"},"姓名:",-1),A={class:"mb-3"},O=e("label",{for:"tel",class:"h5"},"電話:",-1),P={class:"mb-3"},D=e("label",{for:"email",class:"h5"},"電子郵件:",-1),L={class:"mb-3"},q=e("label",{for:"address",class:"h5"},"地址:",-1),N={class:"mb-3"},B=e("label",{for:"message",class:"h5"},"附註:",-1),H=e("div",{class:"text-center"},[e("button",{type:"submit",class:"btn btn-primary w-100"},"送出")],-1);function M(s,t,b,x,l,r){const c=V("VField"),d=V("ErrorMessage"),m=V("VForm");return i(),u("div",F,[e("div",w,[a(m,{onSubmit:r.sentOrder,class:"my-5",ref:"userForm"},{default:y(({errors:n})=>[e("div",R,[S,a(c,{id:"name",name:"姓名",type:"text",class:h(["form-control",{"is-invalid":n.姓名}]),placeholder:"請輸入 姓名",rules:"required",modelValue:l.user.name,"onUpdate:modelValue":t[0]||(t[0]=o=>l.user.name=o)},null,8,["class","modelValue"]),a(d,{name:"姓名",class:"invalid-feedback"})]),e("div",A,[O,a(c,{id:"tel",name:"電話",type:"text",class:h(["form-control",{"is-invalid":n.電話}]),placeholder:"請輸入 電話",rules:r.isPhone,modelValue:l.user.tel,"onUpdate:modelValue":t[1]||(t[1]=o=>l.user.tel=o)},null,8,["class","rules","modelValue"]),a(d,{name:"電話",class:"invalid-feedback"})]),e("div",P,[D,a(c,{id:"email",name:"電子郵件",type:"email",class:h(["form-control",{"is-invalid":n.電子郵件}]),placeholder:"請輸入 電子郵件",rules:"required||email",modelValue:l.user.email,"onUpdate:modelValue":t[2]||(t[2]=o=>l.user.email=o)},null,8,["class","modelValue"]),a(d,{name:"電子郵件",class:"invalid-feedback"})]),e("div",L,[q,a(c,{id:"address",name:"地址",type:"text",class:h(["form-control",{"is-invalid":n.地址}]),placeholder:"請輸入 地址",rules:"required",modelValue:l.user.address,"onUpdate:modelValue":t[3]||(t[3]=o=>l.user.address=o)},null,8,["class","modelValue"]),a(d,{name:"地址",class:"invalid-feedback"})]),e("div",N,[B,a(c,{id:"message",name:"附註",type:"text",class:h(["form-control",{"is-invalid":n.附註}]),placeholder:"請輸入 附註",modelValue:l.user.message,"onUpdate:modelValue":t[4]||(t[4]=o=>l.user.message=o),as:"textarea",cols:"10",rows:"10"},null,8,["class","modelValue"]),a(d,{name:"地址",class:"invalid-feedback"})]),H]),_:1},8,["onSubmit"])])])}const j=$(U,[["render",M]]),{VITE_URL:p,VITE_PATH:f}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payroom",BASE_URL:"/week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},z={data(){return{cart:{},loader:{}}},methods:{getCart(){this.loader=this.$loading.show(),this.$http.get(`${p}/v2/api/${f}/cart`).then(s=>{this.cart=s.data.data,this.loader.hide()}).catch(s=>{console.log(s)})},deleteCartItem(s){this.loader=this.$loading.show(),this.$http.delete(`${p}/v2/api/${f}/cart/${s}`).then(()=>{alert("刪除成功"),this.getCart()}).catch(t=>{console.log(t)})},deleteCartAll(){this.$http.delete(`${p}/v2/api/${f}/carts`).then(()=>{this.getCart()}).catch(s=>{console.log(s)})},updateItemNum(s){const t={product_id:s.product.id,qty:s.qty};this.$http.put(`${p}/v2/api/${f}/cart/${s.id}`,{data:t}).then(()=>{this.getCart()}).catch(b=>{console.log(b.response.data.message)})}},mounted(){this.getCart()},components:{OrderForm:j}},X=e("h3",{class:"mt-5 mb-3 text-center"},"購物車",-1),G={class:"table mt-5 align-middle"},J=e("thead",null,[e("tr",null,[e("th"),e("th",null,"產品名稱"),e("th",null,"數量/單位"),e("th",{class:"text-end"},"單價"),e("th",{class:"text-end"},"總價")])],-1),K=["onClick"],Q=["onUpdate:modelValue","onChange"],W=["value"],Y={class:"text-end"},Z={class:"text-end"},ee={key:1},te=e("td",{colspan:"5",class:"text-center"},"目前購物車中沒有東西喔",-1),se=[te],le={key:0},oe=e("td",null,null,-1),ne=e("td",null,null,-1),ae=e("td",null,null,-1),de=e("td",null,null,-1),re={class:"text-end"},ce=e("td",null,null,-1),ie=e("td",null,null,-1),ue=e("td",null,null,-1),_e=e("td",{class:"text-end"},"總金額",-1),he={class:"text-end"},me=e("td",null,null,-1),pe=e("td",null,null,-1),fe=e("td",null,null,-1),Ve=e("td",{class:"text-end"},"付款金額",-1),be={class:"text-end"};function ge(s,t,b,x,l,r){var d,m;const c=V("OrderForm");return i(),u(g,null,[X,e("table",G,[J,e("tbody",null,[(d=l.cart.carts)!=null&&d.length?(i(!0),u(g,{key:0},v(l.cart.carts,n=>(i(),u("tr",{key:n.id},[e("td",null,[e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:o=>r.deleteCartItem(n.id)}," X ",8,K)]),e("td",null,_(n.product.title),1),e("td",null,[E(e("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":o=>n.qty=o,onChange:o=>r.updateItemNum(n)},[(i(),u(g,null,v(15,o=>e("option",{value:o,key:o+"123"},_(o),9,W)),64))],40,Q),[[k,n.qty]])]),e("td",Y,_(n.product.price),1),e("td",Z,_(n.final_total),1)]))),128)):(i(),u("tr",ee,se))]),e("tfoot",null,[(m=l.cart.carts)!=null&&m.length?(i(),u("tr",le,[oe,ne,ae,de,e("td",re,[e("button",{type:"button",class:"btn btn-outline-danger",onClick:t[0]||(t[0]=n=>r.deleteCartAll())}," 清空全部 ")])])):C("",!0),e("tr",null,[ce,ie,ue,_e,e("td",he,_(l.cart.total),1)]),e("tr",null,[me,pe,fe,Ve,e("td",be,_(l.cart.final_total),1)])])]),a(c,{cart:l.cart,"get-cart":r.getCart},null,8,["cart","get-cart"])],64)}const $e=$(z,[["render",ge]]);export{$e as default};