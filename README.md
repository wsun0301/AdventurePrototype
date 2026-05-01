A simple cooking adventure game for my girlfriend "chef G" by Weichen Sun based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: satisfied.
    - `Apartment1209`
    - `HippoMarket`
    - `Apartment1209_2`
    - `Kitchen`
    - `Dining`

- **2+ scenes *not* based on `AdventureScene`**: satisfied.
    - `Intro`
    - `chefG`
    - `chefS`
    - `Outro`
    - `Credits`

- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: `showMessage()` is used throughout the game to quickly display dialogue and instructions when the player hovers over objects or completes actions. This makes it easier to give feedback without rewriting text display code in every scene.
    - Enhancement 2: `gotoScene()` is used to move between locations such as the apartment, market, kitchen, dining room, outro, and credits. This simplifies scene transitions and keeps the scene-changing code cleaner.

Experience requirements:
- **4+ locations in the game world**: satisfied.
    - `Apartment1209`: the starting apartment scene where the chefs begin.
    - `HippoMarket`: the grocery store where players collect ingredients.
    - `Apartment1209_2`: the return-home scene where the chefs go to the kitchen.
    - `Kitchen`: the cooking scene where players choose which chef cooks.
    - `Dining`: the eating scene where chefs eat the finished or failed dishes.

- **2+ interactive objects in most scenes**: satisfied.
    - In `Apartment1209`, ChefG, ChefS, XiaoDi, and the door are interactive.
    - In `HippoMarket`, ingredients like meat, tomato, rice, spaghetti, the shopping cart, chefs, and the door are interactive.
    - In `Kitchen`, ChefG, ChefS, pot1, and pot2 are interactive.
    - In `Dining`, the dishes can be dragged to the chefs.

- **Many objects have `pointerover` messages**: satisfied.
    - In `Apartment1209`, hovering over ChefG shows that he wants to make braised beef and tomato rice.
    - In `HippoMarket`, hovering over the shopping cart tells the player to drop items there.
    - In `Kitchen`, hovering over each chef gives instructions about dragging them to a pot.
    - In `Dining`, hovering over the dishes tells whether they look good or bad.

- **Many objects have `pointerdown` effects**: satisfied.
    - In `Intro`, clicking anywhere starts the game and transitions to the apartment.
    - In `Credits`, clicking anywhere restarts the game.
    - Drag-and-drop interactions also let the player move chefs, ingredients, and dishes through the game.

- **Some objects are themselves animated**: satisfied.
    - In `chefG`, the rice moves into the rice cooker with a tween animation.
    - In `chefG` and `chefS`, ingredients animate back after being dropped into the pot.
    - In `Dining`, chefs react with different animations depending on whether the food is good or bad.
    - In `Outro`, XiaoDi drags the “Thank you for playing!” text across the screen.

Asset sources:
- Couch image based on sofa emoji: [Couch](https://www.emojis.com/emoji/sofa-Izhg0W0W48)
- Chef image based on chef emoji: [Chef](https://www.emojirequest.com/r/ChefEmoji)
- Door image based on Apple door emoji: [Door](https://emojipedia.org/apple/ios-13.2/door)
- Tomato image based on Twitter tomato emoji: [Tomato](https://emojipedia.org/twitter-emoji-stickers/13.1/tomato)
- Beef image based on Apple cut of meat emoji: [Beef](https://emojipedia.org/apple/ios-11.1/cut-of-meat)
- Spaghetti image based on Apple spaghetti emoji: [Spaghetti](https://emojipedia.org/apple/ios-10.2/spaghetti)
- Rice image based on Facebook cooked rice emoji: [Rice](https://emojipedia.org/facebook/4.0/cooked-rice)
- Dining table image based on dining table emoji: [Table](https://www.emojis.com/emoji/dining-table-GuOehC5)
- Shopping cart image based on Apple shopping trolley emoji: [Shopping cart](https://em-content.zobj.net/source/apple/81/shopping-trolley_1f6d2.png)
- Pot image based on Apple pot of food emoji: [Pot](https://emojipedia.org/apple/ios-10.2/pot-of-food)
- Fire image based on Apple fire emoji: [Fire](https://emojipedia.org/apple/ios-11.1/fire)
- Oil image based on olive oil emoji: [Oil](https://www.emojis.com/emoji/olive-oil-DxgpmZ8Jzh)
- Water image based on Apple droplet emoji: [Water](https://emojipedia.org/apple/ios-15.4/droplet)
- Soy sauce image based on soy sauce bottle emoji: [Soy Sauce](https://www.emojis.com/emoji/a-bottle-of-soy-sauce-CYnPyfZrPBc)
- Salt image based on Apple salt emoji: [Salt](https://emojipedia.org/apple/ios-12.1/salt)
- Poop image based on poop emoji icon: [Poop](https://emojiisland.com/products/poop-emoji-icon)
- Rice cooker image based on rice cooker PNG source: [Rice cooker](https://www.vecteezy.com/free-png/rice-cooker)

Most assets were edited into game sprites by resizing, removing backgrounds, or adjusting them to fit the game’s visual style.

Code sources:
- `adventure.js` and `index.html` were created for this project by [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.
- Cooking logic, drag-and-drop ingredient logic, success/failure dish results, dining animations, outro animation, and credits scene were written and customized by me.