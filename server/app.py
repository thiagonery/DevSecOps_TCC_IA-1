from flask import Flask
from flask_cors import CORS
from service.service import service 

app = Flask(__name__)
app.register_blueprint(service)
CORS(app)


@app.route('/')
def home():
    return 'Server is up! wellcome'


if(__name__ == "__main__"):
    from waitress import serve
    serve(app, host='0.0.0.0', port=3001)
    