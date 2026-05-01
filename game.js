class Apartment1209 extends AdventureScene {
    constructor() {
        super("apartment1209", "Apartment 1209");
    }
    preload() {
        this.load.path = 'assets/';
        this.load.image("door", "door.png");
        this.load.image("chefS", "chefS.png");
        this.load.image("chefG", "chefG.png");
        this.load.image("xiaoDi", "xiaoDi.png");
        this.load.image("sofa", "sofa.png");
    }
    create() {
        super.create();
        this.add.sprite(480, 540, "sofa").setOrigin(0.5).setScale(1.5);
        this.door = this.add.sprite(1060, 540, "door").setOrigin(0.5).setScale(2).setInteractive({dropZone: true});
        this.xiaoDi = this.add.sprite(480, 730, "xiaoDi").setOrigin(0.5).setScale(0.2).setInteractive({useHandCursor: true,draggable: true});
        this.chefG = this.add.sprite(580, 445, "chefG").setOrigin(0.5).setScale(0.39).setInteractive({useHandCursor: true,draggable: true});
        this.chefS = this.add.sprite(380, 450, "chefS").setOrigin(0.5).setScale(0.4).setInteractive({useHandCursor: true,draggable: true});
 

        this.showMessage("Home of the chefs!");
        this.xiaoDi.on('pointerover', () => this.showMessage("XiaoDi: Meow!"));
        this.chefG.on('pointerover', () => this.showMessage("ChefG: I want to make braised beef and tomato rice!"));
        this.door.on('pointerover', () => this.showMessage("Leave for grocery store? (drag and drop characters)"));
        this.chefS.on('pointerover', () => this.showMessage("ChefS: I want to make braised beef and tomato spaghetti!"));

        this.chefG.on('drag', (pointer, dragX, dragY) => {
            this.chefG.x = dragX;
            this.chefG.y = dragY;
        });
        this.chefS.on('drag', (pointer, dragX, dragY) => {
            this.chefS.x = dragX;
            this.chefS.y = dragY;
        });
        this.xiaoDi.on('drag', (pointer, dragX, dragY) => {
            this.xiaoDi.x = dragX;
            this.xiaoDi.y = dragY;
        });

        this.chefGleft = false;
        this.chefSleft = false;

        this.chefG.on('drop', (pointer, target) => {
            if (target.texture.key === 'door') {
                this.showMessage("ChefG: I'm going to the grocery store!");
                this.chefGleft = true;
            }
        });
        this.chefS.on('drop', (pointer, target) => {
            if (target.texture.key === 'door') {
                this.showMessage("ChefS: I'm going to the grocery store!");
                this.chefSleft = true;
            }
        });

        this.xiaoDi.on('drop', (pointer, target) => {
            if (target.texture.key === 'door') {
                this.showMessage("I don't think XiaoDi can go to the grocery store... He's scared of the outside world!");
            }
        });

    }
    update() {
        if (this.chefGleft && this.chefSleft) {
            this.gotoScene('hippoMarket');
        }
    }
}

