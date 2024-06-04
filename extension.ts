// 调用 C++ 中的 setOffX 函数
control.runInParallel(() => {
    setOffX(x);
});

// 调用 C++ 中的 setOffY 函数
control.runInParallel(() => {
    setOffY(y);
});
