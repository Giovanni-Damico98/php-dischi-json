<?php
// recupero i dati dal .json
$fileContent = file_get_contents('./db/dischi.json');
header("Content-Type: application/json");
echo $fileContent;
