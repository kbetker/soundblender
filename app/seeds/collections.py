from app.models import db, Collection

# Adds a demo user, you can add other users here if you want
def seed_collections():


    generalPurpose = Collection(name="General D&D Session", owner_id=2)
    lostMines = Collection(name="Lost Mines of Phandelver", owner_id=2)


    generalPurpose2 = Collection(name="General D&D Session", owner_id=1)
    stormKing = Collection(name="Storm King’s Thunder", owner_id=1)



    db.session.add(generalPurpose)
    db.session.add(lostMines)

    db.session.add(generalPurpose2)
    db.session.add(stormKing)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_collections():
    db.session.execute('TRUNCATE collections RESTART IDENTITY CASCADE;')
    db.session.commit()
