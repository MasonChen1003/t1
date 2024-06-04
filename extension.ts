namespace MyExtension {
// 在 custom.ts 中新增以下内容
//% blockId=display_set_offx block="set offX to %x"
//% weight=100
export function setOffX(x: number): void {
    // 调用 C++ 中的 setOffX 函数
    control.runInParallel(() => {
        pxt.setOffX(x);
    });
}

//% blockId=display_set_offy block="set offY to %y"
//% weight=100
export function setOffY(y: number): void {
    // 调用 C++ 中的 setOffY 函数
    control.runInParallel(() => {
        pxt.setOffY(y);
    });
}

}
