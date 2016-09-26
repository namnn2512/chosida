'use strict';

export default class ManageCategoryController {
  categories: Object[];
  $http;
  _category;
  newCategory = '';

  /*@ngInject*/
  constructor($http, Category) {
    // Use the User $resource to fetch all users
    this.$http = $http;
    this._category = Category;
    this.categories = Category.query();
  }

  delete(category) {
    category.$remove();
    this.categories.splice(this.categories.indexOf(category), 1);
  }

  addCategory() {
    if (this.newCategory) {
      this.$http.post('/api/categories', { name: this.newCategory })
      .success(function(data, status, headers, config) {
          this.reloadCategory();
      });
      this.newCategory = '';
    }
  }

  deleteCategory(category) {
    this.$http.delete('/api/categories/' + category._id);
  }
  reloadCategory(){
    this.categories = this._category.query();
  }
}
