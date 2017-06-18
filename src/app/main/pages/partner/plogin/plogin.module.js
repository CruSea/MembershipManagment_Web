(function ()
{
    'use strict';

    angular
        .module('app.pages.partner.plogin', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.pages_partner_plogin', {
            url      : '/pages/partner/plogin',
            views    : {
                'main@'                       : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.pages_auth_login': {
                    templateUrl: 'app/main/pages/partner/plogin/plogin.html',
                    controller : 'PLoginController as vm'
                }
            },
            bodyClass: 'login'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/partner/plogin');

        // Navigation
        // msNavigationServiceProvider.saveItem('partner.plogin', {
        //     title : 'Partners',
        //     icon  : 'icon-lock',
        //     weight: 1
        // });
        msNavigationServiceProvider.saveItem('pages.plogin', {
            title : 'Partner Login',
            state : 'app.pages_partner_plogin',
            weight: 1
        });
    }

})();
