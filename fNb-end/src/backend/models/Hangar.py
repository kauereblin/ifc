from config import db
from models.Pilot import Pilot
from models.HelicopteroDeCombate import HelicopteroDeCombate


class Hangar(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(254), nullable=False)
  country = db.Column(db.String(254), nullable=False)

  pilot_id = db.Column(db.Integer, db.ForeignKey(Pilot.id), nullable=False)
  pilot_hangar = db.relationship("Pilot", back_populates="hangar_pilot")

  helicopter_id = db.Column(db.Integer, db.ForeignKey(HelicopteroDeCombate.id),
                            nullable=False)
  helicopter_hangar = db.relationship("HelicopteroDeCombate",
                                      back_populates="hangar_helicopter")


  def __str__(self):
    return f'''{self.id} - {self.name}, {self.country};
Piloto: {self.pilot_id} - {self.pilot_hangar};
Helicóptero: {self.helicopter_id} - {self.helicopter_hangar}'''


  def json(self):
    return {
            "id": self.id,
            "name": self.name,
            "country": self.country,
            "pilot_id": self.pilot_id,
            "pilot_hangar": self.pilot_hangar,
            "helicopter_id": self.helicopter_id,
            "helicopter_hangar": self.helicopter_hangar
        }