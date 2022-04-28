export class LessonsService {
  _lessonsCache;
  _lessonsCategories;
  constructor() {}

  get lessonsCache() {
    return this._lessonsCache;
  }

  set categories(categoriesList) {
    this._lessonsCategories = categoriesList;
  }

  get categories() {
    return this._lessonsCategories;
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