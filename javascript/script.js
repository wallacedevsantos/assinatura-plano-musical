var btn_mensal = document.querySelector('#trocar_mensal');
var btn_trimestral = document.querySelector('#trocar_trimestral');
var btn_anual = document.querySelector('#trocar_anual');
var plan_mensal = document.querySelector('.plans-option-mensal');
var plan_trimestral = document.querySelector('.plans-option-trimestral');
var plan_anual = document.querySelector('.plans-option-anual');
var text_select = document.querySelector('.plans-option');

btn_mensal.addEventListener('click', function() {

    if(plan_mensal.style.display === 'none') {
        plan_mensal.style.display = 'block'; 
        plan_trimestral.style.display = 'none';
        plan_anual.style.display = 'none';
        text_select.style.display = 'none';
    } else {
        plan_mensal.style.display = 'none';
        text_select.style.display ='block';
    }
});

btn_trimestral.addEventListener('click', function() {

    if(plan_trimestral.style.display === 'none') {
        plan_trimestral.style.display = 'block';
        plan_mensal.style.display = 'none';
        plan_anual.style.display = 'none';
        text_select.style.display = 'none';
    } else {
        plan_trimestral.style.display = 'none';
        text_select.style.display ='block';
    }
});

btn_anual.addEventListener('click', function() {
    if(plan_anual.style.display === 'none') {
        plan_anual.style.display = 'block';
        plan_trimestral.style.display = 'none';
        plan_mensal.style.display = 'none';
        text_select.style.display = 'none';
    } else {
        plan_anual.style.display = 'none';
        text_select.style.display ='block';
    }
});