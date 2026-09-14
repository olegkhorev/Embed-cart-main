(function($) {

"use strict";

  $ec(document).ready(function() {

	$ec('.add_album input').on('focus', function() {

		if ($ec(this).val() == $ec(this).attr('def'))

			$ec(this).val('');



		$ec(this).addClass('def');

	});



	$ec('.add_album input').on('blur', function() {

		if ($ec(this).val() == '') {

			$ec(this).val($ec(this).attr('def'));

			$ec(this).removeClass('def');

		}

	});



	$ec('.add_album button').on('click', function() {

		var e = $ec('.add_album input');

		if (e.val() != e.attr('def') && e.val())

			$ec('.add_album form').submit();

		else

			e.effect('highlight');

	});



	$ec('.edit_album').on('click', function() {

		var o = $ec(this);

		var i = o.attr('id');

		var tp = o.attr('type');

		bc = false;

		if (ec_page == 'my_groups')

			ec_alert('<div id="edit_'+i+'"><label><input type="radio" name="type" value="0"'+(tp == 0 ? ' checked' : '')+">public</label><br><label><input type='radio' name='type' value='1'"+(tp == 1 ? ' checked' : '')+">privé</label><br><label><input type='radio' name='type' value='2'"+(tp == 2 ? ' checked' : '')+">for_subscribers</label><br><br>"+'<input type="text" value="'+$ec('.'+i).html()+'"><button>Enregistrer</button></div>', '', '', 1, '', 1);

		else

			ec_alert('<div id="edit_'+i+'"><label><input type="radio" name="type" value="0"'+(tp == 0 ? ' checked' : '')+">public</label><br><label><input type='radio' name='type' value='1'"+(tp == 1 ? ' checked' : '')+">privé</label><br><label><input type='radio' name='type' value='2'"+(tp == 2 ? ' checked' : '')+">for_friends</label><br><label><input type='radio' name='type' value='3'"+(tp == 3 ? ' checked' : '')+">for_friends_and_their_friends</label><br><br>"+'<input type="text" value="'+$ec('.'+i).html()+'"><button>Enregistrer</button></div>', '', '', 1, '', 1);

		$ec('#edit_'+i+' input').on('keyup', function(e) {

			if (e.which == 13 || e.which == 10)

				$ec('#edit_'+i+' button').trigger('click');

		});



		$ec('#edit_'+i+' button').on('click', function() {

			var p = $ec(this).parent(), l, v,

				t = p.find('[type="text"]');

			p.find('[type="radio"]').each(function() {

				if ($ec(this).is(':checked')) {

					v = $ec(this).val();

					l = $ec(this).parent().html();

				}

			});



			if (t.val() == '')

				t.effect('highlight');

			else {

				$ec('#type'+i).html(l);

				$ec('#type'+i+' input').remove();

				o.attr('type', v);

				$ec('.'+i).html(t.val());

				$ec('.alert').remove();

				$ec.ajax({

					type: 'POST',

					data: 'update='+i+'&updated='+encodeURIComponent(t.val())+'&type='+v

				});

			}

		});

	});



	$ec('.remove_album').on('click', function() {

		var o = $ec(this);

		if (!confirmed) {

			confirm(are_you_sure, o);

			return;

		}



		o.parent().remove();

		$ec.ajax({

			type: 'POST',

			data: 'remove='+o.parent().attr('id')

		});

	});



	$ec('.albums').sortable({

    	cursor: 'move',

    	update: function(e, ui) {

    	    $ec(this).sortable("refresh");

    	    sorted = '';

    	    $ec('.album').each(function() {

    	    	sorted += $ec(this).attr('id')+',';

    	 	});

    	    $ec.ajax({

	            type:   'POST',

    	        data:   'sa='+sorted

    	    });

	    }

    });



	clicks();

	sortable();

	drag_init();

  });

})($);



function clicks() {

	$ec('.product-images img').on('click', function() {
		var huge = $ec(this).attr('huge');
		if (huge) {
			window.open(huge, '');
		}
	});



	$ec('.product-images img.remove').on('click', function() {

		var id = $ec(this).parent().data('id'),

			url = self.location.href.split('#');



		$ec.ajax({url: url[0]+'?remove_photo='+id});

		$ec(this).parent().remove();

	});

}



function sortable() {

    $ec(".product-images" ).sortable({

    	cursor: 'move',

    	update: function(e, ui) {

    	    $ec(this).sortable("refresh");

    	    sorted = '';

    	    $ec('.product-images div').each(function() {

    	    	sorted += $ec(this).data('id')+',';

    	 	});



    	    $ec.ajax({

	            type:   'POST',

    	        data:   's='+sorted

    	    });

	    }

    });

}



