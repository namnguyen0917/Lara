
//toán tử tiền tố prefix ++a; trả về phép giá trị sau khi thay đổi
//toán tử hậu tố postfix a++; trả về giá trị coppy sau đó thay đổi
//6 value when convert => bloean 0,false,'' = "",underfined,NaN,null => flase
//if A && C && B => B ,if A && NULL && B => NUll ,A || B || C => A ,  NUll || B || C => B ,A || B || NUll => A ,
//object types : var myObject = {name:'son dang',age:18,d/c:hn,myFunction:function(){}};
//template strimg var a = "chuoi a" , var b = "chuoi b" console.log("chuoi la : ${a} ${b}");
// cách phân biệt giữa array và object => isArray
// so sánh tương đối == /=== so sáh tuyệt dối , == không quan tâm dến value is num or parameter
//mãng toString convert từ mãng thành một chuỗi , join convert từ mãng thành một chuỗi có thể chèn khoảng chắn theo yêu cầu join("'") ,
//function (){for(var param of arguments)}
//declaration function function testName(){} / expression function let testName = function()

//---------------------------------- Object
// let myAge = 'age';
// let myInfo = {
//     name: 'Nam',
//     [myAge] : 12,
//     'd-c': "11/33 abc",
//     getName:function(){
//         return this.name;
//     }
// };
// myInfo['my-email'] = "nam60946@gmail.com";

// // console.log(myInfo.age);
// // console.log(myInfo["name"]);

// // delete myInfo.name;
// // function -> phương thức / method
// //others -> thuộc tinh / property
// console.log(myInfo.getName());

//---------------------------------- Object constructor

// function User(firstName, lastName, avatar){
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.avatar = avatar,

//     this.getName = function (){
//         return  `${this.firstName} ${this.lastName}`;
//     }
// };

// var author = new User('nguyen','van','A');
// var user = new User('nguyen','tan','B');

// // Xem các prototype
// // console.log(author.constructor); 

// // console.log(author.constructor == User);

// author.title ="have a nice day";
// user.comment = "this name is coment";

// console.log(author);
// console.log(user);

// console.log(author.getName());
// console.log(user.getName());


//---------------------------------- Object prototype basic

// function User(firstName, lastName, avatar){
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.avatar = avatar,

//     this.getName = function (){
//         return  `${this.firstName} ${this.lastName}`;
//     }
// };

// User.prototype.className = "F8";
// User.prototype.getClassName = function(){
//     return this.className;
// }

// var user = new User('nguyen','van','A');

// console.log(user.className);
// console.log(user.getClassName());

//---------------------------------- forin ->key (khong lap qua mang trong) , for/of ->value (Object.keys/.values)
// var toString = "hellonamnguyen";
// var className = {
//     Name:"nam",
//     Phone:"sdt",
//     address:"hanoi",
// };
// var classArray = ['name1','name2','name3','name4','name5'];

// for (const key in classArray) {
//     if (classArray.hasOwnProperty.call(classArray, key)) {

//         const element = classArray[key];
//         console.log(element);
//     }
// }


//---------------------------------- myArray

// var myArray = [
//     [1,2],
//     [3,4],
//     [5,52]
// ];

// for (var value of myArray) {
//     console.log(value);
//     for (var item of value) {
//         console.log(item);
//     }
// }

// for (let index = 0; index < myArray.length; index++) {
//     for (let i = 0; i < myArray[index].length; i++) {
//        console.log(myArray[index][i]);
        
//     }
    
// }


// forEach function(textArray,index) -> return value
// Every function(textArray,index)-> return boolean -> kiểm tra tất cả các phần tử nếu thỏa hết return true , chỉ cần 1 dk không thỏa return false
// some function(textArray,index)-> return boolean -> lặp cho đến khi gặp 1 ptu thỏa dk là đừng lại
// find function(textArray,index)-> return value đầu tiên khi thỏa dk tìm kiếm.
// filter function(textArray,index)-> return all value thỏa conditions

