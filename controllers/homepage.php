<?php

include "controllers/models/homepage.php";

function get_homepage(){

    $services               = get_services();


    include "views/index/homepage.php";

}