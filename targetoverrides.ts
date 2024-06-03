/**
 * Tagged image literal converter
 */
//% shim=@f4 helper=image::ofBuffer blockIdentity="sprites._createImageShim"
//% groups=["0.","1#","2T","3t","4N","5n","6G","7g","8","9","aAR","bBP","cCp","dDO","eEY","fFW"]
// 假設這些定義對應於目標設備的具體硬體配置
namespace config {
    // 顯示器相關配置
    export const DISPLAY_WIDTH = 160;
    export const DISPLAY_HEIGHT = 128;
    export const DISPLAY_CFG0 = 0x10000040; // 顯示配置
    export const DISPLAY_CFG1 = 0x10000603;
    export const DISPLAY_CFG2 = 0x0;

    // 引腳配置
  //  export const PIN_DISPLAY_MISO = DAL.PA12;
  //  export const PIN_DISPLAY_MOSI = DAL.PA7;
  //  export const PIN_DISPLAY_SCK = DAL.PA5;
  //  export const PIN_DISPLAY_CS = DAL.PA4;
  //  export const PIN_DISPLAY_DC = DAL.PA6;
  //  export const PIN_DISPLAY_RST = DAL.PA3;
  //  export const PIN_DISPLAY_BL = DAL.PB1;

    // SPI 配置
  //  export const SPI_FREQUENCY = 8000000; // 8 MHz

    // 其他配置
    // ...
}

// 假設這些是設置的變量
let displayWidth = config.DISPLAY_WIDTH;
let displayHeight = config.DISPLAY_HEIGHT;

// 使用這些配置進行初始化
function initializeDisplay() {
    // 這裡會使用到 targetoverrides.ts 中的配置
    let display = new WDisplay();
    display.init(displayWidth, displayHeight, config.DISPLAY_CFG0, config.DISPLAY_CFG1, config.DISPLAY_CFG2);
    // ...
}

// 初始化顯示
initializeDisplay();
