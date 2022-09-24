<?php
exec("ping -c 1 -W 0.1 10.1.0.6",$output,$retvalue);
echo $retvalue==0?"true":"false";
?>
