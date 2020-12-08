from config import app, db, jsonify, request
from models.HelicopteroDeCombate import HelicopteroDeCombate
from models.Pilot import Pilot
from models.Hangar import Hangar


@app.route('/', methods=['GET'])
def index():
    return '''<h1>Testando as paradas por aqui</h1>
            <br />
            <a href="index_helicopters">
                Clica aí para ver se o bd tá funcionando
            </a>'''


@app.route('/index/<string:table>')
def index_table(table):
    data = None

    if table == "helicoptero-de-combates":
        data = db.session.query(HelicopteroDeCombate).all()
    elif table == "pilots":
        data = db.session.query(Pilot).all()
    elif table == "hangars":
        data = db.session.query(Hangar).all()

    json_list = [ _.json() for _ in data ]

    response = jsonify(json_list)
    response.headers.add("Access-Control-Allow-Origin", "*")

    return response


@app.route('/create_helicopter', methods=['POST'])
def create_helicopter():
    response = jsonify({ "result": "ok", "details": "ok" })

    data = request.get_json()

    try:
        new_helicopter = HelicopteroDeCombate(**data)
        db.session.add(new_helicopter)
        db.session.commit()
    except Exception as e:
            response = jsonify({ "result": "error", "details": str(e) })

    response.headers.add("Access-Control-Allow-Origin", "*")

    return response


@app.route('/delete_helicopter/<int:helicopter_id>', methods=['DELETE'])
def delete_helicopter(helicopter_id):
    response = jsonify({ "result": "ok", "details": "ok" })

    try:
        HelicopteroDeCombate.query.filter(
            HelicopteroDeCombate.id == helicopter_id).delete()
        db.session.commit()

    except Exception as e:
        response = jsonify({ "result": "error", "details": str(e) })

    response.headers.add("Access-Control-Allow-Origin", "*")

    return response
