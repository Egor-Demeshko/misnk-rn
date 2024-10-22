/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */
import createGlide from './js/glide/Glide';

const secondSlider = createGlide({
    selector: '.info_slide',
    animationDuration: 800,
    autoplay: false,
    perView: 4,
    gap: "32px",
    peek: {
        before: 16,
        after: 8
    },
    breakpoints: {
        1240: {
            perView: 3,
            gap: "24px",
        },
        800: {
            perView: 2,
            gap: "16px"
        },
        500:{
            perView: 1,
            bound: true
        }
    }
});
