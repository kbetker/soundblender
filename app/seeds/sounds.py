from app.models import db, Sound

def seed_sounds():
    #Music
    # Calm night https://soundblender.s3.amazonaws.com/0cc02429c2c74d428562015516dfcb24.mp3
    # Suspense 1 https://soundblender.s3.amazonaws.com/aef6d7182bdd4b80a7ef61834e027617.mp3
    # Suspense 2 https://soundblender.s3.amazonaws.com/4ba48d09032041d28e773a5a239e7285.mp3
    # High Suspense https://soundblender.s3.amazonaws.com/0ef9f39162404d509a200f1b5888d522.mp3
    # Calm Travel https://soundblender.s3.amazonaws.com/fc9799f248894a7aafa7b85f2be9f848.mp3

    #Battle Music
    # Battle Music https://soundblender.s3.amazonaws.com/9c061b70a97044e2807ac1109e9780d4.mp3
    # Big Fight https://soundblender.s3.amazonaws.com/9ff780f201b344e89b9dc5d33f686c7f.mp3
    # Fight Small 2 https://soundblender.s3.amazonaws.com/fc1c893183c24a1d90996320891c8471.mp3
    # Fight Small 3 https://soundblender.s3.amazonaws.com/2357ce39e6754c9f9d49453bc36c6442.mp3
    # Fight Small 4 https://soundblender.s3.amazonaws.com/124fb9a526184c288890757c31ab8c68.mp3

    # Wilderness
    #  Campfire https://soundblender.s3.amazonaws.com/f98439538cbc4feeb94baf106587b8da.mp3
    # https://soundblender.s3.amazonaws.com/1af543dcb7a942739a22f60c880b8dcf.mp3
    # creepy woods https://soundblender.s3.amazonaws.com/e2aba7af88bb477c9622d2ba421b9673.mp3
    # Crickets https://soundblender.s3.amazonaws.com/5bd2b8bc276142c5b21f426f31e6fe2d.mp3
    # Forest daytime : https://soundblender.s3.amazonaws.com/554ded5b417948ae8cb218199a4b7c60.mp3
    # Forest Night https://soundblender.s3.amazonaws.com/6ff8b3adc066495593a56fea70209047.mp3
    # Rain https://soundblender.s3.amazonaws.com/7c1d8b92faaf4f58b40d3f58243aee7b.mp3
    # Small stream https://soundblender.s3.amazonaws.com/1ae33c9a9e7d4ad2a39018f5db09b2d7.mp3
    # Thunder https://soundblender.s3.amazonaws.com/38d662e8627541418a4b23667c3aec2d.mp3

    # Town
    #apothecary https://soundblender.s3.amazonaws.com/3fa7a68bd7524b1cae499ef531d16a6c.mp3
    # black smith https://soundblender.s3.amazonaws.com/b1f113ab11554a26ac302cc6423cb134.mp3
    # coastal town https://soundblender.s3.amazonaws.com/6ba30b0c11204af98db1ead27b885eab.mp3
    # Medium City https://soundblender.s3.amazonaws.com/26bc947e3ffe4f218166bdadffe09be3.mp3
    # Medium Tavern https://soundblender.s3.amazonaws.com/abf1285ba2cd490d8dc9f0efae2ab9ea.mp3
    # Sewer https://soundblender.s3.amazonaws.com/6b9e711e267e4164baff58212ee35ae0.mp3
    # Small Tavern https://soundblender.s3.amazonaws.com/01f848d23a60419ea74ec1a5679308c9.mp3
    # Town https://soundblender.s3.amazonaws.com/7f685b989a5f45249c1a2d08d13a8cb0.mp3
    # Town Night https://soundblender.s3.amazonaws.com/9f1f5c92a0934c6a895bb49f4a8e47c3.mp3


    #At Sea
    # Above Deck at Sea https://soundblender.s3.amazonaws.com/498a8a2d41a64836b78803b041d88bc0.mp3
    # Below Deck https://soundblender.s3.amazonaws.com/a530a77452754eed950100090196799d.mp3
    # Sea storm https://soundblender.s3.amazonaws.com/cf9ba4a4fc114cbf870a21e717ac3c13.mp3
    # Underwater https://soundblender.s3.amazonaws.com/c54f2578656a4aa0a8e79714a72a9ffc.mp3
    # Waves https://soundblender.s3.amazonaws.com/128444d953784024bbd22daca01eb9f4.mp3







    #demo sounds
    name1 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/dryCaveLoop.mp3", name="Ambient02", owner_id=1, is_public=False, target_volume=0.6, fade_speed=50, arrangement=0, is_looped=True)
    name2 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/fight_big1.mp3", name="Music01", owner_id=1, is_public=False, target_volume=0.9, fade_speed=10, arrangement=0, is_looped=True)
    name3 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/CampForestNight.mp3", name="Ambient01", owner_id=1, is_public=False, target_volume=0.5, fade_speed=10, arrangement=0, is_looped=True)
    name4 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/travel_2.mp3", name="Music02", owner_id=1, is_public=False, target_volume=1, fade_speed=100, arrangement=0, is_looped=True)

    name5 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/dryCaveLoop.mp3", name="Ambient02", owner_id=1, is_public=False, target_volume=0.6, fade_speed=50, arrangement=0, is_looped=True)
    name6 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/fight_big1.mp3", name="Music01", owner_id=1, is_public=False, target_volume=0.9, fade_speed=10, arrangement=0, is_looped=True)
    name7 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/CampForestNight.mp3", name="Ambient01", owner_id=1, is_public=False, target_volume=0.5, fade_speed=10, arrangement=0, is_looped=True)
    name8 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/travel_2.mp3", name="Music02", owner_id=1, is_public=False, target_volume=1, fade_speed=100, arrangement=0, is_looped=True)

    name9 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/dryCaveLoop.mp3", name="Ambient02", owner_id=1, is_public=False, target_volume=0.6, fade_speed=50, arrangement=0, is_looped=True)
    name10 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/fight_big1.mp3", name="Music01", owner_id=1, is_public=False, target_volume=0.9, fade_speed=10, arrangement=0, is_looped=True)
    name11 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/CampForestNight.mp3", name="Ambient01", owner_id=1, is_public=False, target_volume=0.5, fade_speed=10, arrangement=0, is_looped=True)
    name12 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/travel_2.mp3", name="Music02", owner_id=1, is_public=False, target_volume=1, fade_speed=100, arrangement=0, is_looped=True)

    name13 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/dryCaveLoop.mp3", name="Ambient02", owner_id=1, is_public=False, target_volume=0.6, fade_speed=50, arrangement=0, is_looped=True)
    name14 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/fight_big1.mp3", name="Music01", owner_id=1, is_public=False, target_volume=0.9, fade_speed=10, arrangement=0, is_looped=True)
    name15 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/CampForestNight.mp3", name="Ambient01", owner_id=1, is_public=False, target_volume=0.5, fade_speed=10, arrangement=0, is_looped=True)
    name16 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/travel_2.mp3", name="Music02", owner_id=1, is_public=False, target_volume=1, fade_speed=100, arrangement=0, is_looped=True)



    #my sounds
    name17 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/dryCaveLoop.mp3", name="Ambient02", owner_id=2, is_public=False, target_volume=0.6, fade_speed=50, arrangement=0, is_looped=True)
    name18 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/fight_big1.mp3", name="Music01", owner_id=2, is_public=False, target_volume=0.9, fade_speed=10, arrangement=0, is_looped=True)
    name19 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/CampForestNight.mp3", name="Ambient01", owner_id=2, is_public=False, target_volume=0.5, fade_speed=10, arrangement=0, is_looped=True)
    name20 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/travel_2.mp3", name="Music02", owner_id=2, is_public=False, target_volume=1, fade_speed=100, arrangement=0, is_looped=True)

    name21 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/dryCaveLoop.mp3", name="Ambient02", owner_id=2, is_public=False, target_volume=0.6, fade_speed=50, arrangement=0, is_looped=True)
    name22 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/fight_big1.mp3", name="Music01", owner_id=2, is_public=False, target_volume=0.9, fade_speed=10, arrangement=0, is_looped=True)
    name23 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/CampForestNight.mp3", name="Ambient01", owner_id=2, is_public=False, target_volume=0.5, fade_speed=10, arrangement=0, is_looped=True)
    name24 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/travel_2.mp3", name="Music02", owner_id=2, is_public=False, target_volume=1, fade_speed=100, arrangement=0, is_looped=True)

    name25 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/dryCaveLoop.mp3", name="Ambient02", owner_id=2, is_public=False, target_volume=0.6, fade_speed=50, arrangement=0, is_looped=True)
    name26 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/fight_big1.mp3", name="Music01", owner_id=2, is_public=False, target_volume=0.9, fade_speed=10, arrangement=0, is_looped=True)
    name27 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/CampForestNight.mp3", name="Ambient01", owner_id=2, is_public=False, target_volume=0.5, fade_speed=10, arrangement=0, is_looped=True)
    name28 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/travel_2.mp3", name="Music02", owner_id=2, is_public=False, target_volume=1, fade_speed=100, arrangement=0, is_looped=True)

    name29 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/dryCaveLoop.mp3", name="Ambient02", owner_id=2, is_public=False, target_volume=0.6, fade_speed=50, arrangement=0, is_looped=True)
    name30 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/fight_big1.mp3", name="Music01", owner_id=2, is_public=False, target_volume=0.9, fade_speed=10, arrangement=0, is_looped=True)
    name31 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/CampForestNight.mp3", name="Ambient01", owner_id=2, is_public=False, target_volume=0.5, fade_speed=10, arrangement=0, is_looped=True)
    name32 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/travel_2.mp3", name="Music02", owner_id=2, is_public=False, target_volume=1, fade_speed=100, arrangement=0, is_looped=True)



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
def undo_sounds():
    db.session.execute('TRUNCATE sounds RESTART IDENTITY CASCADE;')
    db.session.commit()
