from os import path
from json import dumps

from config import db, db_file_path


class HelicopteroDeCombate(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(254))
    pilot = db.Column(db.String(254))
    capacity = db.Column(db.Integer)
    propellers = db.Column(db.Integer)
    missile = db.Column(db.Boolean)

    def __str__(self):
        return f'''{self.id}. {self.name}, {self.pilot}, {self.capacity}, {self.propellers}, {self.missile}'''

    def json(self):
        return dumps({
            "id": self.id,
            "name": self.name,
            "pilot": self.pilot,
            "capacity": self.capacity,
            "propellers": self.propellers,
            "missile": self.missile,
        })