class HippoMarket extends AdventureScene {
    constructor() {
        super("hippoMarket", "Hippo Market");
    }
    preload() {
        this.load.path = 'assets/';
        this.load.image("chefG", "chefG.png");
        this.load.image("chefS", "chefS.png");
        this.load.image("meat", "meat.png");
        this.load.image("tomato", "tomato.png");
        this.load.image("rice", "rice-raw.png");
        this.load.image("spaghetti", "sp.png");
        this.load.image("door", "door.png");
        this.load.image("shoppingCart", "shoppingCart.png");
    }
    create() {
        super.create();
        this.door = this.add.sprite(1060, 440, "door").setOrigin(0.5).setScale(2).setInteractive({dropZone: true});

        this.chefG = this.add.sprite(480+100, 300, "chefG").setOrigin(0.5).setScale(0.39).setInteractive({useHandCursor: true,draggable: true});

        this.chefS = this.add.sprite(380-100, 300, "chefS").setOrigin(0.5).setScale(0.4).setInteractive({useHandCursor: true,draggable: true});

        this.shoppingCart = this.add.sprite(400, 540, "shoppingCart").setOrigin(0.5).setScale(1).setInteractive({dropZone: true,draggable: true});

        

        this.meat1 = this.add.sprite(480-300, 540+200, "meat").setOrigin(0.5).setScale(0.5).setInteractive({useHandCursor: true,draggable: true});
        this.meat2 = this.add.sprite(480-300, 640+200, "meat").setOrigin(0.5).setScale(0.5).setInteractive({useHandCursor: true,draggable: true});
        this.meat3 = this.add.sprite(480-200, 540+200, "meat").setOrigin(0.5).setScale(0.5).setInteractive({useHandCursor: true,draggable: true});
        this.meat4 = this.add.sprite(480-200, 640+200, "meat").setOrigin(0.5).setScale(0.5).setInteractive({useHandCursor: true,draggable: true});

        this.tomato1 = this.add.sprite(680-250, 540+200, "tomato").setOrigin(0.5).setScale(0.15).setInteractive({useHandCursor: true,draggable: true});
        this.tomato2 = this.add.sprite(680-250, 640+200, "tomato").setOrigin(0.5).setScale(0.15).setInteractive({useHandCursor: true,draggable: true});
        this.tomato3 = this.add.sprite(680-150, 540+200, "tomato").setOrigin(0.5).setScale(0.15).setInteractive({useHandCursor: true,draggable: true});
        this.tomato4 = this.add.sprite(680-150, 640+200, "tomato").setOrigin(0.5).setScale(0.15).setInteractive({useHandCursor: true,draggable: true});

        this.rice1 = this.add.sprite(880-200, 540+200, "rice").setOrigin(0.5).setScale(0.2).setInteractive({useHandCursor: true,draggable: true});
        this.rice2 = this.add.sprite(880-200, 540+300, "rice").setOrigin(0.5).setScale(0.2).setInteractive({useHandCursor: true,draggable: true});
        this.rice3 = this.add.sprite(880-100, 540+200, "rice").setOrigin(0.5).setScale(0.2).setInteractive({useHandCursor: true,draggable: true});
        this.rice4 = this.add.sprite(880-100, 540+300, "rice").setOrigin(0.5).setScale(0.2).setInteractive({useHandCursor: true,draggable: true});

        this.spaghetti1 = this.add.sprite(980-50, 540+200, "spaghetti").setOrigin(0.5).setScale(0.6).setInteractive({useHandCursor: true,draggable: true});
        this.spaghetti2 = this.add.sprite(980-50, 540+300, "spaghetti").setOrigin(0.5).setScale(0.6).setInteractive({useHandCursor: true,draggable: true});
        this.spaghetti3 = this.add.sprite(980+50, 540+200, "spaghetti").setOrigin(0.5).setScale(0.6).setInteractive({useHandCursor: true,draggable: true});
        this.spaghetti4 = this.add.sprite(980+50, 540+300, "spaghetti").setOrigin(0.5).setScale(0.6).setInteractive({useHandCursor: true,draggable: true});

        this.showMessage("Welcome to the Hippo Market! Start shopping for ingredients!(drag and drop ingredients to shopping cart, then drag chefs to door to go back home!)");

        this.shoppingCart.on('pointerover', () => this.showMessage("Shopping Cart: Drop items here!"));

        this.chefG.on('drag', (pointer, dragX, dragY) => {
            this.chefG.x = dragX;
            this.chefG.y = dragY;
        });
        this.chefG.on('pointerover', () => this.showMessage("ChefG: beef, tomato, and rice, please!"));

        this.chefS.on('drag', (pointer, dragX, dragY) => {
            this.chefS.x = dragX;
            this.chefS.y = dragY;
            this.shoppingCart.x = dragX - 100;
            this.shoppingCart.y = dragY + 100;
        });
        this.chefS.on('pointerover', () => this.showMessage("ChefS: beef,tomato, and spaghetti, please!"));

        this.meat1.on('drag', (pointer, dragX, dragY) => {
            this.meat1.x = dragX;
            this.meat1.y = dragY;
        });
        this.meat2.on('drag', (pointer, dragX, dragY) => {
            this.meat2.x = dragX;
            this.meat2.y = dragY;
        }); 
        this.meat3.on('drag', (pointer, dragX, dragY) => {
            this.meat3.x = dragX;
            this.meat3.y = dragY;
        });
        this.meat4.on('drag', (pointer, dragX, dragY) => {
            this.meat4.x = dragX;
            this.meat4.y = dragY;
        });


        this.tomato1.on('drag', (pointer, dragX, dragY) => {
            this.tomato1.x = dragX;
            this.tomato1.y = dragY;
        });
        this.tomato2.on('drag', (pointer, dragX, dragY) => {
            this.tomato2.x = dragX;
            this.tomato2.y = dragY;
        });
        this.tomato3.on('drag', (pointer, dragX, dragY) => {
            this.tomato3.x = dragX;
            this.tomato3.y = dragY;
        });
        this.tomato4.on('drag', (pointer, dragX, dragY) => {
            this.tomato4.x = dragX;
            this.tomato4.y = dragY;
        });


        this.rice1.on('drag', (pointer, dragX, dragY) => {
            this.rice1.x = dragX;
            this.rice1.y = dragY;
        });
        this.rice2.on('drag', (pointer, dragX, dragY) => {
            this.rice2.x = dragX;
            this.rice2.y = dragY;
        });
        this.rice3.on('drag', (pointer, dragX, dragY) => {
            this.rice3.x = dragX;
            this.rice3.y = dragY;
        });
        this.rice4.on('drag', (pointer, dragX, dragY) => {
            this.rice4.x = dragX;
            this.rice4.y = dragY;
        });


        this.spaghetti1.on('drag', (pointer, dragX, dragY) => {
            this.spaghetti1.x = dragX;
            this.spaghetti1.y = dragY;
        });
        this.spaghetti2.on('drag', (pointer, dragX, dragY) => {
            this.spaghetti2.x = dragX;
            this.spaghetti2.y = dragY;
        });
        this.spaghetti3.on('drag', (pointer, dragX, dragY) => {
            this.spaghetti3.x = dragX;
            this.spaghetti3.y = dragY;
        });
        this.spaghetti4.on('drag', (pointer, dragX, dragY) => {
            this.spaghetti4.x = dragX;
            this.spaghetti4.y = dragY;
        });

        this.chefGleft = false;
        this.chefSleft = false;

        this.chefG.on('drop', (pointer, target) => {
            if (target.texture.key === 'door') {
                this.showMessage("ChefG: I'm going back home!");
                this.chefGleft = true;
            }
        });
        this.chefS.on('drop', (pointer, target) => {
            if (target.texture.key === 'door') {
                this.showMessage("ChefS: I'm going back home!");
                this.chefSleft = true;
            }
        });

        this.meat1.on('drop', (pointer, target) => {
            if (target.texture.key === 'shoppingCart') {
                this.showMessage("Meat added to cart!");
                this.gainItem("meat");
                this.meat1.destroy();
            }
        });
        this.meat2.on('drop', (pointer, target) => {
            if (target.texture.key === 'shoppingCart') {
                this.showMessage("Meat added to cart!");
                this.gainItem("meat");
                this.meat2.destroy();
            }
        });
        this.meat3.on('drop', (pointer, target) => {
            if (target.texture.key === 'shoppingCart') {
                this.showMessage("Meat added to cart!");
                this.gainItem("meat");
                this.meat3.destroy();
            }
        });
        this.meat4.on('drop', (pointer, target) => {
            if (target.texture.key === 'shoppingCart') {
                this.showMessage("Meat added to cart!");
                this.gainItem("meat");
                this.meat4.destroy();
            }
        });
        this.tomato1.on('drop', (pointer, target) => {
            if (target.texture.key === 'shoppingCart') {
                this.showMessage("Tomato added to cart!");
                this.gainItem("tomato");
                this.tomato1.destroy();
            }
        });
        this.tomato2.on('drop', (pointer, target) => {
            if (target.texture.key === 'shoppingCart') {
                this.showMessage("Tomato added to cart!");
                this.gainItem("tomato");
                this.tomato2.destroy();
            }
        });
        this.tomato3.on('drop', (pointer, target) => {
            if (target.texture.key === 'shoppingCart') {
                this.showMessage("Tomato added to cart!");
                this.gainItem("tomato");
                this.tomato3.destroy();
            }
        });
        this.tomato4.on('drop', (pointer, target) => {
            if (target.texture.key === 'shoppingCart') {
                this.showMessage("Tomato added to cart!");
                this.gainItem("tomato");
                this.tomato4.destroy();
            }
        });
        this.rice1.on('drop', (pointer, target) => {
            if (target.texture.key === 'shoppingCart') {
                this.showMessage("Rice added to cart!");
                this.gainItem("rice");
                this.rice1.destroy();
            }
        });
        this.rice2.on('drop', (pointer, target) => {
            if (target.texture.key === 'shoppingCart') {
                this.showMessage("Rice added to cart!");
                this.gainItem("rice");
                this.rice2.destroy();
            }
        });
        this.rice3.on('drop', (pointer, target) => {
            if (target.texture.key === 'shoppingCart') {
                this.showMessage("Rice added to cart!");
                this.gainItem("rice");
                this.rice3.destroy();
            }
        });
        this.rice4.on('drop', (pointer, target) => {
            if (target.texture.key === 'shoppingCart') {
                this.showMessage("Rice added to cart!");
                this.gainItem("rice");
                this.rice4.destroy();
            }
        });
        this.spaghetti1.on('drop', (pointer, target) => {
            if (target.texture.key === 'shoppingCart') {
                this.showMessage("Spaghetti added to cart!");
                this.gainItem("spaghetti");
                this.spaghetti1.destroy();
            }
        });
        this.spaghetti2.on('drop', (pointer, target) => {
            if (target.texture.key === 'shoppingCart') {
                this.showMessage("Spaghetti added to cart!");
                this.gainItem("spaghetti");
                this.spaghetti2.destroy();
            }
        });
        this.spaghetti3.on('drop', (pointer, target) => {
            if (target.texture.key === 'shoppingCart') {
                this.showMessage("Spaghetti added to cart!");
                this.gainItem("spaghetti");
                this.spaghetti3.destroy();
            }
        });
        this.spaghetti4.on('drop', (pointer, target) => {
            if (target.texture.key === 'shoppingCart') {
                this.showMessage("Spaghetti added to cart!");
                this.gainItem("spaghetti");
                this.spaghetti4.destroy();
            }
        });

    }
    update() {
        if (this.chefGleft && this.chefSleft) {
            this.gotoScene('apartment1209-2');
        }
    }
}

