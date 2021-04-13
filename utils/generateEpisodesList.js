function generateEpisodesList(episodeNames, show, season) {
  html = '<ol>';
  episodeNames.forEach((e) => {
    html += `<li><a href="/episode/${show}/${season}/${e[1]}">${e[0]}</a></li>`;
  });
  html += '</ol>';
  return html;
}

module.exports = { generateEpisodesList };
