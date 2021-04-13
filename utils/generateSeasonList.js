function generateSeasonList(maxSeason, show) {
  let html = '<ol>';
  for (let i = 1; i <= maxSeason; i++) {
    html += `<li><a href="/season/${show}/${i}">Temporada ${i}</a></li>`;
  }
  html += '</ol>';
  return html;
}

module.exports = { generateSeasonList };
