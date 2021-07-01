from app.models import db, Collection

# Adds a demo user, you can add other users here if you want
def seed_collections():

    demo = User(username='Demo', email='demo@aa.io', password='password')
    kbetker = User(username='kbetker', email='k@b.com', password='123')
    demo2 = User(username='demo2', email='demo2@demo.com', password='123')


    db.session.add(kbetker)
    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
