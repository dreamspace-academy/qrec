import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime
import pyttsx3
engine = pyttsx3.init()
# Use a service account.
db = firestore.database

doc_ref = db.collection(u'staffs').document()

doc = doc_ref.get()
if doc.exists:
    print(f'Document data: {doc.to_dict()}')
else:
    print(u'No such document!')