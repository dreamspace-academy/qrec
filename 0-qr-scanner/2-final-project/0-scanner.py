import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime
import pyttsx3
engine = pyttsx3.init()
# Use a service account.
cred = credentials.Certificate('acc.json')

# time setting 
now = datetime.now()

import cv2

camera_id = 0
delay = 30
window_name = 'qRec'

qcd = cv2.QRCodeDetector()
cap = cv2.VideoCapture(camera_id)

while True:
    ret, frame = cap.read()

    if ret:
        ret_qr, decoded_info, points, _ = qcd.detectAndDecodeMulti(frame)
        if ret_qr:
            for s, p in zip(decoded_info, points):
                if s:
                    print(s)
                    engine.say("Hello!" + str(s) + "Welcome to the software lab")
                    engine.runAndWait()
                    color = (0, 255, 0)
                else:
                    color = (0, 0, 255)
                frame = cv2.polylines(frame, [p.astype(int)], True, color, 8)
        cv2.imshow(window_name, frame)

    if cv2.waitKey(delay) & 0xFF == ord('q'):
        break

cv2.destroyWindow(window_name)




app = firebase_admin.initialize_app(cred)

db = firestore.client()
current_time = now.strftime("%H:%M:%S")


doc_ref = db.collection(u'attendance').document()
doc_ref.set({
    u'name':str(s),
    u'present':True,
    u'time': current_time
})
