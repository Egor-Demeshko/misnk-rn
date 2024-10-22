<?php
$slides = $attributes['slides'];
?>

<?php if (count($slides) > 0): ?>
    <section class="glide top-slider" aria-label="<?php _e("Главный информационный слайдер", "rn-slider") ?>"
        role="region">
        <div class="glide__bullets top-slider__bullets" data-glide-el="controls[nav]">
        </div>
        <div class="glide__arrows top-slider__arrows" data-glide-el="controls"
            aria-label="<?php _e('Блок с кнопка пролистывания слайдов') ?>">
            <button class="glide__button_arrow eliminate_btn top-slider__button_arrow" aria-label="<?php _e("Листать слайды влевую сторону") ?>"
                data-glide-dir="<">
                <i aria-hidden="true" class="icon-left">&#xea44;</i>
            </button>
            <button class="glide__button_arrow eliminate_btn top-slider__button_arrow" data-glide-dir="&gt;" aria-label="<?php _e("Kbc") ?>">
                <i aria-hidden="true" class="icon-right">&#xea42;</i>
            </button>
        </div>
        <div class="glide__track top-slider__track" data-glide-el="track">
            <ul class="glide__slides top-slider__slides" aria-label="<?php _e("Блок слайдов", "rn-slider") ?>">

                <?php
                foreach ($slides as $slide) {
                    [
                        'photoUrl' => $photoUrl,
                        'photoAlt' => $photoAlt,
                        'photoId' => $photoId,
                        'firstLabel' => $firstLabel,
                        'mainText' => $mainText,
                        'secondLabel' => $secondLabel,
                        'linkUrl' => $linkUrl,
                        'linkText' => $linkText,
                    ] = $slide;
                ?>
                    <!-- слайд -->
                    <li class="glide__slide top-slider__slide" aria-label="<?php _e("Слайд", "rn-slider") ?>">
                        <div class="top-slider__left" style="background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.4)), url('<?php echo $photoUrl ?>');">
                            <div class="top-slider__left_texts">

                                <?php if ($firstLabel !== '') { ?>
                                    <p class="top-slider__left_texts_side_text_top"><?php echo $firstLabel ?></p>
                                <?php } ?>

                                <?php if ($mainText !== '') { ?>
                                    <p class="top-slider__left_texts_heading"><?php echo $mainText ?></p>
                                <?php } ?>

                                <?php if ($secondLabel !== '') { ?>
                                    <p class="top-slider__main_text"><?php echo $secondLabel ?></p>
                                <?php } ?>

                            </div>

                            <?php if ($linkUrl !== '') { ?>
                                <div class="top-slider__left_button_wrapper">
                                    <a href="<?php echo $linkUrl ?>" class="top-slider__left_button rn-btn rn-btn-main"><?php echo $linkText ?? __('Перейти', 'rn-slider') ?></a>
                                </div>
                            <?php } ?>
                        </div>

                        <?php if ($photoUrl !== '') { ?>
                            <div class="top-slider__right">
                                <img alt="<?php echo $photoAlt ?>" src="<?php echo $photoUrl ?>" />
                            </div>
                        <?php
                        } ?>
                    </li>
                    <!-- *** к конец слайда *** -->
                <?php
                } ?>

            </ul>
        </div>
    </section>
<?php endif; ?>