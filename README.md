
# Liferay Commerce Bulk Edit Remote App

This is a proof of concept application that leverages Liferay Commerce headless APIs and Liferay DXP's Remote App capabilities to demonstrate a simple Product Bulk Edit Application.  

This app is based on template provided [lgdd](https://github.com/lgdd) and is intended for tests & demos. The webpack configuration included is not optimized for production environments.

## Using this application

### Allow relevant URL Patterns in the _Default CORS Configuration_
1. Open the Global Menu (Global Menu), click the Control Panel tab, and go to System Settings → Security Tools.
2. Go to the Portal Cross-Origin Resource Sharing (CORS) tab and click Default Portal CORS Configuration.
3. Add a URL Pattern with the /o/headless-admin-taxonomy/v1.0/* value and another URL Pattern with the /o/headless-commerce-admin-catalog/v1.0/* value and then click Save. This enables CORS for the Tags and Catalog APIs.  



By default, the custom element name is `lfr-bulk-edit`. You can change it in [src/index.js](src/index.js#L7):

```js
const ELEMENT_ID = 'lfr-bulk-edit';
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
