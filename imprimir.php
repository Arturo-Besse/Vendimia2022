<?php
if(array_key_exists('r',$_GET)&&$_GET['r']!='')$reina=$_GET['r'];
else exit();
$reinas=array('Godoy Cruz','Maipú','Santa Rosa','Junín','La Paz','San Carlos','Lavalle','Las Heras','Rivadavia','Tunuyán','General Alvear','Malargüe','San Rafael','Lujan de Cuyo','San Martín','Tupungato','Guaymallén','Ciudad de Mendoza','Todas las Candidatas');
/* detect locally shared printer */
$handle=printer_open("turnero"); HP LaserJet Professional P 1102w);

var_dump(printer_list(PRINTER_ENUM_LOCAL));

$handle=printer_open("Foxit Reader PDF Printer");

printer_set_option($handle, PRINTER_PAPER_FORMAT, PRINTER_FORMAT_CUSTOM);
printer_set_option($handle, PRINTER_PAPER_LENGTH, 210);
printer_set_option($handle, PRINTER_PAPER_WIDTH, 99);
printer_set_option($handle, PRINTER_ORIENTATION, PRINTER_ORIENTATION_PORTRAIT);
printer_set_option($handle, PRINTER_SCALE, 100);
printer_start_doc($handle, "Voto");
printer_start_page($handle);
$font36 = printer_create_font("Arial",printer_logical_fontheight($handle,36), printer_logical_fontheight($handle,36)/3, PRINTER_FW_BOLD, false, false, false, 0);
$font22 = printer_create_font("Arial",printer_logical_fontheight($handle,22), printer_logical_fontheight($handle,22)/3, PRINTER_FW_BOLD, false, false, false, 0);
printer_select_font($handle, $font36);
printer_draw_text($handle,$reina, 900, 1850);
printer_delete_font($font36);
printer_select_font($handle, $font22);
printer_draw_text($handle,strtoupper($reinas[$reina-1]), 350, 2950);
printer_delete_font($font22);
printer_end_page($handle);
printer_end_doc($handle);
printer_close($handle);
?>