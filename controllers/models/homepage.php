<?php

function get_services(){

    require "libraries/db.php";

    return $db->query("SELECT * from services WHERE isActive = 1 ")->fetchAll(PDO::FETCH_OBJ);

}