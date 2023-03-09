import openai
import os
from dotenv import load_dotenv

# carregando o .env
load_dotenv()
key = os.environ['APP_KEY']

openai.api_key = key

# modo de texto padrão
model_engine = 'text-davinci-003'

# input que virá no request
prompt = input('Faça uma pergunta: ')

# essa parte faz a configuração da inteligência aritificial
completion = openai.Completion.create(
    engine = model_engine,
    prompt = prompt,
    max_tokens = 1024,
    temperature = 0.5
)

# assim eu devolvo a resposta
response = completion.choices[0].text
print(response)