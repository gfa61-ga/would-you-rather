import createBrowserHistory from 'history/createBrowserHistory';

// With a custom history we can use React Router's imperative API inside
// action creators and components without `withRoute`.
export default createBrowserHistory({ basename: process.env.PUBLIC_URL });
