'use strict';


export default function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('manageuser', {
      url: '/manageuser',
      template: require('./ManageUser/manageuser.html'),
      controller: 'ManageUserController',
      controllerAs: 'manageUser',
      authenticate: 'admin'
    })
    .state('managecategory', {
        url: '/managecategory',
        template: require('./ManageCategory/managecategory.html'),
        controller: 'ManageCategoryController',
        controllerAs: 'manageCategory',
        authenticate: 'admin'
      });
};
