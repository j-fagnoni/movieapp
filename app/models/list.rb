class List < ApplicationRecord
  belongs_to :user
  has_many :movies, through: :content, source: :content_table_foreign_key_to_movies_table
end
