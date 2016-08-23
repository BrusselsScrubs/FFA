from app import app
from databases.models import db

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"

@app.route('/create')
def create():
    return "MX stuff"

@app.route('/update/<id>')
def edit():
    return "MX stuff"
