<?php
$email = wp_kses($attributes['email'], 'post');
$emailLabel = wp_kses($attributes["emailLabel"], 'post');
$shortCode = esc_html($attributes["shortcode"]);
$socials = $attributes["socials"] ?? [];
?>

<div class="header__top-row">
    <div class="container">
        <div class="rn-row align-items-center padding_on_left_right">

            <div class="rn-row__block">
                <i class="icon-clock"></i>
                <span class="working-hours"><?php echo wp_kses($attributes['workingHoursLabel'], 'post') ?></span>
                <span class="font-medium"><?php echo wp_kses($attributes['workingHours'], 'post') ?></span>
            </div>
            <div class="rn-row__block">
                <i class="icon-mail"></i>
                <span><?= $emailLabel ?></span>
                <a href="mailto:<?= $email ?>" title="<?php _e("Написать письмо", "ckror") ?>" class="font-medium eliminate-link hover_underline"><?= $email ?></a>
            </div>

            <div class="rn-row__special align-items-center highcontrast__icon_wrapper">
                <svg class="highcontrast__icon mr5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path id="cancel" class="highcontrast__icon_cancel" fill="currentColor" d="M21.7699 2.22988C21.4699 1.92988 20.9799 1.92988 20.6799 2.22988L2.22988 20.6899C1.92988 20.9899 1.92988 21.4799 2.22988 21.7799C2.37988 21.9199 2.56988 21.9999 2.76988 21.9999C2.96988 21.9999 3.15988 21.9199 3.30988 21.7699L21.7699 3.30988C22.0799 3.00988 22.0799 2.52988 21.7699 2.22988Z" />
                </svg>
                <span title="Версия для слабовидящих"><?php echo __("Версия для слабовидящих", "ckror") ?></span>
            </div>
            <?php
            echo do_shortcode($shortCode);
            ?>

            <div class="rn-row__links justify-content-end">
                <?php foreach ($socials as $key => ['link' => $link, 'active' => $active, 'slug' => $slug]) : ?>
                    <?php if (!$active) {
                        continue;
                    } ?>
                    <a href="<?php echo $link ?>" target="_blank" title="<?php echo $slug ?>" class="eliminate-link"><i class="advantages-icon-<?php echo $slug ?>"></i></a>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</div>