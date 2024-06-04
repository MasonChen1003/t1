namespace MyExtension {
// 在 custom.ts 中新增以下内容

//% blockId=display_set_offx block="set offX to %x"
//% weight=100
export function setOffX(x: number): void {
    pxtrun.setOffX(x);
}

//% blockId=display_set_offy block="set offY to %y"
//% weight=100
export function setOffY(y: number): void {
    pxtrun.setOffY(y);
}

}
