//btnというIDを持つHTML要素を取得して、定数に代入する
const btn =document.getElementById('btn');
//textというIDを持つHTML要素を取得して、定数に代入する
const text =document.getElementById('text');

//クリックによるイベント処理を実行する
btn.addEventListener('click',() =>{
    //2秒経った後に、非同期処理を実行する
    setTimeout(() =>{
         text.textContent='ボタンをクリックしました';
        },2000);
});

