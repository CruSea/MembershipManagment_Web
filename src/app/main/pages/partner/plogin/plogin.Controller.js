(function ()
{
    'use strict';

    angular
        .module('app.pages.partner.plogin')
        .controller('PLoginController', PLoginController);

    /** @ngInject */
    function PLoginController($scope, $state)
    {
        // Data

        // Methods
        $scope.login = function (user_data) {
          console.log("Log in -> ",user_data);
          $state.go("app.dashboards_project");
        };
        //////////
    }
})();
