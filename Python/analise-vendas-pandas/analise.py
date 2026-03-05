import pandas as pd

dados = {
    "mes": ["Jan", "Fev", "Mar"],
    "vendas": [1000, 1500, 1200]
}

df = pd.DataFrame(dados)
print(df)
print("\nResumo:")
print(df.describe())