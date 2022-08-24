class RepositorySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :description, :tag

  has_many :attachments
end
