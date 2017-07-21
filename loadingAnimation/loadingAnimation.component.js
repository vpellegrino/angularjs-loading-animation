(function () {
    'use strict';

    /**
     *
     * @ngdoc component
	 * @author vpellegrino
     * @name app.components.loadingAnimation
     * @description
     * A component used to wrap whatever HTML content with a loading message above animated dots, while a promise is still in progress
     *
     * @example
     *
     * <pre>
     *  <loading-animation message="Loading">Loaded content</loading-animation>
     * </pre>
     *
     */
    angular.module('app.components')
        .component('loadingAnimation', {
            transclude: true,
            bindings: {
                message:'@?',   // message to be displayed during loading
                messageKey: '@?',   // message key to be resolved to display the related message
                promise: '<'    // while this promise is not yet resolved, a dotted animation will be displayed
            },
            templateUrl: "loadingAnimation.html",
            controller: ['$filter', '$q', function ($filter, $q) {
                var $ctrl = this;
                // init phase
                if ($ctrl.messageKey && angular.isString($ctrl.messageKey)) {
                    $ctrl.message = $filter('translate')($ctrl.messageKey);
                }
                // lifecycle hooks
                $ctrl.$onChanges = function (changed) {
                    $ctrl.promiseSolved = false;
                    if(changed.promise) {
                        // if promise is changed, e.g. re-initialized, observing its status
                        $ctrl.promise = $q.when(changed.promise.currentValue);
                        $ctrl.promise.then(function () {
                            // promise was resolved with success
                            $ctrl.promiseSolved = true;
                        }, function() {
                            // promise was resolved with error
                            $ctrl.promiseSolved = true;
                        });
                    }
                };
            }]
        });
})();