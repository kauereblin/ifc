from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

from database.connection import db_file_path


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_file_path
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
