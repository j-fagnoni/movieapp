class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :lists, class_name: "list", foreign_key: "reference_id"
  devise :database_authenticatable, :registerable, :validatable
end
