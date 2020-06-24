from config import app, db, jsonify
from models.HelicopteroDeCombate import HelicopteroDeCombate


@app.route('/')
def index():
    return '<h1>Testando as paradas por aqui</h1><br /><a href="index_helicopters">Clica aí para ver se o bd tá funcionando</a>'


@app.route('/index_helicopters')
def index_helicopters():
    helicopters = db.session.query(HelicopteroDeCombate).all()

    json_helis_list = [helicopter.json() for helicopter in helicopters]

    response = jsonify(json_helis_list)

    response.headers.add("Access-Control-Allow-Origin", "*")

    return response
