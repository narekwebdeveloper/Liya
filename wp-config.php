<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'liya_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */

define('AUTH_KEY',         '|-vc8{9zSVC6_Bi|2x:d]oB;cSx*,7[0%fN,H3wd}??AG|S7671{_tl&KXC(XAU+');
define('SECURE_AUTH_KEY',  'R]S0}uqL!v8?rADShK#KZ3xWiye@1f0Yv&h*j<pwEMwW<xE<$O#1P-8RbVCJ/pbj');
define('LOGGED_IN_KEY',    '-157&mVy72$j:ViZ*v$+[%(|5T0N/iM|6U8e9M<j?v}lGk.M776.,7.2.y[%ExdD');
define('NONCE_KEY',        '%!qUJQ70R|a-bw!,P5t2|d?@j5jkm:m|GLnfRY!~o-6gN~n%8yS+1xiAPR(-l!-F');
define('AUTH_SALT',        'k|ktC#r?[pc(}IC7YCK ?6C#D:1)%,S6Pvp@-3ZX&rfU%kIcBEIgm5}F-&}+__$S');
define('SECURE_AUTH_SALT', ',Tq76{`q#A8!K+:0% 1^u7_K1C_DDl~d~+dwbx8{|7&mPh]+$lfh{-zCi3PCr%|l');
define('LOGGED_IN_SALT',   ',!6Z@1kOtlp}3o=I?mC4a384 x;|.t*QBd@:rJlHWzwprD5xtS{5@^=|YPge!S>z');
define('NONCE_SALT',       '>Ki>-YLr.Cy@EG$]mJrCBt!UY4AXHX>GADUn^&8rS`dkpn ip6zK*[a0npBkvyG5');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