// var listClass =[
//     { 
//         name:"lop 1",
//         coin:1,
//         qty:1,
//     },
//     { 
//         name:"lop 2",
//         coin:2,
//         qty:2,
//     },
//     { 
//         name:"lop 3",
//         coin:3,
//         qty:3,
//     },
//     { 
//         name:"lop 4",
//         coin:0,
//         qty:4,
//     },
//     { 
//         name:"lop 5",
//         coin:0,
//         qty:5,
//     },
//     { 
//         name:"lop 6",
//         coin:0,
//         qty:6,
//     },
// ];

// var isFree = listClass.filter(function(textArray,index){
//     // console.log(`${textArray.qty} ${index}`);
//     console.log(index);
//     return textArray.coin === 0;
// });

// console.log(isFree);

// --------------------------------------- Map() return custom 1 array
// function customHandler (handler,index){
//     // return {
//     //    id:index,
//     //    name: `hoc sinh lơp ${handler.name}`,
//     //    coin: `so ${handler.coin}`,
//     //    qty : handler.qty,
//     //    handler: handler,
//     // };

//     return `<h1> ${handler.qty} </h1>`;
// }

// var newString = listClass.map(customHandler);

// console.log(newString);

// var numbers = [2, 4, 6, 8]; var doubleNumbers = numbers.map(function(num) { return num * 2; }); console.log(doubleNumbers); // [4, 8, 12, 16]

// --------------------------------------- Array reduce() method trả vể 1 kq duy nhất , reduce(accumulator,tham so tuyen vao)

// reduce() được sử dụng khi bạn muốn thực thi một callback lên từng phần tử (từ trái qua phải) với một biến được tích lũy để trả về một giá trị duy nhất.

// Cú pháp: array.reduce(function(total, currentValue, currentIndex, arr), initialValue). Trong đó:

// function(total, currentValue, index, arr): Bắt buộc, là callback sẽ thực thi trên từng phần tử mảng.
// total: Bắt buộc, là giá trị của tham số initialValue trong lần chạy đầu tiên, hoặc là giá trị trả về của callback này ở phần tử trước.
// currentValue: Bắt buộc, là giá trị của phần tử hiện tại
// index: Không bắt buộc, là vị trí của phần tử hiện tại.
// arr: Không bắt buộc, là mảng mà phần tử hiện tại thuộc về.
// initialValue: Không bắt buộc, là giá trị ban đầu cho biến total trong callback.
// Tính tổng các phần tử trong mảng numbers var numbers = [1, 2, 3, 4, 5, 6]; var sum = numbers.reduce(function (total, number) { return total + number; }, 0); console.log(sum); // 21

// var total = listClass.reduce((accumulator, currentValue) => { return accumulator + currentValue.qty
// },10);

// console.log(total);

// ex1
// const numbers = [10, 15, 20, 30, 40, 50, 60, 70, 80];
// var values = numbers.reduce((total,value)=>{
//     return total + value;
// },0);
// console.log(values);

// ex2
// const numbers1 = [10, 15,[20, 30], 40, 50, [60, 70], 80];
// var param = numbers1.reduce((arr,value)=> {
//    return arr.concat(value);
// },[]);

// var param1 = param.reduce((a,b)=>{ return a + b},0);
// console.log(param);

// ex3
// var topics = [
//     {
//         topic:"A",
//         course:[
//             {
//                 id: 1,
//                 title:"test A"
//             },
//             {
//                 id: 2,
//                 title:"test AA"
//             },
//         ]
//     },
//     {
//         topic:"B",
//         course:[
//             {
//                 id: 3,
//                 title:"test B"
//             },
//             {
//                 id: 4,
//                 title:"test BB"
//             },
//         ]
//     },
//     {
//         topic:"C",
//         course:[
//             {
//                 id: 5,
//                 title:"test C"
//             },
//             {
//                 id: 6,
//                 title:"test CC"
//             },
//         ]
//     },
// ];

// var textArray  = topics.reduce((top,value)=>{
//     return top.concat(value.course);
// },[]);

// var htmls = textArray.map((handler,index)=>{
//     return `<div>
//         <p> ${handler.title} </p>
//         </div>`;
// });

// console.log(htmls.join(''));

// --------------------------------------- String/Array includes() method includes(bien triên vào , vị tri) (tìm kiếm 1 giá trị trong hàm)  => return true/false
// var courses = " hello my friend";
// var courses = ['php','test','a'];
// console.log(courses.includes('php',2));


// ---------------------------------- Javascript Callback Functions

