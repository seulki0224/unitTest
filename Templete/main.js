//실행안되게 하려고 함수표기법 사용
//ex1
let navEls = document.querySelectorAll('.testclass');
//ex1.1 
//인덱스 번호추가 + 추가된클래스 내용 모두 출력
ex1_1 = function() { 
    //여기부터 뜯어쓰면됨
    navEls.forEach(
        function(navElements, index){
            navElements.classList.add(`${index + 1}`);
            //navElements.classList.add(`${index}`);
            console.log('ex1.1 : ', index, navElements);
        }
    );
    //여기까지
};
ex1_1();
//ex1.2
//클래스 이름 추가 및 출력
const ex1_2 = function () { 
    navEls.forEach(
        function( navEls2 ){
            navEls2.classList.add('className');
            console.log('ex1.2 : ', navEls2);
        }
    );
};
//ex1_2();
const navEls2 = document.querySelectorAll('.testclass');
//ex2.1
const ex2_1 = function () { 
    navEls.forEach(
        function( navEls2 ){
            navEls2.classList.add('className');
            console.log('ex2 : ', navEls2);
        }
    );
};
//ex2();
//ex2.2
//잘못된 예시
const ex2_2 = function () { 
    navEls.forEach(
        function(index){
            index.classList.add(`${index + 1}`);
            console.log("index : ", index);
            //console.log("navEls : ", navEls);
        }
    );
};
//ex2_2();