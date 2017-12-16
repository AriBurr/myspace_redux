class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User
  has_many :posts

  serialize :friends, Array

  def self.friends(ids)
    where("id IN (?)", ids)
  end

end
