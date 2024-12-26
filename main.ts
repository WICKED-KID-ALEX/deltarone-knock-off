namespace SpriteKind {
    export const body = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    controller.moveSprite(mySprite, 0, 90)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.body, function (sprite, otherSprite) {
    mySprite.y += 9
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    controller.moveSprite(mySprite, 90, 0)
})
let mySprite: Sprite = null
game.splash("continue from chapter 1 ", "yes")
game.splash("are you", "there?")
game.splash("are we", "connected?")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(80, 90)
game.splash("excellent")
game.splash("truly", "excellent")
game.splash("now", "")
game.splash("we may", "begin")
game.splash("first", "")
game.splash("you must create", "a vessel")
game.splash("select the head", "that you prefer")
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 1 1 1 1 1 . . . . . . . . 
    . . 1 1 1 1 1 1 1 . . . . . . . 
    . . 1 1 1 1 1 1 1 . . . . . . . 
    . . 1 1 1 1 1 1 1 . . . . . . . 
    . . 1 1 1 1 1 1 1 . . . . . . . 
    . . 1 1 1 1 1 1 1 . . . . . . . 
    . . . 1 1 1 1 1 . . . . . . . . 
    . . . . 1 1 1 . . . . . . . . . 
    . . . . 1 1 1 . . . . . . . . . 
    . . . . 1 1 1 . . . . . . . . . 
    . . . . 1 1 1 . . . . . . . . . 
    . . . . 1 1 1 . . . . . . . . . 
    . . . . 1 1 1 . . . . . . . . . 
    `, SpriteKind.body)
mySprite.setPosition(80, 22)
mySprite2.setPosition(80, 85)
game.splash("select the torso", "that you prefer")
let mySprite5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . f f f . f f f . . . . . 
    . . . 1 f f f f f f f 1 . . . . 
    . . . 1 1 f f f f f 1 1 . . . . 
    . . . 1 1 f f f f f 1 1 . . . . 
    . . . 1 1 f f f f f 1 1 . . . . 
    . . . 1 1 f f f f f 1 1 . . . . 
    . . . 1 1 f f f f f 1 1 . . . . 
    . . . 1 1 f f f f f 1 1 . . . . 
    `, SpriteKind.body)
game.splash("select the legs", "that you prefer")
let mySprite6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e . . . . e . . . . . . 
    . . . . e e . . e e . . . . . . 
    . . . . e e . . e e . . . . . . 
    . . . . e e . . e e . . . . . . 
    . . . . e e . . e e . . . . . . 
    . . . . e e . . e e . . . . . . 
    . . . . e e . . e e . . . . . . 
    . e e e e e . . e e e e e . . . 
    . e e e e e . . e e e e e . . . 
    `, SpriteKind.body)
