from config import *
from model import *


@app.route('/')
def index():
    return '<h1>Sistema de cadastro de pessoas</h1><br /><a href="/list_people">Pessoas cadastradas</a>'


@app.route('/list_people')
def list_people():
    people = db.session.query(Pessoa).all()

    json_people_list = [person.json() for person in people]

    return jsonify(json_people_list)
