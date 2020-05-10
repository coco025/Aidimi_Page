async function flipCard(){
    var generalInfo = document.getElementById("generalInfo");
    var detailInfo = document.getElementById("detailInfo");
    
    generalInfo.classList.add("flipOutY");
    detailInfo.classList.add("flipInY");
    detailInfo.style.display = '';
    await sleep(900);
    generalInfo.style.display = 'none';
    
    //detailInfo.classList.add("slideInLeft");
}


//document.getElementById("purpose").setAttribute("onclick","flipCard()");
