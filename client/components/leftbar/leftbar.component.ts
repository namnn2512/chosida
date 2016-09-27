'use strict';
/* eslint no-sync: 0 */
const angular = require('angular');

export class LeftbarComponent {
  menu = [{
    'title': 'Home',
    'state': 'main'
  },
  {
    'title': 'About',
    'state': 'contact'
  },
  {
    'title': 'Service',
    'state': 'service'
  }];

  constructor(Auth) {
    'ngInject';   
  }

}

export default angular.module('directives.leftbar', [])
  .component('leftbar', {
    template: require('./leftbar.html'),
    controller: LeftbarComponent
  })
  .name;
