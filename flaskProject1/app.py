from flask import Flask, request, make_response, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
import json
import spacy
import pickle
app = Flask(__name__)
CORS(app)
cors = CORS(app,resources={
    r"/*":{
        "origins":"*"
    }
})
api = Api(app)

class HelloWord(Resource):
    def __init__(self):
        pass

    def get(self):
        return {
            "Hello":"world"
        }

class CvResume(Resource):
    def __init__(self):
        pass
    def post(self):
        data =[]
        x = request.json
        nlp_model = spacy.load('nlp_model')
        doc = nlp_model(x['data'])
        for ent in doc.ents:
            print(f'{ent.label_.upper():{30}}- {ent.text}')
            data.append(f'{ent.label_.upper():{30}}- {ent.text}')
        return data,200
api.add_resource(HelloWord,'/')
api.add_resource(CvResume,'/cv')
if __name__ == '__main__':
    app.run(debug=True)
