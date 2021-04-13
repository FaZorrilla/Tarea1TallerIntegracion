function filterBySeason(episodes, season) {
  console.log(episodes);
  return episodes
    .sort((e) => e.episode_id)
    .filter((e) => e.season == season)
    .map((e) => [e.title, e.episode_id]);
}

module.exports = { filterBySeason };
