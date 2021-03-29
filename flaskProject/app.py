from flask import Flask,session
from celery import Celery

from flask import jsonify,request
from flask_pymongo import PyMongo
from linkedBot import linkedBot

import geograpy
import nltk


nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')
nltk.download('maxent_ne_chunker')
nltk.download('words')




app = Flask(__name__)
app.secret_key="hello"
app.config['MONGO_URI']="mongodb://127.0.0.1:27017/Pi"
app.config['CELERY_BROKER_URL'] = 'redis://localhost:6379/0'
app.config['CELERY_RESULT_BACKEND'] = 'redis://localhost:6379/0'

celery = Celery(app.name, broker=app.config['CELERY_BROKER_URL'])
celery.conf.update(app.config)
mongo = PyMongo(app)

@celery.task()
def linkedsearch(search):
    link = linkedBot("passaron.papasarouni@gmail.com", "firas.1997", mongo)
    # link.browser.quit()
    # passaron.papasarouni@gmail.com/firas.1997/firasghost@gmail.com
    link.login_linkedin()
    link.google_search(search)

@app.route('/login/<user>',methods=["POST","GET"])
def login(user):
    if request.method == "POST":
        user=request.view_args['user']
        session["user"] = user
        return "hello "+user+" u are loged in"


@app.route('/cities/<text>', methods=['GET'])
def cities(text):
    # url = 'http://www.bbc.com/news/world-europe-26919928'
    # text = 'Sousse , Tunisia'
    # text = 'Tunis, Tunisia'
    # text = 'Jendouba , Tunisia'
    # places = geograpy.get_place_context(text=text)
    try:
        places = geograpy.get_geoPlace_context(text=text)
        print(places)
        country = places.countries
        city = places.cities
        print(country[0])
        return jsonify(Country=country[0],City=city[0])
    except:
        response = jsonify({'status': 404, 'error': 'not found',
                            'message': 'invalid resource URI'})
        response.status_code = 404
        return response



@app.route('/run/<search>',methods=['POST'])
def scrapping_run(search):
    if request.method=="POST":
        try:
            response = 'Hello World!'
            linkedsearch(search)
            return response
        except:
            return "error"


@app.route('/logout',methods=['POST'])
def logout():
    session.pop("user",None)
    return "good bye"



@app.route('/hello')
def helloWord():
    return 'hello chbinouuz'



if __name__ == '__main__':
    app.run(debug=False )