import{_ as m,a as g,r as b,o,c as n,d as t,F as r,f as $,t as i,e as f,w as k,b as v}from"./index-f4ac1680.js";const{VITE_URL:d,VITE_PATH:h}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payroom",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},y={data(){return{productList:[],loader:{}}},methods:{getProducts(){this.$http.get(`${d}/v2/api/${h}/products`).then(s=>{this.productList=s.data.products,this.loader.hide()}).catch(s=>{console.log(s)})},addToCart(s,a=1){const c={product_id:s,qty:a};this.$http.post(`${d}/v2/api/${h}/cart`,{data:c}).then(l=>{console.log(l)}).catch(l=>{console.log(l)})}},mounted(){this.loader=this.$loading.show(),this.getProducts()},components:{RouterLink:g}},L=t("h3",{class:"mt-5 mb-3 text-center"},"商品列表",-1),x={class:"vl-parent"},T={class:"table align-middle"},V=t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,"商品名稱"),t("th",null,"價格"),t("th")])],-1),E={style:{width:"200px"}},R=["src","alt"],w={key:0,class:"h5"},C={key:1},P={class:"h6"},B={class:"h5"},D=["onClick"];function I(s,a,c,l,_,u){const p=b("RouterLink");return o(),n(r,null,[L,t("div",x,[t("table",T,[V,t("tbody",null,[(o(!0),n(r,null,$(_.productList,e=>(o(),n("tr",{key:e.key},[t("td",E,[t("img",{src:e.imageUrl,alt:`${e.title}圖片`,style:{height:"100px","object-fit":"cover"},class:"w-100"},null,8,R)]),t("td",null,i(e.title),1),t("td",null,[e.origin_price===e.price?(o(),n("div",w,i(e.price)+"元 ",1)):(o(),n("div",C,[t("del",P,"原價"+i(e.origin_price)+"元",1),t("div",B,"現在只要"+i(e.price)+"元",1)]))]),t("td",null,[f(p,{to:`/product/${e.id}`,class:"me-3 btn btn-outline-primary"},{default:k(()=>[v("查看更多")]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-outline-danger",onClick:S=>u.addToCart(e.id)}," 加入購物車 ",8,D)])]))),128))])])])],64)}const A=m(y,[["render",I]]);export{A as default};
