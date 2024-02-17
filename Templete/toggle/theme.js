console.log("1. start 클래스이름넣기----------");
//1. .mainbox, h3subList, inbox, pre, key 등 클래스 이름 번호 붙이기

//1.1 .mainBox > targetMB()
let mainBox = document.querySelectorAll('.mainBox');
// console.log(mainBox);
// function setIDX2(mainBoxSelect1){
function mainAddCls (mainBox){
    let result = [];
    mainBox.forEach(function mbEle(mbEle, mbIDX) {
        mainBox[mbIDX].style.display ="block";
        mbIDX++;
        //2. 클래스 이름 추가
        mbEle.classList.add(`mainBox${mbIDX}`);
        //2.1 추가된 클래스이름만 추출
        mbEle = mbEle.classList[1];
        // console.log("mbEle = ", mbEle);
        //2.2 리턴값에 삽입
        result.push(mbEle);
        // console.log("result = ",result);
    });
    return result;
}
let MBTarget = mainAddCls(mainBox);


//1.2 .h3subList > targetH3()
let h3SubList = document.querySelectorAll('.h3subList');
function h3Addcls(){
    let result = [];
    h3SubList.forEach((h3Ele, h3IDX)=> {
        h3SubList[h3IDX].style.display ="block";
        h3IDX++;
        //2. 클래스 이름 추가
        h3Ele.classList.add(`h3SubList${h3IDX}`);
        //2.1 추가된 클래스이름만 추출
        h3Ele = h3Ele.classList[1];
        //2.2 리턴값에 삽입
        result.push(h3Ele);
    });
    return result;
}
// console.log(h3Addcls(h3SubList));
let H3Target = h3Addcls(h3SubList);
console.log("targetH3 : ", H3Target);
console.log("1. end 클래스이름넣기----------");



console.log("2. start h3SubList 요소영역으로 잡고 이벤트 실행 준비---------");
h3SubList.forEach(function(h3BTN, h3btnIDX){

    // console.log(H3Target);
    h3btnIDX++;
    
    
    h3BTN.addEventListener('click', function(event) {
    console.log("3. start 클릭이벤트----------");

             
        let targeth3Cls = event.target.className;
        console.log('클릭한 타겟 : ', targeth3Cls, '.mainBox'+h3btnIDX);

        let targetMBIDX = '.mainBox'+h3btnIDX;

            //이건 클릭 후 가져오자 
            let eleList = document.querySelectorAll(`${targetMBIDX}`+'> :not(.h3subList)');
            console.log("eleList : ", eleList);

            console.log("4. start ele이름 및 스타일 추가--------");
            function eleAddcls(eleList){
            // function eleAddcls(){
                let result = [];
                eleList.forEach((eleEle, eleIDX)=> {
                    eleIDX++;
                    //2. 클래스 이름 추가
                    eleEle.classList.add(`eleList${eleIDX}`);
                    eleEle.classList.add(`eleList`);
                    //2.1 추가된 클래스이름만 추출
                    eleEle = eleEle.classList[1];
                    //2.2 리턴값에 삽입
                    result.push(eleEle);
                    //console.log("result = ",result);
                });
                return result;
            }
            let eleTarget = eleAddcls(eleList);
            console.log("eleTarget : ", eleTarget);
            console.log("4. end ele이름 및 스타일 추가--------");

            //여까지 오케이
            console.log(targetMBIDX);

            let MBset = document.querySelectorAll(targetMBIDX);
            console.log(MBset);

            let eleList2 = document.querySelectorAll(`${targetMBIDX}`+'> :not(.h3subList)');
             console.log("eleList2 : ", eleList2);

             eleList2.forEach(function(eleList2){
                console.log(eleList); 
                console.log(MBset); 
                    let bbb = document.querySelector('.mainBox1 > .eleList');

                    eleList2.classList.toggle('ishidden');
                        console.log("if eleList : ", eleList2);

            });


    console.log("3. end 클릭이벤트----------");

    return;
    })
});

console.log("2. end  h3SubList 요소영역으로 잡고 이벤트 실행 준비----------");

