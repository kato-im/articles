function sf_addItem(search, title, name, name_type, value) {
	var items = jQuery(search).find('.sf_ajaxy-selective-item');
	var exists = false;

	var key = "";
	var md = value.split(':');
	if(md.length == 2) {
		key = md[0];
	}else{
		key = value;
	}
	if(items.length > 0) {
		for(var i = 0; i < items.length; i ++) {
			if(jQuery(items[i]).find('input.sf_ajaxy-selective-close-hidden').val() == key){
				exists = true;
				break;
			}
		}
	}
	if(exists) {
		jQuery(search).find(".sf_ajaxy-selective-input").val("");
		jQuery('#sf_sb').hide();
		return;
	}
	var mds = title.split(':');
	if(mds.length == 2) {
		title = md[1];
	}
	var added_item = jQuery('<span class="sf_ajaxy-selective-item">' + title + '<a class="sf_ajaxy-selective-close">X</a><input class="sf_ajaxy-selective-close-hidden" type="hidden" name="' + name + '" value="' + key + '" /></span>');
	if(items.length <= 0){
		jQuery(search).prepend(added_item);
	}else{
		added_item.insertAfter(items[items.length - 1]);
	}
	added_item.click(function() {
		jQuery(this).remove();
	});
	var input = jQuery(search).find(".sf_ajaxy-selective-input");
	if(input) {
		input.val("");
		if(name_type != 'array') {
			input.css('visibility', 'hidden');
		}else{
			input.focus();
		}
	}
	jQuery('#sf_sb').hide();
}