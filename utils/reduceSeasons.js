function trigger(episodes) {
  return episodes.reduce((acc, ep) => {
    const s = parseInt(ep.season);
    if (s > acc) return s;
    return acc;
  }, 1);
}

module.exports = { trigger };
