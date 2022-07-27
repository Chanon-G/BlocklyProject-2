Blockly.Arduino.led = function(block) {
    var pin = block.getFieldValue('pin');
    var state = block.getFieldValue('state');

    //ส่วน Define
    pin_df = 'LED_PIN_' + pin
    Blockly.Arduino.definitions_['define_' + pin_df] = '#define ' + pin_df + ' ' + pin + '\n';


    //void setup
    Blockly.Arduino.setups_['setup_' + pin_df] = 'pinMode(' + pin_df + ',OUTPUT);\n';

    //void loop
    var code = 'digitalWrite(' + pin_df + ',' + state + ');\n';
    return code;
};

//led กระพริบ
Blockly.Arduino.led_blink = function(block) {
    var pin = block.getFieldValue('pin');
    var delay = Blockly.Arduino.valueToCode(block, 'delay', Blockly.Arduino.ORDER_ATOMIC);

    //ส่วน Define
    pin_df = 'LED_PIN_' + pin
    Blockly.Arduino.definitions_['define_' + pin_df] = '#define ' + pin_df + ' ' + pin + '\n';


    //void setup
    Blockly.Arduino.setups_['setup_' + pin_df] = 'pinMode(' + pin_df + ',OUTPUT);\n';

    //void loop
    var code = 'digitalWrite(' + pin_df + ',HIGH);\n';
    code += 'delay(' + delay + ');\n'
    code += 'digitalWrite(' + pin_df + ',LOW);\n';
    code += 'delay(' + delay + ');\n'
    return code;
};



//ทดลองทำ
// Blockly.Arduino.led_v2 = function(block) {
//     var dropdown_pin = block.getFieldValue('pin');
//     var dropdown_status = block.getFieldValue('status');
//     // TODO: Assemble JavaScript into code variable.
//     value = 'LED' + dropdown_pin;
//     Blockly.Arduino.definitions_[value] = '#define ' + value + ' ' + dropdown_pin + '';
//     Blockly.Arduino.setups_[value] = 'pinMode(' + value + ',OUTPUT);';

//     var code = 'digitalWrite(' + value + ',' + dropdown_status + ');\n';
//     return code;
// };

// Blockly.Arduino.led_aofpa = function() {
//     var value_text = Blockly.Arduino.valueToCode(this, 'Text', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
//     var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC);
//     var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC);
//     Blockly.Arduino.definitions_["define_u8g"] = '#include <U8glib.h>;\n U8GLIB_SSD1306_128X64 u8g(U8G_I2C_OPT_DEV_0|U8G_I2C_OPT_NO_ACK|U8G_I2C_OPT_FAST);\n';
//     //dans le setup    
//     Blockly.Arduino.setups_["setup_u8g"] =
//         'u8g.firstPage();\n' +
//         'do {' +
//         'u8g.setFont(u8g_font_unifont);\n' +
//         'u8g.drawStr( 0, 22, "Bonjour !");\n' +
//         '} while( u8g.nextPage());\n' +
//         'delay(1000);\n';
//     var code = 'u8g.firstPage();\n'
//     code += 'do {\n'
//     code += 'u8g.drawStr(' + x + ', ' + y + ', ' + value_text + ');\n'
//     code += '}\n while( u8g.nextPage() );\n';
//     return code;
// };