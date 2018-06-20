import createBrowserHistory from 'history/createBrowserHistory';

// With a custom history we can use React Router's imperative API inside
// action creators and components without `withRoute`.
// Unfortunately, setting a `basename` here results in
// duplicate basename paths (`/would-you-rather/would-you-rather`) on Github pages :(
// Workaround: makeUrl helper in shared/helpers.
export default createBrowserHistory();
