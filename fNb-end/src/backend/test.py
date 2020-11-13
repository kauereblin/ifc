from config import *
from os import path, remove
from models.HelicopteroDeCombate import HelicopteroDeCombate
from models.Pilot import Pilot
from models.Hangar import Hangar


if __name__ == "__main__":
    if path.exists(db_file_path):
        remove(db_file_path)

    db.create_all()

    heli1 = HelicopteroDeCombate(
      name="Scorpio",
      capacity=4,
      propellers=1,
      missile="True"
    )
    db.session.add(heli1)

    p1 = Pilot(
      name="Beto",
      age=14,
      patent="Capitão",
      blood_type="O-"
    )
    db.session.add(p1)

    hangar1 = Hangar(
      name="Hangar 18",
      country="Brazuca",
      pilot_hangar = p1,
      helicopter_hangar = heli1
    )

    db.session.add(hangar1)

    db.session.commit()

    print(f'''Pilotão: {p1},
Em JSON: {p1.json()};
\n
Helicóptero: {heli1},
Em JSON: {heli1.json()};
\n
Hangar: {hangar1},
Em JSON: {hangar1.json()}''')