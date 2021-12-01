
import pandas as pd 
import os
import logging
import django
from datetime import datetime

## configure logging settings
logger = logging.getLogger()
handler = logging.FileHandler('logfile.log')
logger.addHandler(handler)

##configure Django settings for import
script_dir = os.path.dirname(__file__)
os.environ.setdefault('DJANGO_SETTINGS_MODULE','core.settings')
django.setup()


from energypurchase.models import Purchased_utility
from plants.models import Terminal
filepath = ""
filename = "utilitydata.csv"

logger.info("Start loading data at: " + datetime.now().strftime("%H:%M:%S"))
file_path = os.path.join(filepath, filename)
df = pd.read_csv(file_path, sep=',', encoding="ISO-8859-1")


for i in range(df.shape[0]):
    print(df['terminalID'].iloc[i])
    # logger.debug(df['name'].iloc[i] + " " + df['terminalID'].iloc[i] + " " + df['year'].iloc[i] + " " + df['amount'].iloc[i] + " " + df['emission_factor'].iloc[i] + " " + df['uom'].iloc[i])
    try :
        item = Purchased_utility(
            name = df['name'].iloc[i],
            terminal = Terminal.objects.get(id=df['terminalID'].iloc[i]),
            year = df['year'].iloc[i],
            amount = df['amount'].iloc[i],
            emission_factor = df['emission_factor'].iloc[i],
            uom = df['uom'].iloc[i],
            price = None
        )
        item.save()

        logger.debug('Succesfully saved')
    except Exception as e:
        logger.error('Could not save' + str(e))
    
    
    logger.info("Finished loading data for model at: " + datetime.now().strftime("%H:%M:%S"))
