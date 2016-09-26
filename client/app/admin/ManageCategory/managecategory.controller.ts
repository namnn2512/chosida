'use strict';

export default class ManageCategoryController {
  categories: Object[];
  $http;
  newCategory = '';

  /*@ngInject*/
  constructor(Category) {
    // Use the User $resource to fetch all users
    this.categories = Category.query();
  }

  delete(category) {
    category.$remove();
    this.categories.splice(this.categories.indexOf(category), 1);
  }

  addCategory() {
    if (this.newCategory) {
      this.$http.post('/api/categories', { name: this.newCategory });
      this.newCategory = '';
    }
  }

  deleteCategory(category) {
    this.$http.delete('/api/categories/' + category._id);
  }
}
