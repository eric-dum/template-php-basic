<!DOCTYPE html>
<html class="no-js" lang="">

  <!--  GLOBAL HEADER -->
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title><?php echo $title; ?></title>
    <meta name="description" content="<?php echo $description; ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">

    <!-- primary css file. all other js files should be imported into theme.less. see gulpfile.js for compilation information -->
    <link rel="stylesheet" href="/assets/less/global/theme.min.css" />

    <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
    <script>
     window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
     ga('create','UA-XXXXX-Y','auto');ga('send','pageview')
    </script>
    <script src="https://www.google-analytics.com/analytics.js" async defer></script>

   <!-- HEADER ASSETS -->
   <?php echo $headerAssets; ?>

  </head>


  <body>