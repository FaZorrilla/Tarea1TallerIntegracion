const Router = require('koa-router');
const fetch = require('node-fetch');
const { trigger } = require('./utils/reduceSeasons');
const { generateSeasonList } = require('./utils/generateSeasonList');
const { filterBySeason } = require('./utils/filterBySeason');
const { generateEpisodesList } = require('./utils/generateEpisodesList');
const { generateCharacters } = require('./utils/generateCharacters');
const { generateCharacterData } = require('./utils/generateCharacterData');

const router = new Router();

router.get('/', async (ctx) => {
  const episodesbcs = await fetch(
    'https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul'
  ).then((r) => r.json());
  const episodesbb = await fetch(
    'https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad'
  ).then((r) => r.json());
  await ctx.render('index.ejs', {
    seasonsbcs: generateSeasonList(trigger(episodesbcs), 'Better+Call+Saul'),
    seasonsbb: generateSeasonList(trigger(episodesbb), 'Breaking+Bad'),
  });
});

router.get('/season/:show/:season', async (ctx) => {
  const show = ctx.params.show;
  const season = ctx.params.season;

  const episodes = await fetch(
    `https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=${show}`
  ).then((r) => r.json());

  episodeNames = generateEpisodesList(
    filterBySeason(episodes, season),
    show,
    season
  );
  await ctx.render('episodes.ejs', { episodeNames });
});

router.get('/episode/:show/:season/:episode', async (ctx) => {
  const show = ctx.params.show;
  const season = ctx.params.season;
  const epi = ctx.params.episode;

  const episode = await fetch(
    `https://tarea-1-breaking-bad.herokuapp.com/api/episodes/${epi}`
  ).then((r) => r.json());

  characters = generateCharacters(episode[0].characters, show);
  await ctx.render('episode.ejs', { characters });
});

router.get('/character/:show/:char', async (ctx) => {
  const show = ctx.params.show;
  const char = ctx.params.char;

  console.log(ctx.params);
  console.log(show, char);
  const character = await fetch(
    `https://tarea-1-breaking-bad.herokuapp.com/api/characters?name=${char}`
  ).then((r) => r.json());

  const quotes = await fetch(
    `https://tarea-1-breaking-bad.herokuapp.com/api/quote?author=${char}`
  ).then((r) => r.json());

  console.log('------------------holi-----------------------------');
  characters = generateCharacterData(character[0], show, quotes);
  await ctx.render('character.ejs', { characters });
});

module.exports = { router };
