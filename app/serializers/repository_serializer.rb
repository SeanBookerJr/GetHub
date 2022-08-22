class RepositorySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :description, :repo_branch, :tag
end
