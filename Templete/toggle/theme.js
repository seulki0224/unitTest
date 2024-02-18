console.log("1. pre 목록 display: hidden");
function preHidden () {
let eleListPre = document.querySelectorAll('.mainBox > pre');
    eleListPre.forEach(element => {
        element.classList.add('ishidden');
    });
}
preHidden();

console.log("2. main, h3 class 이름 추가");
let mainBox = document.querySelectorAll('.mainBox');
let h3SubList = document.querySelectorAll('.h3subList');
let clssList = [mainBox, h3SubList];

function addCLS(clssList) {
    let result = [];
    let clssList_ = clssList;

    clssList_.forEach(function Elements(ele, idx) {
        clssList_[idx].style.display = "block";
        idx++;
        eleName =  ele.classList[0];
        //2. 클래스 이름 추가
        ele.classList.add(`${eleName}`+`${idx}`);
        //2.1 추가된 클래스이름만 추출
        ele = ele.classList[1];
        //2.2 리턴값에 삽입
        result.push(ele);
    });
    return result;
}
addCLS(mainBox);
addCLS(h3SubList);

console.log("3. start h3SubList 요소 루프 준비");
    h3SubList.forEach((h3BTN, h3btnIDX) => {
        h3btnIDX++;

        let hoverToggle = () =>{

            // h3BTN.addEventListener('mouseover', (event) => {
            h3BTN.addEventListener('mouseover', () => {

                // let targeth3Cls = event.target.className;
                // console.log(targeth3Cls);

                let targetIDX = h3btnIDX -1;
                let targeth3text = h3SubList[targetIDX].textContent;
                console.log('.mainBox' + h3btnIDX, '\n' + targeth3text);


                let targetMBIDX = '.mainBox' + h3btnIDX;

                let MBColor = document.querySelector(`${targetMBIDX}`);
                // console.log("h3Color : ", MBColor);
                MBColor.style.border = "1px solid rgba(128, 128, 128, 0.5)";

                //이건 클릭 후 가져오자 
                let eleList = document.querySelectorAll(`${targetMBIDX}` + '> :not(.h3subList)');
                // console.log("eleList : ", eleList);

                // console.log("4. start ele이름 및 스타일 추가--------");

                function eleAddcls(eleList) {
                    // function eleAddcls(){
                    let result = [];
                    eleList.forEach((eleEle, eleIDX) => {
                        eleIDX++;
                        //2. 클래스 이름 추가
                        eleEle.classList.remove(`eleList${eleIDX}`);
                        eleEle.classList.remove(`eleList`);
                        //2.1 추가된 클래스이름만 추출
                        eleEle = eleEle.classList[1];
                        //2.2 리턴값에 삽입
                        result.push(eleEle);
                        //console.log("result = ",result);
                    });
                    return result;
                }
                let eleTarget = eleAddcls(eleList);
                // console.log("eleTarget : ", eleTarget);

                // console.log(targetMBIDX);

                let MBset = document.querySelectorAll(targetMBIDX);
                // console.log(MBset);

                let eleList2 = document.querySelectorAll(`${targetMBIDX}` + '> pre');
                // console.log("eleList2 : ", eleList2);

                eleList2.forEach(function (eleList2) {
                    // console.log(MBset);
                    let bbb = document.querySelector('.mainBox1 > .eleList');

                    eleList2.classList.remove('ishidden');
                    // console.log("if eleList : ", eleList2);

                });
                return;
            })

            h3BTN.addEventListener('mouseout', function () {
                // console.log("3. start mouseout이벤트----------");

                // let targeth3Cls = event.target.className;
                // console.log('클릭한 타겟 : ', targeth3Cls, '.mainBox' + h3btnIDX);

                let targetMBIDX = '.mainBox' + h3btnIDX;

                let MBColor = document.querySelector(`${targetMBIDX}`);
                // console.log("h3Color : ", MBColor);
                MBColor.style.border = "1px solid rgba(128, 128, 128, 0.1)";

                //이건 클릭 후 가져오자 
                let eleList = document.querySelectorAll(`${targetMBIDX}` + '> :not(.h3subList)');
                // console.log("eleList : ", eleList);

                // console.log("4. start ele이름 및 스타일 추가--------");

                function eleAddcls(eleList) {
                    // function eleAddcls(){
                    let result = [];
                    eleList.forEach((eleEle, eleIDX) => {
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
                // console.log("eleTarget : ", eleTarget);

                // console.log(targetMBIDX);

                let MBset = document.querySelectorAll(targetMBIDX);
                // console.log(MBset);

                // let eleList2 = document.querySelectorAll(`${targetMBIDX}`+'> :not(.h3subList)');
                let eleList2 = document.querySelectorAll(`${targetMBIDX}` + '> pre');
                // console.log("eleList2 : ", eleList2);

                eleList2.forEach(function (eleList2) {
                    // console.log(eleList);
                    // console.log(MBset);
                    let bbb = document.querySelector('.mainBox1 > .eleList');

                    eleList2.classList.add('ishidden');
                    // console.log("if eleList : ", eleList2);

                });
                return;
            })

        };
        hoverToggle();
    });
