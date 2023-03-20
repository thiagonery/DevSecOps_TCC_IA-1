from flask import Blueprint, request, jsonify
import openai
import os
from dotenv import load_dotenv
import json


service = Blueprint('service', __name__)

@service.route('/api/v1/service/plan', methods=['GET'])
def plan():
    try:
        # carregando o .env
        load_dotenv()
        key = os.environ['APP_KEY']
        
        # modo de texto padrão
        model_engine = 'text-davinci-003'
        openai.api_key = key

        # query params
        query_params = request.args

        technology = query_params["technology"]
        sgbd = query_params["sgdb"]

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
    except Exception as e:
        return '{ "content": ' + '"'+ f"`{e}" + '"}'

@service.route('/api/v1/service/code', methods=['GET'])
def code():
    try:
        # carregando o .env
        load_dotenv()
        key = os.environ['APP_KEY']
        
        # modo de texto padrão
        model_engine = 'text-davinci-003'
        openai.api_key = key

        query_params = request.args

        # pegando as informações do json
        functionality = query_params["functionality"]
        technology = query_params["technology"]
        sgdb = query_params["sgdb"]

        prompt = f"dicas para revisão de código de {functionality} em {technology} com {sgdb} pensando em segurança"

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
    except Exception as e:
        return '{ "content": ' + '"'+ f"{e}" + '"}'

@service.route('/api/v1/service/build', methods=['GET'])
def build():
     try:
        # carregando o .env
        load_dotenv()
        key = os.environ['APP_KEY']
        
        # modo de texto padrão
        model_engine = 'text-davinci-003'
        openai.api_key = key

        query_params = request.args

        # pegando as informações do json
        technology = query_params["technology"]
        
        prompt = f"ferramentas de analise de build para {technology} pensando em segurança de aplicação"

        # essa parte faz a configuração da inteligência aritificial
        completion = openai.Completion.create(
        engine = model_engine,
        prompt = prompt,
        max_tokens = 3666,
        temperature = 0.5
        )
        
        # assim eu devolvo a resposta
        response = completion.choices[0].text
        new_response = response.replace("\n","").replace("ql?","")
    
        # retornando um novo json
        new_json = '{ "content": ' + '"'+ new_response + '"}'
        jsonFinal = json.loads(new_json)

        return jsonFinal

     except Exception as e:
        return '{ "content": ' + '"'+ f"{e}" + '"}'

@service.route('/api/v1/service/test', methods=['GET'])
def teste():
     try:
        # carregando o .env
        load_dotenv()
        key = os.environ['APP_KEY']
        
        # modo de texto padrão
        model_engine = 'text-davinci-003'
        openai.api_key = key

        query_params = request.args
        
        # pegando as informações do json
        technology = query_params["technology"]
        sgdb = query_params["sgdb"]
        
        prompt = f"como aplicar DAST para uma aplicação em {technology} com {sgdb}"

        # essa parte faz a configuração da inteligência aritificial
        completion = openai.Completion.create(
        engine = model_engine,
        prompt = prompt,
        max_tokens = 3666,
        temperature = 0.5
        )
        
        # assim eu devolvo a resposta
        response = completion.choices[0].text
        new_response = response.replace("\n","").replace("ql?","")
    
        # retornando um novo json
        new_json = '{ "content": ' + '"'+ new_response + '"}'
        jsonFinal = json.loads(new_json)

        return jsonFinal

     except Exception as e:
        return '{ "content": ' + '"'+ f"{e}" + '"}'

