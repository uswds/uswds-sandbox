# USWDS Sandbox

An eleventy site for rapid web prototyping and testing new work with USWDS. This site is designed to run locally and on [Cloud.gov pages](https://pages.cloud.gov/).

## Requirements

- Node v20 (LTS)

## Running locally

To run `uswds-sandbox` locally:

1. Clone the `uswds-sandbox` repo.
2. Run `npm install` to install USWDS, eleventy, and other necessary dependencies.
3. Run `npm run init` to copy USWDS images, fonts, and JavaScript to a project directory.
4. Run `npm start` to serve the site locally and watch for changes.
5. If all goes well, visit the site at http://localhost:8080.

USWDS assets will be in `assets/fonts` and `assets/img`.

SASS files will be in the `/_styles` directory. Running `npm start` will also watch these files and recompile when there are changes.

## Running locally with a development version of USWDS

If you have made changes to the `uswds` project and want to test it with `uswds-sandbox`:

1. Push your changes to `uswds` to a branch on GitHub.
2. In your `uswds-sandbox` working copy, run `npm install "https://github.com/YOUR_USERNAME/uswds/tree/YOUR_BRANCH" --save` where the URL refers to your `uswds` branch.
3. Run `npm install` to install dependencies including your new version of `uswds`.
4. Run `npm run init`.
5. Run `npm start` and open http://localhost:8080.

## Templates

- `default`: A blank-slate sandbox page
- `basic-prose`: A page with a banner, basic header, footer, identifier, and a prose container
- `extended-prose`: A page with a banner, extended header, footer, identifier, and a prose container
