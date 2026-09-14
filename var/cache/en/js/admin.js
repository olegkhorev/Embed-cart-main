var current_multirow = 0;

function createGradient(ctx, chartArea) {

  const gradient = ctx.createLinearGradient(

    0,

    chartArea.bottom,

    0,

    chartArea.top

  );



  gradient.addColorStop(0, "rgba(76, 175, 80, 0.1)");

  gradient.addColorStop(0.5, "rgba(76, 175, 80, 0.6)");

  gradient.addColorStop(1, "rgba(76, 175, 80, 1)");



  return gradient;

}



function formatMonthLabels(dates) {

  const monthLabels = dates.map((date) => {

    const d = new Date(date);

    return d.toLocaleString("en", { month: "short" });

  });



  return monthLabels.map((month, index, array) => {

    return index === 0 || month !== array[index - 1] ? month : "";

  });

}



const CHART_COLORS = {

  white: "#fff",

  green: "#fff",

  purple: "#A265FF",

  yellow: "#FFB202",

  pink: "#ED02AD",

  blue: "#218EF5",

  lightBlue: "#4A8EFF",

  red: "#EF364F",

  cyan: "#38C1F2",

  orange: "#F19B36",

  lightGreen: "#32E28B",

};





const TOOLTIP_SETTINGS = {

  titleColor: "rgb(255, 255, 255)",

  bodyColor: "rgb(255, 255, 255)",

  borderWidth: 1,

  borderColor: "#fff",

  borderRadius: 10,

  padding: 15,

  titleFontSize: 16,

  bodyFontSize: 20,

  bodyWeight: "bold",

};



const GRID_SETTINGS = {

  color: "#6ccf70",

};



const LINE_CHART_CONFIG = {

  data: {

    labels: [

      "2024-05-05",

      "2024-06-02",

      "2024-07-01",

      "2024-08-02",

    ],

    values: [

      100000, 125000, 116000, 260000,

    ],

  },



  display: {

    lineColor: CHART_COLORS.green,

    tension: 0.25,

    pointRadius: 0,

    pointHoverRadius: 6,

    pointHoverColor: "#fff", 

    pointHoverBorderColor: "#FFFFFF",

  },



  scaleY: {

    min: 0,

//    max: 200000,

//    stepSize: 25000,

    //allowedValues: [100000, 125000, 150000, 200000],

    format: (value) => '$' + (Math.floor(value * 100) / 100),// / 1000 + "k",

  },

};



const verticalLinePlugin = {

  id: "verticalLinePlugin",

  beforeDatasetsDraw: function (chart) {

    if (chart.tooltip._active && chart.tooltip._active.length) {

      const ctx = chart.ctx;

      const activePoint = chart.tooltip._active[0];

      const x = activePoint.element.x;

      const y = activePoint.element.y;

      const chartArea = chart.chartArea;



      ctx.save();



      const gradient = ctx.createLinearGradient(x, chartArea.bottom, x, y);

      gradient.addColorStop(1, "rgba(255, 255, 255, 1)");

      gradient.addColorStop(1, "rgba(255, 255, 255, 0.4)");

      gradient.addColorStop(1, "rgba(255, 255, 255, 1)");



      ctx.beginPath();

      ctx.moveTo(x - 1, chartArea.bottom);

      ctx.lineTo(x - 1, y);

      ctx.lineTo(x + 1, y);

      ctx.lineTo(x + 1, chartArea.bottom);

      ctx.closePath();



      ctx.fillStyle = gradient;

      ctx.fill();



      ctx.restore();

    }

  },

};



const gradientTooltipPlugin = {

  id: "gradientTooltip",

  beforeDraw: function (chart) {

    const tooltip = chart.tooltip;

    if (tooltip._active && tooltip._active.length) {

      const ctx = chart.ctx;

      const tooltipModel = tooltip;



      const gradient = ctx.createLinearGradient(

        tooltipModel.x,

        tooltipModel.y - tooltipModel.height,

        tooltipModel.x,

        tooltipModel.y

      );



      gradient.addColorStop(0.5, "#0c6f10");

      gradient.addColorStop(1, "#4caf50");



      tooltipModel.gradientBackground = gradient;

    }

  },

};



