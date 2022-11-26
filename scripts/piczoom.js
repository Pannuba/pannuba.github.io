function zoom(element)
{
	if (!element.zoomed)
	{
		oldWidth = element.width;
		element.zoomed = true;
		element.style.width = "100%";
		element.style.maxWidth = "100%";
	}

	else
	{
		element.zoomed = false;
		element.style.width = oldWidth + 'px';
	}
}