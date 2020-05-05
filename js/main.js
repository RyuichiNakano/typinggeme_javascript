'use strict';

{   
    const words = [
        'apple',
        'sky',
        'blue',
        'middle',
        'set',
        'hanamizu',
        'gaikokuzin'
    ];
    let word = words[Math.floor(Math.random()* words.length)];//'apple';wordの定数に'apple'を代入
    let loc = 0;//letのstring0を代入
    let score = 0;
    let miss = 0;
    //それぞれ定数を定義してgetElementByIDのメソッドを使いIDを読み込む
    const target = document.getElementById('target');
    const scoreLabel = document.getElementById('score')
    const missLabel = document.getElementById('miss')


    function updateTarget(){
        let placeholder = '';
        for(let i = 0; i < loc; i++){
            placeholder +='_';
        }
        target.textContent = placeholder + word.substring(loc);
    }

    window.addEventListener('click', ()=>{
        target.textContent = word;
    });

    window.addEventListener('keydown', a =>　{
        // console.log(a.key);
        if(a.key === word[loc]){
            // console.log('score');
            loc++;
            if (loc === word.length){
                word = words[Math.floor(Math.random()* words.length)];
                loc = 0
            }
            updateTarget();
            score++;
            scoreLabel.textContent = score;
        }else{
            // console.log('miss');
            miss++;
            missLabel.textContent = miss;
        }
    });
}