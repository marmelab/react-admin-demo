(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[5],{1381:function(e,r,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.randomFloat=r.randomDate=r.weightedBoolean=r.weightedArrayElement=void 0;var n=a(t(1384));r.weightedArrayElement=function(e,r){return n.default.random.arrayElement(e.reduce((function(e,t,a){return e.concat(new Array(r[a]).fill(t))}),[]))},r.weightedBoolean=function(e){return n.default.random.number(99)<e},r.randomDate=function(e,r){var t=e instanceof Date?e.getTime():Date.now()-15768e7,a=(r instanceof Date?r.getTime():Date.now())-t,o=n.default.random.number({max:a}),i=Math.sqrt(o/a)*a;return new Date(t+i)},r.randomFloat=function(e,r){return parseFloat(n.default.random.number({min:e,max:r,precision:.01}).toFixed(2))}},1445:function(e,r,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var n=a(t(1446)),o=a(t(1447)),i=a(t(1448)),s=a(t(1449)),u=a(t(1450)),d=a(t(1451)),l=a(t(1452));r.default=function(e){void 0===e&&(e={serializeDate:!0});var r={};return r.customers=n.default(r,e),r.categories=o.default(),r.products=i.default(r),r.commands=s.default(r,e),r.invoices=u.default(r),r.reviews=d.default(r,e),l.default(r),r}},1446:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t(1384),n=t(1381);r.default=function(e,r){var t=r.serializeDate,o=0;return Array.from(Array(900).keys()).map((function(e){var r=n.randomDate(),i=n.randomDate(r),s=n.weightedBoolean(25)&&o<223,u=a.name.firstName(),d=a.name.lastName(),l=a.internet.email(u,d),c=s?a.date.past(60):null,m=s?"https://marmelab.com/posters/avatar-"+o+".jpeg":void 0;return s&&o++,{id:e,first_name:u,last_name:d,email:l,address:s?a.address.streetAddress():null,zipcode:s?a.address.zipCode():null,city:s?a.address.city():null,stateAbbr:s?a.address.stateAbbr():null,avatar:m,birthday:t&&c?c.toISOString():c,first_seen:t?r.toISOString():r,last_seen:t?i.toISOString():i,has_ordered:s,latest_purchase:null,has_newsletter:!s||n.weightedBoolean(30),groups:[],nb_commands:0,total_spent:0}}))}},1447:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(){return[{id:0,name:"animals"},{id:1,name:"beard"},{id:2,name:"business"},{id:3,name:"cars"},{id:4,name:"city"},{id:5,name:"flowers"},{id:6,name:"food"},{id:7,name:"nature"},{id:8,name:"people"},{id:9,name:"sports"},{id:10,name:"tech"},{id:11,name:"travel"},{id:12,name:"water"}]}},1448:function(e,r,t){"use strict";var a=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;var a=Array(e),n=0;for(r=0;r<t;r++)for(var o=arguments[r],i=0,s=o.length;i<s;i++,n++)a[n]=o[i];return a};Object.defineProperty(r,"__esModule",{value:!0});var n=t(1384),o=t(1381),i={animals:["Cat Nose","Dog Grass","Brown Cow","Leopard Road","Sad Dog","Pelican Pier","Green Birds","Concrete Seaguls","Hiding Seagul","Sand Caravan"],beard:["Black Auburn","Basket Beard","Handlebar Moustache","White Beard","Sailor Man","Natural Beard","Yeard Phone","Braid Beard","Terminal Black","Short Boxed"],business:["Corporate Prop","Office Chairs","White Clock","Work Suit","Suit & Tie","Shake Hands","Building Sky","Yellow Pad","Work Devices","Hands Clap","Work Meeting"],cars:["Old Combi","Asian Plates","Pedestrian Crossing","Farmer Boy","Make Over","Sports Sunset","Desert Jeep","Highway Bridge","Race Stickers","White Deluxe"],city:["Bridge Lights","Color Dots","Cloud Suspension","Paved Street","Blue Bay","Wooden Door","Concrete Angles","London Lights","Fort Point","Rainy Glass"],flowers:["Apricot Tree","Orange Rose","Purple Petunia","Water Lily","White Peony","Poppy Field","Blue Flax","Love Roses","California Poppy","Dalhia Colors"],food:["Fuzzy Forks","Stamp Mug","Two Expressos","Red Latte","Black Grapes","Forgotten Strawberries","Close Steam","Brewing Tea","Red Onions","Dark Honey"],nature:["Distant Mountains","Fog Pond","Sand Rocks","Pebble Shore","Eroded Fractals","Water Fall","Drif Wood","Dirt Track","Green Grass","Yellow Lichen"],people:["Crossing Alone","Budding Grove","Light Hair","Black & White","Rock Concert","Meeting Bench","Son & Lumi\xe8re","Running Boy","Dining Hall","Tunnel People"],sports:["Feather Ball","Wall Skate","Kick Flip","Down Hill","Baseball Night","Touch Line","Alone Jogger","Green Basket","Mud Hug","Metal Cycle"],tech:["Black Screen","Phone Call","Tablet & Phone","No Battery","Phone Book","Camera Parts","Fuzzy Phone","Music & Light","Eye Rest","Aligned Parts"],travel:["Distant Jet","Foggy Beach","White Lime","Mysterious Cloud","Mountain Top","Light House","Gray Day","Desert Walkway","Train Track","Plane Trees"],water:["Fresh Stream","Reed Line","Mud Tracks","Beach Gazebo","Calm Sea","Early Bath","Aerial Coast","Canal Street","Artificial Beach","Rainy Day"]};r.default=function(e){var r=0;return e.categories.reduce((function(e,t){return a(e,Array.from(Array(10).keys()).map((function(e){var a=o.randomFloat(10,40),s=o.randomFloat(10,40);return{id:r++,category_id:t.id,reference:i[t.name][e],width:a,height:s,price:o.randomFloat(a*s/20,a*s/15),thumbnail:"https://marmelab.com/posters/"+t.name+"-"+(e+1)+".jpeg",image:"https://marmelab.com/posters/"+t.name+"-"+(e+1)+".jpeg",description:n.lorem.paragraph(),stock:o.weightedBoolean(10)?0:n.random.number({min:0,max:150}),sales:0}})))}),[])}},1449:function(e,r,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var n=t(1384),o=a(t(1422)),i=a(t(1423)),s=t(1381);r.default=function(e,r){var t=r.serializeDate,a=new Date,u=i.default(a,30),d=e.customers.filter((function(e){return e.has_ordered}));return Array.from(Array(600).keys()).map((function(r){var a=s.weightedArrayElement([1,2,3,4,5,6,7,8,9,10],[30,20,5,2,1,1,1,1,1,1]),i=Array.from(Array(a).keys()).map((function(){return{product_id:n.random.number({min:0,max:129}),quantity:s.weightedArrayElement([1,2,3,4,5],[10,5,3,2,1])}})),l=i.reduce((function(r,t){return r+e.products[t.product_id].price*t.quantity}),0),c=s.randomFloat(3,8),m=n.random.arrayElement([.12,.17,.2]),f=parseFloat(((l+c)*m).toFixed(2)),p=n.random.arrayElement(d),h=s.randomDate(p.first_seen,p.last_seen),g=o.default(h,u)&&n.random.boolean()?"ordered":s.weightedArrayElement(["delivered","cancelled"],[10,1]);return{id:r,reference:n.random.alphaNumeric(6).toUpperCase(),date:t?h.toISOString():h,customer_id:p.id,basket:i,total_ex_taxes:l,delivery_fees:c,tax_rate:m,taxes:f,total:parseFloat((l+c+f).toFixed(2)),status:g,returned:"delivered"===g&&s.weightedBoolean(10)}}))}},1450:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var r=0;return e.commands.filter((function(e){return"delivered"!==e.status})).sort((function(e,r){return new Date(e.date)-new Date(r.date)})).map((function(e){return{id:r++,date:e.date,command_id:e.id,customer_id:e.customer_id,total_ex_taxes:e.total_ex_taxes,delivery_fees:e.delivery_fees,tax_rate:e.tax_rate,taxes:e.taxes,total:e.total}}))}},1451:function(e,r,t){"use strict";var a=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;var a=Array(e),n=0;for(r=0;r<t;r++)for(var o=arguments[r],i=0,s=o.length;i<s;i++,n++)a[n]=o[i];return a},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var o=t(1384),i=n(t(1423)),s=n(t(1422)),u=t(1381);r.default=function(e,r){var t=r.serializeDate,n=new Date,d=i.default(n,30),l=0,c=e.customers.filter((function(e){return e.has_ordered})).filter((function(){return u.weightedBoolean(60)})).map((function(e){return e.id}));return e.commands.filter((function(e){return-1!==c.indexOf(e.customer_id)})).reduce((function(e,r){return a(e,r.basket.filter((function(){return u.weightedBoolean(40)})).map((function(e){var a=u.randomDate(r.date),n=s.default(d,a)?u.weightedArrayElement(["accepted","rejected"],[3,1]):u.weightedArrayElement(["pending","accepted","rejected"],[5,3,1]);return{id:l++,date:t?a.toISOString():a,status:n,command_id:r.id,product_id:e.product_id,customer_id:r.customer_id,rating:o.random.number({min:1,max:5}),comment:Array.apply(null,Array(o.random.number({min:1,max:5}))).map((function(){return o.lorem.sentences()})).join("\n \r")}})))}),[])}},1452:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t(1381);r.default=function default_1(e){e.commands.forEach((function(r){var t=e.customers[r.customer_id];(!t.latest_purchase||t.latest_purchase<r.date)&&(t.latest_purchase=r.date),t.total_spent+=r.total,t.nb_commands++})),e.commands.forEach((function(r){r.basket.forEach((function(r){e.products[r.product_id].sales+=r.quantity}))}));var r=e.commands.reduce((function(e,r){return e[r.customer_id]||(e[r.customer_id]={nbProducts:0}),e[r.customer_id].nbProducts+=r.basket.length,e}),{});Object.keys(r).forEach((function(t){r[t].nbProducts>10&&e.customers[t].groups.push("collector")})),e.customers.filter((function(e){return 1===e.nb_commands})).forEach((function(e){return e.groups.push("ordered_once")})),e.customers.filter((function(e){return e.total_spent>1500})).forEach((function(e){return e.groups.push("compulsive")})),e.customers.filter((function(){return a.weightedBoolean(20)})).forEach((function(e){return e.groups.push("regular")})),e.commands.filter((function(e){return e.returned})).forEach((function(r){-1===e.customers[r.customer_id].groups.indexOf("returns")&&e.customers[r.customer_id].groups.push("returns")})),e.reviews.forEach((function(r){var t=e.customers[r.customer_id];-1===t.groups.indexOf("reviewer")&&t.groups.push("reviewer")})),e.settings=[{id:1,configuration:{url:"http://posters-galore.com/",mail:{sender:"julio@posters-galore.com",transport:{service:"fakemail",auth:{user:"fake@mail.com",pass:"f00b@r"}}},file_type_whiltelist:["txt","doc","docx","xls","xlsx","pdf","png","jpg"]}}]}},1828:function(e,r,t){"use strict";t.r(r);var a=t(1550),n=t.n(a),o=t(1445),i=t.n(o),s=t(1492),u=t.n(s);r.default=function(){var e=i()({serializeDate:!1}),r=n()({data:e}).getHandler();return u.a.mock("begin:http://localhost:4000",(function handlerWithLogs(e,t){return r(e,t).then((function(e){var r=JSON.parse(t.body),a=JSON.parse(e.body);return console.groupCollapsed("GraphQL ".concat(r.operationName)),console.group("request"),console.log("operationName",r.operationName),console.log(r.query),console.log("variables",r.variables),console.groupEnd(),console.group("response"),console.log("data",a.data),console.log("errors",a.errors),console.groupEnd(),console.groupEnd(),e}))})),function(){return u.a.restore()}}}}]);
//# sourceMappingURL=5.a1073b34.chunk.js.map