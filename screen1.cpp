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

}
