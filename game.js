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
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(60);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [HippoMarket],
    title: "Adventure Game",
});

