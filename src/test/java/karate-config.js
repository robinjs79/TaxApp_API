function fn() {

    var env = karate.env; // get java system property 'karate.env'
    karate.log('karate.env system property was:', env);
    if (!env) {
        env = 'test'; // a custom 'intelligent' default
    }
    var config = { // base config JSON
        sslConfig: true,
        authToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCIsImtpZCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCJ9.eyJhdWQiOiJlM2YxNzYxMi0yMzE3LTQ0MWMtOGI1MC0zY2FlZjBiMGIxYjgiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84MzMxZTE0YS05MTM0LTQyODgtYmY1YS01ZTJjODQxMmYwNzQvIiwiaWF0IjoxNzIzMTM0NjIzLCJuYmYiOjE3MjMxMzQ2MjMsImV4cCI6MTcyMzEzOTU4NSwiYWNyIjoiMSIsImFpbyI6IkFZUUFlLzhYQUFBQVMyVU1sL1RNNlFrN3VEUXFIZlZBVE1qRmY0MXJqSnltNXdQejdCSEVEczFuckd0b1VyY0NTNmVtK2trTCtSSlN3ODdsVUM5cVNzS2xyaVRXL2psZG9wTUVvVjhUd0FrNk1GcERQd3ZWMnZoVkxUZ1pPZkdaaTZ6NkFpZnBLaytQa09tNEQveGl0MEVuK05SdnZJaFRLck9EWkN2anlVOFM1bCsva1hDSk5hUT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiZTNmMTc2MTItMjMxNy00NDFjLThiNTAtM2NhZWYwYjBiMWI4IiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJUaG9tYXMiLCJnaXZlbl9uYW1lIjoiUm9iaW4iLCJpcGFkZHIiOiIxNzAuODUuMTAuODkiLCJuYW1lIjoiVGhvbWFzLCBSb2JpbiAoTm9uRW1wKSIsIm9pZCI6ImUxZjJkNGMwLTIwMjItNDM5MC1iZDg3LWZmZTUzNDk3ODdiMiIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0zMjkwNjgxNTItNzg5MzM2MDU4LTExNzcyMzg5MTUtOTk2MzI2IiwicmgiOiIwLkFSY0FTdUV4Z3pTUmlFS19XbDRzaEJMd2RCSjI4ZU1YSXh4RWkxQThydkN3c2JnWEFGYy4iLCJyb2xlcyI6WyJnQUQ4Mzk4QXZhbGFyYVJlYWRlclVzZXIiLCJnQUQ4Mzk4QXZhbGFyYVdyaXRlclVzZXIiXSwic2NwIjoiVXNlci5SZWFkIiwic3ViIjoiYTNwdHBhYWN1SFo0ZHBtU3BxeUYxWkVZQ1ZqV0gwRTVnRkFKRUg0di05VSIsInRpZCI6IjgzMzFlMTRhLTkxMzQtNDI4OC1iZjVhLTVlMmM4NDEyZjA3NCIsInVuaXF1ZV9uYW1lIjoicm9iaW4udGhvbWFzQGtyb2dlci5jb20iLCJ1cG4iOiJyb2Jpbi50aG9tYXNAa3JvZ2VyLmNvbSIsInV0aSI6IllOZzdFMnBpUjBPbkRua0w3eUEyQUEiLCJ2ZXIiOiIxLjAifQ.BgODJQR1x7fSCFdBwcqglcoLWsIEGNt1b4i7CH-Ll6kNFSX98oTKCG0TNVlqMF0so3RUtyMah3Df-lPybn9y_sjESDYvUhdfE1VCONfGc-_-9cz_ElM79_oz-A0bI5ABNPpeYJmD-JUfO1uwaXE41hdNsYkz4zdub20K89DZMo6UhRyg-QqaTAuSmVAUEDHyhwdagztCLv9woK36w8Yx98XWrAIn8887-hSyiUyqj0xkzObYW3f_m8RYbQ7S-wq886g5XonoSHGJQY8aZuuy-H8bFW_FvrmnDuEPlntNvzx-8KJQ-ZaYDDgvCUJA70lCtK5spax3qm_5nyjYalcx9A',
        baseURL: 'https://app-avalara-backend-testa41.azurewebsites.net',
        mmdelta: '/api/support/file-load/mm-delta'

    };
    karate.configure('proxy', { uri: 'http://cdcproxy.kroger.com:3128', username: 'kon7371', password: 'helpJS93' });

    return config;
}