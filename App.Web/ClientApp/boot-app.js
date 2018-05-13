import "babel-polyfill"
import "./static/css/site.css"
import "material-icons-base64/index.css"
import 'axios-progress-bar/dist/nprogress.css'
require('./static/favicon.ico');

import { app } from "./app"

app.$mount("#app");
