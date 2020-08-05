<?php
	require_once 'vendor/autoload.php';
	$loader = new Twig_Loader_Filesystem('views');
	$twig = new Twig_Environment($loader, [
	    'debug' => true
    ]);
    $twig->addExtension(new Twig_Extension_Debug());
	$twig->addGlobal('path', 'assets/build');