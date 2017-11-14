
var showHide = function(e) {
    var tabselected = e.target.dataset.tabselected;

    //Create var to store their values.
    var breakfast = document.getElementById('breakfast');
    var lunch = document.getElementById('lunch');
    var dinner = document.getElementById('dinner');
  
        if(tabselected === 'tabBreakfast'){
            console.log('vamos a desayunar');
            //Ocultar almuerzo y cena.
            lunch.style.display = 'none';
            dinner.style.display = 'none';
            //Mostrar desayuno.
            breakfast.style.display = 'block';
        } else if (tabselected === 'tabLunch'){
            console.log('vamos a almorzar');
            //Ocultar desayuno y cena.
            breakfast.style.display = 'none';
            dinner.style.display = 'none';
            //Mostrar almuerzo.
            lunch.style.display = 'block';
        } else if (tabselected === 'tabDinner'){
            console.log('vamos a cenar');
            //Ocultar desayuno y almubreakfast.style.display = 'none'erzo.
            breakfast.style.display = 'none';
            lunch.style.display = 'none';
            //Mostrar cena.
            dinner.style.display = 'block';
        }
};

//To load page when we open the web.
var loadPage = function(){
    //to hide all dishes when loading page.
    var breakfast = document.getElementById('breakfast');
    var lunch = document.getElementById('lunch');
    var dinner = document.getElementById('dinner');

    breakfast.style.display = 'none';
    lunch.style.display = 'none';
    dinner.style.display = 'none';
    //to get buttons elements.
    var elementsTab = document.getElementsByClassName('tab');
        for(var i = 0; i<elementsTab.length; i++){
            elementsTab[i].addEventListener('click', showHide);
        }
};

loadPage(); //calling function.
