import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "flex-container a:hover": {
        "outline": "none"
    },
    "flex-slider a:hover": {
        "outline": "none"
    },
    "flex-container a:focus": {
        "outline": "none"
    },
    "flex-slider a:focus": {
        "outline": "none"
    },
    "slides": {
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
    "slides > li": {
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
    "flex-control-nav": {
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
    "flex-direction-nav": {
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
    "flex-pauseplay span": {
        "textTransform": "capitalize"
    },
    "flexslider": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "flexslider slides > li": {
        "display": "none",
        "WebkitBackfaceVisibility": "hidden"
    },
    "flexslider slides img": {
        "width": "100%",
        "display": "block"
    },
    "flexslider slides:after": {
        "content": "\\0020",
        "display": "block",
        "clear": "both",
        "visibility": "hidden",
        "lineHeight": 0,
        "height": 0
    },
    "html[xmlns] flexslider slides": {
        "display": "block"
    },
    "* html flexslider slides": {
        "height": "1%"
    },
    "no-js flexslider slides > li:first-child": {
        "display": "block"
    },
    "mfp-bg": {
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "zIndex": 1042,
        "overflow": "hidden",
        "position": "fixed",
        "background": "#0b0b0b",
        "opacity": 0.8,
        "filter": "alpha(opacity=80)"
    },
    "mfp-wrap": {
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "zIndex": 1043,
        "position": "fixed",
        "outline": "none !important",
        "WebkitBackfaceVisibility": "hidden"
    },
    "mfp-container": {
        "textAlign": "center",
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "left": 0,
        "top": 0,
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8,
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "mfp-container:before": {
        "content": "''",
        "display": "inline-block",
        "height": "100%",
        "verticalAlign": "middle"
    },
    "mfp-align-top mfp-container:before": {
        "display": "none"
    },
    "mfp-content": {
        "position": "relative",
        "display": "inline-block",
        "verticalAlign": "middle",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "textAlign": "left",
        "zIndex": 1045
    },
    "mfp-inline-holder mfp-content": {
        "width": "100%",
        "cursor": "auto"
    },
    "mfp-ajax-holder mfp-content": {
        "width": "100%",
        "cursor": "auto"
    },
    "mfp-ajax-cur": {
        "cursor": "progress"
    },
    "mfp-zoom-out-cur": {
        "cursor": "zoom-out"
    },
    "mfp-zoom-out-cur mfp-image-holder mfp-close": {
        "cursor": "zoom-out"
    },
    "mfp-zoom": {
        "cursor": "zoom-in"
    },
    "mfp-auto-cursor mfp-content": {
        "cursor": "auto"
    },
    "mfp-close": {
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "userSelect": "none",
        "width": 44,
        "height": 44,
        "lineHeight": 44,
        "position": "absolute",
        "right": 0,
        "top": 0,
        "textDecoration": "none",
        "textAlign": "center",
        "opacity": 0.65,
        "filter": "alpha(opacity=65)",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 18,
        "paddingLeft": 10,
        "color": "#FFF",
        "fontStyle": "normal",
        "fontSize": 28,
        "fontFamily": "Arial, Baskerville, monospace"
    },
    "mfp-arrow": {
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "userSelect": "none",
        "position": "absolute",
        "opacity": 0.65,
        "filter": "alpha(opacity=65)",
        "marginTop": -55,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "top": "50%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 90,
        "height": 110,
        "WebkitTapHighlightColor": "transparent"
    },
    "mfp-preloader": {
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "userSelect": "none",
        "color": "#CCC",
        "position": "absolute",
        "top": "50%",
        "width": "auto",
        "textAlign": "center",
        "marginTop": -0.8,
        "left": 8,
        "right": 8,
        "zIndex": 1044
    },
    "mfp-counter": {
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "userSelect": "none",
        "position": "absolute",
        "top": 0,
        "right": 0,
        "color": "#CCC",
        "fontSize": 12,
        "lineHeight": 18,
        "whiteSpace": "nowrap"
    },
    "mfp-loadingmfp-figure": {
        "display": "none"
    },
    "mfp-hide": {
        "display": "none !important"
    },
    "mfp-preloader a": {
        "color": "#CCC"
    },
    "mfp-preloader a:hover": {
        "color": "#FFF"
    },
    "mfp-s-ready mfp-preloader": {
        "display": "none"
    },
    "mfp-s-error mfp-content": {
        "display": "none"
    },
    "buttonmfp-close": {
        "overflow": "visible",
        "cursor": "pointer",
        "background": "transparent",
        "border": 0,
        "WebkitAppearance": "none",
        "display": "block",
        "outline": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "zIndex": 1046,
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "buttonmfp-arrow": {
        "overflow": "visible",
        "cursor": "pointer",
        "background": "transparent",
        "border": 0,
        "WebkitAppearance": "none",
        "display": "block",
        "outline": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "zIndex": 1046,
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "button::-moz-focus-inner": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0
    },
    "mfp-close:hover": {
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "mfp-close:focus": {
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "mfp-close:active": {
        "top": 1
    },
    "mfp-close-btn-in mfp-close": {
        "color": "#333"
    },
    "mfp-image-holder mfp-close": {
        "color": "#FFF",
        "right": -6,
        "textAlign": "right",
        "paddingRight": 6,
        "width": "100%"
    },
    "mfp-iframe-holder mfp-close": {
        "color": "#FFF",
        "right": -6,
        "textAlign": "right",
        "paddingRight": 6,
        "width": "100%",
        "top": -40
    },
    "mfp-arrow:active": {
        "marginTop": -54
    },
    "mfp-arrow:hover": {
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "mfp-arrow:focus": {
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "mfp-arrow:before": {
        "content": "''",
        "display": "block",
        "width": 0,
        "height": 0,
        "position": "absolute",
        "left": 0,
        "top": 0,
        "marginTop": 35,
        "marginLeft": 35,
        "border": "medium inset transparent",
        "borderTopWidth": 21,
        "borderBottomWidth": 21,
        "opacity": 0.7
    },
    "mfp-arrow:after": {
        "content": "''",
        "display": "block",
        "width": 0,
        "height": 0,
        "position": "absolute",
        "left": 0,
        "top": 8,
        "marginTop": 35,
        "marginLeft": 35,
        "border": "medium inset transparent",
        "borderTopWidth": 13,
        "borderBottomWidth": 13
    },
    "mfp-arrow mfp-b": {
        "content": "''",
        "display": "block",
        "width": 0,
        "height": 0,
        "position": "absolute",
        "left": 0,
        "top": 0,
        "marginTop": 35,
        "marginLeft": 35,
        "border": "medium inset transparent",
        "borderTopWidth": 21,
        "borderBottomWidth": 21,
        "opacity": 0.7
    },
    "mfp-arrow mfp-a": {
        "content": "''",
        "display": "block",
        "width": 0,
        "height": 0,
        "position": "absolute",
        "left": 0,
        "top": 8,
        "marginTop": 35,
        "marginLeft": 35,
        "border": "medium inset transparent",
        "borderTopWidth": 13,
        "borderBottomWidth": 13
    },
    "mfp-arrow-left": {
        "left": 0
    },
    "mfp-arrow-left:after": {
        "borderRight": "17px solid #FFF",
        "marginLeft": 31
    },
    "mfp-arrow-left mfp-a": {
        "borderRight": "17px solid #FFF",
        "marginLeft": 31
    },
    "mfp-arrow-left:before": {
        "marginLeft": 25,
        "borderRight": "27px solid #3F3F3F"
    },
    "mfp-arrow-left mfp-b": {
        "marginLeft": 25,
        "borderRight": "27px solid #3F3F3F"
    },
    "mfp-arrow-right": {
        "right": 0
    },
    "mfp-arrow-right:after": {
        "borderLeft": "17px solid #FFF",
        "marginLeft": 39
    },
    "mfp-arrow-right mfp-a": {
        "borderLeft": "17px solid #FFF",
        "marginLeft": 39
    },
    "mfp-arrow-right:before": {
        "borderLeft": "27px solid #3F3F3F"
    },
    "mfp-arrow-right mfp-b": {
        "borderLeft": "27px solid #3F3F3F"
    },
    "mfp-iframe-holder": {
        "paddingTop": 40,
        "paddingBottom": 40
    },
    "mfp-iframe-holder mfp-content": {
        "lineHeight": 0,
        "width": "100%",
        "maxWidth": 900
    },
    "mfp-iframe-scaler": {
        "width": "100%",
        "height": 0,
        "overflow": "hidden",
        "paddingTop": "56.25%"
    },
    "mfp-iframe-scaler iframe": {
        "position": "absolute",
        "display": "block",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "boxShadow": "0 0 8px rgba(0, 0, 0, 0.6)",
        "background": "#000"
    },
    "imgmfp-img": {
        "width": "auto",
        "maxWidth": "100%",
        "height": "auto",
        "display": "block",
        "lineHeight": 0,
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 40,
        "paddingRight": 0,
        "paddingBottom": 40,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "mfp-figure": {
        "lineHeight": 0
    },
    "mfp-figure:after": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "top": 40,
        "bottom": 40,
        "display": "block",
        "right": 0,
        "width": "auto",
        "height": "auto",
        "zIndex": -1,
        "boxShadow": "0 0 8px rgba(0, 0, 0, 0.6)",
        "background": "#444"
    },
    "mfp-figure small": {
        "color": "#BDBDBD",
        "display": "block",
        "fontSize": 12,
        "lineHeight": 14
    },
    "mfp-figure figure": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "mfp-bottom-bar": {
        "marginTop": -36,
        "position": "absolute",
        "top": "100%",
        "left": 0,
        "width": "100%",
        "cursor": "auto"
    },
    "mfp-title": {
        "textAlign": "left",
        "lineHeight": 18,
        "color": "#F3F3F3",
        "wordWrap": "break-word",
        "paddingRight": 36
    },
    "mfp-image-holder mfp-content": {
        "maxWidth": "100%"
    },
    "mfp-gallery mfp-image-holder mfp-figure": {
        "cursor": "pointer"
    },
    "mfp-ie7 mfp-img": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "mfp-ie7 mfp-bottom-bar": {
        "width": 600,
        "left": "50%",
        "marginLeft": -300,
        "marginTop": 5,
        "paddingBottom": 5
    },
    "mfp-ie7 mfp-container": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "mfp-ie7 mfp-content": {
        "paddingTop": 44
    },
    "mfp-ie7 mfp-close": {
        "top": 0,
        "right": 0,
        "paddingTop": 0
    },
    "animated": {
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both"
    },
    "animatedinfinite": {
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite"
    },
    "animatedhinge": {
        "WebkitAnimationDuration": "2s",
        "animationDuration": "2s"
    },
    "animatedbounceIn": {
        "WebkitAnimationDuration": ".75s",
        "animationDuration": ".75s"
    },
    "animatedbounceOut": {
        "WebkitAnimationDuration": ".75s",
        "animationDuration": ".75s"
    },
    "animatedflipOutX": {
        "WebkitAnimationDuration": ".75s",
        "animationDuration": ".75s"
    },
    "animatedflipOutY": {
        "WebkitAnimationDuration": ".75s",
        "animationDuration": ".75s"
    },
    "bounce": {
        "WebkitAnimationName": "bounce",
        "animationName": "bounce",
        "WebkitTransformOrigin": "center bottom",
        "transformOrigin": "center bottom"
    },
    "flash": {
        "WebkitAnimationName": "flash",
        "animationName": "flash"
    },
    "pulse": {
        "WebkitAnimationName": "pulse",
        "animationName": "pulse"
    },
    "rubberBand": {
        "WebkitAnimationName": "rubberBand",
        "animationName": "rubberBand"
    },
    "shake": {
        "WebkitAnimationName": "shake",
        "animationName": "shake"
    },
    "swing": {
        "WebkitTransformOrigin": "top center",
        "transformOrigin": "top center",
        "WebkitAnimationName": "swing",
        "animationName": "swing"
    },
    "tada": {
        "WebkitAnimationName": "tada",
        "animationName": "tada"
    },
    "wobble": {
        "WebkitAnimationName": "wobble",
        "animationName": "wobble"
    },
    "jello": {
        "WebkitAnimationName": "jello",
        "animationName": "jello",
        "WebkitTransformOrigin": "center",
        "transformOrigin": "center"
    },
    "bounceIn": {
        "WebkitAnimationName": "bounceIn",
        "animationName": "bounceIn"
    },
    "bounceInDown": {
        "WebkitAnimationName": "bounceInDown",
        "animationName": "bounceInDown"
    },
    "bounceInLeft": {
        "WebkitAnimationName": "bounceInLeft",
        "animationName": "bounceInLeft"
    },
    "bounceInRight": {
        "WebkitAnimationName": "bounceInRight",
        "animationName": "bounceInRight"
    },
    "bounceInUp": {
        "WebkitAnimationName": "bounceInUp",
        "animationName": "bounceInUp"
    },
    "bounceOut": {
        "WebkitAnimationName": "bounceOut",
        "animationName": "bounceOut"
    },
    "bounceOutDown": {
        "WebkitAnimationName": "bounceOutDown",
        "animationName": "bounceOutDown"
    },
    "bounceOutLeft": {
        "WebkitAnimationName": "bounceOutLeft",
        "animationName": "bounceOutLeft"
    },
    "bounceOutRight": {
        "WebkitAnimationName": "bounceOutRight",
        "animationName": "bounceOutRight"
    },
    "bounceOutUp": {
        "WebkitAnimationName": "bounceOutUp",
        "animationName": "bounceOutUp"
    },
    "fadeIn": {
        "WebkitAnimationName": "fadeIn",
        "animationName": "fadeIn"
    },
    "fadeInDown": {
        "WebkitAnimationName": "fadeInDown",
        "animationName": "fadeInDown"
    },
    "fadeInDownBig": {
        "WebkitAnimationName": "fadeInDownBig",
        "animationName": "fadeInDownBig"
    },
    "fadeInLeft": {
        "WebkitAnimationName": "fadeInLeft",
        "animationName": "fadeInLeft"
    },
    "fadeInLeftBig": {
        "WebkitAnimationName": "fadeInLeftBig",
        "animationName": "fadeInLeftBig"
    },
    "fadeInRight": {
        "WebkitAnimationName": "fadeInRight",
        "animationName": "fadeInRight"
    },
    "fadeInRightBig": {
        "WebkitAnimationName": "fadeInRightBig",
        "animationName": "fadeInRightBig"
    },
    "fadeInUp": {
        "WebkitAnimationName": "fadeInUp",
        "animationName": "fadeInUp"
    },
    "fadeInUpBig": {
        "WebkitAnimationName": "fadeInUpBig",
        "animationName": "fadeInUpBig"
    },
    "fadeOut": {
        "WebkitAnimationName": "fadeOut",
        "animationName": "fadeOut"
    },
    "fadeOutDown": {
        "WebkitAnimationName": "fadeOutDown",
        "animationName": "fadeOutDown"
    },
    "fadeOutDownBig": {
        "WebkitAnimationName": "fadeOutDownBig",
        "animationName": "fadeOutDownBig"
    },
    "fadeOutLeft": {
        "WebkitAnimationName": "fadeOutLeft",
        "animationName": "fadeOutLeft"
    },
    "fadeOutLeftBig": {
        "WebkitAnimationName": "fadeOutLeftBig",
        "animationName": "fadeOutLeftBig"
    },
    "fadeOutRight": {
        "WebkitAnimationName": "fadeOutRight",
        "animationName": "fadeOutRight"
    },
    "fadeOutRightBig": {
        "WebkitAnimationName": "fadeOutRightBig",
        "animationName": "fadeOutRightBig"
    },
    "fadeOutUp": {
        "WebkitAnimationName": "fadeOutUp",
        "animationName": "fadeOutUp"
    },
    "fadeOutUpBig": {
        "WebkitAnimationName": "fadeOutUpBig",
        "animationName": "fadeOutUpBig"
    },
    "animatedflip": {
        "WebkitBackfaceVisibility": "visible",
        "backfaceVisibility": "visible",
        "WebkitAnimationName": "flip",
        "animationName": "flip"
    },
    "flipInX": {
        "WebkitBackfaceVisibility": "visible !important",
        "backfaceVisibility": "visible !important",
        "WebkitAnimationName": "flipInX",
        "animationName": "flipInX"
    },
    "flipInY": {
        "WebkitBackfaceVisibility": "visible !important",
        "backfaceVisibility": "visible !important",
        "WebkitAnimationName": "flipInY",
        "animationName": "flipInY"
    },
    "flipOutX": {
        "WebkitAnimationName": "flipOutX",
        "animationName": "flipOutX",
        "WebkitBackfaceVisibility": "visible !important",
        "backfaceVisibility": "visible !important"
    },
    "flipOutY": {
        "WebkitBackfaceVisibility": "visible !important",
        "backfaceVisibility": "visible !important",
        "WebkitAnimationName": "flipOutY",
        "animationName": "flipOutY"
    },
    "lightSpeedIn": {
        "WebkitAnimationName": "lightSpeedIn",
        "animationName": "lightSpeedIn",
        "WebkitAnimationTimingFunction": "ease-out",
        "animationTimingFunction": "ease-out"
    },
    "lightSpeedOut": {
        "WebkitAnimationName": "lightSpeedOut",
        "animationName": "lightSpeedOut",
        "WebkitAnimationTimingFunction": "ease-in",
        "animationTimingFunction": "ease-in"
    },
    "rotateIn": {
        "WebkitAnimationName": "rotateIn",
        "animationName": "rotateIn"
    },
    "rotateInDownLeft": {
        "WebkitAnimationName": "rotateInDownLeft",
        "animationName": "rotateInDownLeft"
    },
    "rotateInDownRight": {
        "WebkitAnimationName": "rotateInDownRight",
        "animationName": "rotateInDownRight"
    },
    "rotateInUpLeft": {
        "WebkitAnimationName": "rotateInUpLeft",
        "animationName": "rotateInUpLeft"
    },
    "rotateInUpRight": {
        "WebkitAnimationName": "rotateInUpRight",
        "animationName": "rotateInUpRight"
    },
    "rotateOut": {
        "WebkitAnimationName": "rotateOut",
        "animationName": "rotateOut"
    },
    "rotateOutDownLeft": {
        "WebkitAnimationName": "rotateOutDownLeft",
        "animationName": "rotateOutDownLeft"
    },
    "rotateOutDownRight": {
        "WebkitAnimationName": "rotateOutDownRight",
        "animationName": "rotateOutDownRight"
    },
    "rotateOutUpLeft": {
        "WebkitAnimationName": "rotateOutUpLeft",
        "animationName": "rotateOutUpLeft"
    },
    "rotateOutUpRight": {
        "WebkitAnimationName": "rotateOutUpRight",
        "animationName": "rotateOutUpRight"
    },
    "hinge": {
        "WebkitAnimationName": "hinge",
        "animationName": "hinge"
    },
    "rollIn": {
        "WebkitAnimationName": "rollIn",
        "animationName": "rollIn"
    },
    "rollOut": {
        "WebkitAnimationName": "rollOut",
        "animationName": "rollOut"
    },
    "zoomIn": {
        "WebkitAnimationName": "zoomIn",
        "animationName": "zoomIn"
    },
    "zoomInDown": {
        "WebkitAnimationName": "zoomInDown",
        "animationName": "zoomInDown"
    },
    "zoomInLeft": {
        "WebkitAnimationName": "zoomInLeft",
        "animationName": "zoomInLeft"
    },
    "zoomInRight": {
        "WebkitAnimationName": "zoomInRight",
        "animationName": "zoomInRight"
    },
    "zoomInUp": {
        "WebkitAnimationName": "zoomInUp",
        "animationName": "zoomInUp"
    },
    "zoomOut": {
        "WebkitAnimationName": "zoomOut",
        "animationName": "zoomOut"
    },
    "zoomOutDown": {
        "WebkitAnimationName": "zoomOutDown",
        "animationName": "zoomOutDown"
    },
    "zoomOutLeft": {
        "WebkitAnimationName": "zoomOutLeft",
        "animationName": "zoomOutLeft"
    },
    "zoomOutRight": {
        "WebkitAnimationName": "zoomOutRight",
        "animationName": "zoomOutRight"
    },
    "zoomOutUp": {
        "WebkitAnimationName": "zoomOutUp",
        "animationName": "zoomOutUp"
    },
    "slideInDown": {
        "WebkitAnimationName": "slideInDown",
        "animationName": "slideInDown"
    },
    "slideInLeft": {
        "WebkitAnimationName": "slideInLeft",
        "animationName": "slideInLeft"
    },
    "slideInRight": {
        "WebkitAnimationName": "slideInRight",
        "animationName": "slideInRight"
    },
    "slideInUp": {
        "WebkitAnimationName": "slideInUp",
        "animationName": "slideInUp"
    },
    "slideOutDown": {
        "WebkitAnimationName": "slideOutDown",
        "animationName": "slideOutDown"
    },
    "slideOutLeft": {
        "WebkitAnimationName": "slideOutLeft",
        "animationName": "slideOutLeft"
    },
    "slideOutRight": {
        "WebkitAnimationName": "slideOutRight",
        "animationName": "slideOutRight"
    },
    "slideOutUp": {
        "WebkitAnimationName": "slideOutUp",
        "animationName": "slideOutUp"
    }
});