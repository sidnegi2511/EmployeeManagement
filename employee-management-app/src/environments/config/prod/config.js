(function (window) {
    window.__env = window.__env || {};

    // the base path of the url for this app
    window.__env.pathBase = "{__claimsclient__}";

    // API url
    window.__env.apiUrl = "{-apiurl{__client__}{__envs__}-}";

    //Projectr Headers

    window.__env.envsHeader = '{-envsheader{__client__}{__envs__}-}';
    window.__env.clientHeader = '{-clientheader{__client__}-}';

    // eClaim
    window.__env.legacyAppBaseUrl = "{-baseurl{__client__}{__envs__}-}";

    // eClaim url - session manager
    window.__env.legacyAppSessionManagmentUrl = "{-legacyurl{__client__}{__envs__}-}";

    window.__env.vendor = {
        googleMapUrl : "http://maps.google.co.in/maps?q=",

        imageRight : false,

        syncfusionLicenseKey : 'ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0ViWH1fcXxXT2RbVEM='
    }

    window.__env.features = {
        activities : {
            showFormLetterLinkViaUIDInText : false,
        },

        fnol : {
            afterSave_GenerateAccord : true,
            afterSave_GenerateFormLetterAnchor : true,
            afterSave_ProcessReserves : true,
            afterSave_AttachRecordedCalls : false
        }
      ,
        uwReferrals: {
          detail_requireReferralReason: false,
          detail_ShowYnIndicators: false,
          detail_ShowLackOfCooperation: false,
        },

        copart : {
            showConnectionTest : false,
        },

        printChecks  : {
            isCombinedChecksEnabled : false,
            isPrintAndVerifyCombined : true
        },

        homePages : {
            claimDesk_shouldShowDocumentsLink : true,
            claimDesk_shouldShowDocumentsFullOrEmpty : false
        }
    }

    window.__env.ssoPortalUrl = '{-ssoPortalUrl{__client__}{__envs__}-}';
}(this));
