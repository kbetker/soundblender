from app.models import db, Category

def seed_categories():
    #demo
    name1 = Category(name="ambience", color="red", scene_id=1, arrangment=0)
    name2 = Category(name="music", color="green", scene_id=1, arrangment=1)

    name3 = Category(name="ambience", color="red", scene_id=2, arrangment=0)
    name4 = Category(name="music", color="green", scene_id=2, arrangment=1)

    name5 = Category(name="ambience", color="red", scene_id=3, arrangment=0)
    name6 = Category(name="music", color="green", scene_id=3, arrangment=1)

    name7 = Category(name="ambience", color="red", scene_id=4, arrangment=0)
    name8 = Category(name="music", color="green", scene_id=4, arrangment=1)


    # me
    name9 = Category(name="ambience", color="red", scene_id=5, arrangment=0)
    name10 = Category(name="music", color="green", scene_id=5, arrangment=1)

    name11 = Category(name="ambience", color="red", scene_id=6, arrangment=0)
    name12 = Category(name="music", color="green", scene_id=6, arrangment=1)

    name13 = Category(name="ambience", color="red", scene_id=7, arrangment=0)
    name14 = Category(name="music", color="green", scene_id=7, arrangment=1)

    name15 = Category(name="ambience", color="red", scene_id=8, arrangment=0)
    name16 = Category(name="music", color="green", scene_id=8, arrangment=1)

    db.session.add(name1)
    db.session.add(name2)
    db.session.add(name3)
    db.session.add(name4)
    db.session.add(name5)
    db.session.add(name6)
    db.session.add(name7)
    db.session.add(name8)
    db.session.add(name9)
    db.session.add(name10)
    db.session.add(name11)
    db.session.add(name12)
    db.session.add(name13)
    db.session.add(name14)
    db.session.add(name15)
    db.session.add(name16)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