class Apartment1209_2 extends AdventureScene {
    constructor() {
        super("apartment1209-2", "Apartment 1209");
    }
    preload() {
        this.load.path = 'assets/';
        this.load.image("door", "door.png");
        this.load.image("kitchenDoor", "kitchenDoor.png");
        this.load.image("chefS", "chefS.png");
        this.load.image("chefG", "chefG.png");
        this.load.image("xiaoDi", "xiaoDi.png");
        this.load.image("sofa", "sofa.png");
    }
    create() {
        super.create();
        this.add.sprite(480+100, 540, "sofa").setOrigin(0.5).setScale(1.5);
        this.aptDoor = this.add.sprite(1060+200, 540, "door").setOrigin(0.5).setScale(2).setInteractive({dropZone: true});
        this.kitchenDoor = this.add.sprite(150, 540, "kitchenDoor").setOrigin(0.5).setScale(2).setInteractive({dropZone: true});
        this.xiaoDi = this.add.sprite(480+100, 520, "xiaoDi").setOrigin(0.5).setScale(0.2).setInteractive({useHandCursor: true,draggable: true});
        this.chefG = this.add.sprite(580+600, 445, "chefG").setOrigin(0.5).setScale(0.39).setInteractive({useHandCursor: true,draggable: true});
        this.chefS = this.add.sprite(380+600, 550, "chefS").setOrigin(0.5).setScale(0.4).setInteractive({useHandCursor: true,draggable: true});
        this.showMessage("Welcome back home! Let's start cooking!");
        this.aptDoor.on('pointerover', () => this.showMessage("You are stuck in the apartment..."));
        this.xiaoDi.on('pointerover', () => this.showMessage("XiaoDi: Meow! I am hungry!"));
        this.chefG.on('pointerover', () => this.showMessage("ChefG: Let's make braised beef and tomato rice!"));
        this.kitchenDoor.on('pointerover', () => this.showMessage("Go to the kitchen? (drag and drop characters)"));
        this.chefS.on('pointerover', () => this.showMessage("ChefS: Let's make braised beef and tomato spaghetti!"));

        this.chefG.on('drag', (pointer, dragX, dragY) => {
            this.chefG.x = dragX;
            this.chefG.y = dragY;
        });
        this.chefS.on('drag', (pointer, dragX, dragY) => {
            this.chefS.x = dragX;
            this.chefS.y = dragY;
        });
        this.xiaoDi.on('drag', (pointer, dragX, dragY) => {
            this.xiaoDi.x = dragX;
            this.xiaoDi.y = dragY;
        });

        this.chefGleft = false;
        this.chefSleft = false;
        this.chefG.on('drop', (pointer, target) => {
            if (target.texture.key === 'kitchenDoor') {
                this.showMessage("ChefG: I'm going to the kitchen!");
                this.chefGleft = true;
            }
        });
        this.chefS.on('drop', (pointer, target) => {
            if (target.texture.key === 'kitchenDoor') {
                this.showMessage("ChefS: I'm going to the kitchen!");
                this.chefSleft = true;
            }
        });
        this.xiaoDi.on('drop', (pointer, target) => {
            if (target.texture.key === 'kitchenDoor') {
                this.showMessage("I don't think XiaoDi can go to the kitchen... He's scared of the cooking utensils!");
            }
        });
    }
    update() {
        if (this.chefGleft && this.chefSleft) {
            this.gotoScene('kitchen');
        }
    }
}