// function handlerA(param){
//     if (typeof param === "function") {
//         param(12);
//     }else{
//         console.log('not func');
//     }
// }

// function handlerB(value){
//     console.log(value);
// }

// handlerA(handlerB);

// ex1 định nghia 1 Array.prototype (constructor)

// Array.prototype.map2 = function(call){
//     var arrayValue = [];
//     for(var i=0;i<this.length;++i){
//         var result = call(this[i],i);
//         console.log(result);
//         arrayValue.push(result);
//     }  
//     return arrayValue;
// };

// var courses = ['text1','text2','text3','text4'];

// var htmls = courses.map2(function(chuoi){

//     return `<h1> ${chuoi} </h1>`;
// });
// console.log(htmls);

// ex2
// Array.prototype.reduce2 = function(){

//     var tog =0;

//     for(var i=0;i<this.length;++i){
      
//         tog += this[i];

//     }
    
//     return tog;
// };

// const numbers = [10, 15,20, 30, 40, 50, 60, 70, 80];

// var total = numbers.reduce2(()=>{});

// console.log(total);

// ex3
// Array.prototype.reduce2 = function(callBack){

//     // console.log(leng);
//     var tong = 0;
    
//     for(var i=0;i<this.length;++i){

//         if(this[i].length > 1 ){
//             for(var j=0; j< this[i].length;++j)
//             {
//                 tong += this[i][j];
//             }
//         } else{
//             tong += this[i];
//         }
//     }
//     return tong;
// };

// var numbers = [10, 15,[ 20, 30, 40], 50, 60, 70, 80];

// var total = numbers.reduce2((value)=>{
//     // var arrayValue = [];
//     // return arrayValue.concat(value);
// });
// console.log(total);


// --------------------------------------------------------------- ex forEach()

// Array.prototype.forEach2 = function(callBack){
//     for (const index in this) {
//         // if (this.hasOwnProperty.call(this, key)) {
//         //     const element = object[key];
            
//         // }

//         if (this.hasOwnProperty(index)) {
//             callBack(this[index],index,this);
//         }
//     }
// };

// var courses = ['php','js','ly'];

// courses.forEach(function(value,index,array){
//     // console.log(`${index}    :${value}   :${array}`);
//     console.log(index,value,array);
// });

// courses.forEach2(function(value,index,array){
//     console.log(index,value,array);
// });

// --------------------------------------------------------------- My filter() method

// Array.prototype.filter2 = function(callBack){
//    var result = [];

//     for(var index in this){

//        if(this.hasOwnProperty(index)){
//             var _bienA =  callBack(this[index],index,this);
//             if(_bienA){
//                 result.push(this[index]);
//             }
//        };
//     }

//     return result;
// };

// var listClass =[
//     { 
//         name:"lop 1",
//         coin:1,
//         qty:1,
//     },
//     { 
//         name:"lop 2",
//         coin:2,
//         qty:2,
//     },
//     { 
//         name:"lop 3",
//         coin:3,
//         qty:3,
//     },
//     { 
//         name:"lop 4",
//         coin:0,
//         qty:4,
//     },
//     { 
//         name:"lop 5",
//         coin:0,
//         qty:5,
//     },
//     { 
//         name:"lop 6",
//         coin:0,
//         qty:6,
//     },
// ];

// var value = listClass.filter2(function(list,index,array){
//     // console.log(list);
//     return list.qty >= 3;
// });

// // var value = listClass.filter(function(list,index,array){
// //     return list.qty >= 3;
// // });

// console.log(value);

// --------------------------------------------------------------- My some() method

// Array.prototype.some2 = function(callBack){
  
//     for(var index in this){
//         // console.log(index);
//         if(this.hasOwnProperty(index)){
//             var _bienA =  callBack(this[index],index,this);
//             if(_bienA){
//                 return true
//             }
//         }
//     }

//     return false;
// };

// var listClass =[
//     { 
//         name:"lop 1",
//         coin:1,
//         qty:1,
//     },
//     { 
//         name:"lop 2",
//         coin:2,
//         qty:2,
//     },
//     { 
//         name:"lop 3",
//         coin:3,
//         qty:3,
//     },
//     { 
//         name:"lop 4",
//         coin:0,
//         qty:4,
//     },
//     { 
//         name:"lop 5",
//         coin:0,
//         qty:5,
//     },
//     { 
//         name:"lop 6",
//         coin:0,
//         qty:6,
//     },
// ];

