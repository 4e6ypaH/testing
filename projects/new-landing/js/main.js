
/*задаем массивы для скрытых блоков и кнопок*/
let extraBlocks = document.getElementsByClassName('extra');
let extraButtons = document.getElementsByClassName('extra-button');

/*по клику меняем видимость блока и кнопки*/
for (let i=0; i < extraButtons.length; i++) {
	extraButtons[i].addEventListener('click', function(){
		extraBlocks[i].style.display="block";
		extraButtons[i].style.display="none";
		})
}

/* расчитываем стоимость в зависимости от введенного значения инпута*/
let fixedSumArray =document.getElementsByClassName('fixed-sum');
let oneHousePriceArray=document.getElementsByClassName('one-house-price');
let resultArray =document.getElementsByClassName('result');
let inputValueArray =document.querySelectorAll('input');


/*после ввода значения в инпут изменяем значение блока result,
 преобразовав слагаемые к числовому типу*/
for (let i = 0; i < inputValueArray.length; i++) {
	inputValueArray[i].addEventListener('keypress', function(){
		resultArray[i].innerHTML = +fixedSumArray[i].innerHTML +
		 +oneHousePriceArray[i].innerHTML*inputValueArray[i].value;
		 console.log(resultArray[i].innerHTML);
	})	
}
