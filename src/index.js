import React from "react"
import ReactDom from "react-dom"
import {Provider} from "react-redux"
const root = document.getElementById("root")
import "./static/style.css"
import App from "./app"
import {makeStore} from "./redux/store"
const store = makeStore()


ReactDom.render( <Provider store={store}>
    <App /></Provider>, root)