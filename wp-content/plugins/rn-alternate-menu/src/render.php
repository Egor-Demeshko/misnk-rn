<?php
require_once __DIR__ . '/../src/assets/inc/Top_Menu_Walker_Alternate.php';
?>

<div class="alternate_menu__wrapper" id="alternate_menu__wrapper">
    <div class="container">
        <?php
        /**альтернативное основное меню, которое в header, появляется при скролле */
        wp_nav_menu([
            'theme_location'  => 'alternate_menu',
            'menu'            => '',
            'container'       => 'nav',
            'container_class' => 'top-menu alternate_menu__menu',
            'container_id'    => '',
            'menu_class'      => 'top-menu__main_list eliminate_list',
            'menu_id'         => 'alternate_menu',
            'echo'            => true,
            'container_aria_label' => __("Блок с дополнительным основным меню", "ckror"),
            'fallback_cb'     => '',
            'depth'           => 3,
            'walker'          => new Top_Menu_Walker_Alternate(),
        ]);
        ?>
    </div>
</div>