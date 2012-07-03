jQuery.fn.m5accordion = function(options){
var options = jQuery.extend({
  timeAnimationAccordion: '1500',
  hidePanelONclickThisTab: true,
  hideOtherPanelContent: true
},options);

return this.each(function() {
	var click=true;
	$(".m5Accordion div.m5AccordionPanelTab").each(function(i){$(this).attr("indexTitle", i);});
	$(".m5Accordion div.m5AccordionPanelContent").each(function(i){$(this).hide();});
	$(".m5Accordion div.m5AccordionPanelContent").each(function(i){$(this).css("overflow","hidden");});
	$(".m5Accordion div.m5AccordionPanelContent").each(function(i){$(this).addClass("indexContent_"+i); });
	$(".m5AccordionPanelTab").bind("click", function(){
		if (click)
		{
			click=false;
			var idClass="indexContent_"+$(this).attr("indexTitle");
			if ($('.'+idClass).is(':visible')!=false && options.hidePanelONclickThisTab!=false) {
				$('.'+idClass).slideUp(options.timeAnimationAccordion);
				$(this).removeClass("isOpenTitle");
				click=true;
			} else
			{
			
				if (options.hideOtherPanelContent) {$(".m5AccordionPanelContent").slideUp(options.timeAnimationAccordion)}
				$(".m5AccordionPanelTab").removeClass('isOpenTitle');
				$(this).addClass("isOpenTitle");
				$("."+idClass).slideDown(options.timeAnimationAccordion, function(){
					$(this).addClass("isOpen");
					click=true;
				});
			}
		}
	})
});
};