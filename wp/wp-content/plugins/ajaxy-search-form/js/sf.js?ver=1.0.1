(function($) {

    $.fn.extend({
        ajaxyLiveSearch: function(options, arg) {
            if (options && typeof(options) == 'object') {
                options = $.extend( {}, $.ajaxyLiveSearch.defaults, options );
            }
			else {
				options = $.ajaxyLiveSearch.defaults;
			}
            // this creates a plugin for each element in
            // the selector or runs the function once per
            // selector.  To have it do so for just the
            // first element (once), return false after
            // creating the plugin to stop the each iteration 
			if(this.is("input")){
				this.each(function() {
					new $.ajaxyLiveSearch.load(this, options, arg );
				});
				return;
			}
        }
    });

    $.ajaxyLiveSearch = {
		element: null,
		timeout: null,
		options: null,
		load: function( elem, options, arg ) {
				this.element = elem;
				this.timeout = null;
				this.options = options;
				if($(elem).val() == "") {
					$(elem).val(options.text);
				}
				$(elem).attr('autocomplete', 'off');
				if($('#sf_sb').length == 0){
					$('body').append('<div id="sf_sb" class="sf_sb" style="position:absolute;display:none;width:'+ options.width + 'px;z-index:9999">'+
											'<div class="sf_sb_cont">' +
												'<div class="sf_sb_top"></div>' +
												'<div id="sf_results" style="width:100%">' +
													'<div id="sf_val" ></div>' +
													'<div id="sf_more"></div>' +
												'</div>' +
												'<div class="sf_sb_bottom"></div>' +
											'</div>' +
										'</div>');
				}
				$.ajaxyLiveSearch.loadEvents(this);
			},
		loadResults: function(object) {
			options = object.options;
			elem = object.element;
			window.sf_lastElement = elem;
			if(jQuery(elem).val() != "")
			{
				jQuery("body").data("sf_results", null);
				var loading  = 	"<li class=\"sf_lnk sf_more sf_selected\">"+
					"<a id=\"sf_loading\" href=\"" + options.searchUrl.replace('%s', encodeURI(jQuery(elem).val())) + "\">"+
					"</a>"+
				"</li>";
				jQuery("#sf_val").html("<ul>"+loading+"</ul>");
				var pos = this.bounds(elem, options);
				if(!pos) {
					jQuery("#sf_sb").hide();
					return false;
				}
				if(Math.ceil(pos.left) + parseInt(options.width, 10) > jQuery(window).width()) {
					jQuery("#sf_sb").css('width', jQuery(window).width() - pos.left - 20);
				}
				if(options.rtl == 1) {
					jQuery("#sf_sb").css({top:pos.bottom, left:pos.right});
				}else{
					jQuery("#sf_sb").css({top:pos.bottom, left:pos.left});
				}
				jQuery("#sf_sb").show();
				
				var data = { action: "ajaxy_sf", sf_value: jQuery(elem).val(), search:options.search};
				if(options.ajaxData){
					data = window[options.ajaxData](data);
				}
				if(options.search) {
					var mresults = options.search.split(',');
					var results = [];
					var m = "";
					var s = 0;

					var c = [];
					for(var kindex in mresults){
						var dm = mresults[kindex].split(":");
						if(dm.length == 2) {
							if(dm[1].indexOf(jQuery(elem).val()) == 0) {
								results[results.length] = mresults[kindex];
							}
						}else if(dm.length == 1){
							if(mresults[kindex].indexOf(jQuery(elem).val()) == 0) {
								results[results.length] = mresults[kindex];
							}
						}
					}
					
					c = $.ajaxyLiveSearch.htmlArrayResults(results);
					m += c[0];
					s += c[1];
					
					var sf_selected = "";
					if(s == 0)
					{
						sf_selected = " sf_selected";
					}
					m += "<li class=\"sf_lnk sf_more" + sf_selected + "\">{total} Results Found</li>";
					
					m = m.replace(/{search_value_escaped}/g, jQuery(elem).val());
					m = m.replace(/{search_url_escaped}/g, options.searchUrl.replace('%s', encodeURI(jQuery(elem).val())));
					m = m.replace(/{search_value}/g, jQuery(elem).val());
					m = m.replace(/{total}/g, s);
					
					jQuery("body").data("sf_results", results);
					
					if(s > 0)
					{
						jQuery("#sf_val").html("<ul>"+m+"</ul>");
					}
					else
					{
						jQuery("#sf_val").html("<ul>"+m+"</ul>");
					}
					$.ajaxyLiveSearch.loadLiveEvents(object);
					jQuery("#sf_sb").show();
				}else{
					jQuery.post(options.ajaxUrl, data, function(resp) { 
						var results = eval("("+ resp + ")");
						var m = "";
						var s = 0;
						for(var mindex in results)
						{
							var c = [];
							for(var kindex in results[mindex]){
								c = $.ajaxyLiveSearch.htmlResults(results[mindex][kindex], mindex, kindex);
								m += c[0];
								s += c[1];
							}
						}
						
						
						
						var sf_selected = "";
						if(s == 0)
						{
							sf_selected = " sf_selected";
						}
						if(!options.callback) {
							m += "<li class=\"sf_lnk sf_more" + sf_selected + "\">" + sf_templates + "</li>";
						}
						m = m.replace(/{search_value_escaped}/g, jQuery(elem).val());
						m = m.replace(/{search_url_escaped}/g, options.searchUrl.replace('%s', encodeURI(jQuery(elem).val())));
						m = m.replace(/{search_value}/g, jQuery(elem).val());
						m = m.replace(/{total}/g, s);
						
						jQuery("body").data("sf_results", results);
						
						if(s > 0)
						{
							jQuery("#sf_val").html('<ul class="sf_main">'+m+'</ul>');
						}
						else
						{
							jQuery("#sf_val").html('<ul class="sf_main">'+m+'</ul>');
						}
						$.ajaxyLiveSearch.loadLiveEvents(object);
						jQuery("#sf_sb").show();
					});
				}
			 }
			 else
			 {
				jQuery("#sf_sb").hide();
			 }
		},
		bounds: function (elem, options) {
			var offset = jQuery(elem).offset();
			if(offset) {
				return {top: offset.top, left: offset.left + options.leftOffset, bottom: offset.top +  jQuery(elem).innerHeight() + options.topOffset, right: offset.left - jQuery('#sf_sb').innerWidth() + jQuery(elem).innerWidth()};			
			}
		},
		htmlResults: function (results, type, array_index){
			var m = "";
			var s = 0;	
			if(typeof(results) != "undefined")
			{
				if(results.all.length > 0)
				{
					m += "<li class=\"sf_header\">" + results.title + "</li><li><div class=\"sf_result_container\"><ul>";
					for(var i = 0; i < results.all.length; i ++)
					{
						s ++;
						m += "<li result-type='object' index-type='" + type + "' index-array='" + array_index + "' index='" + i + "' class=\"sf_lnk "+results.class_name +"\">"+  $.ajaxyLiveSearch.replaceResults(results.all[i], results.template) + "</li>";
					}
					m += "</ul></div></li>";
				}
			}
			return new Array(m, s);
		},
		htmlArrayResults: function (results){
			var m = "";
			var s = 0;	
			if(typeof(results) != "undefined")
			{
				if(results.length > 0)
				{
					m += "<li><div class=\"sf_result_container\"><ul>";
					for(var i = 0; i < results.length; i ++)
					{
						var md = results[i].split(':');
						var title = "";
						if(md.length == 2) {
							title = md[1];
						}else{
							title = results[i];
						}
						s ++;
						m += "<li result-type='array' index='" + i + "' class=\"sf_lnk sf_category\"><a href='javascript:;'>" + title + "</a></li>";
					}
					m += "</ul></div></li>";
				}
			}
			return new Array(m, s);
		},
		replaceResults: function (results, template){
			for(var s in results)
			{
				template = template.replace(new RegExp("{"+s+"}", "g"), results[s]);
			}
			return template;
		},
		loadLiveEvents: function(object){
			var d = {object: object};
			jQuery("#sf_val li.sf_lnk").mouseover(function(){
				jQuery(".sf_lnk").each(function() { jQuery(this).attr("class",jQuery(this).attr("class").replace(" sf_selected" , "")); });
				jQuery(this).attr("class", jQuery(this).attr("class") + " sf_selected");
			});
			if(d.object.options.callback)
			{
				jQuery("#sf_val li.sf_lnk").click(function(event){
					try{
						window[d.object.options.callback](d.object, this);
					}catch(e){
						alert(e);
					}
					return false;
				});
			}
		},
		loadEvents: function(object){
			var d = {object: object};
			jQuery(document).click(function(){ jQuery("#sf_sb").hide(); });
			jQuery(window).resize(function(){ 
				var pos = $.ajaxyLiveSearch.bounds(window.sf_lastElement, d.object.options);
				if(pos) {
					jQuery("#sf_sb").css({top:pos.bottom, left:pos.left});
				}
			});
			
			
			jQuery(object.element).keyup(function(event){
				if(event.keyCode != "38" && event.keyCode != "40" && event.keyCode != "13" && event.keyCode != "27" && event.keyCode != "39" && event.keyCode != "37")
				{
					var ajaxyObject = d.object;
					if(ajaxyObject.timeout != null)
					{
						clearTimeout(ajaxyObject.timeout);
					}
					jQuery(ajaxyObject.element).attr("class", jQuery(ajaxyObject.element).attr("class").replace(" sf_focused", "") + " sf_focused");
					//$.ajaxyLiveSearch.loadResults(d.object.element, d.object.options);
					var l = {object:d.object};
					ajaxyObject.timeout = setTimeout(function() { jQuery.ajaxyLiveSearch.loadResults(l.object); }, d.object.options.delay);
				}
			});	
			jQuery(window).keydown(function(event){
				if(jQuery("#sf_sb").css("display") != "none" && jQuery("#sf_sb").css("display") != "undefined" && jQuery("#sf_sb").length > 0)
				{
					if(event.keyCode == "38" || event.keyCode == "40")
					{
						if(jQuery.browser.webkit)
						{
							jQuery("#sf_sb").focus();
						}
						var s_item = null;
						var after_s_item = null;
						var s_sel = false;
						var all_items = jQuery("#sf_val li.sf_lnk");
						var s_found = false;
						event.stopPropagation();
						event.preventDefault();
						for(var i = 0; i < all_items.length; i++)
						{
							if(jQuery(all_items[i]).attr("class").indexOf("sf_selected") >= 0 && s_found == false)
							{
								s_sel = true;
								if(i < all_items.length - 1 && event.keyCode == "40")
								{
									jQuery(all_items[i]).attr("class",jQuery(all_items[i]).attr("class").replace(" sf_selected", ""));
									jQuery(all_items[i+1]).attr("class", jQuery(all_items[i+1]).attr("class")+ " sf_selected");
									i = i+1;
									s_found = true;
								}
								else if(i > 0 && event.keyCode == "38")
								{
									jQuery(all_items[i]).attr("class",jQuery(all_items[i]).attr("class").replace(" sf_selected", ""));
									jQuery(all_items[i-1]).attr("class", jQuery(all_items[i-1]).attr("class")+ " sf_selected");
									i = i+1;
									s_found = true;
								}
							}
							else
							{
								jQuery(all_items[i]).attr("class",jQuery(all_items[i]).attr("class").replace(" sf_selected", ""));
							}
						}
						if(s_sel == false)
						{
							if(all_items.length > 0)
							{
								jQuery(all_items[0]).attr("class", jQuery(all_items[0]).attr("class")+ " sf_selected");
							}
						}
						//jQuery(window).unbind("keypress");

					}
					else if(event.keyCode == 27)
					{
						jQuery("#sf_sb").hide();
					}
					else if(event.keyCode == 13)
					{
						var b = jQuery("#sf_val li.sf_selected a").attr("href");
						if(typeof(b) != 'undefined' && b != '')
						{
							if(d.object.options.callback){
								d.object.options.callback(this);
							}else{
								window.location.href = b;
							}
							return false;
						}
						else
						{
							if(d.object.options.callback){
								d.object.options.callback(this);
							}
							else if(d.object.element != null){
								window.location.href = sf_url.replace('%s', encodeURI(jQuery(d.object).val()));
							}
							return false;
						}
					}
				}
			});
			jQuery(object.element).focus(function (){
				if(jQuery(this).val() == d.object.options.text){
					jQuery(this).val('');
					jQuery(this).attr('class', jQuery(this).attr('class') + ' sf_focused');
				}
				if(d.object.options.expand > 0){
					jQuery(d.object.element).animate({width:d.object.options.iwidth});
				}
			});
			jQuery(object.element).blur(function () {
				if(jQuery(this).val() == ''){
					jQuery(this).val(d.object.options.text);
					jQuery(this).attr('class', jQuery(this).attr('class').replace(/ sf_focused/g, ''));
				}
				if(d.object.options.expand > 0){
					jQuery(d.object.element).animate({width:d.object.options.expand});
				}
			});
		}
	};
    $.ajaxyLiveSearch.defaults = {
       delay:500, 
	   leftOffset: 0,
	   topOffset: 5,
	   text: "Search For",
	   iwidth: 180,
	   width: 315,
	   ajaxUrl: "",
	   ajaxData: false, //function to extend data sent to server
	   searchUrl: "",
	   expand: false,
	   callback: false,
	   rtl: true,
	   search: false
    };

})(jQuery);