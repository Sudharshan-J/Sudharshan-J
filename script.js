const like = document.querySelector('#like')
const dislike = document.querySelector('#dislike')

like.addEventListener('click',function(){
    if(like.value ==='Like'){
        like.value = 'Liked'
    }
    else if (like.value ==='Liked'){
        like.value = 'Like'
    }   
})
dislike.addEventListener('click',function(){
    if(dislike.value ==='Dislike'){
        dislike.value = 'Disliked'
    }
    else if (dislike.value ==='Disliked'){
        dislike.value = 'Dislike'
    }   
})