var acc=document.getElementsByClassName("accordion"),i;for(i=0;i<acc.length;i++)acc[i].onclick=function(){this.classList.toggle("active");var t=this.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px";var e=this;setTimeout(function(){theOffset=$(e).offset(),$("body,html").animate({scrollTop:theOffset.top-10},800,"swing")},100)};