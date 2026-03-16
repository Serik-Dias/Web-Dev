class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"{self.brand} {self.model} двигатель запущен."

    def __str__(self):
        return f"{self.year} {self.brand} {self.model}"

class Car(Vehicle):
    def __init__(self, brand, model, year, trunk_size):
        super().__init__(brand, model, year)
        self.trunk_size = trunk_size

    def start_engine(self):
        return f"Автомобиль {self.brand} заводится тихо."

class Motorcycle(Vehicle):
    def __init__(self, brand, model, year, has_sidecar):
        super().__init__(brand, model, year)
        self.has_sidecar = has_sidecar

    def start_engine(self):
        return f"Мотоцикл {self.brand} рычит!"