function admin_left_ec_menu() {
	var height = $ec('.ec_content').height();

	if (height < $ec(window).height())

		height = $ec(window).height() - 40;


	$ec('.left-admin-ec_menu').height(height);

}



$ec(window).resize(function() {

});



(function($) {

"use strict";

	$ec(document).ready(function() {

		header_search_form();

	$ec('.goback-admin').attr('href', window.location.href);
	var ec_menu_fast_click = false;

	$ec('.admin_ec_menu a.opener').on('click', function() {

		setCookie('admin_ec_menu', $ec(this).attr('id'), 30);



		$ec('.admin_ec_menu div').slideUp();

		var parent = $ec(this).parent();

		if (ec_menu_fast_click) {

			ec_menu_fast_click = false;

			parent.find('div').slideDown(150);

		} else

			parent.find('div').slideDown(350);

	});
	admin_left_ec_menu();

	setTimeout(function() {
		admin_left_ec_menu();

		setTimeout(function() {

			admin_left_ec_menu();

		}, 2000);

	}, 1000);


	var left_ec_menu_id = getCookie('admin_ec_menu');

	console.log(left_ec_menu_id);

	if (left_ec_menu_id) {

		ec_menu_fast_click = true;

		bc = false;

		$ec('#'+left_ec_menu_id).click();

	}



	ec_ajax_clicks_admin();

	});

//Code here

})($);



$ec(window).scroll(function() {
	var top = $ec(window).scrollTop() - 40;

	if (top < 30)

		top = 0;

});



function submitForm(formObj, formMode, e) {

    if (!e && typeof(window.event) != 'undefined') e = event;



    if (e) {

        if (e.stopPropagation) e.stopPropagation();

        else e.cancelBubble = true;

    }



    if (!formObj)

        return false;



    if (formObj.tagName != "FORM") {

        if (!formObj.form)

            return false;



        formObj = formObj.form;

    }



    if (formObj.mode) formObj.mode.value = formMode;



    if (typeof(window.$) != 'undefined') {

        var r = $ec(formObj).triggerHandler('submit');

        if (r === false)

            return false;

    }



    return formObj.submit();

}



function check_all(form, prefix, flag) {

  if (!form)

    return;



  if (prefix)

    var reg = new RegExp("^"+prefix, "");

  for (var i = 0; i < form.elements.length; i++) {

    if (form.elements[i].type == "checkbox" && (!prefix || form.elements[i].name.search(reg) == 0) && !form.elements[i].disabled)

      form.elements[i].checked = flag;

  }

}



function copy_clean_url(from_field, to_field) {
  if (typeof from_field == "undefined" || typeof from_field.value == "undefined") {
    return;
  }

  if (typeof to_field == "undefined" || typeof to_field.value == "undefined") {
    return;
  }

  to_field.value = from_field.value.replace(/[\&]/g, '-and-').replace(/[^a-zA-Z0-9._-]/g, '-').replace(/[-]+/g, '-').replace(/-$/, '');

  return true;
}



function change_state(e) {
	$ec(e).each(function() {
		if ($ec(this).is(':checked'))

			$ec(this).removeAttr('checked');

		else

			$ec(this).get(0).checked = true;

	});

}



