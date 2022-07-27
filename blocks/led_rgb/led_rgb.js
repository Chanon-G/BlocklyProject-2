// define blocks
'use strict';


//block สำหรับ config ขาและสี ของ led rgb 
Blockly.Blocks['led_rgb_config'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("LED RGB Configulation");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("https://cu.lnwfile.com/_/cu/_raw/91/av/mp.png", 150, 100, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("RED PIN")
            .appendField(new Blockly.FieldDropdown([
                ["D2 / CS / ADC2_2 / GPIO2", "2"],
                ["D4 / ADC2_0 / GPIO4", "4"],
                ["D12 / ADC2_5 / GPIO12", "12"],
                ["D13 / ADC2_6 / GPIO13", "13"],
                ["D14 / ADC2_3 / GPIO14", "14"],
                ["D15 / ADC2_3 / GPIO15", "15"],
                ["D18 / SCK / GPIO18", "18"],
                ["D19 / MISO / GPIO19", "19"],
                ["D21 / SDA / GPIO21", "21"],
                ["D22 / SCL / GPIO22", "22"],
                ["D23 / MOSI / GPIO23", "23"],
                ["D25 / DAC 1 / ADC2_8 / GPIO25", "25"],
                ["D26 / DAC 2 / ADC2_9 / GPIO26", "26"],
                ["D27 / ADC2_7 / GPIO27", "27"],
                ["D32 / ADC1_4 / GPIO32", "32"],
                ["D33 / ADC1_5 / GPIO33", "33"],
                ["D34 / ADC1_6 / GPIO34", "34"],
                ["D35 / ADC1_7 / GPIO35", "35"],
                ["VP / ADC1_0 / GPIO36", "36"],
                ["VN / ADC1_3 / GPIO39", "39"],
                ["CS / GPIO05", "5"],
                ["TXD0 / GPIO01", "1"],
                ["RXD0 / GPIO03", "3"],
                ["RXD 1 / GPIO09", "9"],
                ["TXD 1 / GPIO10", "10"],
                ["RTS 1 / GPIO11", "11"],
                ["TXD2 / GPIO17", "17"],
                ["RXD2 / GPIO16", "16"],
                ["ADC2_1 / GPIO0", "0"],
                ["CTS2 / SPI_D GPIO08", "8"],
                ["RTS2 / SPI_Q / GPIO07", "7"],
                ["CTS1 / SPI_CLK / GPIO06", "6"]
            ]), "R_PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("GREEN PIN")
            .appendField(new Blockly.FieldDropdown([
                ["D2 / CS / ADC2_2 / GPIO2", "2"],
                ["D4 / ADC2_0 / GPIO4", "4"],
                ["D12 / ADC2_5 / GPIO12", "12"],
                ["D13 / ADC2_6 / GPIO13", "13"],
                ["D14 / ADC2_3 / GPIO14", "14"],
                ["D15 / ADC2_3 / GPIO15", "15"],
                ["D18 / SCK / GPIO18", "18"],
                ["D19 / MISO / GPIO19", "19"],
                ["D21 / SDA / GPIO21", "21"],
                ["D22 / SCL / GPIO22", "22"],
                ["D23 / MOSI / GPIO23", "23"],
                ["D25 / DAC 1 / ADC2_8 / GPIO25", "25"],
                ["D26 / DAC 2 / ADC2_9 / GPIO26", "26"],
                ["D27 / ADC2_7 / GPIO27", "27"],
                ["D32 / ADC1_4 / GPIO32", "32"],
                ["D33 / ADC1_5 / GPIO33", "33"],
                ["D34 / ADC1_6 / GPIO34", "34"],
                ["D35 / ADC1_7 / GPIO35", "35"],
                ["VP / ADC1_0 / GPIO36", "36"],
                ["VN / ADC1_3 / GPIO39", "39"],
                ["CS / GPIO05", "5"],
                ["TXD0 / GPIO01", "1"],
                ["RXD0 / GPIO03", "3"],
                ["RXD 1 / GPIO09", "9"],
                ["TXD 1 / GPIO10", "10"],
                ["RTS 1 / GPIO11", "11"],
                ["TXD2 / GPIO17", "17"],
                ["RXD2 / GPIO16", "16"],
                ["ADC2_1 / GPIO0", "0"],
                ["CTS2 / SPI_D GPIO08", "8"],
                ["RTS2 / SPI_Q / GPIO07", "7"],
                ["CTS1 / SPI_CLK / GPIO06", "6"]
            ]), "G_PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("BLUE PIN")
            .appendField(new Blockly.FieldDropdown([
                ["D2 / CS / ADC2_2 / GPIO2", "2"],
                ["D4 / ADC2_0 / GPIO4", "4"],
                ["D12 / ADC2_5 / GPIO12", "12"],
                ["D13 / ADC2_6 / GPIO13", "13"],
                ["D14 / ADC2_3 / GPIO14", "14"],
                ["D15 / ADC2_3 / GPIO15", "15"],
                ["D18 / SCK / GPIO18", "18"],
                ["D19 / MISO / GPIO19", "19"],
                ["D21 / SDA / GPIO21", "21"],
                ["D22 / SCL / GPIO22", "22"],
                ["D23 / MOSI / GPIO23", "23"],
                ["D25 / DAC 1 / ADC2_8 / GPIO25", "25"],
                ["D26 / DAC 2 / ADC2_9 / GPIO26", "26"],
                ["D27 / ADC2_7 / GPIO27", "27"],
                ["D32 / ADC1_4 / GPIO32", "32"],
                ["D33 / ADC1_5 / GPIO33", "33"],
                ["D34 / ADC1_6 / GPIO34", "34"],
                ["D35 / ADC1_7 / GPIO35", "35"],
                ["VP / ADC1_0 / GPIO36", "36"],
                ["VN / ADC1_3 / GPIO39", "39"],
                ["CS / GPIO05", "5"],
                ["TXD0 / GPIO01", "1"],
                ["RXD0 / GPIO03", "3"],
                ["RXD 1 / GPIO09", "9"],
                ["TXD 1 / GPIO10", "10"],
                ["RTS 1 / GPIO11", "11"],
                ["TXD2 / GPIO17", "17"],
                ["RXD2 / GPIO16", "16"],
                ["ADC2_1 / GPIO0", "0"],
                ["CTS2 / SPI_D GPIO08", "8"],
                ["RTS2 / SPI_Q / GPIO07", "7"],
                ["CTS1 / SPI_CLK / GPIO06", "6"]
            ]), "B_PIN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Colour=")
            .appendField(new Blockly.FieldColour("#ffcc00"), "colour");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};