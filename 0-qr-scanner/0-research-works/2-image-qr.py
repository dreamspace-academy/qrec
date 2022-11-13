# Create and save the png file naming "myqr.png"
import pyqrcode
import png
from pyqrcode import QRCode
  
# String which represents the QR code
# String which represents the QR code
msg=str(input("What's your name? " ))
age=int(input("What's your age? "))
add=str(input("Enter your address :- "))
id=str(input("Enter your id number :- "))
# Generate QR code
  
# Generate QR code
url = pyqrcode.create(msg)
  
# Create and save the svg file naming "myqr.svg"
url.svg("myqr.svg", scale = 8)
  
# Create and save the png file naming "myqr.png"
url.png('myqr.png', scale = 6)

