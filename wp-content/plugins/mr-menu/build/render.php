<?php

require_once(__DIR__ . '/../src/inc/Top_Menu_Walker.php');
require_once(__DIR__ . '/../src/inc/Mobile_Menu_Walker.php');
?>

<div class="mobile_menu_wrapper">
    <?php
    get_search_form();
    wp_nav_menu([
        'theme_location'  => 'mobile_menu',
        'container'       => 'nav',
        'menu_class'      => 'mobile_menu eliminate_list',
        'menu_id'         => 'mobile_menu',
        'echo'            => true,
        'fallback_cb'     => '',
        'before'          => '',
        'after'           => '',
        'link_before'     => '',
        'link_after'      => '',
        'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
        'depth'           => 3,
        'walker'          => new Mobile_Menu_Walker(),
    ]);
    ?>
</div>

<div class="header__menu-row">
    <div class="container">
        <?php
        /**основное меню, которое в header */
        wp_nav_menu([
            'theme_location'  => 'top_menu',
            'menu'            => '',
            'container'       => 'nav',
            'container_class' => 'top-menu',
            'container_id'    => '',
            'menu_class'      => 'top-menu__main_list eliminate_list',
            'menu_id'         => 'menu',
            'echo'            => true,
            'container_aria_label' => __("Блок с основным меню", "ckror"),
            'fallback_cb'     => '',
            'depth'           => 3,
            'walker'          => new Top_Menu_Walker(),
        ]);
        ?>
    </div>
</div>