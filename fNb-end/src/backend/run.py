from os import path, remove

from routes import app
# from config import db_file_path, db

from models.HelicopteroDeCombate import HelicopteroDeCombate

if __name__ == "__main__":
    app.run(port=5000, debug=True)

    """ if path.exists(db_file_path):
        remove(db_file_path)

    h1 = HelicopteroDeCombate(
        name='nome', pilot='robson', capacity=2, propellers=1, missile=True)

    db.create_all()

    db.session.add(h1)

    db.session.commit()

    print(h1) """
