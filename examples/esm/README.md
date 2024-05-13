# ES Modules Tutorial

Press `command+shift+v` on Mac or `ctrl+shift+v` on Windows to preview this in Visual Studio Code.

ES Modules (or ESM for short) help you stay organized. As your project grows, you will want to organize your code into multiple files. ESM allows you to include JavaScript code from other files. Here is the simplest way that you can add ESM to the front-end of your project.

Let's say we have two JavaScript files. The first is _greet.js_:

```js
// greet.js
const greet = () => {
  alert("It works!");
};

export default greet;
```

What this code does is display a popup that says "It works!".

The second is _main.js_. It include code - the greet function - from _greet.js_:

```js
// main.js
import greet from "./greet.js";

greet();
```

Now, let's load _main.js_ file in our HTML with a `<script>` tag:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ... -->
    <!-- Include our JavaScript here -->
    <script src="main.js" defer></script>
  </head>
  <!-- ... -->
</html>
```

If we open this in browser like Chrome, Edge, Safari, or Firefox, we won't see the popup. Our code fails to work. Instead, we will see an error like this in our console:

> Uncaught SyntaxError: Cannot use import statement outside a module

In order for ESM to work, we will need to update our script tag so that it has `type=module`:

```html
<script type="module" src="main.js" defer></script>
```

In Visual Studio code, find the file _examples/esm/esm.html_ in the sidebar. Right click on it, and select "Copy Path". Then, inside of your browsers address bar, paste the path and hit enter. You should see the HtML page, but the code will still not work. Open your console. This time, you should see a CORS error.

> Access to script at 'file:///.../esm/main.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.

You will need to start a web server in order for ESM to work. One simple way to do this is to use [VSCode's LiveServer plugin](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), which you can install from the "Extensions" tab in the sidebar. Open the file _examples/esm/esm.html_. Then click on "Go Live" in the status bar at the very bottom of your screen. This should open the HTML page in your web browser, and you should see the popup "It works!".

Alternatively, you can install the server [Vercel's "serve"](https://www.npmjs.com/package/serve) with Node.js.

While LiveServer and Vercel's "serve" are very easy to use, they are really only suitable for developing very small static websites. Most JavaScript developers need much more from their tooling. Popular options are [Webpack](https://webpack.js.org/) and [Vite.js](https://vitejs.dev/). See the other examples for more on tooling.

## Using NPM

It is possible to use NPM in the browser with ESM, but keep in mind that not a lot of third-party libraries are set up to do this. Let's try using Axios. First, create a _package.json_ file with this command.

```shell
npm init -y
```

Then, add this to your _package.json_ file. It can go anywhere between the opening and closing `{ }`.

```json
// package.json
{
  // ...
  "type": "module"
  // ...
}
```

Next, install Axios:

```shell
npm install axios
```

Now, let's add Axios to your code. I had search inside of the "node_modules" folder and find an entry point for axios. Finally, this worked for me:

```js
// main.js
import axios from "./node_modules/axios/dist/esm/axios.min.js";

const response = await axios.get("https://dog.ceo/api/breeds/image/random");
console.log(response);
```

Many library maintainers do not expect you to use their libraries in the browser without bundlers like [Webpack](https://webpack.js.org/) and [Vite.js](https://vitejs.dev/). For this reason, it is often undocumented, if even supported at all.
