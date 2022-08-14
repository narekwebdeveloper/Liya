
<?php
/**
 * Template Name: About us
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

	<div id="primary about_us_page_template" class="wa-about-us-page">
		<main id="main" class="site-main">
			<section class="about-us-part">
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
			</section>	
		</main><!-- #main -->
	</div><!-- #primary -->
<?php
get_footer();

