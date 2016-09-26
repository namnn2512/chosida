
'use strict';
const angular = require('angular');
import ManageUserController from './manageuser.controller';

export default angular.module('fullstackApp.manageUser', [])
  .controller('ManageUserController', ManageUserController)
  .name;
