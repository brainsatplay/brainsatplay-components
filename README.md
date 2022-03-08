# [brainsatplay-ui](ui.brainsatplay.com)
The Brains@Play Design System built using Web Components.

`brainsatplay-ui` is an open-source design system built by Brains@Play.

It is optimized for applications that incorporate real-time data streams.


## Basic Usage
```html
<html>
<head>
    <script src="https://cdn.jsdelivr.net/npm/brainsatplay-ui/"></script>
</head>
    <body></body>
    <script>
        const nav = new components.Nav({
            brand: {content: 'My Brand'},
            primary: {
                menu: [{content: 'Page 1'}, {content: 'Page 2'}],
                options: [{content: 'Log In'}]
            },
            secondary: [
                {content: 'Subdomain 1'},
                {content: 'Subdomain 2'},
                {content: 'Action', type:'button'}
            ],
        })
        document.body.insertAdjacentElement('afterbegin', nav)

    </script>
```

## To Do
1. Control Panel
    - Device Connection / Management + Playground
    - Multiplayer Session Management
    - File Viewer
2. Everything on https://web-components.carbondesignsystem.com/?path=/story/components-accordion--default