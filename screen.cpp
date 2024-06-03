#include "pxt.h"

namespace pxt {
    class WDisplay {
      public:
        uint32_t currPalette[16];
        bool newPalette, dataWaiting;
        uint8_t *screenBuf;

        int width, height;
        uint8_t offX, offY;

        WDisplay(uint8_t offsetX, uint8_t offsetY);
        void updateLoop();
        void update(Image_ img);
    };

    SINGLETON(WDisplay);

    WDisplay::WDisplay(uint8_t offsetX, uint8_t offsetY) {
        width = getConfig(CFG_DISPLAY_WIDTH, 160);
        height = getConfig(CFG_DISPLAY_HEIGHT, 128);
        offX = offsetX;
        offY = offsetY;
        DMESG("init display: %dx%d, offset: %d,%d", width, height, offX, offY);
        screenBuf = new uint8_t[width * height / 2 + 20];
        newPalette = false;
    }

    void updateScreen(Image_ img) {
        getWDisplay()->update(img);
    }

    // other functions...
}
