from app.models import db, Joined_Sound_Cat

def seed_joined_snds_cats():
    #demo
    name1 = Joined_Sound_Cat(sounds_id=1,  categories_id=1)
    name2 = Joined_Sound_Cat(sounds_id=2,  categories_id=2)
    name3 = Joined_Sound_Cat(sounds_id=3,  categories_id=1)
    name4 = Joined_Sound_Cat(sounds_id=4,  categories_id=2)

    name5 = Joined_Sound_Cat(sounds_id=5,  categories_id=3)
    name6 = Joined_Sound_Cat(sounds_id=6,  categories_id=4)
    name7 = Joined_Sound_Cat(sounds_id=7,  categories_id=3)
    name8 = Joined_Sound_Cat(sounds_id=8,  categories_id=4)

    name9 = Joined_Sound_Cat(sounds_id=9,  categories_id=5)
    name10 = Joined_Sound_Cat(sounds_id=10,  categories_id=6)
    name11 = Joined_Sound_Cat(sounds_id=11,  categories_id=5)
    name12 = Joined_Sound_Cat(sounds_id=12,  categories_id=6)

    name13 = Joined_Sound_Cat(sounds_id=13,  categories_id=7)
    name14 = Joined_Sound_Cat(sounds_id=14,  categories_id=8)
    name15 = Joined_Sound_Cat(sounds_id=15,  categories_id=7)
    name16 = Joined_Sound_Cat(sounds_id=16,  categories_id=8)

    #mySounds
    name17 = Joined_Sound_Cat(sounds_id=17,  categories_id=9)
    name18 = Joined_Sound_Cat(sounds_id=18,  categories_id=10)
    name19 = Joined_Sound_Cat(sounds_id=19,  categories_id=9)
    name20 = Joined_Sound_Cat(sounds_id=20,  categories_id=10)

    name21 = Joined_Sound_Cat(sounds_id=21,  categories_id=11)
    name22 = Joined_Sound_Cat(sounds_id=22,  categories_id=12)
    name23 = Joined_Sound_Cat(sounds_id=23,  categories_id=11)
    name24 = Joined_Sound_Cat(sounds_id=24,  categories_id=12)

    name25 = Joined_Sound_Cat(sounds_id=25,  categories_id=13)
    name26 = Joined_Sound_Cat(sounds_id=26,  categories_id=14)
    name27 = Joined_Sound_Cat(sounds_id=27,  categories_id=13)
    name28 = Joined_Sound_Cat(sounds_id=28,  categories_id=14)

    name29 = Joined_Sound_Cat(sounds_id=29,  categories_id=15)
    name30 = Joined_Sound_Cat(sounds_id=30,  categories_id=16)
    name31 = Joined_Sound_Cat(sounds_id=31,  categories_id=15)
    name32 = Joined_Sound_Cat(sounds_id=32,  categories_id=16)


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

    db.session.add(name17)
    db.session.add(name18)
    db.session.add(name19)
    db.session.add(name20)
    db.session.add(name21)
    db.session.add(name22)
    db.session.add(name23)
    db.session.add(name24)

    db.session.add(name25)
    db.session.add(name26)
    db.session.add(name27)
    db.session.add(name28)
    db.session.add(name29)
    db.session.add(name30)
    db.session.add(name31)
    db.session.add(name32)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_joined_snds_cats():
    db.session.execute('TRUNCATE joined_snds_cats RESTART IDENTITY CASCADE;')
    db.session.commit()
