#include "pxt.h"

namespace pxt {
    // 声明接口函数
    void setOffX(uint8_t x);
    void setOffY(uint8_t y);
}

namespace pxt {
    void setOffX(uint8_t x) {
        auto display = getWDisplay();
        if (display)
            display->setOffX(x);
    }

    void setOffY(uint8_t y) {
        auto display = getWDisplay();
        if (display)
            display->setOffY(y);
    }
}