class Kitchen extends AdventureScene {
    constructor() {
        super("kitchen", "Kitchen");
    }

    preload() {
        this.load.path = 'assets/';

        this.load.image("poop", "poop.png");
        this.load.image("chefG", "chefG.png");
        this.load.image("chefS", "chefS.png");
        this.load.image("pot1", "pot.png");
        this.load.image("pot2", "pot.png");

        this.load.image("riceDish", "rice.png");
        this.load.image("spaghettiDish", "noodle.png");
    }

    create() {
        
        super.create();

        const chefGResult = this.registry.get("chefGSuccess");
        const chefSResult = this.registry.get("chefSSuccess");

        this.chefG = this.add.sprite(960, 800, "chefG")
            .setOrigin(0.5)
            .setScale(0.39)
            .setInteractive({ useHandCursor: true, draggable: true });

        this.chefS = this.add.sprite(960 - 500, 800, "chefS")
            .setOrigin(0.5)
            .setScale(0.4)
            .setInteractive({ useHandCursor: true, draggable: true });

        this.pot1 = this.add.sprite(960, 400, "pot1")
            .setOrigin(0.5)
            .setScale(3)
            .setInteractive({ dropZone: true });

        this.pot2 = this.add.sprite(960 - 500, 400, "pot2")
            .setOrigin(0.5)
            .setScale(3)
            .setInteractive({ dropZone: true });

        if (chefGResult === true) {
            this.showMessage("ChefG succeeded! The braised beef and tomato rice is perfect!");
            this.pot1.setTexture("riceDish");
            this.pot1.setScale(0.7);
        } else if (chefGResult === false) {
            this.showMessage("ChefG failed! The recipe order was wrong or the rice was not cooked.");
            this.add.sprite(960, 400, "poop")
                .setOrigin(0.5)
                .setScale(1)
                .setDepth(1);
        } else {
            this.showMessage("Where the magic happens! (drag and drop chefs to pots to cook the dishes!)");
        }

        if (chefSResult === true) {
            this.showMessage("ChefS succeeded! The braised beef and tomato spaghetti is perfect!");
            this.pot2.setTexture("spaghettiDish");
            this.pot2.setScale(0.7);
        } else if (chefSResult === false) {
            this.showMessage("ChefS failed! The recipe order was wrong.");
            this.add.sprite(960 - 500, 400, "poop")
                .setOrigin(0.5)
                .setScale(1)
                .setDepth(1);
        }

        this.chefG.on('drag', (pointer, dragX, dragY) => {
            this.chefG.x = dragX;
            this.chefG.y = dragY;
        });

        this.chefS.on('drag', (pointer, dragX, dragY) => {
            this.chefS.x = dragX;
            this.chefS.y = dragY;
        });

        this.chefG.on('pointerover', () => {
            this.showMessage("Drag ChefG to a pot to cook braised beef and tomato rice!");
        });

        this.chefS.on('pointerover', () => {
            this.showMessage("Drag ChefS to a pot to cook braised beef and tomato spaghetti!");
        });

        this.pot1.on('pointerover', () => {
            this.showMessage("Drag and drop a chef here to cook!");
        });

        this.pot2.on('pointerover', () => {
            this.showMessage("Drag and drop a chef here to cook!");
        });

        this.chefG.on('drop', (pointer, target) => {
            if (target.texture.key === 'pot1' || target.texture.key === 'pot2') {
                this.registry.set("gCooked", true);
                this.gotoScene('chefG');
            }
        });

        this.chefS.on('drop', (pointer, target) => {
            if (target.texture.key === 'pot1' || target.texture.key === 'pot2') {
                this.registry.set("sCooked", true);
                this.gotoScene('chefS');
            }
        });

        if (chefGResult !== undefined && chefSResult !== undefined) {
            this.time.delayedCall(2000, () => {
                this.gotoScene("dining");
            });
        }
    }
}

class Dining extends AdventureScene {
    constructor() {
        super('dining', 'Dining Table');
    }

    preload() {
        this.load.path = 'assets/';

        this.load.image("chefG", "chefG.png");
        this.load.image("chefS", "chefS.png");
        this.load.image("riceDish", "riceDish.png");
        this.load.image("spaghettiDish", "spaghettiDish.png");
        this.load.image("poop", "poop.png");
        this.load.image("table", "table.png");
    }

