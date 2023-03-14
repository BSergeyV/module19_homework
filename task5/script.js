// function ElectroDevice (name) {
//   this.name = name
//   }
//   ElectroDevice.prototype.getEnergyConsumption = function(energy) {
//       console.log (`Disabled - energy consumption is ${energy} watt`)
//   }
//   function DesktopDevice(name, size){
//       this.name = name,
//       this.size = size
//   }

//   DesktopDevice.prototype = new ElectroDevice()

//   DesktopDevice.prototype.getEnergyConsumption = function(energy) {
//   console.log (`Included - energy consumption is ${energy} watt`)
//   }

//   let lamp = new DesktopDevice ('lamp', 'little');
//   let computer = new ElectroDevice ('computer');

// lamp.getEnergyConsumption(10)
// computer.getEnergyConsumption(500)
// console.log(lamp)
// console.log(computer)

// class

class ElectroDevice {
  constructor(name){
  this.name = name;
  }

  getEnergyConsumption() {
      console.log (`Disabled - energy consumption is ${energy} watt`)
  }
}
  class DesktopDevice {
    constructor(name, size){
      this.name = name;
      this.size = size;
  }

//   DesktopDevice.prototype = new ElectroDevice()

//   getEnergyConsumption() {
//     console.log (`Included - energy consumption is ${energy} watt`)
//   }
// }

getEnergyConsumption() {
  console.log (`Included - energy consumption is ${energy} watt`)
}
}

  let lamp = new DesktopDevice ('lamp', 'little');
  let computer = new ElectroDevice ('computer');

// lamp.getEnergyConsumption(10)
// computer.getEnergyConsumption(500)
console.log(lamp)
console.log(computer)
