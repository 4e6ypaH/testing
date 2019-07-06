
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
