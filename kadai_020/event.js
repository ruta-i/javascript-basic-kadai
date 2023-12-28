//btnというIDを持つHTML要素を取得し、定数に代入する
const btn =document.getElementById('btn');

//html要素がクリックされた時にイベント処理を実行する
document.addEventListener('click',() =>{
    //textというIDを持つHTML要素を取得し、定数に代入する
    const text =document.getElementById('text');

    //HTML要素のテキストを変更する
    text.textContent ='ボタンをクリックしました';
});