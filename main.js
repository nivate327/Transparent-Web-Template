let scrollTop=document.getElementById("scrollTop");

window.onscroll=function()
{
  scroll();
}

const scroll=()=>
{
  if(document.body.scrollTop> 20 || document.documentElement.scrollTop > 20)
  {
    scrollTop.style.display="block";
  }
  else{
    scrollTop.style.display="none";
  }
}


const up=()=>
{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}