// var value = listClass.some2(function(list,index,array){
//     // console.log(list);
//     return list.qty >= 7;
// });

// // var value = listClass.some(function(list,index,array){
// //     return list.qty >= 3;
// // });

// console.log(value);

// --------------------------------------------------- recursive đệ quy

// var text = ['a','b','c','d','e','a','b','c'];
// console.log([...(new Set(text))]);

// function number(value){
    
//    if(value > 0){
//         return value * number(value -1);
//    }
//    return 1;
// }

// function number(value){
//     var output = 1;
//     for(var i = value ; i > 0 ;--i){
//         output = output* i;
//     }
//     return output;
// }

// console.log(number(10));


// --------------------------------------------------- DOM
// DOM là gì ? document object model , có 3 thành phần : element (là các thẻ) , attribute (thuộc tính của thẻ), text (nội dung của thẻ). Node[element-<head>]-[text:"my her"]-[attribute:"href"]

// getElementById() -> return 1 element
// getElementsByClassName() -> return HTMLCollection
// getElementsByTagName() -> return HTMLCollection
// ------- CSS DOM
// querySelector()  -> return 1 element
// querySelectorAll() ->return NodeList

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div id="hello1" class="box">
//         <h1 class="heading-1">xin chào</h1>
//         <ul>
//             <li>lession -1</li>
//             <li>lession -2</li>
//         </ul>
//     </div>
//     <div id="hello2" class="box">
//         <h1 class="heading-2">xin chào 2</h1>
//         <ul>
//             <li>lss 2</li>
//             <li>lsss 3</li>
//         </ul>
//     </div>
//     <script src="./main.js"></script>
// </body>
// </html>

// var text =  document.getElementById('hello1');
// var text =  document.getElementsByClassName(['heading-1']);
// var text =  document.getElementsByClassName('box');
// var text =  document.getElementsByTagName('h1');
// var text =  document.querySelector('.box h1');
// var text =  document.querySelectorAll('.box');

// console.log(text);

// --------- DOM attribute node
// ex <h1>xin chào</h1>

// var att = document.querySelector('h1');
// console.log(att.title = 'hello-h1');
// console.log(att.className = 'hello-h2');
// att.setAttribute('href','hello-h3');
// att.style = 'color:red';
// console.log('--------------------');
// console.log(att.getAttribute('href'));
// console.log(att.getAttribute('style'));

// --------- InnerText vs textContent Property -> node

// innerText -> return nhìn thấy cái gì trả về cái đó
// when gắn 1 giá trị : truyền vào ntn trả về nt đó ( " " => br )

// textContent -> return tất cả các element bên trong và các thẻ scrip , style , và khoảng trống
// when gắn 1 giá trị -> chỉ trả về giá trị thực không , hiển thị khoảng trống " "

// innerHTML(change content node element) -> return tất cả các nội dụng bên trong / gắn thay đổi tất cả các nội dung
// outerHTML(change content node element) -> trả về tất cả các nội dụng lẫn class cha / gán 1 giá trị , nhưng vẫn consolog ra giá trị ban đầu

// var textA = document.querySelector('.hello3');

// console.log(textA.innerText);
// console.log(textA.textContent);

// textA.innerText = ' <i> new hello </i>';
// textA.innerText = `

// <i> new hello </i>

// `;
// textA.textContent = ' <i> new hello </i>';

// console.log(textA.outerHTML);

// textA.outerHTML = "<p> new haleo </p>";
// console.log(textA);

// ------------- ClassList Property
//classList.add
//classList.remove
//classList.contains  return về boolean
//classList.toggle ktra có thì xóa , không có thì thêm vào

// var test = document.querySelector('div.box-1');
// console.log(test.classList);


// --------- DOM events
/* <div class="box-1 box">
    <h1 onclick="console.log(Math.random());"> hello class</h1> 
    <h1> hello h1</h1>
    <h1> hello h2</h1>
    <h1> hello h3</h1>
</div> */

// var h1Element = document.querySelectorAll('h1');

// for (let index = 0; index < h1Element.length; index++) {
   
