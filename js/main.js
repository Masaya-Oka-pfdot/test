'use strict'

{
  // 要素取得
  const creatPassWord = document.getElementById("creat");
  var createdPassWord  = document.getElementById("newpassword");
  var incNum = document.getElementById("includeNum");
  var incMark = document.getElementById("includeMark");
  var selectedRange = document.getElementById("Range");
  var Range = document.getElementById("variable");
  
  selectedRange.addEventListener('input',() => {
    Range.innerHTML = `${selectedRange.value}`;
  });
  //clickイベント付与
  creatPassWord.
  addEventListener('click',repStrings,false);
  

  //明示的に諸変数初期化
  var newletters = "";
  var finalletters = "";
  const letters = "q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m,Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M";
  const Numbers = ",1,2,3,4,5,6,7,8,9,0";
  const Marks = ",!,#,$,%,&,(,),=,~,?,*,+,-,<,>,@,[,],;,:,/,',_";
  var selected = [];
  var setRange = 0;
  
  // イベント時パスワードを表示する関数を定義
  function repStrings(){
    var newString = makerandomString();
    createdPassWord.innerHTML = newString;
  }
  // チェック付与に応じて候補文字を変更する関数定義  
  function setSelectedChars(){
    selected = [];
    newletters = letters; 
    if(incNum.checked){
      newletters+=Numbers;
    }
    if(incMark.checked){
      newletters+=Marks;
    }
    selected = newletters.split(",");
    return selected;
  }
  // パスワードを生成する関数を定義
  function makerandomString(){
    setRange = selectedRange.value;
    selected = setSelectedChars();
    finalletters = "";
    for(let i=0;i<setRange;i++){
      var randomVariable = Math.floor(Math.random()*selected.length);
      finalletters+=selected[randomVariable];
    }
    return finalletters;
  }
}
