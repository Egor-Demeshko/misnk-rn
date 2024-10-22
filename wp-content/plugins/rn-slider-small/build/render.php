<?php
$slides = $attributes['slides'];

// The Loop
if (count($slides) > 0) {
?>
    <section class="glide info_slide" aria-label="<?php _e("Маленький слайдер", "rn-slider-small"); ?>">
        <div class="glide__arrows top-slider__arrows info_slider--arrows-always" data-glide-el="controls"
            aria-label="<?php _e("Блок управления пролистывания слайдеров", "rn-slider-small") ?>">
            <button class="glide__button_arrow eliminate_btn top-slider__button_arrow top-slider__button_arrow--half"
                data-glide-dir="&lt;" aria-label="<?php _e("Предыдущий слайд", "rn-slider-small") ?>">
                <i aria-hidden="true" class="icon-left">&#xea44;</i>
            </button>
            <button class="glide__button_arrow eliminate_btn top-slider__button_arrow top-slider__button_arrow--half"
                data-glide-dir="&gt;" aria-label="<?php _e("Следующий слайд", "rn-slider-small") ?>">
                <i aria-hidden="true" class="icon-right">&#xea42;</i>
            </button>
        </div>
        <div class="glide__track info_slide__track" data-glide-el="track">
            <ul class="glide__slides info_slide__slides" aria-label="<?php _e("Область слайдов", "rn-slider-small"); ?>">
                <?php foreach ($slides as $slide):
                    [
                        'heading' => $heading,
                        'description' => $description,
                        'imgId' => $imgId,
                        'imgUrl' => $imgUrl,
                        'imgAlt' => $imgAlt,
                        'externalUrl' => $externalUrl,
                        'externalLabel' => $externalLabel
                    ] = $slide
                ?>
                    <li class="glide__slide info_slide__slide_wrapper" role="option" aria-label="<?php _e("Слайд", "rn-slider-small"); ?>">
                        <div class="info_slide__slide">
                            <a href="<?php echo $externalUrl; ?>" class="eliminate-link info_slide__slide_top"
                                aria-label="<?php _e("Ссылка на публикацию или страницу, где больше информации", "rn-slider-small"); ?>">
                                <div>
                                    <img class="info_slide__image" alt="<?php echo ($imgAlt) ? $imgAlt : __('Изображение для карточки слайдера', 'rn-slider-small') ?>"
                                        src="<?php echo $imgUrl; ?>">
                                </div>
                                <p class="info_slide__title">
                                    <?php echo ($heading && $heading !== "") ? $heading : __('Информация', 'rn-slider-small') ?></p>
                                <?php
                                if ($description && $description !== "") {
                                ?><p class="info_slide__additional"><?php echo $description; ?></p>
                                <?php
                                }
                                ?>
                            </a>
                            <?php if ($externalUrl): ?>
                                <a href="<?php echo $externalUrl; ?>" class="info_slide__button btn eliminate-link btn--big-mobile"
                                    aria-label="<?php _e("Подробнее о публикации", "rn-slider-small"); ?>" target="_blank"><?php echo $externalLabel ?></a>
                            <?php endif; ?>
                        </div>
                    </li>
                <?php
                endforeach; ?>
            </ul>
        </div>
    </section>
<?php
}
?>