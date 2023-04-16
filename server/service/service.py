from flask import Blueprint, request, jsonify
from helpers.utils import return_json


service = Blueprint('service', __name__)

@service.route('/api/v1/service/plan', methods=['GET'])
def plan():
    try:
        query_params = request.args

        technology = query_params["technology"]
        sgdb = query_params["sgdb"]

        prompt = f"quais são as possíveis vulnerabilidades para {technology}, com o banco de dados {sgdb}"
        response = return_json(prompt)
      
        return jsonify(response)
    except Exception as e:
        return {"content": e.message}

@service.route('/api/v1/service/code', methods=['GET'])
def code():
    try:
        query_params = request.args

        functionality = query_params["functionality"]
        technology = query_params["technology"]
        sgdb = query_params["sgdb"]

        prompt = f"dicas para revisão de código de {functionality} em {technology} com {sgdb} pensando em segurança"

        response = return_json(prompt)
      
        return jsonify(response)
    except Exception as e:
        return {"content": e.message}

@service.route('/api/v1/service/build', methods=['GET'])
def build():
     try:
        query_params = request.args
        technology = query_params["technology"]
        
        prompt = f"ferramentas de analise de build para {technology} pensando em segurança de aplicação"
        response = return_json(prompt)
      
        return jsonify(response)
     except Exception as e:
        return {"content": e.message}

@service.route('/api/v1/service/test', methods=['GET'])
def teste():
     try:
        query_params = request.args
        
        technology = query_params["technology"]
        sgdb = query_params["sgdb"]
        
        prompt = f"como aplicar DAST para uma aplicação em {technology} com {sgdb}"
        response = return_json(prompt)
      
        return jsonify(response)
     except Exception as e:
        return {"content": e.message}
     
@service.route('/api/v1/service/deploy', methods=['GET'])
def deploy():
    try:
        query_params = request.args

        technology = query_params["technology"]
        sgdb = query_params["sgdb"]

        prompt = f"Ferramentas de deploy para uma aplicação em {technology} e {sgdb} priorizando segurança"
        response = return_json(prompt)
      
        return jsonify(response)
    except Exception as e:
            return {"content": e.message}

@service.route('/api/v1/service/release', methods=['GET'])
def release():
    try:
        query_params = request.args

        technology = query_params["technology"]
        sgdb = query_params["sgdb"]

        prompt = f"Planejamento de um pentest para uma aplicação em {technology} e {sgdb}"
        response = return_json(prompt)
        
        return jsonify(response)
    except Exception as e:
        return {"content": e.message}
    
@service.route('/api/v1/service/operate', methods=['GET'])
def operate():
    try:
        query_params = request.args

        technology = query_params["technology"]
        sgbd = query_params["sgbd"]

        prompt = f"Passo a passo para implementar logs em uma aplicação em {technology} e {sgbd}, incluindo ferramentas de monitoramento e analise de logs"
        response = return_json(prompt)

        return jsonify(response)
    except Exception as e:
        return {"content": e.message}

@service.route('/api/v1/service/monitor', methods=['GET'])
def monitor():
    try:
        query_params = request.args

        technology = query_params["technology"]
        sgdb = query_params["sgdb"]

        prompt = f"Dicas para implementar um SIEM para uma aplicação em {technology} e {sgdb}"
        response = return_json(prompt)

        return jsonify(response)
    except Exception as e:
        return {"content": e.message}
