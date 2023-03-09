from flask import Blueprint, request
import openai
import os
from dotenv import load_dotenv
import json


service = Blueprint('service', __name__)

@service.route('/api/v1/service', methods=['GET'])
def index():
    try:

        print(request.remote_addr)

        # carregando o .env
        load_dotenv()
        key = os.environ['APP_KEY']
        
        # modo de texto padrão
        model_engine = 'text-davinci-003'
        openai.api_key = key

        # pegando o json
        requestJson = request.json
        
        data = json.dumps(requestJson)
        json_to_dict = json.loads(data)
        
        # pegando as informações do json
        technology = json_to_dict["Technology"]
        sgbd = json_to_dict["SGBD"]

        prompt = f"quais são as possíveis vulnerabilidades para {technology}, com o banco de dados {sgbd}"
        
        # essa parte faz a configuração da inteligência aritificial
        completion = openai.Completion.create(
        engine = model_engine,
        prompt = prompt,
        max_tokens = 1024,
        temperature = 0.5
        )
        
        # assim eu devolvo a resposta
        response = completion.choices[0].text
        new_response = response.replace("\n","").replace("ql?","")
    
        # retornando um novo json
        new_json = '{ "content": ' + '"'+ new_response + '"}'
        jsonFinal = json.loads(new_json)

        return jsonFinal
    except:
        return '{ "content": ' + '"'+ "error api is down, try after!" + '"}'