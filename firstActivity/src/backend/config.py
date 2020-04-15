from os import path, remove
from json import dumps

from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

FOLDER_PATH = path.dirname(__file__)
db_file_path = path.join(FOLDER_PATH, 'pessoa.db')

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_file_path
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
