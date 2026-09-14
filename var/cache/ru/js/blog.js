function quote_comment(id, name) {

	var text = document.getElementById('comment_'+id).innerHTML;



	text = str_replace("&gt;", ">", text);

	text = str_replace("&lt;", "<", text);



	document.blogform.comment.value += '[quote='+name+']'+text+'[/quote]'+"\n\n";



    $ec('html, body').animate({

        scrollTop: $ec('[name="comment"]').offset().top

    }, 500);



	document.blogform.comment.focus();

}



function new_comment() {

	if (!document.blogform.comment.value) {

		ec_alert("Пожалуйста, введите ваш комментарий.");

		document.blogform.comment.focus();

		return false;

	}



	if (document.blogform.new_name && !document.blogform.new_name.value) {

		ec_alert("Пожалуйста, введите ваше имя");

		document.blogform.new_name.focus();

		return false;

	}



	document.blogform.submit();

}