    create() {
        super.create();

        const chefGResult = this.registry.get("chefGSuccess");
        const chefSResult = this.registry.get("chefSSuccess");

        this.showMessage("Dinner time! Drag each dish to the right chef to eat!");

        this.add.image(760,600,"table").setScale(1.8);


        this.chefG = this.add.sprite(1250-300, 750, "chefG")
            .setOrigin(0.5)
            .setScale(0.49)
            .setInteractive({ dropZone: true });

        this.chefS = this.add.sprite(670-200, 750, "chefS")
            .setOrigin(0.5)
            .setScale(0.5)
            .setInteractive({ dropZone: true });

        this.chefG.on('pointerover', () => {
            this.showMessage("ChefG wants to eat the rice dish!");
        });

        this.chefS.on('pointerover', () => {
            this.showMessage("ChefS wants to eat the spaghetti dish!");
        });

        
        const chefGDishImage = chefGResult === true ? "riceDish" : "poop";
        const chefSDishImage = chefSResult === true ? "spaghettiDish" : "poop";

        this.chefGDish = this.add.sprite(670+200, 350, chefGDishImage)
            .setOrigin(0.5)
            .setScale(0.3)
            .setInteractive({ useHandCursor: true, draggable: true });

        this.chefSDish = this.add.sprite(670, 350, chefSDishImage)
            .setOrigin(0.5)
            .setScale(0.3)
            .setInteractive({ useHandCursor: true, draggable: true });

        this.chefGDish.owner = "chefG";
        this.chefGDish.good = chefGResult === true;

        this.chefSDish.owner = "chefS";
        this.chefSDish.good = chefSResult === true;

        this.chefGDish.on('pointerover', () => {
            if (this.chefGDish.good) {
                this.showMessage("ChefG's dish looks delicious!");
            } else {
                this.showMessage("ChefG's dish looks terrible...");
            }
        });

        this.chefSDish.on('pointerover', () => {
            if (this.chefSDish.good) {
                this.showMessage("ChefS's dish looks delicious!");
            } else {
                this.showMessage("ChefS's dish looks terrible...");
            }
        });

        this.makeDishDraggable(this.chefGDish);
        this.makeDishDraggable(this.chefSDish);

        this.chefGAte = false;
        this.chefSAte = false;

        this.chefGDish.on('drop', (pointer, target) => {
            if (target === this.chefG) {
                this.eatDish(this.chefG, this.chefGDish, "chefG");
            } else {
                this.showMessage("That dish is for ChefG!");
            }
        });

        this.chefSDish.on('drop', (pointer, target) => {
            if (target === this.chefS) {
                this.eatDish(this.chefS, this.chefSDish, "chefS");
            } else {
                this.showMessage("That dish is for ChefS!");
            }
        });
    }

    makeDishDraggable(dish) {
        dish.on('drag', (pointer, dragX, dragY) => {
            dish.x = dragX;
            dish.y = dragY;
        });
    }

    eatDish(chef, dish, chefName) {
        dish.disableInteractive();

        dish.x = chef.x;
        dish.y = chef.y - 120;

        if (dish.good) {
            this.playGoodAnimation(chef, dish, chefName);
        } else {
            this.playBadAnimation(chef, dish, chefName);
        }

        if (chefName === "chefG") {
            this.chefGAte = true;
        }

        if (chefName === "chefS") {
            this.chefSAte = true;
        }

        this.time.delayedCall(1500, () => {
            dish.destroy();

            if (this.chefGAte && this.chefSAte) {
                this.showMessage("Both chefs finished eating!");
                this.time.delayedCall(1500, () => {
                    this.gotoScene("outro");
                });
            }
        });
    }

    playGoodAnimation(chef, dish, chefName) {
        if (chefName === "chefG") {
            this.showMessage("ChefG: This rice is amazing!");
        } else if (chefName === "chefS") {
            this.showMessage("ChefS: This spaghetti is amazing!");
        }

        this.add.tween({
            targets: chef,
            y: chef.y - 40,
            duration: 250,
            yoyo: true,
            repeat: 3,
            ease: 'Sine.easeInOut'
        });

        this.add.tween({
            targets: dish,
            scale: 0.3,
            alpha: 0,
            duration: 1000,
            ease: 'Power2'
        });

        this.add.text(chef.x, chef.y - 220, "YUM!")
            .setFontSize(50)
            .setOrigin(0.5);

        this.cameras.main.flash(400, 255, 255, 255);
    }

    playBadAnimation(chef, dish, chefName) {
        if (chefName === "chefG") {
            this.showMessage("ChefG: This rice is awful!");
        } else if (chefName === "chefS") {
            this.showMessage("ChefS: This spaghetti is awful!");
        }

        this.add.tween({
            targets: chef,
            x: chef.x + 30,
            duration: 80,
            yoyo: true,
            repeat: 8,
            ease: 'Sine.easeInOut'
        });

        this.add.tween({
            targets: dish,
            angle: 360,
            scale: 0.3,
            alpha: 0,
            duration: 1000,
            ease: 'Power2'
        });

        this.add.text(chef.x, chef.y - 220, "EW!")
            .setFontSize(50)
            .setOrigin(0.5);

        this.cameras.main.shake(500, 0.01);
    }
}

