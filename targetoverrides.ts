namespace myDisplay {
    //% shim=pxt::setOffX
    declare function setOffX(x: number): void;
    //% shim=pxt::setOffY
    declare function setOffY(y: number): void;

    // 使用这些函数
    //% blockId=display_set_offx block="set offX to %x"
    //% weight=100
    export function setDisplayOffX(x: number): void {
        setOffX(x);
    }

    //% blockId=display_set_offy block="set offY to %y"
    //% weight=100
    export function setDisplayOffY(y: number): void {
        setOffY(y);
    }
}
