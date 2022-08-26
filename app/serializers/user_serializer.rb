class UserSerializer < ActiveModel::Serializer

  attributes :id, :username, :password_digest, :first_name, :last_name, :email, :bio, :avatar_url
  has_many :repositories
  has_many :attachments

  # Rails.application.routes.url_helpers.rails_blob_path()

  def avatar_url
    if object.avatar.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.avatar, host: "local")
    end
  end
  

end
