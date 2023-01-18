import pandas
from prophet import Prophet

df = pandas.read_csv("foreign exchange DATA\ILS\ILS_GBP.csv")
pandas.set_option('display.max_rows', None)

print(df)
