    const soldier = {
        name: 'Ширвани',
        health:  10,
        gun: {
            name: 'AK-47',
            numCartridges: 30,
        },
        supplies: 3,
        fire: function(){
            if(this.gun.numCartridges>0){
                this.gun.numCartridges = this.gun.numCartridges - 1;
                console.log('бах-бах')
            }else{
                console.log('Обойма пуста. Перезарядитесь')
                return 0
            }
        },
        recharge: function(){
            if(this.gun.numCartridges == 0){
                this.supplies = this.supplies - 1;
                console.log('перезарядка ...')
                this.gun.numCartridges = 30;
            }
            if(this.supplies == 0){
                console.log('не осталось припасов')
            }
        },
        hurt: function(){
            this.health--
            if(this.health == 0){
                console.log('Ты проиграл')
            }
        }
    }
    soldier.fire();
    soldier.recharge();
    soldier.hurt();
