from backend import app, db
from flask import request


@app.route('/', methods=['GET', 'POST'])
def root():
    if request.method == 'GET':
        return "API here"
