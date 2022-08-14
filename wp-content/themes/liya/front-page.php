<?php
/**
 * Template Name: Homepage
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package gabriel
 */

get_header(); ?>

<div id="primary home_page_template" class="wa-front-page">
	<main id="main" class="site-main container">
		<section class="categories-part">
           <div class="row categories-main-block">
               <div class="col-12 col-sm-12  col-md-6 col-lg-6 main-title-block">
                  <h1 class="left-block-title">
                     <?php echo __('Креативные решения для креативных людей', 'liya'); ?>
				  </h1>
				  <div class="buttons-block">
					<button class="left-button"><?php echo __('Заказать предложение', 'liya'); ?></button>
					<button class="right-button"><span><?php echo __('Готовые решения', 'liya'); ?></span><img src="<?php echo get_field('front_page_button_arrow', 'option')['url']; ?>" alt="<?php echo __('Arrow icon', 'liya'); ?>" class="arrow-icon"></button>
				  </div>
			   </div>
			   <div class="col-12 col-sm-12 col-md-6 col-lg-6 carts-block">
				<?php if( have_rows('home_categories', 47) ):?>					
					<?php while( have_rows('home_categories', 47) ) : the_row();?>
					<?php $sub_image_bg = get_sub_field('category_background_image');
					      $sub_image_animation = get_sub_field('category_animation_image');
					 ?>
					<?php                     
					if( !empty($sub_image_bg) ): ?>	
                   <figure class="category-cart">
				    	<img src="<?php echo $sub_image_bg['url']; ?>" alt="<?php echo $sub_image_bg['alt']; ?>" class="category-cart-image">
					</figure>
					<figure class="category-active d-none">
						<img src="<?php echo $sub_image_animation['url'];?>" alt="<?php echo $sub_image_animation['alt'] ?>" class="category-active-image">
					</figure>
				   <?php endif; ?>
				    <?php endwhile; ?>
				 <?php endif; ?>  
			   </div>
		   </div>
		</section>
		<section class="projects-part">
             <div class="row">
				 <div class="col-12 col-sm-12 col-md-5 col-lg-3 project-cart-block">
                    <h2>
						<?php echo __('Новые проекты','liya') ?>
					</h2>
					<p>
					   <?php echo __('Умеем наполнять смыслом простые вещи, демонстрировать нужное отношение к объекту подарка', 'liya'); ?>
					</p>
					<button>
						<span>
							<?php echo __('Все проекты', 'liya') ?>
						</span>
						<img src="<?php echo get_field('front_page_button_arrow', 'option')['url']; ?>" alt="<?php echo __('Arrow icon', 'liya'); ?>">
					</button>
				 </div>
				 <div class="col-12 col-sm-12 col-md-7 col-lg-9 project-slider-block">
                     <div class="slider-block owl-carousel" id="projects-carusel">
						<?php if( have_rows('home_projects_slider', 47) ):?>
							<?php while( have_rows('home_projects_slider', 47) ) : the_row();?>	
							    <?php $slider_image = get_sub_field('project_slider_image'); ?>
									<div class="inner-slider-block">
										<figure>
											<img src="<?php echo $slider_image['url']; ?>" alt="<?php echo $slider_image['alt']; ?>">
										</figure>
									</div>
							<?php endwhile; ?>
						<?php endif; ?>	 
					 </div>
				 </div>
			 </div>
		</section>
	</main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();

