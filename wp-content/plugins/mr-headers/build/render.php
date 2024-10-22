<?php
[
    'topname' => $topname,
    'middlename' => $middlename,
    'bottomname' => $bottomname,
    'description' => $description,
    'logoUrl' => $logoUrl,
    'logoImgId' => $logoImgId,
    'logoAlt' => $logoAlt,
    'mainPhone' => $mainPhone,
    'phoneLabel' => $phoneLabel,
    'shortcode' => $shortcode
] = $attributes;
?>

<div class="header__main-row">
    <div class="header__container">
        <div class="rn-row justify-center text-center">
            <div class="header__logo-text">
                <div class="header__logo-title">
                    <p><?= $topname ?></p>
                    <p><?= $middlename ?></p>
                    <h4><?= $bottomname ?></h4>
                </div>
                <?php
                if (!empty($description)) {
                ?>
                    <div class="header__logo-slogan "><?= $description ?></div>
                <?php
                }
                ?>
            </div>
        </div>
        <div class="rn-row flex-nowrap rn-row--mobile-center">
            <div class="menu_mobile__icon">
                <button id="open_mobile_menu" class="menu_mobile__btn eliminate_btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="padding_on_left_right">
                <a href="/" class="header__logo eliminate-link" title="<?php _e("Переход на главную страницу сайта", "minskrn") ?>">
                    <div class="rn-row flex-nowrap h-100">
                        <?php if (!empty($logoUrl)): ?>
                            <img class="header__logo-img" src="<?= $logoUrl ?>" alt="<?= $logoAlt ?>" />
                        <?php endif ?>
                    </div>
                </a>
            </div>

            <div class="header__search">
                <form role="search" method="get" id="searchform" action="<?php echo home_url('/'); ?>">
                    <input class="header__search-input" type="text" value="" name="s" id="s" placeholder="<?php _e('Поиск по сайту', 'minskrn'); ?>" aria-label="<?php _e('Строка поиска', 'minskrn'); ?>" />
                    <button type="submit" id="searchsubmit" value="<?php _e('Найти', 'minskrn'); ?>" class="eliminate_btn" aria-label="<?php _e('Запустить поиск', 'minskrn') ?>"><i class="icon-search">&#xe986;</i></button>
                </form>
                <div class="dropdown-panel" id="header_title_search" role="region" aria-live="polite"></div>
            </div>

            <div class="header__contacts align-items-center text-" aria-label="<?php _e('Блок главных контактов и кнопки обратной связи', 'minskrn') ?>">
                <div class="col-auto">
                    <div class="header__phone " aria-label="<?php _e("Телефоный номер", "minskrn") ?>">
                        <a href="tel:<?php echo $mainPhone ?>" title="<?php echo $phoneLabel; ?>"
                            class="eliminate-link" aria-label="<?php _e("Набрать телефоный номер", "minskrn") ?>">
                            <?php echo $mainPhone; ?>
                        </a>
                    </div>
                    <div class="header__phone-label"><?php echo $phoneLabel; ?></div>
                </div>
                <div class="" aria-label="Feedback Form">
                    <a data-toggle="modal" class="btn eliminate-link btn-main" aria-label="<?php _e("Открыть форму обратной связи", "minskrn"); ?>"
                        style="cursor:pointer"><?php _e('Написать', 'minskrn') ?></a>
                </div>

                <div class="header__contacts_contact-form">
                    <?php echo do_shortcode($shortcode); ?>
                    <button class="btn btn-main header__contacts_backbutton"><?php _e("Назад", "minskrn") ?></button>
                </div>
            </div>
        </div>
    </div>
</div>