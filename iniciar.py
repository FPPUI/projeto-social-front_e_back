import os

path = os.path.abspath("iniciar.exe")
path = path.replace("\\", "/")
path = path.replace("dist/iniciar/iniciar.exe","Frontend/index.html")
print(path)

os.system('start ' + path)
os.system('pm2 resurrect')
os.system('pm2 start 0')
