from pymongo import MongoClient

client = MongoClient()
db = client.fridge.items
