def validar_cpf(cpf):
    cpf = ''.join(filter(str.isdigit, cpf))
    if len(cpf) != 11 or cpf == cpf[0] * 11:
        return False
    return True

cpf = input("Digite o CPF: ")
print("CPF válido" if validar_cpf(cpf) else "CPF inválido")