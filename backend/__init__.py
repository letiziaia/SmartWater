from flask import Flask
from pony.flask import Pony
from backend.config import config
from backend.models import db

app = Flask(__name__)
app.config.update(config)

Pony(app)

db.bind(**app.config['PONY'])
db.generate_mapping(create_tables=True)

import backend.views