//     h1Element[index].onclick = function (e){
//         console.log(e.target.innerText);
//     }
// }

// h1Element.onclick = function (e){
//     console.log(e.target.innerText);
// }
// console.log(h1Element);

// --------- DOM events
// PreventDefault and StopPropagation 

// --------------------StopPropagation
// ex
// <div>
//     div 
//     <br>
//     <h1> say hello</h1>
// </div>

// document.querySelector('div').onclick = function(e){
//     console.log('div');
// }

// document.querySelector('h1').onclick = function(e){
//     e.stopPropagation();
//     console.log('h1');
// }

// console.log(h1Element);
// --------------------PreventDefault

/* <style>
        .red { color: green;}
        ul{
            display: none;
        }
        input:focus ~ ul{
            display: block;
        }
    </style>

<input type="text">
<ul>
    <li>1111</li>
    <li>2222</li>
    <li>3333</li>
</ul>

var ulElenment = document.querySelector('ul');

ulElenment.onmousedown = function(edge){
    edge.preventDefault();
}

ulElenment.onclick = function (event){
    console.log(event.target.innerText);
} */

// -------------------------Event listener
//xử lý nhiều việc cùng 1 lúc (lắng nghe / hủy bỏ lắng nghe)
/* <input id="btn" type="button" value="click me"></input> */
// var btnElemet = document.getElementById('btn');

// function job1(){
//     console.log('11111');
// }
// function job2(){
//     console.log('22222');
// }
// function job3(){
//    alert('123123123');
// }

// btnElemet.addEventListener('click',job1);
// btnElemet.addEventListener('click',job2);
// btnElemet.addEventListener('click',job3);

// setTimeout(() => {
//     btnElemet.removeEventListener('click',job3);
// }, 5000);

// ------------------------------------------JSON
// JSON (JaveScript Object Notation) là gì? là một định dạng dữ liệu (chuỗi)
//stringity: từ javascript -> json
//parse : từ Json -> javascript
// var jsons = '{"Name":"nam ga" , "age":529}';
// var jsons = '["nam","nam2","nam3"]';

// console.log(JSON.stringify(['nam','nam2']));
// console.log(JSON.parse(jsons));


//--------------------- Promise trong Javascript? Cách sử dụng Promise?
// promise sinh ra để handler các thao tác bất đồng bộ > trt khi có promise thường xử dụng callback (có callback hell)
// Promise.all();
// Promise.resolve();
// Promise.reject();

// ex 1
// var promise = new Promise(
//     // 
//     function(resolve, reject){
//         // thanh cong resolve()
//         // that bai reject()
//         reject();
//     }
// );

// promise
//     .then(function(){
//         console.log('thanh cong');
//     })
//     .then(function(){
//         console.log('thanh cong');
//     })
//     .then(function(){
//         console.log('thanh cong');
//     })
//     .then(function(){
//         console.log('thanh cong');
//     })
//     .catch(function(){
//         console.log('loi roi bạn oi');
//     })
//     .finally(function(){
//         console.log('done');
//     });

// ex 2
// function sleep(ms){

//     return new Promise(function(resolve){
//         setTimeout(resolve(),ms);
//     });
// }

// sleep(5000)
//     .then(function(){
//         console.log(1);
//         return 1
//     })
//     .then(function(data){
//         console.log(data);
//         return data + 1;
//     })
//     .then(function(data){
//         return Promise.reject('thua luon');
//     })
//     .then(function(){
//         console.log(4);
//     })
//     .catch(function(xxxx){
//         console.log(xxxx);
//     })
//     .finally(function(){
//         console.log('done');
//     });

// ex 3
// var promise1 = new Promise(
//     function(resolve){
//         setTimeout(function () {
//             resolve([1,2]);
//         },1000);
//     }
// );
// var promise2 = new Promise(
//     function(resolve){
//         setTimeout(function () {
//             resolve([3]);
//         },2000);
//     }
// );

// Promise.all([promise1,promise2])
//     .then(function([result1,result2]){
//         // var result1 = result[0];
//         // var result2 = result[1];

//         console.log(result1.concat(result2));
//     });



// --------------------------------------Promise example

var users = [
    {
        id:1,
        name:"sơn đặng"
    },
    {
        id:2,
        name:"nam nam"
    },
    {
        id:3,
        name:"khoa pham"
    }
]

