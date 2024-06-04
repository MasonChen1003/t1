namespace pxt {

class WDisplay {
  // existing code...

  public:
    void setOffX(uint8_t x) {
        offX = x;
        setAddrMain(); // 更新地址窗口
    }

    void setOffY(uint8_t y) {
        offY = y;
        setAddrMain(); // 更新地址窗口
    }
};

// existing code...
// 声明接口函数
void setOffX(uint8_t x);
void setOffY(uint8_t y);

// 定义接口函数
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