@service.route('/api/v1/service/deploy', methods=['GET'])
def deploy():
    try:
        # carregando o .env
        load_dotenv()
        key = os.environ['APP_KEY']
        
        # modo de texto padrão
        model_engine = 'text-davinci-003'
        openai.api_key = key

        query_params = request.args

        technology = query_params["technology"]
        sgdb = query_params["sgdb"]

        prompt = f"Ferramentas de deploy para uma aplicação em {technology} e {sgdb} priorizando segurança"

         # essa parte faz a configuração da inteligência aritificial
        completion = openai.Completion.create(
        engine = model_engine,
        prompt = prompt,
        max_tokens = 3666,
        temperature = 0.5
        )
        
        # assim eu devolvo a resposta
        response = completion.choices[0].text
        new_response = response.replace("\n","").replace("ql?","")
    
        # retornando um novo json
        new_json = '{ "content": ' + '"'+ new_response + '"}'
        jsonFinal = json.loads(new_json)

        return jsonFinal
    except Exception as e:
        return '{ "content": ' + '"'+ f"{e}" + '"}'
    
@service.route('/api/v1/service/release', methods=['GET'])
def release():
    try:
        # carregando o.env
        load_dotenv()
        key = os.environ['APP_KEY']
        
        # modo de texto padrão
        model_engine = 'text-davinci-003'
        openai.api_key = key

        query_params = request.args

        technology = query_params["technology"]
        sgdb = query_params["sgdb"]

        prompt = f"Planejamento de um pentest para uma aplicação em {technology} e {sgdb}"
        
        # essa parte faz a configuração da inteligência aritificial
        completion = openai.Completion.create(
        engine = model_engine,
        prompt = prompt,
        max_tokens = 3666,
        temperature = 0.5
        )
        
        # assim eu devolvo a resposta
        response = completion.choices[0].text
        new_response = response.replace("\n","").replace("ql?","")
    
        # retornando um novo json
        new_json = '{ "content": ' + '"'+ new_response + '"}'
        jsonFinal = json.loads(new_json)

        return jsonFinal


    except Exception as e:
        return '{ "content":'+ '"'+ f"`{e}" + '"}'

@service.route('/api/v1/service/operate', methods=['GET'])
def operate():
    try:
        # carregando o.env
        load_dotenv()
        key = os.environ['APP_KEY']
        
        # modo de texto padrão
        model_engine = 'text-davinci-003'
        openai.api_key = key

        query_params = request.args

        technology = query_params["technology"]
        sgdb = query_params["sgdb"]

        prompt = f"Passo a passo para implementar logs em uma aplicação em {technology} e {sgdb}, incluindo ferramentas de monitoramento e analise de logs"
        
        # essa parte faz a configuração da inteligência aritificial
        completion = openai.Completion.create(
        engine = model_engine,
        prompt = prompt,
        max_tokens = 3666,
        temperature = 0.5
        )
        
        # assim eu devolvo a resposta
        response = completion.choices[0].text
        new_response = response.replace("\n","").replace("ql?","")
    
        # retornando um novo json
        new_json = '{ "content": ' + '"'+ new_response + '"}'
        jsonFinal = json.loads(new_json)

        return jsonFinal
    except Exception as e:
        return '{ "content":'+ '"'+ f"`{e}" + '"}'

@service.route('/api/v1/service/monitor', methods=['GET'])
def monitor():
    try:
        # carregando o.env
        load_dotenv()
        key = os.environ['APP_KEY']
        
        # modo de texto padrão
        model_engine = 'text-davinci-003'
        openai.api_key = key

        query_params = request.args

        technology = query_params["technology"]
        sgdb = query_params["sgdb"]

        prompt = f"Dicas para implementar um SIEM para uma aplicação em {technology} e {sgdb}"
        
        # essa parte faz a configuração da inteligência aritificial
        completion = openai.Completion.create(
        engine = model_engine,
        prompt = prompt,
        max_tokens = 3666,
        temperature = 0.5
        )
        
        # assim eu devolvo a resposta
        response = completion.choices[0].text
        new_response = response.replace("\n","").replace("ql?","")
    
        # retornando um novo json
        new_json = '{ "content": ' + '"'+ new_response + '"}'
        jsonFinal = json.loads(new_json)

        return jsonFinal
    except Exception as e:
        return '{ "content":'+ '"'+ f"`{e}" + '"}'
