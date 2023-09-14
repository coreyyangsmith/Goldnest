import pandas as pd

FILE_PATH = "finance/scripts/seeding/data/processing/budgets_processing.csv"

'''
Receives:
- budgets_processing.csv

Exports:
- budgets.csv
'''

df = pd.read_csv(FILE_PATH, header=None)
df = df.rename(columns={0: 'main_cateogry', 1: 'sub_category', 2: 'months'})

df_budget = df[['main_cateogry', 'sub_category', 'months']].copy()
df_budget['months'] = df_budget['months'].str.split(",")
df_budget = df_budget.explode('months')
df_budget.to_csv("finance/scripts/seeding/data/budgets.csv")

print("budgets.csv exported successfully")