class chefG extends Phaser.Scene {
    constructor() {
        super('chefG');
    }
    preload() {
        this.load.path = 'assets/';
        this.load.image("chefG", "chefG.png");
        this.load.image("meat", "meat.png");
        this.load.image("tomato", "tomato.png");
        this.load.image("rice", "rice-raw.png");
        this.load.image("oil", "oil.png");
        this.load.image("riceCooker", "riceCooker.png");
        this.load.image("water", "water.png");
        this.load.image("soy", "soy.png");
        this.load.image("salt", "salt.png");
    }
    create() {
        this.cameras.main.setBackgroundColor('#444444');

        this.add.circle(500, 650, 320, 0xd3d3d3).setOrigin(0.5);
        this.pot = this.add.circle(500, 650, 300, 0xaaaaaa).setInteractive({dropZone: true});

        this.chefG = this.add.sprite(1600, 800, "chefG").setOrigin(0.5).setScale(0.39).setInteractive;
        this.add.text(960, 100, "ChefG's Dish: Braised Beef and Tomato Rice").setFontSize(40).setOrigin(0.5);
        this.add.text(1700, 400, "recipe(in order):\n \ncook rice\n \nin pot:\noil\nbeef\ntomato\nsoy sauce\nsalt\nwater\nmix cooked rice in pot ").setFontSize(30).setOrigin(0.5);
        this.meat = this.add.sprite(200, 200, "meat").setOrigin(0.5).setScale(0.5).setInteractive({useHandCursor: true,draggable: true});
        this.tomato = this.add.sprite(300, 200, "tomato").setOrigin(0.5).setScale(0.15).setInteractive({useHandCursor: true,draggable: true});;
        this.rice = this.add.sprite(400, 200, "rice").setOrigin(0.5).setScale(0.2).setInteractive({useHandCursor: true,draggable: true});;
        this.oil = this.add.sprite(500, 200, "oil").setOrigin(0.5).setScale(0.15).setInteractive({useHandCursor: true,draggable: true});
        this.water = this.add.sprite(600, 200, "water").setOrigin(0.5).setScale(0.6).setInteractive({useHandCursor: true,draggable: true});
        this.soy = this.add.sprite(700, 200, "soy").setOrigin(0.5).setScale(0.15).setInteractive({useHandCursor: true,draggable: true});
        this.salt = this.add.sprite(800, 200, "salt").setOrigin(0.5).setScale(0.6).setInteractive({useHandCursor: true,draggable: true});

        this.riceCooker = this.add.sprite(1200, 800, "riceCooker").setOrigin(0.5).setScale(0.6).setInteractive({dropZone: true});
        

        this.meat.on('drag', (pointer, dragX, dragY) => {
            this.meat.x = dragX;
            this.meat.y = dragY;
        });
        this.tomato.on('drag', (pointer, dragX, dragY) => {
            this.tomato.x = dragX;
            this.tomato.y = dragY;
        });
        this.rice.on('drag', (pointer, dragX, dragY) => {
            this.rice.x = dragX;
            this.rice.y = dragY;
        });
        this.oil.on('drag', (pointer, dragX, dragY) => {
            this.oil.x = dragX;
            this.oil.y = dragY;
        });
        this.water.on('drag', (pointer, dragX, dragY) => {
            this.water.x = dragX;
            this.water.y = dragY;
        });
        this.soy.on('drag', (pointer, dragX, dragY) => {
            this.soy.x = dragX;
            this.soy.y = dragY;
        });
        this.salt.on('drag', (pointer, dragX, dragY) => {
            this.salt.x = dragX;
            this.salt.y = dragY;
        });

        this.riceCooked = false;
        this.rice.on('drop', (pointer, target) => {
            if (target.texture.key === 'riceCooker') {
                
                this.add.tween({
                    targets: this.rice,
                    y: 600,
                    duration: 1000,
                    ease: 'Power2',
                    onComplete: () => {
                        this.add.text(1200, 900, "Rice is cooked!").setFontSize(30).setOrigin(0.5);
                        this.riceCooked = true;
                    }
                });
            }
        });
        
        this.recipeStep = [];

        this.oil.on('drop', (pointer, target) => {
            if (target === this.pot) {
                this.recipeStep.push("oil");
                console.log("oil in pot");
                this.add.tween({
                    targets: this.oil,
                    x: 500,
                    y: 200,
                    duration: 1000,
                    ease: 'Power2',
                });
                this.add.tween({
                    targets: this.pot,
                    fillColor: 0xf1f887,
                    duration: 1000,
                    ease: 'Power2',
                });
            }
        }); 

        this.meat.on('drop', (pointer, target) => {
            if (target === this.pot) {
                console.log("meat in pot");
                this.recipeStep.push("meat");
                this.add.tween({
                    targets: this.meat,
                    x: 200,
                    y: 200,
                    duration: 1000,
                    ease: 'Power2',
                });
                this.add.tween({
                    targets: this.pot,
                    fillColor: 0x7e3200,
                    duration: 1000,
                    ease: 'Power2',
                });
            }
        });

        this.tomato.on('drop', (pointer, target) => {
            if (target === this.pot) {
                console.log("tomato in pot");
                this.recipeStep.push("tomato");
                this.add.tween({
                    targets: this.tomato,
                    x: 300,
                    y: 200,
                    duration: 1000,
                    ease: 'Power2',
                });
                this.add.tween({
                    targets: this.pot,
                    fillColor: 0xff6347,
                    duration: 1000,
                    ease: 'Power2',
                });
            }
        });

        this.soy.on('drop', (pointer, target) => {
            if (target === this.pot) {
                console.log("soy in pot");
                this.recipeStep.push("soy");
                this.add.tween({
                    targets: this.soy,
                    x: 700,
                    y: 200,
                    duration: 1000,
                    ease: 'Power2',
                });
                this.add.tween({
                    targets: this.pot,
                    fillColor: 0x654321,
                    duration: 1000,
                    ease: 'Power2',
                });
            }
        });
        this.salt.on('drop', (pointer, target) => {
            if (target === this.pot) {
                console.log("salt in pot");
                this.recipeStep.push("salt");
                this.add.tween({
                    targets: this.salt,
                    x: 800, 
                    y: 200,
                    duration: 1000,
                    ease: 'Power2',
                });
                this.add.tween({
                    targets: this.pot,
                    fillColor: 0x654321,
                    duration: 1000,
                    ease: 'Power2',
                });
            }
        });
        this.water.on('drop', (pointer, target) => {
            if (target === this.pot) {
                console.log("water in pot");
                this.recipeStep.push("water");
                this.add.tween({
                    targets: this.water,
                    x: 600, 
                    y: 200,
                    duration: 1000,
                    ease: 'Power2',
                });
                this.add.tween({
                    targets: this.pot,
                    fillColor: 0xff5b1a,
                    duration: 1000,
                    ease: 'Power2',
                });
            }
        });
     
    }

