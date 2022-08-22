class AttachmentSerializer < ActiveModel::Serializer
  attributes :id, :repository_id, :name, :code
end
