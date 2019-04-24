
<p align="center">
  <img src="https://jam-icons.com/static/img/logo.svg">
</p>

Jam icons is a set of icons designed for web projects, illustrations, print projects, etc. Shipped in JavaScript, font &amp; SVG versions. Licensed under MIT.
Icons: [https://jam-icons.com](https://jam-icons.com)

## What's new?

Jam Icons v2 is a totally new version of this icons set. Read more below, especially if you are using the first version.
Each icon has been re-shaped with a 2px stroke on a 24x24 grid. I mainly used a 20x20 grid, letting 4px for extra design.
Recreating the entire set was huge, but needed. I wanted the set to be more reliable, more consistent, and bigger.


## Getting Started
This version is shipped in three formats: JavaScript, SVG and font and contains more than 890 icons.
### Javascript
#### Usage
The recommended approach. It turns your tag into a clean svg markup. You just have to use the `data-jam` attribute inside a `span` or a `whatever` tag to select your icon (The attributes are listed below). So if you write:
```html
<span class="your-custom-class" data-jam="backpack" data-fill="#222"></span>
```

It becomes:
```html
<svg class="jam jam-backpack your-custom-class" data-fill="#222">[...]</svg>
```


#### Install
##### Via CDN (recommended)

```html
<script src="https://unpkg.com/jam-icons/js/jam.min.js"></script>
```
##### Via NPM

```
$ npm install jam-icons
```
##### Manually
Just hit the **download** button and use a `script` tag like below:
```html
<script src="/path/to/js/jam.min.js"></script>
```


#### Attributes

`data-jam` (required) *The icon you want to use, e.g `data-jam="backpack"`*

`data-fill` (optional) *RGB or Hexadecimal, e.g `data-fill="#F5C25A"`*

`data-width` (optional) *Integer, e.g `data-width="32"`*

`data-height` (optional) *Integer, e.g `data-height="32"`*


#### More infos

You can easily customize your icons using css, such as width, height and color. I provided the `data-fill`, `data-width` and `data-height` attributes to support a direct way to color the icon, in the case you do not want to add extra lines of css.


### CSS / Font

#### Usage
The alternative approach. You load the CSS stylesheet and use Jam icons as a font icons. You just have to use the `jam` class followed by the name of the icon you want to use prefixed by `jam-`, like below:
```html
<span class="jam jam-backpack"></span>
```
#### Install
##### Via CDN (recommended)
```html
<link rel="stylesheet" href="https://unpkg.com/jam-icons/css/jam.min.css">
```
##### Via NPM
```
$ npm install jam-icons
```
##### Manually
Just hit the **download** button and use a `link` tag like below:
```html
<link rel="stylesheet" type="text/css" href="/path/to/css/jam.min.css">
```


### SVGS
#### Usage
The complete set as independents SVGs files is available too.
Hit the **download** button to download it.


## Complete icons list
You can see the complete icons list on [https://jam-icons.com](https://jam-icons.com)

## Support
If you have some icons ideas, please open a new **issue**, add a `icons-request` label and make your proposal.
Likewise, if you see a bug or something that needs to be fixed, please open a new **issue** too with a `bug` label.

## Compatibility
#### Version 1.X.X
Unfortunately, the v2 is a major version including major breaking changes: I kept the icons names availables in the v1 but the shapes are totally new. If you give it a go, try with JavaScript ✌️ <br/>
The v1 is still available on [https://jam-icons.com/v1/](https://jam-icons.com/v1/)

## Changelog
Jam icons is following the [Semantic Versioning](http://semver.org/) with the MAJOR.MINOR.PATCH format.
- V2.0.0  - New release with 896 icons
- V1.0.72 - Optimizing SVGs
- V1.0.0 - First release with 422 icons

## License
This project is licensed under [MIT](https://opensource.org/licenses/MIT)