    update() {
        if (this.recipeStep.length === 6) {
            const correctRecipe =
                this.recipeStep[0] === "oil" &&
                this.recipeStep[1] === "meat" &&
                this.recipeStep[2] === "tomato" &&
                this.recipeStep[3] === "soy" &&
                this.recipeStep[4] === "salt" &&
                this.recipeStep[5] === "water" &&
                this.riceCooked;

            if (correctRecipe) {
                console.log("ChefG success");
                this.registry.set("chefGSuccess", true);
            } else {
                console.log("ChefG failed");
                this.registry.set("chefGSuccess", false);
            }

            this.cameras.main.fade(1000, 0, 0, 0);
            this.time.delayedCall(1000, () => {
                this.scene.start("kitchen");
            });
        }
    }




}

class chefS extends Phaser.Scene {
    constructor() {
        super('chefS');
    }
    preload() {
        this.load.path = 'assets/';
        this.load.image("chefS", "chefS.png");
        this.load.image("meat", "meat.png");
        this.load.image("tomato", "tomato.png");
        this.load.image("spaghetti", "sp.png");
        this.load.image("oil", "oil.png");
        this.load.image("water", "water.png");
        this.load.image("soy", "soy.png");
        this.load.image("salt", "salt.png");
    }

    create() {
        this.cameras.main.setBackgroundColor('#444444');

        this.add.circle(500, 650, 320, 0xd3d3d3).setOrigin(0.5);
        this.pot = this.add.circle(500, 650, 300, 0xaaaaaa).setInteractive({ dropZone: true });

        this.chefS = this.add.sprite(1600, 800, "chefS")
            .setOrigin(0.5)
            .setScale(0.4);

        this.add.text(960, 100, "ChefS's Dish: Braised Beef and Tomato Spaghetti")
            .setFontSize(40)
            .setOrigin(0.5);

        this.add.text(
            1700,
            400,
            "recipe(in order):\n\nin pot:\noil\nbeef\ntomato\nsoy sauce\nsalt\nwater\nspaghetti"
        )
            .setFontSize(30)
            .setOrigin(0.5);

        this.meat = this.add.sprite(200, 200, "meat")
            .setOrigin(0.5)
            .setScale(0.5)
            .setInteractive({ useHandCursor: true, draggable: true });

        this.tomato = this.add.sprite(300, 200, "tomato")
            .setOrigin(0.5)
            .setScale(0.15)
            .setInteractive({ useHandCursor: true, draggable: true });

        this.spaghetti = this.add.sprite(400, 200, "spaghetti")
            .setOrigin(0.5)
            .setScale(0.6)
            .setInteractive({ useHandCursor: true, draggable: true });

        this.oil = this.add.sprite(500, 200, "oil")
            .setOrigin(0.5)
            .setScale(0.15)
            .setInteractive({ useHandCursor: true, draggable: true });

        this.water = this.add.sprite(600, 200, "water")
            .setOrigin(0.5)
            .setScale(0.6)
            .setInteractive({ useHandCursor: true, draggable: true });

        this.soy = this.add.sprite(700, 200, "soy")
            .setOrigin(0.5)
            .setScale(0.15)
            .setInteractive({ useHandCursor: true, draggable: true });

        this.salt = this.add.sprite(800, 200, "salt")
            .setOrigin(0.5)
            .setScale(0.6)
            .setInteractive({ useHandCursor: true, draggable: true });

        this.recipeStep = [];
        this.finishedCooking = false;

        const makeDraggable = (item) => {
            item.on('drag', (pointer, dragX, dragY) => {
                item.x = dragX;
                item.y = dragY;
            });
        };

        makeDraggable(this.meat);
        makeDraggable(this.tomato);
        makeDraggable(this.spaghetti);
        makeDraggable(this.oil);
        makeDraggable(this.water);
        makeDraggable(this.soy);
        makeDraggable(this.salt);

        const addIngredient = (item, ingredientName, resetX, resetY, potColor) => {
            item.on('drop', (pointer, target) => {
                if (target === this.pot && !this.finishedCooking) {
                    console.log(ingredientName + " in pot");
                    this.recipeStep.push(ingredientName);

                    this.add.tween({
                        targets: item,
                        x: resetX,
                        y: resetY,
                        duration: 1000,
                        ease: 'Power2',
                    });

                    this.add.tween({
                        targets: this.pot,
                        fillColor: potColor,
                        duration: 1000,
                        ease: 'Power2',
                    });
                }
            });
        };

        addIngredient(this.oil, "oil", 500, 200, 0xf1f887);
        addIngredient(this.meat, "meat", 200, 200, 0x7e3200);
        addIngredient(this.tomato, "tomato", 300, 200, 0xff6347);
        addIngredient(this.soy, "soy", 700, 200, 0x654321);
        addIngredient(this.salt, "salt", 800, 200, 0x654321);
        addIngredient(this.water, "water", 600, 200, 0xff5b1a);
        addIngredient(this.spaghetti, "spaghetti", 400, 200, 0xffd27f);
    }

