from flask import Flask
from flask_cors import CORS
from service.service import service 
from waitress import serve
from dotenv import load_dotenv
import os

app = Flask(__name__)
app.register_blueprint(service)
CORS(app)

load_dotenv()

@app.route('/')
def home():
    return 'Server is up! wellcome'

if(__name__ == '__main__'):
    if os.environ['ENV_MODE'] == 'production':
        serve(app, host='0.0.0.0', port=3001)
    else: 
        app.run(debug=True)
        