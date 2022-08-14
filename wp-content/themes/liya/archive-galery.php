<?php
/**
 * Template Name: Gallery
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package liya
 */

get_header(); ?>

<div id="primary" class="wa-gallery-archive-page">
    <main id="main" class="site-main">
        <section>
            <div class="gallery container">
                <div class="container">
                    <div class="main-title-block d-flex justify-content-center">
                        <h1>
                            <?php echo the_title(); ?>
                        </h1>
                    </div>
                    <div class="content-block">
                            <?php the_content(); ?>	
                    </div>				
                </div>
            </div>
        </section>    
    </main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();