function ec_ajax_clicks_admin() {

	init_translate();

	ec_states_actions();
	current_multirow = 0;
	custom_elements();

	reinitialize_mdl();

	$ec('.close-alerts').unbind('click').on('click', function() {
		$ec('.alerts').slideUp();
	});



	$ec('#wenabled').change(function() {

		var checked = $ec(this).is(':checked') ? 1 : 0;

		$ec('.warehouses-area').fadeToggle();

		console.log('1');

		$ec.ajax({

			method: 'POST',

			data: 'wenabled='+checked

		});

	});



	$ec('.collapse').on('click', function() {

		var i = $ec(this).attr('id'),

			c = $ec('#'+i+'_content');

		if (c.is(':visible')) {

			$ec(this).removeClass('minus');

			c.hide();

		} else {

			$ec(this).addClass('minus');

			c.show();

		}

	});



	$ec('#data_type').change(function() {

		if ($ec(this).val() == 'g') {

			$ec('#data_view_type').html("<option value='s'>Select box</option><option value='p'>Squares</option>");

		} else {

			$ec('#data_view_type').html("<option value='t'>Text area</option><option value='i'>Input box</option>");

		}

	});



	$ec('.define-var-wh').on('click', function() {

		var variantid = $ec(this).data('variantid');

		$ec('.warehouses').hide();

		$ec('#warehouses-'+variantid).fadeIn();

	});



	$ec('.update-whs').on('click', function() {

		var itemid = $ec(this).data('itemid');

		$ec('.warehouses').hide();

		$ec('#warehouses-'+itemid).fadeIn();

	});



	$ec('.warehouses .cancel').on('click', function() {

		$ec('.warehouses').fadeOut();

	});



	$ec('.warehouses .save').on('click', function(e) {

		e.preventDefault();

		var pop = $ec(this).closest('.warehouses'),

			form = pop.find('form'),

			itemid = pop.data('itemid');



		aload();

	    $ec.ajax({

           type: "POST",

           data: form.serialize(), // serializes the form's elements.

           success: function(r) {

				unload();

				if (r == 'E') {

					ec_alert('Something wrong');

				} else {

					$ec('.warehouses').hide();

					ec_alert('Data saved');

					if (!$ec('[name="vform"]').size())

						setTimeout(function() {



						}, 500);

				}

			}

		});

	});



	$ec("#date_from").datepicker({});

	$ec("#date_to").datepicker({});

	if ($ec('#chart-line').length)

		init_chart_line();



//	ec_alert('1');

//	$ec("#date_from, #date_to").datepicker();

	$ec('.admin-location a, .db-stats-3 a, .lines-table a, .admin-tabs a, .ec_ajax_link, .navigation-admin a, .navigation a').unbind('click').on('click', function(e) {
		if ($ec(this).hasClass('no-ajax'))

			return true;



		if ($ec(this).hasClass('link-not-exists')) {

			bc = false;

			ec_alert('Module exists but not implemented yet');

			return false;

		}



		$ec('html, body').animate({

			scrollTop: 0

		}, 500);



		var h = $ec(this).attr('href');

		$ec('.ec_ajax_container').append('<div id="ec_content-ec_loading"><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div></div>');

		$ec('#ec_content-ec_loading').width($ec('.ec_ajax_container').width()+1);

		$ec('#ec_content-ec_loading').height($ec(document).height()-100);

		$ec.ajax({

			dataType: 'json',

			url: create_ec_ajax_link(h),

			error: function() {
				self.location = h;

			},

			   success: function(r, textStatus, request) {

				$ec('body').attr('id', 'body-'+r[3]);

				$ec('.ec_ajax_container').html(r[0]);

				$ec('#bread_crumbs_container').html(r[2]);

				ec_ajax_clicks_admin();

				ec_page = r[3];

				window.history.pushState({"html":r[0],"pageTitle":r[1], 'bread_crumbs': r[2], 'page': r[3], 'parentid': r[4], 'pageid': r[5]},"", h);

				document.title = r[1];

				ec_pageid = r[5];

			}

		});



		return false;

	});



	$ec('form:not(.noajax)').on('submit', function(event) {
	    event.preventDefault();

		$ec('html, body').animate({

			scrollTop: 0

		}, 100);



		if ($ec(this).attr('href'))

			var h = $ec(this).attr('href');

		else if ($ec(this).attr('action'))

			var h = $ec(this).attr('action');

		else

			var h = window.location.href;



		$ec('.goback-admin').attr('href', h);

		$ec('.ec_ajax_container').append('<div id="ec_content-ec_loading"><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div></div>');

		$ec('#ec_content-ec_loading').width($ec('.ec_ajax_container').width()+1);

		$ec('#ec_content-ec_loading').height($ec(document).height()-100);



		try {

			for (instance in CKEDITOR.instances)

		    	CKEDITOR.instances[instance].updateElement();

		} catch (err) {

		}



		var form_data = new FormData($ec(this)[0]),

			files = [];



		$ec(this).find('input').each(function() {
			if ($ec(this).attr('type') == 'file') {
				if (!$ec(this).val()) {
					files[files.length] = $ec(this).attr('name');

					form_data.delete($ec(this).attr('name'));
				}

			}
		});



		$ec.ajax({

			url: h,

			type: "POST",

		    data: form_data,

		    cache: false,

		    contentType: false,

		    processData: false,

			error: function() {

				self.location = h;

			},

		   success: function(r, textStatus, request) {
		        if (request.getResponseHeader('where_redirect')) {
		        	$ec('.goback-admin').attr('href', request.getResponseHeader('where_redirect'));
		  		}



				$ec('#ec_content-ec_loading').remove();
				$ec('.goback-admin').click();

			}

		});



		return false;

	});



	try {

		CKEDITOR.replace( 'ck_editor' );

		CKEDITOR.replace( 'ck_editor_2' );

	} catch (err) {

	}

}



