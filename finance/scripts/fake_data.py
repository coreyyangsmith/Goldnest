from main.models import *

# Admin
import scripts.seeding.generate_fake_entries as fake_entities
import scripts.seeding.load_entries as entry

def run():
    Entry.objects.all().delete()
    entry.run()
    fake_entities.run()

    
