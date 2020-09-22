// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const API_KEY = 'NQ9Rbo43fH3SePgiY2CTpiEFa4BgdpUd0dORQmYy';
export const environment = {
  production: false,
  API_URL: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.