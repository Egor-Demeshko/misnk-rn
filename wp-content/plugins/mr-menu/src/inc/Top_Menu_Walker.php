<?php
// свой класс построения меню:
class Top_Menu_Walker extends Walker_Nav_Menu
{

	// add classes to ul sub-menus
	function start_lvl(&$output, $depth = 0, $args = NULL)
	{
		// depth dependent classes
		$indent = ($depth > 0  ? str_repeat("\t", $depth) : ''); // code indent
		$display_depth = ($depth + 1); // because it counts the first submenu as 0
		$classes = array();
		if ($display_depth === 1) {
			array_push($classes, 'dropdown-menu', 'eliminate_list');
		} else if ($display_depth === 2) {
			array_push($classes, 'dropdown-sub-menu', 'right', 'eliminate_list');
		}



		$class_names = implode(' ', $classes);

		// build html
		$output .= "\n" . $indent . '<ul class="' . $class_names . '">' . "\n";
	}

	// add main/sub classes to li's and links
	function start_el(&$output, $data_object, $depth = 0, $args = null, $current_object_id = 0)
	{
		global $wp_query;
		// Add counter for li elements
		static $li_counter = 0;

		// Restores the more descriptive, specific name for use within this method.
		$item = $data_object;
		$indent = ($depth > 0 ? str_repeat("\t", $depth) : ''); // code indent

		// depth dependent classes
		$depth_classes = array(
			($depth == 0  ? 'top-menu__list-item' : ''),
		);

		// Check if the menu item has children
		$has_children = in_array('menu-item-has-children', $item->classes);
		if (($depth == 0) && $has_children) {
			array_push($depth_classes, 'dropdown');
		} else if (($depth == 1) && $has_children) {
			array_push($depth_classes, 'dropdown-sub');
		}

		/**считаем только первый уровень, после этого будут у всех элементов другие классы */
		if ($depth === 0): $li_counter++;
		endif;
		// Check if the current li element is the 6th one or more
		$depth_class_names = esc_attr(implode(' ', $depth_classes));
		/*if ($li_counter > 6) {
            $after6_classes = array('etc-list-item');
            // Add 'dropdown etc top-menu__list-item' and 'data-menu="etc"' to the li element
            $output .= $indent . '<li class="' . $depth_class_names . ' ' . implode( ' ', $after6_classes ) . ' '  . '" data-menu="etc">';
        } else {
        }*/
		// passed classes
		$classes = empty($item->classes) ? array() : (array) $item->classes;
		$class_names = esc_attr(implode(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item)));

		// build html
		$output .= $indent . '<li class="' . $depth_class_names . ' ' . $class_names . '">';



		// link attributes
		$attributes  = ! empty($item->attr_title) ? ' title="'  . esc_attr($item->attr_title) . '"' : '';
		$attributes .= ! empty($item->target)     ? ' target="' . esc_attr($item->target) . '"' : '';
		$attributes .= ! empty($item->xfn)        ? ' rel="'    . esc_attr($item->xfn) . '"' : '';
		$attributes .= ! empty($item->url)        ? ' href="'   . esc_attr($item->url) . '"' : '';
		$attributes .= ' class=""';

		$item_output = sprintf(
			'%1$s<a%2$s>%3$s%4$s%5$s</a>%6$s',
			$args->before,
			$attributes,
			$args->link_before,
			apply_filters('the_title', $item->title, $item->ID),
			$args->link_after,
			$args->after
		);

		// build html
		$output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
	}
}
