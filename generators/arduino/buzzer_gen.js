Blockly.Arduino.buzzer_config= function(block) {
    var pin = block.getFieldValue('PINOUT');
    var state = block.getFieldValue('state');
    // TODO: Assemble JavaScript into code variable.
    //define
    pin_df = 'buzzer_PIN_' + pin
    Blockly.Arduino.definitions_['define_buzzer_config'+ pin_df] ='#define BUZZER_PIN ' + pin_df + ' ' + pin + '\n' ; 
    
    // #define BUZZER_PIN 2

   // setup
   Blockly.Arduino.setups_['setup_buzzer_config'+ pin_df] =    'pinMode(BUZZER_PIN'+ pin+',OUTPUT);\n';
    //    pinMode(BUZZER_PIN,OUTPUT);

   //loop
   var code = 'digitalWrite(BUZZER_PIN' + pin + ',' + state + ');\n';


//ปิดเสียงเตือน
//   digitalWrite(BUZZER_PIN,HIGH);   
//   delay(1000);
//เปิดเสียงเตือน
//   digitalWrite(BUZZER_PIN,LOW);    
//   delay(1000);

    return code;
  };
