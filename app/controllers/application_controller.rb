class ApplicationController < ActionController::API
  include ActionController::Cookies
  include SessionsHelper
  include ActiveStorage::Blob::Analyzable

  before_action :authorize


  private

    def current_user
    @current_user ||= User.find_by(id: session[:user_id])
     end

     def current_repo
      @current_repo ||= Repository.find_by(id: session[:user_id])
     end


    def logged_in_user
     unless logged_in?
        store_location
        flash[:danger] = "Please log in."
        redirect_to login_url
     end
    end
  
    def authorize
      unless current_user
      render json: { message: 'Not authorized' }, status: 401
     end
    end

end
