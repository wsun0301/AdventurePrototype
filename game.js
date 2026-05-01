class Apartment1209 extends AdventureScene {
    constructor() {
        super("apartment1209", "Apartment 1209");
    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('apartment1209');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
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
    scene: [Intro, Apartment1209, Demo2, Outro],
    title: "Adventure Game",
});

