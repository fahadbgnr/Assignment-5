document.getElementById('click-blog')
.addEventListener('click', function(event){
    event.preventDefault();
        if(event.target){
            window.location.href = "./blogs.html"
        }
        else{
            console.log('thik nai')
        }
    

})