class User < ApplicationRecord
    has_secure_password
    has_many :repositories
    has_many :attachments, through: :repositories
    has_one_attached :avatar
end
