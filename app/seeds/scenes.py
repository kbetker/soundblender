from app.models import db, Scene

# Adds a demo user, you can add other users here if you want
def seed_scenes():

    greatUpHeaval = Scene(name="A Great Upheaval", theme="default", collection_id=1)
    savageFrontier = Scene(name="Savage Frontier", theme="default", collection_id=1)

    # cragmawCastle = Scene(name="Cragmaw Castle", theme="default", collection_id=2)
    # waveEchoCave = Scene(name="Wave Echo Cave", theme="default", collection_id=2)

    # randomEncounter2 = Scene(name="Desert", theme="default", collection_id=3)
    # feywild = Scene(name="Feywild", theme="default", collection_id=3)

    # greatUpheavel = Scene(name="The Great Upheavel", theme="default", collection_id=4)
    # savageFrontier = Scene(name="The Savage Frontier", theme="default", collection_id=4)



    db.session.add(greatUpHeaval)
    db.session.add(savageFrontier)

    # db.session.add(cragmawCastle)
    # db.session.add(waveEchoCave)

    # db.session.add(randomEncounter2)
    # db.session.add(feywild)

    # db.session.add(greatUpheavel)
    # db.session.add(savageFrontier)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_scenes():
    db.session.execute('TRUNCATE scenes RESTART IDENTITY CASCADE;')
    db.session.commit()
