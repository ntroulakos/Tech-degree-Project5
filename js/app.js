baguetteBox.run('.grid', {
    //These are the attributes that must be activated to make use of right, left and captions.
    captions: true,  
    leftArrow: '←',
    rightArrow: '→',  
    closeX: 'x'
});
//Grabing the id from the input
const pictureSearch = document.getElementById('pictureSearch');
//Checking the input by the user 
pictureSearch.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    let pictures = document.querySelectorAll('img');
//checking if the word matches a picture otherwise empty
    pictures.forEach(picture => {
        const altText = picture.alt.toLowerCase();
        if (altText.includes(currentValue)){
            picture.style.display = '';
        }else {
            picture.style.display = 'none';
        }

    })
});

