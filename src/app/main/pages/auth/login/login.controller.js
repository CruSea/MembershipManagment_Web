(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($scope, $state)
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
