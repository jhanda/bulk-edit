![React version](https://img.shields.io/github/package-json/dependency-version/lgdd/lfr-react-remote-app/react)

# Liferay React Remote App

This is a template intended for tests & demos. The webpack configuration included is not optimized for production environments.

## Using this template

By default, the custom element name is `lfr-react-remote-app`. You can change it in [src/index.js](src/index.js#L7):

```js
const ELEMENT_ID = 'lfr-react-remote-app';
```

This template is using a custom webpack configuration to build your application in a single file (`bundle.js`) making easier to create a _Remote App_ in Liferay DXP/Portal.

You can find multiple scripts in [package.json](package.json#L14) not using `react-scripts`:

- `start`: watch files under `src/` and run `serve` if there is any change which allows you to keep the single file approach on localhost.
- `serve`: run the `build` script and serve static files under the `build` folder on port `3000`.
- `build`: transpile your application into a `build` folder using webpack and its [configuration](webpack.config.js).

> You can still run the standard react scripts with `start:react` and `build:react`.

## Deploy to Netlify

> Documentation: https://docs.netlify.com/site-deploys/create-deploys/

Why **Netlify**? Because **it's awesome!** Once your repository is linked, you have an automatic deployment each time you push changes to your repository. And by default, Netlify uses `cache-control: public, max-age=0, must-revalidate` to serve your application which means that you are able to see each changes live. Very useful for tests and demos, and if needed you can have [custom HTTP Headers](https://docs.netlify.com/routing/headers/) using a config file. Cherry on the cake, they provide a very fair free tier based on bandwith and build frequency (cf. [Pricing](https://www.netlify.com/pricing/)).
