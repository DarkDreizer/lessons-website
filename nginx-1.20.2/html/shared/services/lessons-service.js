export class LessonsService {
  _lessonsCache;

  get lessonsCache() {
    return this._lessonsCache;
  }

  async getLessons() {
    let lessons;
    await fetch('shared/const/lessons.json')
    .then((result) => result.json())
    .then((lessonsInfo) => {
      lessons = lessonsInfo;
      this._lessonsCache = lessonsInfo;
    })
    return lessons;
  }
}

export const lessonServiceInit = new LessonsService();