class UserSerializer < ActiveModel::Serializer

  attributes :id, :username, :password_digest, :first_name, :last_name, :email, :bio
  has_many :repositories
  # , :avatar_url

  # Rails.application.routes.url_helpers.rails_blob_path()

  # def avatar_url
  #     if object.avatar.attached?
  #       rails_blob_path(object.avatar, disposition: "attachment")
  #     end
  # end
  

end
