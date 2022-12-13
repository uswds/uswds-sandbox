IMPORTANT: Add custom assets in the src/assets/project directory NOT directly into src/assets.

The /css, /fonts, /img, and /js directories are used by USWDS. They have this special pathing to allow easier copy/pasting of components from the USWDS site, and are ignored by git.

Any custom files you need shouuld be in this /assets/project directory. Like /assets/project/img/my-cool-image.jpg. This assures that any custom assets aren't ignored by git or overridden by USWDS.

Thanks!