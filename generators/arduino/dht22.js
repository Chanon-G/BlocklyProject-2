Blockly.Arduino.dht22_config= function(block) {
    var pin = block.getFieldValue('PINOUT');
    var text = Blockly.Arduino.valueToCode(this, 'text', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
    var unit = block.getFieldValue('unit')
    // TODO: Assemble JavaScript into code variable.
    //define
    pin_df = 'dht22_PIN_' + pin
    
    Blockly.Arduino.definitions_['include_dht22_config']='#include "DHT.h"'+ '\n'+
    '#define DHTTYPE DHT22'+'\n'+
    'DHT dht(DHTPIN, DHTTYPE);\n';

    Blockly.Arduino.definitions_['define_dht22_config'+ pin_df] = '#define DHTPIN ' + pin_df + ' ' + pin + '\n' ; 
     

   // setup
   
   Blockly.Arduino.setups_['setup_dht22_config'] =
   '\n  Serial.begin(9600);\n' +
   '  Serial.println(F(DHT22 test!));\n' +
   '  dht.begin();\n';
   
   //loop
var code = '// Reading temperature '+ pin+'\n';
    code += 'float Humidity'+ pin+' = dht.readHumidity'+ pin+'();\n';  
    code += 'float Temperature'+ pin+' = dht.readTemperature'+ pin+'();\n';
    code += 'Serial.print(F("Humidity'+ pin+': "));\n';
    code += 'Serial.print(Humidity'+ pin+');\n';
    code += 'Serial.print(F("Temperature'+ pin+': "));\n';
    code += 'Serial.print(Temperature'+ pin+');\n';

  

    return code;
  };


  Blockly.Arduino['dht22_value'] = function(block) {
    var dropdown_unit = block.getFieldValue('unit');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_unit;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_NONE];
};