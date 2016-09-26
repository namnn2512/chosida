'use strict';
const angular = require('angular');
import routes from './admin.routes';
import manageUser from './ManageUser';
import manageCategory from './ManageCategory';

export default angular.module('fullstackApp.admin', [
  'fullstackApp.auth',
  'ui.router',
  manageUser,
  manageCategory
])
  .config(routes)
  .name;
