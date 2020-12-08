from config import db


class HelicopteroDeCombate(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(254), nullable=False)
    capacity = db.Column(db.Integer, nullable=False)
    propellers = db.Column(db.Integer, nullable=False)
    missile = db.Column(db.String, nullable=False)


    def __str__(self):
      return f'''{self.id}. {self.name}, {self.capacity}, {self.propellers},
        {self.missile}'''

    def json(self):
      return {
        "id": self.id,
        "name": self.name,
        "capacity": self.capacity,
        "propellers": self.propellers,
        "missile": self.missile
      }
