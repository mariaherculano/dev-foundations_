clientes = []

def adicionar_cliente(nome, email):
    clientes.append({"nome": nome, "email": email})

def listar_clientes():
    if not clientes:
        print("Nenhum cliente cadastrado.")
    for cliente in clientes:
        print(cliente)

def remover_cliente(email):
    global clientes
    clientes = [c for c in clientes if c["email"] != email]

def menu():
    while True:
        print("\n1 - Adicionar cliente")
        print("2 - Listar clientes")
        print("3 - Remover cliente")
        print("4 - Sair")
        opcao = input("Escolha: ")

        if opcao == "1":
            nome = input("Nome: ")
            email = input("Email: ")
            adicionar_cliente(nome, email)
        elif opcao == "2":
            listar_clientes()
        elif opcao == "3":
            email = input("Email do cliente: ")
            remover_cliente(email)
        elif opcao == "4":
            break
        else:
            print("Opção inválida")

menu()