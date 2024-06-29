/* @refresh reload */
import { render } from "solid-js/web";

import Demo from "@demo/Demo";

import "@stylesheets/fonts.scss";
import "@stylesheets/tailwind.scss";

const root = document.getElementById("root");

render(() => <Demo />, root!);
