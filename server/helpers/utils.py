import openai
import os
from dotenv import load_dotenv

def return_json(prompt):

    # carregando o .env
    load_dotenv()
    key = os.environ['APP_KEY']
    
    # modo de texto padrão
    model_engine = 'text-davinci-003'
    openai.api_key = key
    
    # essa parte faz a configuração da inteligência aritificial
    completion = openai.Completion.create(
    engine = model_engine,
    prompt = prompt,
    max_tokens = 1024,
    temperature = 0.5
    )
    
    # assim eu devolvo a resposta
    response = completion.choices[0].text
    response_text = response.replace("\n","").replace("ql?","")

    # criando json
    json = {"content": response}

    return json
