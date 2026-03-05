from flask import Flask, jsonify, request

app = Flask(__name__)
usuarios = []

@app.route("/usuarios", methods=["GET"])
def listar():
    return jsonify(usuarios)

@app.route("/usuarios", methods=["POST"])
def criar():
    usuarios.append(request.json)
    return jsonify({"mensagem": "Usuário criado"}), 201

@app.route("/usuarios/<int:id>", methods=["DELETE"])
def deletar(id):
    if id < len(usuarios):
        usuarios.pop(id)
        return jsonify({"mensagem": "Usuário removido"})
    return jsonify({"erro": "Usuário não encontrado"}), 404

app.run(debug=True)