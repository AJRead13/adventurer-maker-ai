export const getSavedStoryIds = () => {
  const savedstoryIds = localStorage.getItem('saved_stories')
    ? JSON.parse(localStorage.getItem('saved_stories'))
    : [];

  return savedstoryIds;
};

export const savestoryIds = (storyIdArr) => {
  if (storyIdArr.length) {
    localStorage.setItem('saved_stories', JSON.stringify(storyIdArr));
  } else {
    localStorage.removeItem('saved_stories');
  }
};

export const removestoryId = (storyId) => {
  const savedstoryIds = localStorage.getItem('saved_stories')
    ? JSON.parse(localStorage.getItem('saved_stories'))
    : null;

  if (!savedstoryIds) {
    return false;
  }

  const updatedSavedstoryIds = savedstoryIds?.filter((savedstoryId) => savedstoryId !== storyId);
  localStorage.setItem('saved_stories', JSON.stringify(updatedSavedstoryIds));

  return true;
};
