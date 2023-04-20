    'use strict'
const switcher = document.querySelector ('button');
    
    switcher.addEventListener ('click', function() {
    document.body.classList.toggle('darkTheme') 

    var className = document.body.className;
    
    if (className == "darkTheme")
    {
        this.textContent = "Light Theme";
    }
    else
    {
        this.textContent = "Dark Theme";
    }
    

        console.log('current class name:' + className);
});
