import serial
import pyautogui
import time

# Configure a porta serial
arduino = serial.Serial('COM3', 9600)  # Substitua 'COM3' pela porta correta

# Coordenadas para o clique
x, y = 28, 681  # Substitua pelas coordenadas desejadas

try:
    while True:
        if arduino.in_waiting > 0:
            line = arduino.readline().decode('utf-8').strip()
            if line == "CLICK":
                # Primeiro clique
                pyautogui.click(x,y)
                print(f"Clique realizado em ({x}, {y})")
                
                # Aguarda 10 segundos
                time.sleep(25)
                
                # Segundo clique
                pyautogui.click(x,y)
                print(f"Segundo clique realizado em ({x}, {y})")
                
                # Envia confirmação ao Arduino
                arduino.write(b"DONE\n")
except KeyboardInterrupt:
    print("Programa interrompido.")
finally:
    arduino.close()
