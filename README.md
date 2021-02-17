# umd-viewer
> A Webcomponent to embed a UMD Viewer in any web app or website

## Usage

Add the javascript to the `<head>` tag of the html page
```html
..
<head>
  ...
  <script type="module" src= {path to umd-viewer.min.js} ></script>
  ...
</head>
```

Then, add the `<uml-viewer>` tag within the body of the page

```html
...
<body>
    ...
    <umd-viewer style="width:100%"></umd-viewer>
    ...
</body>
...
```

Then, in the javascript code update the umd-viewer DOM object using the file or url property

```javascript

    const _viewer = document.querySelector('umd-viewer');

    // if you have access to the file object of the umd file
    _viewer.file = _fileObj;

    // if the UMD file is stored on an internet server
    _viewer.url = 'https:// ....';

```

### Examples
Check the Examples directory on how both the above methods can be integrated.

##### Sample 1
This will allow the user to upload an UMD file from the local drive and display on the web page.
(umd-with-file.html)(./examples/umd-with-file.html)
{:target="_blank"}

##### Sample 2
This will allow the user to upload an UMD file by entering the URL of the file stored on an internet server (with CORS enabled!).
(umd-with-url.html)(./examples/umd-with-url.html)
{:target="_blank"}
