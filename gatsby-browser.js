import * as React from "react"
import { Layout } from "./src/components/Layout/Layout"

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./src/styles/global.scss"

// Fonts
import "@fontsource/open-sans"
import "@fontsource/exo"
import "@fontsource/exo-2"


// // Logs when the client route changes
// export const onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname)
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null)
// }

// // Wraps every page in a component
// export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>