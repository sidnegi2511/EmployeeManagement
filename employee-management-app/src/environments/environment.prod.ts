/* 

  DO NOT USE THIS FILE FOR CONFIGURATION,

  INSTEAD USE FILES
    /config/config/[env].js
    app/app.config.ts

  RATIONALE : 
    We don't want to rebuild the app for each environment.

  See blogs for more info :
    https://timdeschryver.dev/blog/angular-build-once-deploy-to-multiple-environments?tldr=1#wrapping-up
    https://www.jvandemo.com/how-to-use-environment-variables-to-configure-your-angular-application-without-a-rebuild/

*/

export const environment = {
  production: true,
  apiUrl : ''
};
