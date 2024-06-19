import serial
import subprocess
import threading

# Configura a porta serial (Substitua 'COM3' pela porta correta)
ser = serial.Serial('COM3', 9600)

# Função para executar o primeiro script Python
def execute_script_1():
    subprocess.run(['python', 'MudaNomeArquivo.py'])  # Caminho relativo ao script que você quer executar

# Função para executar o segundo script Python
def execute_script_2():
    subprocess.run(['python', 'gravatela.py'])  # Caminho relativo ao segundo script que você quer executar

# Loop para monitorar a porta serial
while True:
    if ser.in_waiting > 0:
        try:
            line = ser.readline().decode('latin-1').rstrip()  # Usando 'latin-1' para decodificação
            if line == "Button Pressed for more than 2 seconds":
                print("Botão pressionado por mais de 2 segundos! Executando scripts...")

                # Cria as threads para executar os scripts
                thread1 = threading.Thread(target=execute_script_1)
                thread2 = threading.Thread(target=execute_script_2)

                # Inicia as threads
                thread1.start()
                thread2.start()

                # Opcional: esperar as threads terminarem (caso você queira que o loop principal aguarde)
                # thread1.join()
                # thread2.join()
        except UnicodeDecodeError as e:
            print(f"Erro de decodificação: {e}")
