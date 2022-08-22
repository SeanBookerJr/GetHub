class SessionsController < ApplicationController
 
    def show
        if session[:user_id]
            user.find_by(id:session[:user_id])
            render json: current_user
        else
            render json { message: "not logged in"}, status: 401
    end

    def create
        user = user.find_by(username: params[:username])
        if user&.authenticate(params[:password]
            session[:user_id = User.id]
            render json: user
    end
    
    def destroy
        session.delete :user_id
        head: no_content
        
    end

    
end