function create_ec_ajax_link(href) {

	try {

		if (href.indexOf('?') == -1) {

			href = href+'?its_ajax_page=1';

		} else {

			href = href+'&its_ajax_page=1';

		}

	} catch (err) {

	}



	return href;

}



function submitBrand() {

	if (document.brandform.name.value == '') {

		document.brandform.name.focus();

		bc = false;

		ec_alert("Brand name cannot be empty");

	} else

		$ec('form[name="brandform"]').submit();

}



function submit_category() {

	if (!document.category_form.title.value) {

		ec_alert("Please, enter category title");

		bc = false;

		document.category_form.title.focus();

	} else {
		$ec('form[name="category_form"]').submit();

	}

}



function duplicate_row(r, e) {

	if (e.html() == '+') {

		var h = r.html().split("[0]").join("["+(current_multirow+1)+"]");

		r.parent().append('<tr id="tmp_row">'+h+'</tr>');

		$ec('#tmp_row .duplicate_plus').html('-');

		$ec('#tmp_row').attr('id', '');

		current_multirow++;

	} else

		e.parent().parent().remove();

}



function import_checkboxes(val) {

	if (val == 'Y')

		$ec('[name=exportForm] input').prop('checked', true);

	else

		$ec('[name=exportForm] input').prop('checked', false);

}



function popup_product() {

	aload();

	$ec.ajax({url: current_location+'/admin/popup_product/'}).done(function(r) {

		fade();

		unload();

		$ec('body').append('<div class="embed-cart-area popup products_popup"><img src="'+current_location+'/images/close.png" class="close"/>'+r+'</div>');

		$ec(".products_popup img").one("load", function() {

		var top = ($ec(window).scrollTop() + $ec(window).height() / 2 - $ec('.products_popup').height() / 2);

			if (top < $ec(window).scrollTop())

						top = 30;



			$ec('.products_popup').css('top', top + 'px');

		});



		$ec('.products_popup').css('left', ($ec(window).width() / 2 - $ec('.products_popup').width() / 2 - 10) + 'px');

		$ec(window).resize(function() {

			var top = ($ec(window).scrollTop() + $ec(window).height() / 2 - $ec('.products_popup').height() / 2);

			if (top < $ec(window).scrollTop())

				top = 30;



			$ec('.products_popup').css('top', top + 'px');

			$ec('.products_popup').css('left', ($ec(window).width() / 2 - $ec('.products_popup').width() / 2 - 10) + 'px');

		});



		$ec('.products_popup .close, .products_popup .close_popup').on('click', function() {

			var e = $ec('.products_popup');

  			e.slideUp();

	    	unfade();

			setTimeout(function(){e.remove()}, 500);

		});



		$ec('.products_popup').on('click', function() {

			bc = false;

			bb = true;

		});



		$ec('#popup_product .categories select').dblclick(function() {

			aload();

			$ec.ajax({url: current_location + '/admin/popup_product/'+$ec(this).val()}).done(function(r) {

				unload();

				$ec('#popup_product .products').html(r);

				$ec('#popup_product .products select').dblclick(function() {

					popup_product_pid.value = $ec(this).val();

					popup_product_pname.value = $ec(this).find('option:selected').text();

					var e = $ec('.products_popup');

	  				e.hide();

			    	unfade();

					setTimeout(function(){e.remove()}, 500);

				});

			});

		});

	});

}



