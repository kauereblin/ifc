from config import *


class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(254))
    email = db.Column(db.String(254))
    phone = db.Column(db.String(254))

    def __str__(self):
        return str(self.id) + '. ' + self.name + ', ' + self.email + ', ' + self.phone

    def json(self):
        return dumps({
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone,
        })


if __name__ == "__main__":
    if path.exists(db_file_path):
        remove(db_file_path)

    db.create_all()

    person1 = Person(name='Robson', email='robson@email.com',
                     phone='1234567890')
    person2 = Person(name='Joe', email='joe@email.com', phone='0987654321')

    db.session.add(person1)
    db.session.add(person2)

    db.session.commit()
