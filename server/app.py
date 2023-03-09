from flask import Flask
from service.service import service

app = Flask(__name__)
app.register_blueprint(service)

@app.route('/')
def home():
    return 'Server is up! wellcome'


if(__name__ == "__main__"):
    app.run(debug=True)