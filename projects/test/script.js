$(document).ready(function() {
$('.checkbox_bot').on('click', function(){
if ($(this).is(':checked')) 
	{
	     $('.bot').show();
   } else {
        $('.bot').hide(); 
    };
});
$('.checkbox_service').on('click', function(){
if ($(this).is(':checked')) 
	{
	     $('.service').show();
   } else {
        $('.service').hide(); 
    };
});
$('.checkbox_advertiser').on('click', function(){
if ($(this).is(':checked')) 
	{
	     $('.advertiser').show();
   } else {
         $('.advertiser').hide(); 
    };
});
$('.checkbox_geo').on('click', function(){
if ($(this).is(':checked')) 
	{
	     $('.geo').show();
   } else {
         $('.geo').hide(); 
    };
});
$('.checkbox_status').on('click', function(){
if ($(this).is(':checked')) 
	{
	     $('.status').show();
   } else {
         $('.status').hide(); 
    };
});
$('.checkbox_manager').on('click', function(){
if ($(this).is(':checked')) 
	{
	     $('.manager').show();
   } else {
         $('.manager').hide(); 
    };
});
$('.checkbox_launching').on('click', function(){
if ($(this).is(':checked')) 
	{
	     $('.launching').show();
   } else {
         $('.launching').hide(); 
    };
});
$('.checkbox_stopping').on('click', function(){
if ($(this).is(':checked')) 
	{
	     $('.stopping').show();
   } else {
         $('.stopping').hide(); 
    };
});
$('.checkbox_date').on('click', function(){
if ($(this).is(':checked')) 
	{
	     $('.date').show();
   } else {
         $('.date').hide(); 
    };
});
$('.reset_button').on('click', function() {
$('.reset').hide();
});
$('.extra_filters_button').on('click', function(){
$('.extra_filters').toggle();
return false;
});
})