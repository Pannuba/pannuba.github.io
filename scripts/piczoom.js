function sleep(ms)
{
	return new Promise(res => setTimeout(res, ms));
}

async function zoom(element, max)
{
	if (element.zoomed != 'Y' && element.zoomed != 'W8')
	{
		oldWidth = element.width;
		element.style.width = max + '%';
		element.style.maxWidth = max + '%';
		element.zoomed = 'W8';
		await sleep(300);
		element.zoomed = 'Y';
	}

	else if (element.zoomed != 'W8')
	{
		element.style.width = oldWidth + 'px';
		element.zoomed = 'W8';
		await sleep(300);
		element.zoomed = 'N';
	}
}