function wholetoggle(id, el) {

	$ec('#wholesale-'+id).toggle(0,

		function() {

		$ec(this).is(":visible") ? el.html('[-]') : el.html('[+]');

		}

	);

}



function remove_wp(id) {

	$ec('#wp_tr-'+id).addClass('removed_wp');

	$ec('#wp_tr-'+id+' .removed input').val('Y');

	$ec('#wp_tr-'+id+' .removed img[alt=Remove]').hide();

	$ec('#wp_tr-'+id+' .removed .wprem').show();

	if ($ec('#wp_tr-'+id+' .removed .help').size() > 0) {

		$ec('#wp_tr-'+id+' .removed .help').show();

	} else {

		$ec('#wp_tr-'+id+' .removed').append('<div class="help">Click the <b>Update</b><br />button to complete<br />removing</div>');

	}



	setTimeout('hidewphelp()', 1000);

}

function hidewphelp() {

	$ec('.removed .help').fadeOut();

}

function restore_wp(id) {

	$ec('#wp_tr-'+id).removeClass('removed_wp');

	$ec('#wp_tr-'+id+' .removed input').val('');

	$ec('#wp_tr-'+id+' .removed .wprem').hide();

	$ec('#wp_tr-'+id+' .removed img[alt=Remove]').show();

}

function all_possible() {

	$ec('.new_variant option').attr('selected', true);

	submitForm(document.vform, 'add');

}



function submitTaxForm(name) {

	if (name == 'rate') {

		if (!$ec('[name="rate_value"]').val()) {

			func_highlight($ec('[name="rate_value"]'));

			return false;

		}

	} else {

		if (!$ec('[name="tax_service_name"]').val()) {

			func_highlight($ec('[name="tax_service_name"]'));

			return false;

		}

	}



	return true;

}



function normalizeSelect(name) {

	var tmp = document.getElementById(name);

	if (tmp)

		tmp.options[tmp.options.length-1] = null;

}



function moveSelect(left, right, type) {

	if (type != 'R') {

		var tmp = left;

		left = right;

		right = tmp;

	}



	if (!left || !right)

		return false;



	while (right.selectedIndex != -1) {

		left.options[left.options.length] = new Option(right.options[right.selectedIndex].text, right.options[right.selectedIndex].value);

		right.options[right.selectedIndex] = null;

	}



	return true;

}



function saveSelects(objects) {

	if (!objects)

		return false;



	for (var sel = 0; sel < objects.length; sel++) {

		if (document.getElementById(objects[sel]))

			if (document.getElementById(objects[sel] + "_store").value == '')

				for (var x = 0; x < document.getElementById(objects[sel]).options.length; x++)

					document.getElementById(objects[sel]+"_store").value += document.getElementById(objects[sel]).options[x].value + ";";

	}



	return true;

}



function header_search_form() {

	$ec('#quick_search_form select').change(function() {

		$ec('#quick_search_form input').trigger('keyup');

	});



	var timeout = '';

	$ec('#quick_search_form input').keyup(function() {

		clearTimeout(timeout);

		timeout = setTimeout(function() {

			var val = $ec('#quick_search_form input').val();

			instant_search_ajax = $.ajax({

				url: current_location+'/admin/instant_search?where='+$ec('#quick_search_form select').val()+'&q='+encodeURIComponent(val)

			}).done(function(r) {

				$ec('.instant-search').html(r);

				$ec('.instant-search').show();

				ec_ajax_clicks_admin();

			});

		}, 500);

	});

}



