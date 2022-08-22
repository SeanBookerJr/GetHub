class Repository < ApplicationRecord
    has_many :attachments
    belongs_to :user
end
