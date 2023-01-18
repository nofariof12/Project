import pandas as pd
from prophet import Prophet
print ("Done..")
df = pd.read_csv('foreign exchange DATA\EUR\EUR_ILS - נתונים היסטוריים.csv')
print(df)
df.head()
m = Prophet()
m.fit(df)
future = m.make_future_dataframe(periods=365)
future.tail()