//code ref https://www.cybertice.com/article/447/สอนใช้งาน-arduino-analog-thermistor-temperature-sensor-waterproof-ntc-10k-เซ็นเซอร์วัดอุณหภูมิ

//Block เอาไว้กำหนดขา แล้วค่าตัว R
Blockly.Arduino.ntc_config = function(block) {
    var R_NTC = Blockly.Arduino.valueToCode(this, 'R_NTC', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
    var R = Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC);
    var pin = block.getFieldValue('pin')
        //ส่วนกำหนดตัวแปร
    Blockly.Arduino.definitions_["define_ntc_config"] =
        '#define RT0 ' + R_NTC + ' // Ω\n' +
        '#define B 3977 // K\n' +
        '#define RT0 ' + R_NTC + ' // Ω\n' +
        '#define PIN_NTC ' + pin + '\n' +
        '#define VCC 3.3    //Supply voltage\n' +
        '#define R ' + R + ' //Ω\n' +
        'float RT, VR, ln, Temp, T0, Read;\n';


    //ส่วน void setup() 
    Blockly.Arduino.setups_["setup_ntc_config"] =
        'pinMode(PIN_NTC,INPUT);\n' +
        '  T0 = 25+273.15;  //Temperature T0 from datasheet, conversion from Celsius to kelvin\n'

    //ส่วน void loop()
    var code = 'Read = analogRead(A0);              //Acquisition analog value Read\n'
    code += 'Read = (5.00 / 1023.00) * Read;      //Conversion to voltage\n'
    code += 'VR = VCC - Read;\n'
    code += 'RT = Read / (VR / R);               //Resistance of RT\n';
    code += 'ln = log(RT / RT0);\n'
    code += 'Temp = (1 / ((ln / B) + (1 / T0))); //Temperature from sensor\n'

    //แปลงเป็นหน่วยอุญหภูมิต่าง ๆ
    code += 'Celsius = Temp - 273.15;                 //Conversion to Celsius\n'
    code += 'Kelvin = Temp;                           //Conversion to kelvin\n'
    code += 'Fahrenheit = (Temp * 1.8) + 32;          //Conversion to Fahrenheit\n'
    return code;
};


//Block แสดงค่าองศงเซลเซียส
Blockly.Arduino.ntc_showTemp = function(block) {
    var text = Blockly.Arduino.valueToCode(this, 'text', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
    var unit = block.getFieldValue('unit')

    //ส่วน void setup() 
    Blockly.Arduino.setups_["setup_ntc_showTemp"] =
        'Serial.begin(9600);\n'

    //ส่วน void loop()
    var code = 'Serial.print(' + text + '); \n'
    code += 'Serial.println(' + unit + '); \n'
    return code;
};




Blockly.Arduino['ntc_value'] = function(block) {
    var dropdown_unit = block.getFieldValue('unit');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_unit;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_NONE];
};