$ec('body').click(function(event) {

	if ($ec(event.target).closest('#quick_search_form').size())

		return;



	$ec('.instant-search').hide();

});



function init_chart_line() {

  const canvas = document.getElementById('chart-line');

  const ctx = canvas.getContext("2d");

  var labels = [],

      values = [],

      json = $.parseJSON($('.income_all_chart').html());



  for (var x in json) {

    labels[labels.length] = x;

    values[values.length] = json[x];

  }

//console.log(labels);

//console.log(values);

  const chartConfig = {

    type: "line",

    data: {

      labels: labels,

      datasets: [

        {

          label: "",

          data: values,

          borderColor: LINE_CHART_CONFIG.display.lineColor,

          backgroundColor: function (context) {

            const chart = context.chart;

            const { ctx, chartArea } = chart;

            return chartArea ? createGradient(ctx, chartArea) : null;

          },

          fill: true,

          tension: LINE_CHART_CONFIG.display.tension,

          pointBackgroundColor: "transparent",

          pointBorderColor: "transparent",

          pointHoverBackgroundColor: LINE_CHART_CONFIG.display.pointHoverColor,

          pointHoverBorderColor:

            LINE_CHART_CONFIG.display.pointHoverBorderColor,

          pointHoverRadius: LINE_CHART_CONFIG.display.pointHoverRadius,

        },

      ],

    },

    plugins: [verticalLinePlugin, gradientTooltipPlugin],

    options: {

      responsive: true,

      maintainAspectRatio: false,

      scales: {

        y: {

          min: LINE_CHART_CONFIG.scaleY.min,

          max: LINE_CHART_CONFIG.scaleY.max,

          ticks: {

            callback: function (value) {

              const allowedValues = LINE_CHART_CONFIG.scaleY.allowedValues;



              if (!allowedValues) {

                return LINE_CHART_CONFIG.scaleY.format(value);

              } else if (allowedValues.includes(value)) {

                return LINE_CHART_CONFIG.scaleY.format(value);

              } else {

                return null;

              }

            },

            stepSize: LINE_CHART_CONFIG.scaleY.stepSize,

            color: CHART_COLORS.white,

          },

          grid: { color: GRID_SETTINGS.color },

        },

        x: {

          grid: { color: GRID_SETTINGS.color },

          ticks: { color: CHART_COLORS.white, autoSkip: false },

        },

      },

      plugins: {

        tooltip: {

          titleFont: { size: TOOLTIP_SETTINGS.titleFontSize },

          titleAlign: "center",

          bodyFont: {

            size: TOOLTIP_SETTINGS.bodyFontSize,

            weight: TOOLTIP_SETTINGS.bodyWeight,

          },

          bodyAlign: "center",

          callbacks: {

            title: function (context) {

              const fullDate = new Date(

                LINE_CHART_CONFIG.data.labels[context[0].dataIndex]

              );

              return '';

              return fullDate.toLocaleDateString("en", {

                day: "numeric",

                month: "long",

              });

            },

            label: function (context) {

              return LINE_CHART_CONFIG.scaleY.format(context.parsed.y);

            },

          },

          backgroundColor: function (context) {

            return context.chart.tooltip.gradientBackground;

          },

          titleColor: TOOLTIP_SETTINGS.titleColor,

          bodyColor: TOOLTIP_SETTINGS.bodyColor,

          borderColor: TOOLTIP_SETTINGS.borderColor,

          borderWidth: TOOLTIP_SETTINGS.borderWidth,

          displayColors: false,

          cornerRadius: TOOLTIP_SETTINGS.borderRadius,

          padding: TOOLTIP_SETTINGS.padding,

        },

        legend: { display: false },

      },

      interaction: {

        intersect: false,

        mode: "index",

      },

    },

  };



  agencyLineChart = new Chart(ctx, chartConfig);

  return agencyLineChart;

}