const currentDate = new Date();
const lastModified = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

document.write(`Last Modified: ${lastModified}`);