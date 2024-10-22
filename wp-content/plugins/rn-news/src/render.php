<?php
[
    'blockTitle' => $blockTitle,
    'linkTitle' => $linkTitle,
    'newsLinkTitle' => $newsLinkTitle
] = $attributes;

$posts_query = new WP_Query([
    'posts_per_page' => 4,
    'orderby' => 'date',
    'order' => 'DESC',
]);
?>

<?php
if ($posts_query->have_posts()) {
?>
    <section class="rn-news" role="region" aria-label="<?php _e("Блок все записи", "rn-news") ?>">
        <div class="rn-news__row justify-content-space-between">
            <h3 class="page_block_title no-margin"><?php echo htmlentities($blockTitle) ?></h3>
            <?php
            $all_posts_page_id = get_option('page_for_posts'); // Get the ID of the page that displays all posts
            $all_posts_page_link = get_permalink($all_posts_page_id); // Get the permalink of the page

            // Output link
            echo '<a href="' . esc_url($all_posts_page_link) . '" class="eliminate-link rn-news__all-news-link">' . $linkTitle . '</a>';
            ?>
        </div>
        <div class="rn-news__news-row">
            <?php
            while ($posts_query->have_posts()) {
                $posts_query->the_post();

                $date = get_the_date('d.m.Y');
                $heading = get_the_title();
                $excerpt = the_excerpt_max_charlength(340);

            ?>

                <div class="rn-news-card flex column justify-content-space-between">
                    <div class="rn-news-card__top">
                        <?php
                        $thumbnail_id = get_post_thumbnail_id();
                        $alt_text = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);
                        if (has_post_thumbnail()) {
                            echo '<div class="rn-news-card__image-wrapper">
                                <img class="rn-news-card__image" src="' . get_the_post_thumbnail_url(null, 'ckror_front_news') . '" alt="' . $alt_text . '">
                            </div>';
                        } else {
                        ?>
                            <div class="rn-news-card__image-wrapper" aria-label="<?php _e("Изображение из записи", "rn-news") ?>">
                                <img class="rn-news-card__image" src="<?php echo plugins_url() . '/rn-news/src/assets/images/news_mask.jpeg'; ?>" alt="<?php _e("Изображение маска для новости") ?>">
                            </div>
                        <?php
                        }
                        ?>

                        <span class="rn-news-card__date" aria-label="<?php _e("Дата публикации записи", "rn-news") ?>"><?php echo $date ?></span>
                        <a href="<?php the_permalink(); ?>" class="rn-news-card__heading no-margin eliminate-link"><?php echo $heading ?></a>
                        <p class="rn-news-card__additional no-margin" aria-label="<?php _e("Краткий текст записи", "rn-news") ?>"><?php echo $excerpt ?></p>
                    </div>
                    <div class="rn-news-card__bottom">
                        <a class="rn-news-card__link" href="<?php the_permalink(); ?>"><?php echo htmlentities($newsLinkTitle) ?></a>
                    </div>
                </div><?php
                    } ?>
        </div>
    </section>

<?php
}
?>

<?php


function the_excerpt_max_charlength($charlength)
{
    $excerpt = get_the_excerpt();
    $charlength++;
    $str = '';

    if (mb_strlen($excerpt) > $charlength) {
        $subex = mb_substr($excerpt, 0, $charlength - 5);
        $exwords = explode(' ', $subex);
        $excut = - (mb_strlen($exwords[count($exwords) - 1]));
        if ($excut < 0) {
            $str .= mb_substr($subex, 0, $excut);
        } else {
            $str .= $subex;
        }
        $str .= ' [...]';
    } else {
        return $excerpt;
    }

    return $str;
}
?>