from app.models import db, Category, Sound


def seed_categories():
    #demo
    sounds = Sound.query.all()
    name1 = Category(name="ambience", color="red", scene_id=1, arrangment=0)
    name2 = Category(name="music", color="green", scene_id=1, arrangment=1)
    name1.sounds.extend(sounds[0:2])
    name2.sounds.extend(sounds[2:4])
    name3 = Category(name="ambience", color="red", scene_id=2, arrangment=0)
    name4 = Category(name="music", color="green", scene_id=2, arrangment=1)
    name3.sounds.extend(sounds[4:6])
    name4.sounds.extend(sounds[6:8])
    name5 = Category(name="ambience", color="red", scene_id=3, arrangment=0)
    name6 = Category(name="music", color="green", scene_id=3, arrangment=1)
    name5.sounds.extend(sounds[8:10])
    name6.sounds.extend(sounds[10:12])
    name7 = Category(name="ambience", color="red", scene_id=4, arrangment=0)
    name8 = Category(name="music", color="green", scene_id=4, arrangment=1)
    name7.sounds.extend(sounds[12:14])
    name8.sounds.extend(sounds[14:16])

    # me
    name9 = Category(name="ambience", color="red", scene_id=5, arrangment=0)
    name10 = Category(name="music", color="green", scene_id=5, arrangment=1)
    name9.sounds.extend(sounds[16:18])
    name10.sounds.extend(sounds[18:20])
    name11 = Category(name="ambience", color="red", scene_id=6, arrangment=0)
    name12 = Category(name="music", color="green", scene_id=6, arrangment=1)
    name11.sounds.extend(sounds[20:22])
    name12.sounds.extend(sounds[22:24])
    name13 = Category(name="ambience", color="red", scene_id=7, arrangment=0)
    name14 = Category(name="music", color="green", scene_id=7, arrangment=1)
    name13.sounds.extend(sounds[24:26])
    name14.sounds.extend(sounds[26:28])
    name15 = Category(name="ambience", color="red", scene_id=8, arrangment=0)
    name16 = Category(name="music", color="green", scene_id=8, arrangment=1)
    name15.sounds.extend(sounds[28:30])
    name16.sounds.extend(sounds[30:32])

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
