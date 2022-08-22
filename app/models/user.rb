class User < ApplicationRecord
    has_many :repositories
    has_many :attachments, through: :repositories
end
