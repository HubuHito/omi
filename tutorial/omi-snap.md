# Omi Snap - Snap template for Prerender

JavaScript Framework such as Omi shows nothing before JavaScript has done download. Thus, user sees a blank page in a while, and get bad User Experience. Omi Snap to resolve the issue, inject markup(HTML/CSS) in build so user can be seen UI contents while downloading JavaScript files, and get better User Experience.

---

## Usage

```bash
$ npm i -g omi-cli # omi-cli install
$ omi init-snap myapp # create a omi-snap template using omi-cli
$ cd myapp
$ npm start     # develop
$ npm run build # build a project - markup will be added automatically
```

##  What is a Snap(Prerender) ?
`omi-cli` create a default `omi` template, and HTML is a blank since all is rendered by JavaScript.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="./manifest.json">
    <link rel="shortcut icon" href="./favicon.ico">
    <title>Omi</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script src="./static/js/index.bb813127.js"></script>
  </body>
</html>
```

so if you open a page, you can see a blank page before downloaded a JavaScript.

![blank](../assets/omi-snap/blank.png)

but `omi-snap` is using snap function adds markup(HTML/CSS), and generate HTML file so you can see contents.

![initial](../assets/omi-snap/initial.png)

You can see a template which is generated by a snap function. It has added a markup(HTML/CSS).

![html](../assets/omi-snap/comapre-snap-before-after.png)

## What is difference between Omi template and Omi Snap template

Omi Template

![omi-template](../assets/omi-snap/omi.gif)

Omi Snap Template

![omi-snap-template](../assets/omi-snap/omi-snap.gif)

## Let's start

[→ omi-snap Github](https://github.com/Tencent/omi/tree/master/packages/omi-snap)
