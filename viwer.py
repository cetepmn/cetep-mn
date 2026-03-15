from myapp import app
from flask import render_template

@app.route("/")
def homepage(): 
    return render_template("index.html")

@app.route("/Integral")
def Integral():
    return render_template("regular.html")

@app.route("/Informatica")
def Informatica():
    return render_template("informatica.html")

@app.route("/Administração")
def Administração():
    return render_template("administracao.html")

@app.route("/Agropecuaria")
def Agropecuaria():
    return render_template("agropecuaria.html")

@app.route("/Avisos")
def Avisos():
    return render_template("avisos.html")

@app.route("/Itupeva")
def Itupeva():
    return render_template("itupeva.html")

@app.route("/Nova Lidicie")
def Nova_Lidicie():
    return render_template("lidicie.html")