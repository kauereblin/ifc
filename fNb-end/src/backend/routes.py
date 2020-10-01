from config import app, db, jsonify, request
from models.HelicopteroDeCombate import HelicopteroDeCombate


@app.route('/', methods=['GET'])
def index():
    return '<h1>Testando as paradas por aqui</h1><br /><a href="index_helicopters">Clica aí para ver se o bd tá funcionando</a>'


@app.route('/index_helicopters',  methods=['GET'])
def index_helicopters():
    helicopters = db.session.query(HelicopteroDeCombate).all()

    json_helis_list = [helicopter.json() for helicopter in helicopters]

    response = jsonify(json_helis_list)
    response.headers.add("Access-Control-Allow-Origin", "*")

    return response

@app.route('/create_helicopter',  methods=['POST'])
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