# uswds-sandbox
Jekyll site for testing new functionality currently under development

## Running code locally
After cloning the repo, navigate to the correct folder and install USWDS, Jekyll, and any necessary dependencies using:
```
npm run startup
```
To run the site locally, run these commands in separate terminal windows:
```
npm run watch
```
```
npm run serve
```
If all goes well, visit the site at http://localhost:4000.

USWDS assets are in `assets/fonts/uswds` and `assets/img/uswds`.

SASS files are kept in the `/_sass` directory. To watch for changes and recompile the styles, run:
```
npm run uswds-watch
```
