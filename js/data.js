import { getRandomInteger, getRandomArrayElement } from './util.js';

const PICTURE_COUNT = 25;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const AVATAR_COUNT = 6;
const COMMENTS_COUNT = 20;
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'На море',
  'На даче',
  'На работе',
  'На учебе',
  'Кошки мышки',
  'Лучшая награда'
];

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES)
});

const addComments = () => {
  const comments = [];

  for (let i = 0; i < getRandomInteger(0, COMMENTS_COUNT); i++) {
    comments.push(createComment(i));
  }

  return comments;
};

const createPicture = (index) => ({
  id: index,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: addComments()
});

const photos = [];

const addPhotos = () => {
  for (let i = 0; i < PICTURE_COUNT; i++) {
    photos.push(createPicture(i));
  }
};

addPhotos();

export { photos };
