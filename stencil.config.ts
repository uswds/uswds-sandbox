import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

const pagesBaseUrl = process.env.BASEURL || '/';

export const config: Config = {
  namespace: 'stencil-components',
  plugins: [
    sass({
      includePaths: ['@uswds/uswds/packages'],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: '_site', // Publish for Cloud.gov pages build.
      serviceWorker: null, // disable service workers
      baseUrl: pagesBaseUrl,
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