var comments = [
    {
        id:1,
        user_id:1,
        comment:"Anh nam ra vd chưa"
    },
    {
        id:2,
        user_id:2,
        comment:"oke rồi đó em"
    },
    {
        id:3,
        user_id:1,
        comment:"Tks anh "
    },

]

// function getUsersByIds(userIds){
//     return new Promise(function(resolve){
//       var result = users.filter(function(user){
//          return userIds.includes(user.id)
//       })

//     setTimeout(function(){resolve(result)},1000)
      
//     });
// }

// function getComments (){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve(comments)
//         },1000)
//     });
// }

// getComments()
//     .then(function(comments){
//        var userIds = comments.map(function(cmt){
//             return cmt.user_id
//        });

//         return  getUsersByIds(userIds)
//                     .then(function (users){
//                         return {
//                             users:users,
//                             comments:comments
//                         }
//                     })
//     }).then(function(data){
//         var commentBlock = document.getElementById('comment-block')

//         var html  = '';
//         console.log(data)

//         data.comments.forEach(comnent => {
//             var user = data.users.find(function(user){
//                     return user.id === comnent.user_id;
//             })

//             html += `<li>${user.name} : ${comnent.comment}</li>`
//         });
//         commentBlock.innerHTML = html;
//     });


// var commentBlock = document.getElementById('comment-block')
// var html  = '';

//     comments.forEach(comment => {
//         var user = users.find(function(user){
//                 return user.id === comment.user_id;
//         })

//         html += `<li>${user.name} : ${comment.comment}</li>`
//     });

// commentBlock.innerHTML = html;

// ...........................
// var listUserID = [];

// var newArr = comments.map((cmt,index,arr) => {

//     const isCheck = listUserID.includes(cmt.user_id)

//     if(!isCheck){

//         listUserID.push(cmt.user_id)
//     }

// })

// console.log(listUserID)

// --------------------------------------End Promise example


//--------------------------------- var , let , const

// var có thể truy xuất hay gán lại bất cứ khi nào
// let có thể gán lại ,truy xuất trong 1 phạm bi nhất đinh
//const không thể gán lại(các phần tử con có thể thay thế) , truy xuất trong 1 phạm bi nhất đinh 

//-------------------------------------- arrow function
// các cách khai báo 
// const sum = (a, b) => {
//     return a + b; 
// }

// const sum = (a, b) => a + b;
// return 1 Object
// const sum = (a, b) => ({a:a ,b:b});
// console.log(sum(3,2));
// const logger = a => console.log(a);
// logger('hello nam ga');

// ---------------------------------------------Enhanced object literals trong javascript ES6
// ex1

// var name = "js";
// var price = 10000;
// var course = {
//     name,
//     price,
//     getName() {
//         return name;
//     }
// }
// console.log(course.getName());

// ex2
// var fileName = "name";
// var filePrice = "price";

// var course = {
//     [fileName]: "jsst",
//     [filePrice]: 10000
// }

// console.log(course);
// ------------------------------------------------------Destructuring 

//đối với array không có key nam đặt gì cũng dc
// đối với object thì phải đặt đúng tên của nó

// var array = ['s1','s2','s3'];

// var [a,b, ...rest] = array;
// var [a,b,c] = array;
// var [a, ,c] = array;

// console.log(rest);
// ex3
// var course = {
//     name:'javascrit',
//     price:1000,
//     image:'images-address',
//     children:{
//         name: "js"
//     }
// }

// cách đặt tên biến thay thế (name:newParentName)
// var {name:newParentName ,children: { name:childrenNewName}} = course;

// nếu description không có trả về mặc định deflaut value
// var {name:newParentName , description ="default value"} = course;

// console.log(ParentName);
// console.log(childrenName);

// ex
// function logger(a,b,c,...params){
    // return array
//     console.log(params)
// }
// console.log(logger(1,2,3,4,5,6,7,8)); 

// function logger(a,b,c,...params){
//     console.log(params)
// }
// console.log(logger(1,2,3,4,5,6,7,8));

// ex1
// function logger({name,price}){
//     console.log(name);
//     console.log(price);
// }
// logger({
//     name:'jsjsjsss',
//     price:1000,
//     discription:"textextx",
// });

