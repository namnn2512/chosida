'use strict';
const angular = require('angular');
import routes from './admin.routes';
import manageUser from './ManageUser';

export default angular.module('fullstackApp.admin', [
  'fullstackApp.auth',
  'ui.router',
  manageUser
])
  .config(routes)
  .name;
