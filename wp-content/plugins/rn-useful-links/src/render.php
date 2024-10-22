<?php
$query = new WP_Query([
    'post_type' => USEFUL_LINKS,
    'posts_per_page' => -1
]);
if ($query->have_posts()) {
?>
    <section class="useful_links" aria-label="<?php _e("Блок полезных внешних ссылок", "ckror"); ?>">
        <h3 class="no-margin page_block_title mb10"><?php _e("Полезные ссылки", "ckror"); ?></h3>
        <div id="useful_links_slider" class="useful_links__links">
            <?php
            while ($query->have_posts()) {
                $query->the_post();

                $name = get_the_title();
                $imgId = get_field("ckror_useful_links_img");
                $url = get_field("ckror_useful_links_link");
                $imgUrl = null;
                $altText = null;
                if ($imgId && $imgId !== '') {
                    $imgUrl = wp_get_attachment_image_src($imgId, "medium")[0];
                    $altText = get_post_meta($imgId, '_wp_attachment_image_alt', true);
                }

            ?>
                <div class="useful_links__card">
                    <div class="useful_links__card-img-wrapper">
                        <a class="eliminate-link" href="<?php echo $url; ?>">
                            <?php
                            if ($imgUrl && $imgUrl !== '') {
                            ?>
                                <img class="useful_links__card-img" src="<?php echo $imgUrl; ?>"
                                    alt="<?php echo $altText; ?>">
                            <?php
                            } else {
                            ?>
                                <img class="useful_links__card-img"
                                    src="<?php echo get_template_directory_uri() . '/assets/images/links_mask.jpeg' ?>"
                                    alt="<?php _e("Картинка заглушка", "ckror") ?>">
                            <?php
                            }
                            ?>
                        </a>
                    </div>
                    <p class="useful_links__card-text"><a href="<?php echo $url; ?>" class="eliminate-link"><?php echo $name; ?></a></p>
                </div>
            <?php
            }
            wp_reset_postdata();
            ?>
        </div>
    </section>
<?php
}
?>