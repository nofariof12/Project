import pandas as pd
from prophet import Prophet

df = pd.read_csv(r'Finall Project\foreign exchange DATA\EUR\EUR_GBP.csv')
pd.set_option('display.max_rows', None)

m = Prophet()
m.fit(df)
future = m.make_future_dataframe(periods=365)
future.tail()
forecast = m.predict(future)
forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail()
x=forecast[forecast['ds'] >= pd.to_datetime('2023-01-01')]
pd.DataFrame(x, columns=['ds','yhat']).to_csv('XXX.csv')

print(x)
