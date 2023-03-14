function ElectroDevice (name) {
    this.name = name
    }
    ElectroDevice.prototype.getEnergyConsumption = function(energy) {
        console.log (`Disabled - energy consumption is ${energy} watt`)
    }
    function DesktopDevice(name, size){
        this.name = name,
        this.size = size
    }

    DesktopDevice.prototype = new ElectroDevice()

    DesktopDevice.prototype.getEnergyConsumption = function(energy) {
    console.log (`Included - energy consumption is ${energy} watt`)
    }

    const lamp = new DesktopDevice ('lamp', 'little');
    const computer = new ElectroDevice ('computer');

lamp.getEnergyConsumption(10)
computer.getEnergyConsumption(500)
console.log(lamp)
console.log(computer)