class Movie < ApplicationRecord
  has_many :lists, through: :content, source: :content_table_foreign_key_to_lists_table
  validates :db_id, uniqueness: true
end
