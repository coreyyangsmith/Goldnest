import pandas as pd

FILE_PATH = "finance/scripts/seeding/data/processing/maincategories_subcategories.csv"

'''
Receives:
- maincategories_subcategories.csv

Exports:
- subcategories.csv
'''

df = pd.read_csv(FILE_PATH)

df_sub = df[['Main_Category', 'Sub_Category']].copy()
df_sub['Sub_Category'] = df_sub['Sub_Category'].str.split(",")
df_sub = df_sub.explode('Sub_Category')
df_sub.to_csv("finance/scripts/seeding/data/subcategories.csv")

print("subcategories.csv exported successfully")