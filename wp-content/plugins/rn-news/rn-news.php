<?php

/**
 * Plugin Name:       Rn News
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       rn-news
 *
 * @package CreateBlock
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

require_once __DIR__ . '/src/php/consts.php';

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_rn_news_block_init()
{
	register_block_type(__DIR__ . '/build');
	wp_register_script('rn-news-const-script', plugin_dir_url(__FILE__) . 'src/js/mock.js', [], false, []);
	wp_localize_script('rn-news-const-script', 'RnNews', [
		'pluginUrl' => plugin_dir_url(__FILE__),
	]);
	wp_enqueue_script('rn-news-const-script');
	add_image_size(FRONT_PAGE_NEWS_POST, 279, 205, true);
}

add_action('init', 'create_block_rn_news_block_init');
