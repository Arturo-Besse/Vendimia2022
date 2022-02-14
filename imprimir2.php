<?php
if(array_key_exists('r',$_GET)&&$_GET['r']!='')$reina=$_GET['r'];
//else exit();
/* detect locally shared printer */
$handle=printer_open("XE1530 Sistemas");turnero");HP LaserJet Professional P 1102w");

var_dump(printer_list(PRINTER_ENUM_LOCAL));
exit();
$handle=printer_open("Foxit Reader PDF Printer");

printer_set_option($handle, PRINTER_PAPER_FORMAT, PRINTER_FORMAT_CUSTOM);
printer_set_option($handle, PRINTER_PAPER_LENGTH, 148.5);
printer_set_option($handle, PRINTER_PAPER_WIDTH, 105);
printer_set_option($handle, PRINTER_ORIENTATION, PRINTER_ORIENTATION_PORTRAIT);
printer_set_option($handle, PRINTER_SCALE, 100);
printer_start_doc($handle, "Voto");
printer_start_page($handle);
$font36 = printer_create_font("Arial",printer_logical_fontheight($handle,36), printer_logical_fontheight($handle,36)/3, PRINTER_FW_BOLD, false, false, false, 0);
$font22 = printer_create_font("Arial",printer_logical_fontheight($handle,22), printer_logical_fontheight($handle,22)/3, PRINTER_FW_BOLD, false, false, false, 0);
printer_select_font($handle, $font36);
for($i=0;$i<2600;$i+=100)
printer_draw_text($handle,'_', 0, $i);
for($i=0;$i<1900;$i+=100)
printer_draw_text($handle,'|', $i,0);
printer_draw_text($handle,'10', 600,1200);
printer_select_font($handle, $font22);
printer_draw_text($handle,'San Francisco del Monte', 0,2050);
printer_end_page($handle);
printer_end_doc($handle);
printer_close($handle);
?>
