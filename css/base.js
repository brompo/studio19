import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "fontFamily": "sans-serif",
        "MsTextSizeAdjust": "100%",
        "WebkitTextSizeAdjust": "100%",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "fontSize": "62.5%",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "height": "100%"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": "100%",
        "fontWeight": "normal",
        "lineHeight": 1,
        "textRendering": "optimizeLegibility"
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block",
        "marginTop": 1,
        "marginRight": 40,
        "marginBottom": 1,
        "marginLeft": 40
    },
    "footer": {
        "display": "block"
    },
    "header": {
        "display": "block"
    },
    "hgroup": {
        "display": "block"
    },
    "main": {
        "display": "block"
    },
    "nav": {
        "display": "block"
    },
    "section": {
        "display": "block"
    },
    "summary": {
        "display": "block"
    },
    "audio": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "canvas": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "progress": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "video": {
        "display": "inline-block",
        "verticalAlign": "baseline",
        "maxWidth": "100%",
        "height": "auto"
    },
    "audio:not([controls])": {
        "display": "none",
        "height": 0
    },
    "[hidden]": {
        "display": "none"
    },
    "template": {
        "display": "none"
    },
    "a": {
        "background": "transparent",
        "textDecoration": "none",
        "lineHeight": "inherit"
    },
    "a:active": {
        "outline": 0
    },
    "a:hover": {
        "outline": 0
    },
    "abbr[title]": {
        "borderBottom": "1px dotted"
    },
    "b": {
        "fontWeight": "bold",
        "lineHeight": "inherit"
    },
    "strong": {
        "fontWeight": "bold",
        "lineHeight": "inherit"
    },
    "dfn": {
        "fontStyle": "italic"
    },
    "h1": {
        "fontSize": 2,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textRendering": "optimizeLegibility",
        "lineHeight": 1.2
    },
    "mark": {
        "background": "#ff0",
        "color": "#000"
    },
    "small": {
        "fontSize": "60%",
        "lineHeight": "inherit"
    },
    "sub": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "bottom": -0.25
    },
    "sup": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "top": -0.5
    },
    "img": {
        "border": 0,
        "maxWidth": "100%",
        "height": "auto",
        "MsInterpolationMode": "bicubic"
    },
    "svg:not(:root)": {
        "overflow": "hidden"
    },
    "hr": {
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box",
        "height": 0,
        "border": "solid #ddd",
        "borderWidth": "1px 0 0",
        "clear": "both",
        "marginTop": 11,
        "marginRight": 0,
        "marginBottom": 24,
        "marginLeft": 0
    },
    "pre": {
        "overflow": "auto",
        "fontFamily": "monospace, monospace",
        "fontSize": 1,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "code": {
        "fontFamily": "monospace, monospace",
        "fontSize": 1
    },
    "kbd": {
        "fontFamily": "monospace, monospace",
        "fontSize": 1
    },
    "samp": {
        "fontFamily": "monospace, monospace",
        "fontSize": 1
    },
    "button": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "textTransform": "none",
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "normal"
    },
    "optgroup": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontWeight": "bold"
    },
    "select": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textTransform": "none"
    },
    "textarea": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "auto"
    },
    "html input[type=\"button\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"reset\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"submit\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "button[disabled]": {
        "cursor": "default"
    },
    "html input[disabled]": {
        "cursor": "default"
    },
    "button::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"checkbox\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"radio\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"number\"]::-webkit-inner-spin-button": {
        "height": "auto"
    },
    "input[type=\"number\"]::-webkit-outer-spin-button": {
        "height": "auto"
    },
    "input[type=\"search\"]": {
        "WebkitAppearance": "textfield",
        "MozBoxSizing": "content-box",
        "WebkitBoxSizing": "content-box",
        "boxSizing": "content-box"
    },
    "input[type=\"search\"]::-webkit-search-cancel-button": {
        "WebkitAppearance": "none"
    },
    "input[type=\"search\"]::-webkit-search-decoration": {
        "WebkitAppearance": "none"
    },
    "fieldset": {
        "border": "1px solid #c0c0c0",
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "paddingTop": 0.35,
        "paddingRight": 0.625,
        "paddingBottom": 0.75,
        "paddingLeft": 0.625
    },
    "legend": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "table": {
        "borderCollapse": "collapse",
        "borderSpacing": 0
    },
    "td": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "th": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "*": {
        "boxSizing": "inherit"
    },
    "*:before": {
        "boxSizing": "inherit"
    },
    "*:after": {
        "boxSizing": "inherit"
    },
    "div": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "dl": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "dt": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "dd": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "ol": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 17,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "decimal"
    },
    "li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textRendering": "optimizeLegibility",
        "lineHeight": 1.2
    },
    "h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textRendering": "optimizeLegibility",
        "lineHeight": 1.2
    },
    "h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textRendering": "optimizeLegibility",
        "lineHeight": 1.2
    },
    "h5": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textRendering": "optimizeLegibility",
        "lineHeight": 1.2
    },
    "h6": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textRendering": "optimizeLegibility",
        "lineHeight": 1.2
    },
    "form": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "blockquote": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "em": {
        "fontStyle": "italic",
        "lineHeight": "inherit"
    },
    "i": {
        "fontStyle": "italic",
        "lineHeight": "inherit"
    },
    "ulsquare": {
        "marginLeft": 17,
        "listStyle": "square"
    },
    "ulcircle": {
        "marginLeft": 17,
        "listStyle": "circle"
    },
    "uldisc": {
        "marginLeft": 17,
        "listStyle": "disc"
    },
    "ul li": {
        "paddingLeft": 4
    },
    "ul ul": {
        "marginTop": 3,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 17
    },
    "ul ol": {
        "marginTop": 3,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 17
    },
    "ol ol": {
        "marginTop": 3,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 17
    },
    "ol ul": {
        "marginTop": 3,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 17
    },
    "a img": {
        "border": "none"
    },
    "a:focus": {
        "outline": "none"
    },
    "p a": {
        "lineHeight": "inherit"
    },
    "p a:visited": {
        "lineHeight": "inherit"
    },
    "embed": {
        "maxWidth": "100%",
        "height": "100%"
    },
    "object": {
        "maxWidth": "100%",
        "height": "100%"
    },
    "row": {
        "width": "94%",
        "maxWidth": 1140,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "row row": {
        "width": "auto",
        "maxWidth": "none",
        "marginLeft": -20,
        "marginRight": -20
    },
    "row:before": {
        "content": "",
        "display": "table"
    },
    "row:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "column": {
        "position": "relative",
        "minHeight": 1,
        "float": "left",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20
    },
    "columns": {
        "position": "relative",
        "minHeight": 1,
        "float": "left",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20
    },
    "bgrid": {
        "position": "relative",
        "minHeight": 1,
        "float": "left",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "columncentered": {
        "float": "none",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "columnscentered": {
        "float": "none",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "rowcollapsed > column": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "rowcollapsed > columns": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "columncollapsed": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "columnscollapsed": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "[class*=\"column\"] + [class*=\"column\"]:last-child": {
        "float": "right"
    },
    "[class*=\"column\"] + [class*=\"column\"]end": {
        "float": "right"
    },
    "one": {
        "width": "8.33333%"
    },
    "row one": {
        "width": "8.33333%"
    },
    "two": {
        "width": "16.66667%"
    },
    "row two": {
        "width": "16.66667%"
    },
    "three": {
        "width": "25%"
    },
    "row three": {
        "width": "25%"
    },
    "four": {
        "width": "33.33333%"
    },
    "row four": {
        "width": "33.33333%"
    },
    "five": {
        "width": "41.66667%"
    },
    "row five": {
        "width": "41.66667%"
    },
    "six": {
        "width": "50%"
    },
    "row six": {
        "width": "50%"
    },
    "seven": {
        "width": "58.33333%"
    },
    "row seven": {
        "width": "58.33333%"
    },
    "eight": {
        "width": "66.66667%"
    },
    "row eight": {
        "width": "66.66667%"
    },
    "nine": {
        "width": "75%"
    },
    "row nine": {
        "width": "75%"
    },
    "ten row ten": {
        "width": "83.33333%"
    },
    "eleven": {
        "width": "91.66667%"
    },
    "row eleven": {
        "width": "91.66667%"
    },
    "twelve": {
        "width": "100%"
    },
    "row twelve": {
        "width": "100%"
    },
    "bgrid-sixth bgrid": {
        "width": "16.66667%"
    },
    "bgrid-fourth bgrid": {
        "width": "25%"
    },
    "bgrid-third bgrid": {
        "width": "33.33333%"
    },
    "bgrid-half bgrid": {
        "width": "50%"
    },
    "bgrid-sixth bgrid:nth-child(6n+1)": {
        "clear": "both"
    },
    "bgrid-fourth bgrid:nth-child(4n+1)": {
        "clear": "both"
    },
    "bgrid-third bgrid:nth-child(3n+1)": {
        "clear": "both"
    },
    "bgrid-half bgrid:nth-child(2n+1)": {
        "clear": "both"
    },
    "group:before": {
        "content": "",
        "display": "table"
    },
    "group:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "hide": {
        "display": "none"
    },
    "invisible": {
        "visibility": "hidden"
    },
    "antialiased": {
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "remove-bottom": {
        "marginBottom": 0
    },
    "half-bottom": {
        "marginBottom": "15px !important"
    },
    "add-bottom": {
        "marginBottom": "30px !important"
    },
    "no-border": {
        "border": "none"
    },
    "text-center": {
        "textAlign": "center"
    },
    "text-left": {
        "textAlign": "left"
    },
    "text-right": {
        "textAlign": "right"
    },
    "pull-left": {
        "float": "left"
    },
    "pull-right": {
        "float": "right"
    },
    "align-center": {
        "marginLeft": "auto",
        "marginRight": "auto",
        "textAlign": "center"
    }
});