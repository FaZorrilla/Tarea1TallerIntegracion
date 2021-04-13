function generateCharacters(characters, show) {
  html = '<ol>';
  characters.forEach((c) => {
    char = c.split(' ');
    search = `${char[0]}+${char[1]}`;
    html += `<li><a href='/character/${show}/${search}'>${c}</a></li>`;
  });
  html += '</ol>';
  return html;
}

module.exports = { generateCharacters };
