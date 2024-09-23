
const full = document.querySelector("#full");

const today = new Date();

full.innerHTML = `last modified <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;
