

class Api::BorrowingsController < ApplicationController

  before_action :set_borrow, only: [:destroy, :update]

  def create
    @borrowing = Borrowing.create(borrow_params);
    if @borrowing.save
      render :show, status: 200
    else
      @errors = @borrowing.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def update
    if @borrowing.update(borrow_params)
      render :show, status: 200
      # format.json { render :show, status: :ok, location: @book }
    else
      @errors = @borrowing.errors.full_messages
      render "api/shared/error", status: 422
      # format.json { render json: @book.errors, status: :unprocessable_entity }
    end
  end

  def destroy
    @borrowing.destroy
    render :show
  end

  def index
    @borrowings = Borrowing.where(owner_id: current_user, request_status: 'pending').joins(:book).joins(:borrower)
    render :index
    # For the currentUser, fetch all books where the request_status
    # is "pending", and also fetch the borrower names

  end

  private
  def set_borrow
    @borrowing = Borrowing.find(params[:id])
  end

  def borrow_params
    params.require(:borrow).permit(:owner_id, :borrower_id, :book_id, :request_status)
  end
end
