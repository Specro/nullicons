# Nullicons - v1.0.0

Nullicons is an icon set based on programming languages, web and software development in general. There are 111 icons as of now. You can view all the icons [here](https://specro.github.io/nullicons/).

## Usage

Nullicons are used in SVG format and generated into spritesheet using the [svg sprite](https://github.com/jkphl/svg-sprite) plugin. In the ditribution folder you'll find 5 different ways of using the icon set. Most of them involve [SVG fragment identifiers](http://caniuse.com/#feat=svg-fragment).

### CSS & View

Same as a simple CSS spritesheet except in SVG format. Use classes in the CSS file to display the icon. Like this:

```html
<i class="null-ada"></i>
```

You can manipulate icon sizes by resizing the background (generated sheet size is 1408px by 1408px). Read more on this method [here](https://www.liquidlight.co.uk/blog/article/working-with-svgs-in-sprites/) and [here](https://www.smashingmagazine.com/2012/01/resolution-independence-with-svg/).
View is exactly the same except it has a `<view>` element created for each shape. You can find out more in the [svg sprite](https://github.com/jkphl/svg-sprite) page.

### Defs & Symbol

With defs and symbol you can use external sheet or embed one into your HTML.

External:

```html
<svg viewbox="0 0 100 100">
  <use xlink:href="nullicons.svg#ada"/>
</svg>
```

Embedded:

```html
<svg viewbox="0 0 100 100">
  <use xlink:href="#ada"/>
</svg>
```

Symbol is the same way except you can drop the viewbox:

```html
<svg>
  <use xlink:href="#ada"/>
</svg>
```

You can read more about defs and symbol [here](https://css-tricks.com/svg-sprites-use-better-icon-fonts/) and [here](https://css-tricks.com/svg-symbol-good-choice-icons/).

### Stack

This method uses stacked icons and [SVG fragment identifiers](http://caniuse.com/#feat=svg-fragment) to locate the one icon needed.

```html
<img src="nullicons.svg#ada" />
```

More on [SVG stacking](https://hofmannsven.com/2013/laboratory/svg-stacking/).

### Contributing

If you can't find an icon you need open an issue for it or add it yourself.
Right now all source SVG files are 128px by 128px in size and colored in `#222222`. Always check your SVG code with the source SVG code to keep it as clean as possible.

### License

Licensed under MIT license.