var file_too_big = "file_too_big",

	bad_image_type = "bad_image_type",

	bad_images = "bad_images";



function drag_init() {

    var dropZone = $ec('.drag'),

        maxFileSize = 10240000;



    if (typeof(window.FileReader) == 'undefined')

        dropZone.hide();



    dropZone[0].ondragover = function() {

        dropZone.addClass('hover');

        return false;

    };



    dropZone[0].ondragleave = function() {

        dropZone.removeClass('hover');

        return false;

    };



    dropZone[0].ondrop = function(event) {

        event.preventDefault();

        dropZone.removeClass('hover');

        dropZone.addClass('drop');



		var files = event.dataTransfer.files;

		var c = files.length;

		var done = 0;

		var form = new FormData();

		for (var i = 0; i < c; i++) {

			var file = files[i];

    	    if ((file.size <= maxFileSize) && (file.type == 'image/png' || file.type == 'image/jpg' || file.type == 'image/gif' || file.type == 'image/jpeg' || file.type == 'image/bmp')) {

				form.append("file"+i, file);

				done++;

			}

		}



		if (done > 0) {

	        var xhr = new XMLHttpRequest();

	        xhr.upload.addEventListener('progress', uploadProgress, false);

	        xhr.onreadystatechange = function (e) {

		        if (e.target.readyState == 4)

		            if (e.target.status == 200) {

		            	$ec('.product-images').append(e.currentTarget.responseText);

						clicks();

						sortable();

						$ec('.pbar').hide();

						$ec('form[name=upload]').show();

						return;

		            }

		    };



			var url = self.location.href.split('#');

	        xhr.open('POST', url[0]);

	        xhr.send(form);

		} else

			ec_alert(bad_images);

    };



    function uploadProgress(e) {

		$ec('form[name=upload]').hide();

		$ec('.pbar').show();

		$ec('.pbar img').width(Math.floor(e.loaded / e.total * 250));

    }



	$ec(':file').change(function() {
		var done = 0;

		var form = new FormData();

		for (var x in this.files) {

			var file = this.files[x];

    	    if ((file.size <= maxFileSize) && (file.type == 'image/png' || file.type == 'image/jpg' || file.type == 'image/gif' || file.type == 'image/jpeg' || file.type == 'image/bmp')) {

				form.append("file"+x, file);

				done++;

			}

		}



		if (done > 0) {

	        var xhr = new XMLHttpRequest();

	        xhr.upload.addEventListener('progress', uploadProgress, false);

	        xhr.onreadystatechange = function (e) {

		        if (e.target.readyState == 4)

		            if (e.target.status == 200) {
		            	$ec('.product-images').append(e.currentTarget.responseText);

						clicks();

						sortable();

						$ec('.pbar').hide();

						$ec('form[name=upload]').show();

						return;

		            }

		    };



			var url = self.location.href.split('#');

	        xhr.open('POST', url[0]);

	        xhr.send(form);

		} else

			ec_alert(bad_images);



		return;

		for (var x in this.files)

			var file = this.files[x];

        	name = file.name;

            size = file.size;

	        type = file.type;

	    	if (file.name.length < 1) {

			} else if (file.type != 'image/png' && file.type != 'image/jpg' && file.type != 'image/gif' && file.type != 'image/jpeg' && file.type != 'image/bmp')

				ec_alert(bad_image_type);

			else {

						var data = new FormData(document.upload),

						xhr = new XMLHttpRequest();

						var url = self.location.href.split('#');

				        xhr.open('POST', url[0]+'?albumid='+albumid);

						xhr.onload = function (e) {

							var s = e.currentTarget.responseText.replace('[""]', '').split('|');

	            			if (simple_ta)

	            				insertImage(s[0], s[1], 1);

	         				else

		            			$ec('body').append('<img src="'+s[0]+'" onload="insertImage(\''+s[0]+'\', '+s[1]+')" class="hidden">');



							$ec('.popup').remove();

							unfade();

						};



						xhr.upload.onprogress = function (e) {

							$ec('form[name=upload]').hide();

							$ec('.pbar').show();

							$ec('.pbar img').width(Math.floor(e.loaded / e.total * 250));

						};



						xhr.send(data);

					    $ec(':file').val('');



						return false;

            		}

			    });

}



function insertImage(u, i, j) {

	bb = true;

	$ec('.galleries_popup').remove();

	if (j)

		$ec('.attachments').append('<div id="a'+i+'"><img src="'+current_location+'/images/remove.png" class="remove">'+u+'</div>');

    else

		$ec('.attachments').append('<div id="a'+i+'"><img src="'+current_location+'/images/remove.png" class="remove"><img src="'+u+'" onclick="show_photo('+i+')"></div>');



	$ec('.attachments').show();

	clicks();

	sortable();

	return false;

}