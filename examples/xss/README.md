# Cross-Site Scripting (XSS) Vulnerability Example

Press `command+shift+v` on Mac or `ctrl+shift+v` on Windows to preview this in Visual Studio Code.

This is an example of code that is vulnerable to a [Cross-Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/) attack.

Open _examples\xss\xss.html_ inside of Chrome, Firefox, Safari, Edge or another web browser. To replicate a XSS vulnerability, type some JavaScript code in the textbox and click on the "Submit" button below.

Here is an example of code that code be used within a client-side XSS attack.

```
<img src="1" onerror="alert('Bad code');">
```

```
<img src="1" onerror="alert(document.querySelector('#password').value)">
```

One way you mitigate this vulnerability is to use `textContent` instead of `innerHTML`. Inside of _xxs.html_ and find this line:

```js
output.innerHTML = text.value;
```

Change `innerHTML` to `textContent`. Refresh and try typing some JavaScript code in the textbox again.