// ex2
//   
// ---------------------------------------------------Spread 
// khi bạn giải ... nó sẻ bỏ đi đấu ngoặc đằng trt array [] or {}

// ex1
//  1._array
// var array1  =['js','ry','su']
// var array2  =['js2','ry2','su2']
// var array3  =[...array1,...array2]
// console.log(array3)
//  2._object
//   var object1 = {
//     name:'js'
//   }
//   var object2 = {
//     price: 10000
//   }   
//   var object3 = {
//     ...object1,...object2
//   }

//   console.log(object3)

// ex new 
// var defaultConfig = {
//     api:'https://zingnews.vn/',
//     other: 202,
// }
// var exerciseConfig = {
//     ...defaultConfig,
//     api:'https://baovietnam.vn/',
// }
// console.log(exerciseConfig)

//  end 2._object
// end ex1

//  ->>>>>>>>>>>>>Spread
// khi gọi đến hàm chuyển đổi số là spread
// + Rest là gôm lại 1 biến như mãng
// + Spread rãi/trãi phần tử của mãng ra thành từng element riêng lẻ.
// var array  =['js','ry','su','rc']

// function logger(...rest){
//     // rest.forEach(element => {
//     //     console.log(element)
//     // });

//     for(i=0;i<rest.length;i++){
//         console.log(rest[i])
//     }
// }
// // day là spread
// logger(...array)

// day là rest
// logger([...array])

// ---------------------------------------------------END Spread 

// ------------------------------------------- Tagged template literals
// shift() xóa phần tử đầu tiên trả lại chính nó

// function highlight([first,...strings],...values){
//     console.log('first:',first)
//     console.log(strings)
//     console.log(values)

//     return values.reduce(function (acc, currentVl){
//         return [...acc, `<span>${currentVl}</span>`, strings.shift()]
//        },[first]).join('');
//     // return value
// }

// var brand = "F8";
// var course = "js"

// const html = highlight`học lập trinh ${course} tại ${brand} !`

// console.log(html)

// -------------------------------------------End  Tagged template literals


// -------------------------------------------Module 

// import {logger22} from './logger/index.js';

// import * as constant from './constant.js'

// logger22('text messege',constant.TYPE_ERROR)


// ------------------------------------------ Module 



// ------------------------------------------- Fetch  

// var commentBlock = document.getElementById('comment-block')

// fetch("http://localhost:3000/posts")
//   .then((response) => response.json())
//   .then((datas) => {

//     console.log(datas);

//     var htmls = datas.map(function(data){
//         return `<li> ${data.userId} : ${data.title} </li>`
//     });

//     commentBlock.innerHTML = htmls.join('');

//   })
//   .catch((err) => alert("co lỗi!"));



