"""empty message

Revision ID: 8acb61610c3e
Revises: 6db6b2f3e432
Create Date: 2021-07-02 14:11:46.312991

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8acb61610c3e'
down_revision = '6db6b2f3e432'
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
    sa.Column('arrangment', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['scene_id'], ['scenes.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('categories')
    op.drop_table('scenes')
    op.drop_table('sounds')
    op.drop_table('collections')
    op.drop_table('users')
    # ### end Alembic commands ###