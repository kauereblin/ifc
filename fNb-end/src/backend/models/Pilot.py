from config import db


class Pilot(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(254), nullable=False)
  age = db.Column(db.Integer, nullable=False)
  patent = db.Column(db.String(254), nullable=False)
  blood_type = db.Column(db.String(254), nullable=False)

  hangar_pilot = db.relationship("Hangar", back_populates="pilot_hangar")


  def __str__(self):
    return f'''{self.id}. {self.name}, {self.age}, {self.patent},
        {self.blood_type}, {self.hangar_pilot}'''


  def json(self):
    return {
            "id": self.id,
            "name": self.name,
            "age": self.age,
            "patent": self.patent,
            "blood_type": self.blood_type,
            "hangar_pilot": self.hangar_pilot,
        }