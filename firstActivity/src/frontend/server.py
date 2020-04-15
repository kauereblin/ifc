from config import *
from model import *


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/list_people')
def list_people():
    req = requests.get('http://localhost:5000/list_people')

    json_people_list = req.json()

    people_list = []

    for person in json_people_list:
        dic_person = json.loads(person)

        person = Person(**dic_person)

        people_list.append(person)
    return render_template('people.html', people=people_list)
