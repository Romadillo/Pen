namespace penExtension {
    export function pen_colour() {
        return penColour
    }
    export function pen_size() {
        return penSize
    }
    export function Pen_go_to(sprite: Sprite) {
        Set_pen_position_to(sprite.x, sprite.y)
    }
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
    export function Pen_down() {
        penDown = true
        penImage.fillRect(penX, penY, penSize, penSize, penColour)
    }
    export function Set_pen_colour_to(colour: number) {
        penColour = colour
    }
    export function Pen_up() {
        penDown = false
    }
    export function Set_pen_size_to(size: number) {
        penSize = Math.constrain(size, 1, 100)
    }
}
