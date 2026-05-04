/* 無名関数 */

var funcConstructor = new Function('x', 'y', 'return x + y');
    console.log(funcConstructor);


var myFunction = function(foo){
    arguments[0] = 'xyz';
    console.log(foo, arguments[0]);
    foo = 'foo';
    console.log(foo, arguments[0]);

    var arg1 = arguments[1];
    arguments[1] = '123';
    console.log(arg1, arguments[1]);
}('abc');
//myFunction(abc);


var myFunction = function(z,s,d){
    return arguments.length;
};
console.log(myFunction(1,2,3));

var myFunction2 = function(z,s,d){
    return myFunction2.length;
};

console.log(myFunction2());

var foo = function foo(){
    console.log(arguments.callee);
}();

var add = function(){
    return arguments[0] + arguments[1];
}
console.log(add(4,4));

var myObject1 = {
    name: 'myObject1',
    myMethod: function(){console.log(this.name);}
}
myObject1.myMethod();


Object.prototype.foo = 'foo';
var myString = 'string';
console.log(myString.foo);

var cody = new Object();
for(key in cody){
    if(cody.hasOwnProperty(key)){
        console.log('cody:' + key);
    }
}

cody = {
    age : 33,
    gender: 'male',
    living: true
    };

    console.log(cody)




var sayhi = function(f){ f(); };
sayhi( function(){console.log('hi'); });

/* 無名即時 */


/* 無名即時 */
var sayword = function(){ console.log('word'); }();

(function(msg){
    console.log(msg);
})('Hi');

(function(msg){
    console.log(msg)
}('Hi2'));

!function sayHi(msg){console.log(msg);}('Hi3');

var foo = function(f){
    return f;
};

var countDownFrom = function countDownFrom(num){
    console.log(num);
    num--;
    if(num < 0){ return false; }
    countDownFrom(num);
}(5);
//countDownFrom(5);

/* Form input change event */
const element = document.querySelector('#textArea');
element.addEventListener('change', handleChange );

function handleChange(event){
    const value = event.target.value;
    const htmlStr = value.split('\n').join('<br>');
    document.querySelector('.log').innerHTML = htmlStr;
}

document.querySelector('#my-check').checked = true;


/* Fileアップロード */
const elem = document.querySelector('#my-file');
const log = document.querySelector('.log');

elem.addEventListener('change', (e)=>{
    const file = e.target.files[0];
    //console.info(files[0].name);

    const reader = new FileReader();
    reader.addEventListener('load', ()=>{
        log.textContent = reader.result;
    });
    reader.readAsText(file);

})



/* タイトルフェードイン */

const heading = document.querySelector('#heading');
const keyframes = {
    opacity: [0, 1],
    translate: ['0 20px', 0]
}
const options = {
    duration: 1000,
    easing: 'ease'
};
heading.animate(keyframes, options);


/* 分割代入 */
    const lists = [
    {
        name: 'いちご',
        img: 'photo1.jpg',
        price: 450
    },
    {
        name: 'ライム',
        img: 'photo2.jpg',
        price: 480
    },
    {
        name: 'マンゴー',
        img: 'photo3.jpg',
        price: 550
    }
];
const menu = document.querySelector('#menu');

//menu.textContent = content;
for(let i = 0; i < lists.length; i++ ){
    const { name, img, price } = lists[i];
    const content = `<div><img src="./assets/img/${img}" alt="${name}"><h2 class="menu-h2">${name}</h2><p>${price}円</p></div>`;
    //const content = 'content';
    menu.insertAdjacentHTML('beforeend', content);
    //menu.textContent = content;
}



/* スクロール　進捗 
const getScrollPercent = () => {
    const scrolled = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const viewHeight = document.documentElement.clientHeight;
    const percentage = scrolled / (pageHeight - viewHeight) * 100;
    document.querySelector('#bar').style.width = `${percentage}%`
    console.log(percentage);
}
window.addEventListener('scroll', getScrollPercent);
*/

/*　カラーコード　
const color= document.querySelector('#colorPicker');
const text = document.querySelector('#colorText');
const colorBg = () => {
    text.textContent = `カラーコード：${color.value}`;
    document.body.style.backgroundColor = color.value;
}
color.addEventListener('input', colorBg);
*/
/*　仮引数　実引数　
const message = (name, weather) => {
    return `${name}さん今日は${weather}ですね。`;
}
message('nana', '曇り');
*/
/* ローディング 
const loading = document.querySelector('#loading');
window.addEventListener('load', ()=>{
    loading.classList.add('loaded');
})
*/
/* 同意・送信
const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', ()=>{
    btn.disabled = !isAgreed.checked;
})
*/

