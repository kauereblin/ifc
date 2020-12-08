from config import db
from models.Pilot import Pilot
from models.HelicopteroDeCombate import HelicopteroDeCombate


class Hangar(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(254), nullable=False)
  country = db.Column(db.String(254), nullable=False)

  pilot_id = db.Column(db.Integer, db.ForeignKey(Pilot.id), nullable=False)
  pilot = db.relationship("Pilot")

  helicopter_id = db.Column(db.Integer, db.ForeignKey(HelicopteroDeCombate.id),
                            nullable=False)
  helicopter = db.relationship("HelicopteroDeCombate")


  def __str__(self):
    return f'''{self.id} - {self.name}, {self.country};
Piloto: {self.pilot_id} - {self.pilot};
Helicóptero: {self.helicopter_id} - {self.helicopter}'''


  def json(self):
    return {
            "id": self.id,
            "name": self.name,
            "country": self.country,
            "pilot_id": self.pilot_id,
            "pilot": self.pilot.json(),
            "helicopter_id": self.helicopter_id,
            "helicopter": self.helicopter.json()
        }