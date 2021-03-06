/**
 * angular-strap
 * @version v2.3.12 - 2017-10-02
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';

angular.module('mgcrea.ngStrap.typeahead').run([ '$templateCache', function($templateCache) {
  $templateCache.put('typeahead/typeahead.tpl.html', '<ul tabindex="-1" class="typeahead dropdown-menu" ng-show="$isVisible()" role="select" aria-hidden="true"><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $index == $activeIndex}"><a role="menuitem" tabindex="-1" ng-click="$select($index, $event)" ng-bind="match.label"></a></li></ul>');
} ]);