    update() {
        if (this.recipeStep.length === 7 && !this.finishedCooking) {
            this.finishedCooking = true;

            const correctRecipe =
                this.recipeStep[0] === "oil" &&
                this.recipeStep[1] === "meat" &&
                this.recipeStep[2] === "tomato" &&
                this.recipeStep[3] === "soy" &&
                this.recipeStep[4] === "salt" &&
                this.recipeStep[5] === "water" &&
                this.recipeStep[6] === "spaghetti";

            if (correctRecipe) {
                console.log("ChefS success");
                this.registry.set("chefSSuccess", true);
            } else {
                console.log("ChefS failed");
                this.registry.set("chefSSuccess", false);
            }

            this.cameras.main.fade(1000, 0, 0, 0);

            this.time.delayedCall(1000, () => {
                this.scene.start("kitchen");
            });
        }
    }

}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload() {
        this.load.path = 'assets/';
        this.load.image("chefS", "chefS.png");
        this.load.image("chefG", "chefG.png");
    }

    create() {

        this.add.text(960,540, "Chef It!").setFontSize(60).setOrigin(0.5);
        this.add.text(960,600, "Click anywhere to begin.").setFontSize(20).setOrigin(0.5).setAlpha(0);
        this.add.image(960-400,540, "chefS").setOrigin(0.5).setScale(0.5).setAngle(-10);
        this.add.image(960+400,530, "chefG").setOrigin(0.5).setScale(0.5).setAngle(10);
        this.add.tween({
            targets: this.add.text(960,600, "Click anywhere to begin.").setFontSize(20).setOrigin(0.5),
            alpha: { from: 0, to: 1 },
            duration: 2000,
            ease: 'Sine.inOut',
        });
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('apartment1209'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image("xiaoDi", "xiaoDi.png");
    }

    create() {
        this.cameras.main.fadeIn();
        this.cameras.main.setBackgroundColor('#444444');

        this.add.text(960, 180, "Dinner is over!", {
            fontSize: '54px',
            color: '#ffffff'
        }).setOrigin(0.5);

        const parade = this.add.container(-500, 600);

        const xiaoDi = this.add.sprite(800, 0, "xiaoDi")
            .setScale(0.3)
            .setOrigin(0.5);

        const thankYouText = this.add.text(180, 0, "Thank you for playing!", {
            fontSize: '52px',
            color: '#000000',
            backgroundColor: '#ffffff',
            padding: { left: 20, right: 20, top: 10, bottom: 10 }
        }).setOrigin(0.5);

        parade.add([xiaoDi, thankYouText]);

        this.add.tween({
            targets: parade,
            x: 2400,
            duration: 7000,
            ease: 'Sine.easeInOut',
            onComplete: () => {
                this.time.delayedCall(1000, () => {
                    this.scene.start("credits");
                });
            }
        });
    }
}

class Credits extends Phaser.Scene {
    constructor() {
        super('credits');
    }

    create() {
        this.cameras.main.setBackgroundColor('#ffffff');

        this.add.text(960, 80, "Credits", {
            fontSize: '60px',
            color: '#000000'
        }).setOrigin(0.5);

        const creditsText = `Couch: https://www.emojis.com/emoji/sofa-Izhg0W0W48
Chef: https://www.emojirequest.com/r/ChefEmoji
Door: https://emojipedia.org/apple/ios-13.2/door
Tomato: https://emojipedia.org/twitter-emoji-stickers/13.1/tomato
Beef: https://emojipedia.org/apple/ios-11.1/cut-of-meat
Spaghetti: https://emojipedia.org/apple/ios-10.2/spaghetti
Rice: https://emojipedia.org/facebook/4.0/cooked-rice
Table: https://www.emojis.com/emoji/dining-table-GuOehC5
Shopping cart: https://em-content.zobj.net/source/apple/81/shopping-trolley_1f6d2.png
Pot: https://emojipedia.org/apple/ios-10.2/pot-of-food
Fire: https://emojipedia.org/apple/ios-11.1/fire
Oil: https://www.emojis.com/emoji/olive-oil-DxgpmZ8Jzh
Water: https://emojipedia.org/apple/ios-15.4/droplet
Soy Sauce: https://www.emojis.com/emoji/a-bottle-of-soy-sauce-CYnPyfZrPBc
Salt: https://emojipedia.org/apple/ios-12.1/salt
poop: https://emojiisland.com/products/poop-emoji-icon
rice cooker: https://www.vecteezy.com/free-png/rice-cooker`;

        this.add.text(120, 160, creditsText, {
            fontSize: '24px',
            color: '#000000',
            wordWrap: { width: 1680 }
        });

        this.add.text(960, 1020, "Click anywhere to restart", {
            fontSize: '28px',
            color: '#000000'
        }).setOrigin(0.5);

        this.input.on('pointerdown', () => {
            this.scene.start('intro');
        });
    }
}
const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro,Apartment1209,HippoMarket,Apartment1209_2,Kitchen,chefG,chefS,Dining,Outro,Credits],
    title: "Adventure Game",
});

