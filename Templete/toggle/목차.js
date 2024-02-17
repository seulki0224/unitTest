let part2 = document.querySelectorAll('#part2');
let ch1 = document.querySelectorAll('#ch1');
let subList = document.querySelectorAll('.subList li');
let j = 1; // 뺴고싶은 목차 선택
let set_i = j - 1; //3

setTimeout(function () {
    subList.forEach(function (item) {
        item.style.display = 'none'; // 선택한 항목을 제외한 모든 요소를 숨깁니다. 
    });
}, 10);

// setTimeout(function () {   
//     subList.forEach(function(item, index) {
//         if (index !== set_i) {
//             item.style.display = 'none'; // 선택한 항목을 제외한 모든 요소를 숨깁니다.
//         }
//     });
// },10);

function clickEvent() {
    //파트리스트를 누르면 그안에 ch 리스트랑 sub가 사라짐
    part2.forEach(function (part2Item, part2Index) {
        part2Item.addEventListener("click", function () {
            console.log('clickEvent');
            let ch1Hidden;
            ch1.forEach(function (ch1Item, ch1Index) {
                ch1Hidden = ch1Item.style.display === "none";
                if (ch1Index === part2Index) {
                    // console.log(ch1);
                    if (ch1Hidden) {
                        ch1Item.style.display = "block"; // 숨겨진 요소를 보이게 함
                    } else {
                        ch1Item.style.display = "none"; // 보이는 요소를 숨김
                    }
                }
                console.log(ch1Hidden);
                return ch1Hidden;
            });

            subList.forEach(function (subListItem) {
                let subHidden = subListItem.style.display === "none";
                if (ch1Hidden === subHidden) {
                    if (subHidden) {
                        subListItem.style.display = "block"; // 숨겨진 요소를 보이게 함
                    } else {
                        subListItem.style.display = "none"; // 보이는 요소를 숨김
                    }
                }
            });
        });
    });
}

function clickEvent2() {
    //파트리스트를 누르면 그안에 ch 리스트랑 sub가 사라짐
    ch1.forEach(function (ch1Item) {
        ch1Item.addEventListener("click", function () {
            console.log("clickEvent2();")
            subList.forEach(function (subListItem) {
                // console.log(subList);
                let isHidden = subListItem.style.display === "none";
                if (isHidden) {
                    subListItem.style.display = "block"; // 숨겨진 요소를 보이게 함
                } else {
                    subListItem.style.display = "none"; // 보이는 요소를 숨김
                }
            });
        });
    });
};

clickEvent();
clickEvent2();