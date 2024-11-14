function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomElement(array) {
  return array[getRandomValue(0, array.length - 1)];
}

function createComment(id, messages, names) {
  const arrMessages = [];

  for (let i = 0; i < getRandomValue(1, 2); i += 1) {
    arrMessages.push(getRandomElement(messages));
  }

  return {
    id: id,
    avatar: `img/avatar-${ getRandomValue(1, 6) }.svg`,
    message: arrMessages.join(' '),
    name: getRandomElement(names)
  };
}

function createPhotos(messages, names) {
  const photo = [];

  for (let i = 1; i <= 25; i += 1) {
    const comments = [];
    const commentsCount = getRandomValue(0, 30);

    for(let j = 1; j <= commentsCount; j += 1) {
      comments.push(createComment(j, messages, names));
    }

    photo.push({
      id: i,
      url: `photos/${ i }.jpg`,
      description: `Фотография ${ i }`,
      likes: getRandomValue(15, 200),
      comments: comments
    });
  }

  return photo;
}

const COMMENTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Tim',
  'Tom',
  'John',
  'Ann',
  'Persik',
  'Keks',
  'Pashtet',
  'Myrzik',
  'Pinokio'
];

createPhotos(COMMENTS_MESSAGES, NAMES);
