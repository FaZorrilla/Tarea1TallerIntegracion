function generateCharacterData(character, show, quotes) {
  console.log(quotes);
  html = '<ul>';
  html += `<li><img height=300 src="${character.img}"></li>`;
  html += `<li>Nombre: ${character.name}</li>`;
  html += `<li>Cumpleaños: ${character.birthday}</li>`;
  html += `<li>Ocupación: ${character.occupation}</li>`;
  html += `<li>Estado: ${character.status}</li>`;
  html += `<li>Apodo: ${character.nickname}</li>`;
  html += `<li>Actor: ${character.portrayed}</li>`;
  html += `<li>Categoría: ${character.category}</li>`;
  html += `<li>Temporadas en las que aparece en Breaking Bad:<ul> `;
  character.appearance.forEach((element) => {
    html += `<li><a href='/season/Breaking+Bad/${element}'>Temporada ${element}</a></li>`;
  });
  html += '</ul></li>';
  html += `<li>Temporadas en las que aparece en Better Call Saul:<ul> `;
  character.better_call_saul_appearance.forEach((element) => {
    html += `<li><a href='/season/Better+Call+Saul/${element}'>Temporada ${element}</a></li>`;
  });
  html += '</ul></li>';
  html += `<li>Frases celebres:<ul> `;
  quotes.forEach((element) => {
    html += `<li>${element.quote}</li>`;
  });
  html += '</ul></li>';
  html += '</ul>';
  console.log(character);
  return html;
}

module.exports = { generateCharacterData };
