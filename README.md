# USWDS Sandbox
An eleventy site for rapid web prototyping and testing new work with USWDS. This site is designed to run locally and on [Cloud.gov pages](https://pages.cloud.gov/).

## Requirements
- Node v18 (LTS)

## Running code locally
After cloning the template repo, install USWDS, eleventy, and any necessary dependencies using:
```
npm install
```
Then, copy USWDS images, fonts, and JavaScript to a project directory.
```
npm run init
```
Finally, serve the site locally and watch for changes:
```
npm start
```
If all goes well, visit the site at http://localhost:8080.

USWDS assets will be in `assets/fonts` and `assets/img`.

SASS files will be in the `/_styles` directory. Running `npm start` will also watch these files and recompile when there are changes.

## Templates
- `default`: A blank-slate sandbox page
- `basic-prose`: A page with a banner, basic header, footer, identifier, and a prose container
- `extended-prose`: A page with a banner, extended header, footer, identifier, and a prose container
