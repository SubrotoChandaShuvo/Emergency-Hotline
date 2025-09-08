const callHistory = [];
// function

function getId(id) {
  return document.getElementById(id);
}
function getEle(cls) {
  return document.getElementsByClassName(cls);
}
// call alert function
function callAlert(id, id2) {
  getId(id).addEventListener("click", function (e) {
    e.preventDefault;
    const callNumber = getId(id2).getElementsByClassName("number")[0].innerText;
    const subTit = getId(id2).getElementsByClassName("sub-title")[0].innerText;
    const Tit = getId(id2).getElementsByClassName("title")[0].innerText;
    const coinCnt = parseInt(document.getElementById("coin-cnt").innerText);

    const newCoinCnt = coinCnt - 20;
    // console.log("jjkkj", newCoinCnt);

    if (coinCnt < 20) {
      alert(
        "❌ You Haven't Enough Money. You Must Have At Least 20 Coins For Calling."
      );
      return;
    }

    document.getElementById("coin-cnt").innerText = newCoinCnt;
    alert(`📞 Calling ${subTit}: ${callNumber}....`);

    const data = {
      name: Tit,

      number: callNumber,
      time: new Date().toLocaleTimeString(),
    };
    callHistory.push(data);

    getId("history-container").innerText = "";
    for (const his of callHistory) {
      const div = document.createElement("div");
      div.innerHTML = `
         <div
            class="bg-[#FAFAFA] flex justify-between items-center p-4 mt-2 rounded-xl"
          >
            <div>
              <p class="font-semibold text-[18px]">${his.name}</p>
              <p class="text-[#5C5C5C]">${his.number}</p>
            </div>
            <div>
              <p>${his.time}</p>
            </div>
          </div>
        `;
      getId("history-container").appendChild(div);
    }
  });
}

// functionality
const heartBtns = document.getElementsByClassName("heart-btn");

for (const btn of heartBtns) {
  btn.addEventListener("click", function () {
    // console.log("clicked");

    const heartCnt = parseInt(document.getElementById("heart-cnt").innerText);
    document.getElementById("heart-cnt").innerText = heartCnt + 1;
  });
}

// console.log("faisi", getEle("sub-title")[0].innerText);
callAlert("call1", "card1");
callAlert("call2", "card2");
callAlert("call3", "card3");
callAlert("call4", "card4");
callAlert("call5", "card5");
callAlert("call6", "card6");
callAlert("call7", "card7");
callAlert("call8", "card8");
callAlert("call9", "card9");

// console.log(getId("call4").getElementsByClassName("card4"));
