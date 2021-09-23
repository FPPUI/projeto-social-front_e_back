import os

path = os.path.abspath("iniciar.py")
path = path.replace("\\","/")
path = path.replace("dist/iniciar/iniciar.py","Frontend/index.html")
print(path)

os.system('start ' + path)
os.system('pm2 resurrect')
os.system('pm2 start 0')
