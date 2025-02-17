// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
   //api_url: 'http://localhost:6042',
    // production: true,
    // api_url: 'http://54.190.192.105:6042',
    api_url: 'http://localhost:8080/v1',
    // api_url: 'http://15.207.82.242/v1',
    language: [
        { 'name': 'English', 'id': 'en' },
        { 'name': 'Spanish', 'id': 'es' },
        { 'name': 'Portuguese', 'id': 'pt' },
        { 'name': 'Russian', 'id': 'ru' }
    ],
    AwsConfig: {
        AWS_SECRET_ACCESS: 'IleqXwsdsMh3Xxqokp7ZnVVUIP3IAAwPXqCvw4Tz',
        AWS_ACCESS_KEY: 'AKIAJZB4CFVV5DYKBY4A',
        AWS_REGION: 'us-east-1',
        AWS_BUCKET: 'dezerland',
        AWS_ACL: 'public-read'
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
