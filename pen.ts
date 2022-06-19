//% color="#ffa303" 
//% weight=95
//% icon="\uf1fc"
//% block="Pen"
namespace penExtension {
    //% block="set pen position to $x $y"
    //% blockId=set_pen_pos
    //% weight=100
    //% x.defl=80
    //% y.defl=60
    export function Set_pen_position_to(x: number, y: number) {
        distance = Math.sqrt((penX - x) * (penX - x) + (penY - y) * (penY - y))
        if (penDown) {
            tempX = penX
            tempY = penY
            for (let index = 0; index < Math.ceil(distance); index++) {
                penImage.fillRect(tempX, tempY, penSize, penSize, penColour)
                tempX += (x - penX) / Math.ceil(distance)
                tempY += (y - penY) / Math.ceil(distance)
            }
        }
        penX = x
        penY = y
    }

    //% block="pen go to $sprite"
    //% blockId=pen_go_to_sprite
    //% weight=95
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    export function Pen_go_to(sprite: Sprite) {
        Set_pen_position_to(sprite.x, sprite.y)
    }

    //% block="pen down"
    //% blockId=pen_down
    //% weight=90
    export function Pen_down() {
        penDown = true
        penImage.fillRect(penX, penY, penSize, penSize, penColour)
    }

    //% block="pen up"
    //% blockId=pen_up
    //% weight=85
    export function Pen_up() {
        penDown = false
    }

    //% block="erase all"
    //% blockId=erase_all
    //% weight=83
    export function Erase_all() {
        penImage = img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `
    }

    //% block="set pen size to $size"
    //% blockId=set_pen_size
    //% weight=80
    //% size.defl=2
    //% size.min=0.1
    //% size.max=100
    export function Set_pen_size_to(size: number) {
        penSize = Math.constrain(size, 1, 100)
    }

    //% block="set pen colour to $colour"
    //% blockId=set pen colour
    //% weight=75
    //% colour.defl=1
    //% colour.min=0
    //% colour.max=15
    export function Set_pen_colour_to(colour: number) {
        penColour = colour
    }

    //% block="pen size"
    //% blockId=pen_size_reporter
    //% weight=10
    export function pen_size() {
        return penSize
    }

    //% block="pen colour"
    //% blockId=pen_colour_reporter
    //% weight=5
    export function pen_colour() {
        return penColour
    }
}