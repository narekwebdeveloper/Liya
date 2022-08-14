<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package liya
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
        <div class="site-info">
            <div class="container">
                <div class="footer-info">
                    <div class="footer-first-block">
                        <div class="links-title">
                            <h2 class="block-title"><?php echo get_field('footer_menu_title','option'); ?></h2>
                        </div>
                        <?php
                        wp_nav_menu( array (
                            'theme_location' => 'menu-2',
                            'menu_id' => 'footer_menu'
                        ) );
                        ?>
                    </div>
                </div>
            </div>
        </div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>

