from models import Vehicle, Car, Motorcycle

garage = [
    Car("Toyota", "Camry", 2022, 500),
    Motorcycle("Harley", "Street", 2021, False)
]

for vehicle in garage:
    print(vehicle)
    print(vehicle.start_engine())