oldWidth = document.getElementsByTagName('img')[0].style.width;
oldMaxWidth = document.getElementsByTagName('img')[0].style.maxWidth;
    
function zoom(element)
{
	if (element.style.maxWidth != "100%")
	{
		element.style.width = "100%";
		element.style.maxWidth = "100%";
	}

	else
	{
		element.style.width = oldWidth;
		element.style.maxWidth = oldMaxWidth;
	}

}