// ------------------------------------------- Fetch và REST API 
var commentBlock = document.getElementById('comment-block');

 var postApi = 'http://localhost:3000/posts';
  
 function start(){
    getPosts(renderPosts)
    handlerAddItem()
    handlerUpdateItem()
 }

 start();

 function getPosts(datas){
    fetch(postApi)
        .then((response) => response.json())
        .then(datas);
 }

 function createPost(id,method,data,callback){
    fetch(postApi + (id ? ("/" + id) : "") ,{
        method:method,
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(callback);
 }

 function deletePost(id){
    
    fetch(postApi + "/" +id,{
        method:"DELETE",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
    })
    .then((response) => response.json())
    .then(()=>{
        const element = document.getElementById('post-item-'+id);
        element.remove();
    });
 }

 function handlerUpdatePost(id){
   
    var element = document.querySelector('#post-item-'+id);
    document.querySelector('input[name="title"]').value = element.children[0].innerText;
    document.querySelector("#clickUpdateItem").removeAttribute('hidden');
    document.querySelector("#clickAddItem").setAttribute('hidden','');
    document.querySelector('input[name="idItem"]').value = id;
 }

 function handlerUpdateItem(){

    var clickUpdateItem = document.querySelector("#clickUpdateItem");

    clickUpdateItem.onclick = function(){
        var title = document.querySelector('input[name="title"]').value;
        var author = document.querySelector('input[name="author"]').value;
        var id = document.querySelector('input[name="idItem"]').value;


        var formData = {
            title:title,
            author:author,
        }
 
        createPost(id,"PUT",formData,function(res){

            
        document.querySelector('#post-item-'+id).innerHTML = createHtml(res);

         
        });
    }
 }

 function renderPosts(datas){

    var htmls= datas.map((data) => createHtml(data));

    commentBlock.innerHTML = htmls.join('');

 }

 function handlerAddItem(){
    var clickAddItem = document.querySelector("#clickAddItem");

    clickAddItem.onclick = function(){
        var title = document.querySelector('input[name="title"]').value;
        var author = document.querySelector('input[name="author"]').value;

        var formData = {
            title:title,
            author:author,
        }
        
        createPost(null,"POST",formData,function(res){

            var newElement = commentBlock.innerHTML + createHtml(res);
        
            commentBlock.innerHTML = newElement;
         
        });
    }
 }

function createHtml(obj){

    var html= `<li id="post-item-${obj.id}">
                <h2> <span>${obj.title} :${obj.author} </span> </h2> <button onclick="deletePost(${obj.id})"> delete </button> <button onclick="handlerUpdatePost(${obj.id})"> Update </button> </h2>
            </li>`;
    return html
}



// {
//     "posts": [
//       {
//         "title": "Tiêu đề 2",
//         "author": "typicode 2",
//         "id": 2
//       },
//       {
//         "title": "tiêu đề 3",
//         "author": "typicode 3",
//         "id": 3
//       },
//       {
//         "title": "tiêu đề 1",
//         "author": "typicode 1",
//         "id": 1
//       },
//       {
//         "title": "tiêu đề 3",
//         "author": "typicode 3",
//         "id": 4
//       }
//     ]
//   }


// -------------------------------------------End Fetch và REST API 


// -------------------------------------------End  Fetch  

// -------------------------------------------JSON server  

// -------------------------------------------END JSON server  


 // Sắp xếp mảng giảm dần 
//  var numbers = [5, 3, 6, 1, 2]; numbers.sort(function (a, b) { return b - a; }); console.log(numbers); // [6, 5, 3, 2, 1]

// ------------------------------------- Form validation

// function Validator(options){
//     //get form-1 check
//     var formElenment = document.querySelector(options.form);

//     function validate(inputElenment,rule){
//         var errorMessage = rule.test(inputElenment.value);
//         var errorElement = inputElenment.parentElement.querySelector(options.errorSelector);
//         if(errorMessage){
//             errorElement.innerText = errorMessage;
//             inputElenment.parentElement.classList.add("red");
            
//         }else{
//             errorElement.innerText = " ";    
//             inputElenment.parentElement.classList.remove("red");
//         }
//     }

//     if(formElenment){
//         options.rules.forEach(function(rule){
//             var inputElenment = document.querySelector(rule.selector);
              
//               if(inputElenment){
//                 //xử lý trường hợp blur ra khỏi input
//                 inputElenment.onblur = function (){
//                     validate(inputElenment,rule);
//                 }

//                 //xử lý trường hợp khi người dùng nhập vào input
//                 inputElenment.oninput = function(){
//                     var errorElement = inputElenment.parentElement.querySelector(options.errorSelector);
//                     errorElement.innerText = " ";    
//                     inputElenment.parentElement.classList.remove("red");
//                 }

//               }
//         });
//     }
    
// }

// //dịnh nghĩa rules

// Validator.isRequired = function (selector){
//     return {
//         selector: selector,
//         test: function (value) {
//             return value.trim() ? undefined : 'Vui lòng nhập trường này';
//         }
//     };
// }

// Validator.isEmail = function (selector){
//     return {
//         selector: selector,
//         test: function (value) {
//             var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//             return regex.test(value) ? undefined : 'Trường này phải là email';
//         }
//     };
// }

// Validator.minLenght = function (selector,min){
//     return {
//         selector: selector,
//         test: function (value) {
//             return value.length >= min ? undefined : `Vui lòng nhập nhiều hơn ${min} ký tự`;
//         }
//     };
// }

// Validator.isConfirmed = function (selector,getConfirmValue){
//     return {
//         selector: selector,
//         test: function (value) {
//             return value === getConfirmValue() ? undefined : 'Giá trị nhập vào không chính xác';
//         }
//     };
// }


 