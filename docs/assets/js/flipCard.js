var card = document.querySelector('.cardFlip');
card.addEventListener( 'click', async function() {
  card.classList.toggle('is-flipped');
    
    if(document.getElementById('generalInfo').style.display === 'none'){
        document.getElementById('generalInfo').style.display = '';
    }else{
        await sleep(400);
        document.getElementById('generalInfo').style.display = 'none';
    }
});

