// function
function callClick(id){

}

function getId(id){
    return document.getElementById(id);
}
function getEle(cls){
    return document.getElementsByClassName(cls);
}
// call alert function
function callAlert(id,id2){
    getId(id).addEventListener("click", function(){
        const subTit = getId(id2).getElementsByClassName("sub-title")[0].innerText;
        const callNumber = getId(id2).getElementsByClassName("number")[0].innerText;
        alert(`📞 Calling ${subTit} -> ${callNumber}....`)
    })
}

// functionality
const heartBtns = document.getElementsByClassName("heart-btn");

for (const btn of heartBtns) {
  btn.addEventListener("click", function() {
    // console.log("clicked");

    const heartCnt = parseInt(document.getElementById("heart-cnt").innerText);
    document.getElementById("heart-cnt").innerText = heartCnt + 1;
  });
}

getId("call1").addEventListener("click", function(e){
    
})

// console.log("faisi", getEle("sub-title")[0].innerText);
callAlert("call1","card1")
callAlert("call2","card2")
callAlert("call3","card3")
callAlert("call4","card4")
callAlert("call5","card5")
callAlert("call6","card6")
callAlert("call7","card7")
callAlert("call8","card8")
callAlert("call9","card9")

// console.log(getId("call4").getElementsByClassName("card4"));
