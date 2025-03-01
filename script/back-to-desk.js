document.getElementById('back-to-desk-btn')
.addEventListener('click', function(event){
    event.preventDefault();
        if(event.target){
            window.location.href = "./index.html"
        }
        else{
            console.log('thik nai')
        }
    

})