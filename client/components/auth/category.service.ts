'use strict';

export function CategoryResource($resource) {
  'ngInject';
  return $resource('/api/categories/:id/:controller', {
    id: '@_id'
  });
}
