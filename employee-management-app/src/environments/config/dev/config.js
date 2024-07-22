(function (window) {
    window.__env = window.__env || {};
  
    // the base path of the url for this app
    window.__env.pathBase = '/';

    // API url
    window.__env.apiUrl = 'https://localhost:44301/';
    // window.__env.apiUrl = 'https://test.cogitate.us/DigitalEdgeClaimsAPI.Falcon';
    window.__env.envsHeader = 'Dev';
    window.__env.clientHeader = 'Talon Claims';

    // eClaim url
    window.__env.legacyAppBaseUrl = "http://localhost:6789";

    // eClaim url - session manager 
    window.__env.legacyAppSessionManagmentUrl = "http://localhost:6789/WebForms/NgSessionManager.aspx";

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
            afterSave_GenerateAccord: true,
            afterSave_GenerateFormLetterAnchor: true,
            afterSave_ProcessReserves: true,
            afterSave_AttachRecordedCalls: false,
        },

        uwReferrals : {
            detail_requireReferralReason : false,
            detail_ShowYnIndicators : false,
            detail_ShowLackOfCooperation : false,
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

    window.__env.ssoPortalUrl = 'http://localhost:62250/'; 
    // window.__env.ssoPortalUrl = 'https://dev.cogitate.us/DigitalEdgeClaimsSSO.Falcon/'; 
}(this));
