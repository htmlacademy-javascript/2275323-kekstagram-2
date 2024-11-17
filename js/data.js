import { getRandomValue, getRandomElement } from './utils.js';
import {
  AVATAR_COUNT,
  PHOTOS_COUNT,
  MIN_COMMENTS,
  MAX_COMMENTS,
  MIN_LIKES,
  MAX_LIKES,
  MIN_MESSAGES,
  MAX_MESSAGES
} from './consts.js';

function createComment(id, messages, names) {
  const arrMessages = [];

  for (let i = 0; i < getRandomValue(MIN_MESSAGES, MAX_MESSAGES); i++) {
    arrMessages.push(getRandomElement(messages));
  }

  return {
    id: id,
    avatar: `img/avatar-${ getRandomValue(1, AVATAR_COUNT) }.svg`,
    message: arrMessages.join(' '),
    name: getRandomElement(names)
  };
}

function createPhotos(messages, names) {
  const photo = [];

  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    const comments = [];
    const commentsCount = getRandomValue(MIN_COMMENTS, MAX_COMMENTS);

    for(let j = 1; j <= commentsCount; j++) {
      comments.push(createComment(j, messages, names));
    }

    photo.push({
      id: i,
      url: `photos/${ i }.jpg`,
      description: `Фотография ${ i }`,
      likes: getRandomValue(MIN_LIKES, MAX_LIKES),
      comments: comments
    });
  }

  return photo;
}

export { createPhotos };
