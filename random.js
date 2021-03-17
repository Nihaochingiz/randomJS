const phrases = ["Маска", "Бэтмен", "Я", "Супер", "Джокер", "Бэтмобиль", "Альфред"];

const random = Math.floor(Math.random() * phrases.length);
prompt(random, phrases[random]);
