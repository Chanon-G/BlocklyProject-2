Blockly.Arduino.dcmotor_config= function(block) {
    var pin = block.getFieldValue('PINOUT');
    var state = block.getFieldValue('state');
    // TODO: Assemble JavaScript into code variable.
    //define
    pin_df = 'dcmotor_PIN' + pin
    Blockly.Arduino.definitions_['define_dcmotor_config'+ pin_df] ='#define motorPin ' + pin_df + ' ' + pin + '\n' ; 
   // setup
   Blockly.Arduino.setups_['setup_dcmotor_config'+ pin_df] =
   '\n';
   //loop
var code = '// Motor will spin in full speed \n';
    code += 'digitalWrite(motorPin' + pin + ',' + state + ');\n';  
//   Motor will spin in full speed
//   digitalWrite(motorPin, HIGH);
    return code;
  };




//Motor Speed Control
Blockly.Arduino.mtSpeed_config= function(block) {
    var pin = block.getFieldValue('PINOUT');
    // TODO: Assemble JavaScript into code variable.
    //define
    pin_df = 'mtSpeed_PIN_' + pin
    Blockly.Arduino.definitions_['define_mtSpeed_config'+ pin_df] ='#define mtSpeedPin ' + pin_df + ' ' + pin + '\n' ; 
//   int motorPin = 9;

Blockly.Arduino.setups_['setup_mtSpeed_config'+ pin_df] = 
    'pinMode(mtSpeedPin'+ pin+',OUTPUT);\n'+
    'Serial.begin(9600);' +
    'while (! Serial);\n' +
    'Serial.println("Speed 0 to 255");\n';
// void setup() {
//    pinMode(motorPin, OUTPUT);
//    Serial.begin(9600);
//    while (! Serial);
//    Serial.println("Speed 0 to 255");
// }
var code = 'if (Serial.available()){ \n';
    code += 'int speed' + pin + ' = Serial.parseInt' + pin + '();';
    code += 'if (speed' + pin + ' >= 0 && speed ' + pin + ' <= 255) {\n';  
    code += 'analogWrite(mtSpeedPin'+ pin+', speed' + pin + ');}}';
// void loop() {
//    if (Serial.available()) {
//       int speed = Serial.parseInt();
//       if (speed >= 0 && speed <= 255) {
//          analogWrite(motorPin, speed);
//       }
//    }
// }
return code;
};






//Spin Direction Control
Blockly.Arduino.mtDirection_config= function(block) {
    var pin1 = block.getFieldValue('PINOUT1');
    var pin2 = block.getFieldValue('PINOUT2');
    var pwm = block.getFieldValue('PINOUTpwm');
    // TODO: Assemble JavaScript into code variable.
    //define
    Blockly.Arduino.definitions_['define_mtDirection_config'] =
    'const int pwm  = '+pwm+'\n' +
    'const int in_1 = '+pin1+';'+
    'const int in_2 = '+pin2+';';
//const int pwm = 2 ; //initializing pin 2 as pwm
// const int in_1 = 8 ;
// const int in_2 = 9 ;
// //For providing logic to L298 IC to choose the direction of the DC motor

Blockly.Arduino.setups_['setup_mtSpeed_config'] = 
    'pinMode(pwm,OUTPUT);\n'+
    'pinMode(in_1,OUTPUT);\n'+
    'pinMode(in_2,OUTPUT);\n';
// void setup() {
//    pinMode(pwm,OUTPUT) ; //we have to set PWM pin as output
//    pinMode(in_1,OUTPUT) ; //Logic pins are also set as output
//    pinMode(in_2,OUTPUT) ;
// }
var code = '//For Clock wise motion , in_1 = High , in_2 = Low \n';
    code += 'digitalWrite(in_1,HIGH) ;\n'; 
    code += 'digitalWrite(in_2,LOW) ;\n';   
    code += 'analogWrite(pwm,255);\n';  
    code += '/*setting pwm of the motor to 255 we can change the speed of rotation \n ';
    code += 'by changing pwm input but we are only using arduino so we are using highest \n ';
    code += 'value to driver the motor */\n';
    code += '//Clockwise for 3 secs\n';
    code += 'delay(3000) ;\n';
    code += '//For brake\n';
    code += 'digitalWrite(in_1,HIGH) ;\n'; 
    code += 'digitalWrite(in_2,HIGH) ;\n';
    code += 'delay(1000) ;\n';
    code += '//For Anti Clock-wise motion - IN_1 = LOW , IN_2 = HIGH\n';
    code += 'digitalWrite(in_1,LOW) ;\n';
    code += 'digitalWrite(in_2,HIGH) ;\n';
    code += 'delay(3000) ;\n';
    code += '//For brake\n';
    code += 'digitalWrite(in_1,HIGH) ;\n';
    code += 'digitalWrite(in_2,HIGH) ;\n';
    code += 'delay(1000) ;\n';
// void loop() {
//    //For Clock wise motion , in_1 = High , in_2 = Low
//    digitalWrite(in_1,HIGH) ;
//    digitalWrite(in_2,LOW) ;
//    analogWrite(pwm,255) ;
//    /* setting pwm of the motor to 255 we can change the speed of rotation
//    by changing pwm input but we are only using arduino so we are using highest
//    value to driver the motor */
//    //Clockwise for 3 secs
//    delay(3000) ;
//    //For brake
//    digitalWrite(in_1,HIGH) ;
//    digitalWrite(in_2,HIGH) ;
//    delay(1000) ;
//    //For Anti Clock-wise motion - IN_1 = LOW , IN_2 = HIGH
//    digitalWrite(in_1,LOW) ;
//    digitalWrite(in_2,HIGH) ;
//    delay(3000) ;
//    //For brake
//    digitalWrite(in_1,HIGH) ;
//    digitalWrite(in_2,HIGH) ;
//    delay(1000) ;
// }


    return code;
};