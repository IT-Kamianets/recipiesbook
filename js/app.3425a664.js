(function(){"use strict";var e={5286:function(e,t,i){var r=i(5130),o=i(6768);const n={class:"min-h-screen bg-gray-100 p-8"},c={class:"flex justify-center mb-8 gap-4"},a={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"};function s(e,t,i,s,p,l){const d=(0,o.g2)("RecipeCard");return(0,o.uX)(),(0,o.CE)("div",n,[t[3]||(t[3]=(0,o.Lk)("h1",{class:"text-4xl text-orange-600 font-bold text-center mb-8 font-bold"},"Recipes Book",-1)),(0,o.Lk)("div",c,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>p.searchTerm=e),type:"text",placeholder:"Пошук рецептів...",class:"px-4 py-2 border rounded-lg w-1/3 hover:border-2 hover:border-gray-500"},null,512),[[r.Jo,p.searchTerm]]),(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>p.selectedType=e),class:"px-4 py-2 border rounded-lg w-1/4"},t[2]||(t[2]=[(0,o.Lk)("option",{value:""},"Всі типи",-1),(0,o.Lk)("option",{value:"основна страва"},"Основна страва",-1),(0,o.Lk)("option",{value:"закуска"},"Закуска",-1),(0,o.Lk)("option",{value:"десерт"},"Десерт",-1)]),512),[[r.u1,p.selectedType]])]),(0,o.Lk)("div",a,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.filteredRecipes,(e=>((0,o.uX)(),(0,o.Wv)(d,{key:e.id,title:e.title,description:e.description,image:e.image,recipe:e.recipe},null,8,["title","description","image","recipe"])))),128))])])}var p=i(4232);const l=["src"],d={class:"text-xl font-bold mb-2"},u={class:"text-gray-700"},g={key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"},m={class:"bg-white w-[500px] rounded-xl shadow-lg max-w-lg p-6 relative"},f=["src"],b={class:"text-2xl font-bold mb-4"},h={class:"text-gray-700 mb-4"};function v(e,t,i,r,n,c){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("div",{class:"bg-white border-2 border-orange-200 shadow-xl rounded-xl p-6 mb-4 cursor-pointer",onClick:t[0]||(t[0]=(...e)=>c.openModal&&c.openModal(...e))},[(0,o.Lk)("img",{src:i.image,alt:"recipe image",class:"rounded w-full h-48 object-cover mb-4"},null,8,l),(0,o.Lk)("h2",d,(0,p.v_)(i.title),1),(0,o.Lk)("p",u,(0,p.v_)(i.description),1)]),n.isModalOpen?((0,o.uX)(),(0,o.CE)("div",g,[(0,o.Lk)("div",m,[(0,o.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>c.closeModal&&c.closeModal(...e)),class:"absolute top-2 right-2 text-gray-700 hover:text-gray-900"},"×"),(0,o.Lk)("img",{src:i.image,alt:"recipe image",class:"rounded w-full h-48 object-cover mb-4"},null,8,f),(0,o.Lk)("h2",b,(0,p.v_)(i.title),1),(0,o.Lk)("p",h,(0,p.v_)(i.recipe||"Рецепт не знайдено"),1)])])):(0,o.Q3)("",!0)])}var y={name:"RecipeCard",props:{title:String,description:String,image:String,recipe:String},data(){return{isModalOpen:!1}},methods:{openModal(){this.isModalOpen=!0},closeModal(){this.isModalOpen=!1}}},k=i(1241);const x=(0,k.A)(y,[["render",v],["__scopeId","data-v-249f8ab4"]]);var w=x;const L=[{id:1,title:"Паста з соусом Альфредо",description:"Смачна паста з вершковим соусом Альфредо.",type:"основна страва",image:"https://feastdelights.com/wp-content/uploads/2023/12/shrimp-alfredo-pasta-recipe.webp",recipe:"Варіть пасту в підсоленій воді. На сковорідці розтопіть вершкове масло, додайте вершки та натертий пармезан. Додайте пасту та перемішайте, поки соус загусне. Подавати гарячою."},{id:2,title:"Салат Цезар",description:"Легкий салат з куркою, грінками та сиром пармезан.",type:"закуска",image:"https://klopotenko.com/wp-content/uploads/2022/01/cezar-z-kyrkou-i-tomatamu_sitewebukr-1000x600.jpg?v=1720546600",recipe:"Наріжте салат Ромен, додайте грінки та натертий пармезан. Додайте підсмажене куряче філе, полийте заправкою з майонезу, лимонного соку та анчоусів."},{id:3,title:"Смузі з ягід",description:"Охолоджений смузі з міксом літніх ягід.",type:"десерт",image:"https://learning.ua/content/newsimg/1266.jpg",recipe:"Змішайте ягоди, банан та йогурт в блендері до однорідності. Додайте мед за смаком. Подавайте охолодженим."},{id:4,title:"Омлет з овочами",description:"Поживний омлет з помідорами та зеленню.",type:"сніданок",image:"https://kamenskoe.city/uploads/news/redactor/6ay3ji8t1wc5scyl.jpg",recipe:"Збийте яйця з сіллю і перцем. Додайте нарізані помідори та зелень. Смажте на середньому вогні до готовності."},{id:5,title:"Грецький салат",description:"Освіжаючий салат з огірками, помідорами та сиром фета.",type:"закуска",image:"https://i.obozrevatel.com/food/recipemain/2018/11/15/screenshot81.png?size=636x424",recipe:"Наріжте помідори, огірки, перець і червону цибулю. Додайте сир фета і маслини. Заправте оливковою олією з орегано."},{id:6,title:"Курячі крильця",description:"Хрусткі курячі крильця з соусом барбекю.",type:"основна страва",image:"https://img.tsn.ua/cached/125/tsn-dcf0ded845fb4249b37e656be0b1987a/thumbs/428x268/a8/d1/dffb7027f8c5ae0d708772f285c3d1a8.jpeg",recipe:"Маринуйте курячі крильця у соусі барбекю, сіль, перець, паприка. Запікайте при 200°C 30 хвилин до хрусткої скоринки."},{id:7,title:"Шоколадний торт",description:"Ніжний шоколадний торт з кремовою начинкою.",type:"десерт",image:"https://mukachevo.net/uploads/media/images/image/5c/bb/5cbb2bbb20af4f98a9f2f69cc679a9e4uykm24x1cbv6nnw_image.jpg",recipe:"Змішайте борошно, какао, цукор, яйця і вершкове масло. Випікайте при 180°C протягом 30 хвилин. Додайте шоколадний крем зверху."},{id:8,title:"Брускети з помідорами",description:"Тости з помідорами, базиліком та оливковою олією.",type:"закуска",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjF0f5Xkqe159zR-luYPWMfmKRZsP7IpkLA&s",recipe:"Наріжте багет та підсушіть у духовці. Натерти часником, додайте нарізані помідори, базилік та оливкову олію."},{id:9,title:"Морозиво ванільне",description:"Охолоджуючий десерт зі смаком ванілі.",type:"десерт",image:"https://deluxe.com.ua/media/img/uploads/image/homemadevanilliaicecream.jpg",recipe:"Збийте вершки з ваніллю та цукром. Заморозьте у морозивниці або мисці, перемішуючи кожні 30 хвилин до повного замерзання."},{id:10,title:"Гамбургер",description:"Соковитий бургер з яловичою котлетою та сиром чеддер.",type:"основна страва",image:"https://www.rbc.ua/static/img/_/p/_pixabay_com_209_1300x820.jpg",recipe:"Підсмажте котлету, додайте сир чеддер. Зберіть бургер з булочкою, салатом, томатами і соусом."}];var j={name:"App",components:{RecipeCard:w},data(){return{searchTerm:"",selectedType:"",recipes:L}},computed:{filteredRecipes(){return this.recipes.filter((e=>{const t=e.title.toLowerCase().includes(this.searchTerm.toLowerCase()),i=""===this.selectedType||e.type===this.selectedType;return t&&i}))}}};const C=(0,k.A)(j,[["render",s]]);var O=C;(0,r.Ef)(O).mount("#app")}},t={};function i(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,i),n.exports}i.m=e,function(){var e=[];i.O=function(t,r,o,n){if(!r){var c=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],n=e[l][2];for(var a=!0,s=0;s<r.length;s++)(!1&n||c>=n)&&Object.keys(i.O).every((function(e){return i.O[e](r[s])}))?r.splice(s--,1):(a=!1,n<c&&(c=n));if(a){e.splice(l--,1);var p=o();void 0!==p&&(t=p)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[r,o,n]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,n,c=r[0],a=r[1],s=r[2],p=0;if(c.some((function(t){return 0!==e[t]}))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(s)var l=s(i)}for(t&&t(r);p<c.length;p++)n=c[p],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(l)},r=self["webpackChunkrecipiesbook"]=self["webpackChunkrecipiesbook"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[504],(function(){return i(5286)}));r=i.O(r)})();
//# sourceMappingURL=app.3425a664.js.map