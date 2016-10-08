document.write('\<div id="modal_box" class="modal">\<span class="close" onclick="hide_modal()">&times</span>\ <img class="modal-content" id="modal_image">\ </div>');

var modal = document.getElementById('modal_box');
var display_img = document.getElementById('modal_image');

function display_modal(path)
{
	display_img.src = path;
	modal.style.display = "block";
}

function hide_modal()
{
	modal.style.display = "none";
}