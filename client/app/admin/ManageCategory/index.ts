'use strict';
const angular = require('angular');
import ManageCategoryController from './managecategory.controller';

export default angular.module('fullstackApp.manageCategory', [])
  .controller('ManageCategoryController', ManageCategoryController)
  .name;
