"""empty message

Revision ID: 55a054f22bb1
Revises: 66f98655b4d6
Create Date: 2021-08-04 10:58:50.755365

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '55a054f22bb1'
down_revision = '66f98655b4d6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('collections',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=False),
    sa.Column('is_midi', sa.Boolean(), nullable=False),
    sa.Column('stop_all', sa.Integer(), nullable=False),
    sa.Column('scene_left', sa.Integer(), nullable=False),
    sa.Column('scene_right', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('sounds',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('sound_url', sa.String(length=800), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=False),
    sa.Column('is_public', sa.Boolean(), nullable=True),
    sa.Column('target_volume', sa.Integer(), nullable=True),
    sa.Column('fade_speed', sa.Integer(), nullable=True),
    sa.Column('arrangement', sa.Integer(), nullable=True),
    sa.Column('is_looped', sa.Boolean(), nullable=True),
    sa.Column('is_midi', sa.Boolean(), nullable=True),
    sa.Column('play_stop_button', sa.Integer(), nullable=True),
    sa.Column('volume_control', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('scenes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('theme', sa.String(length=40), nullable=True),
    sa.Column('collection_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['collection_id'], ['collections.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('categories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('color', sa.String(), nullable=True),
    sa.Column('scene_id', sa.Integer(), nullable=False),
    sa.Column('arrangement', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['scene_id'], ['scenes.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('quickscenes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('is_midi', sa.Boolean(), nullable=False),
    sa.Column('control_num', sa.Integer(), nullable=False),
    sa.Column('scene_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['scene_id'], ['scenes.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('joined_snds_cats',
    sa.Column('sounds_id', sa.Integer(), nullable=True),
    sa.Column('categories_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['categories_id'], ['categories.id'], ),
    sa.ForeignKeyConstraint(['sounds_id'], ['sounds.id'], )
    )
    op.create_table('quickscene_sounds',
    sa.Column('sounds_id', sa.Integer(), nullable=True),
    sa.Column('quickscenes_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['quickscenes_id'], ['quickscenes.id'], ),
    sa.ForeignKeyConstraint(['sounds_id'], ['sounds.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('quickscene_sounds')
    op.drop_table('joined_snds_cats')
    op.drop_table('quickscenes')
    op.drop_table('categories')
    op.drop_table('scenes')
    op.drop_table('sounds')
    op.drop_table('collections')
    op.drop_table('users')
    # ### end Alembic commands ###
