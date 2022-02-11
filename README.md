# [brainsatplay-components](ui.brainsatplay.com)
The Brains@Play Design System built using Web Components.

`brainsatplay-components` is an open-source design system built by Brains@Play.

## Basic Usage
```html
<html>
<head>
    <script src="https://cdn.jsdelivr.net/npm/brainsatplay-components/"></script>
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
1. Basic Time-Series Visualization
2. Device Playground
3. Sidebar
4. Everything on https://web-components.carbondesignsystem.com/?path=/story/components-accordion--default