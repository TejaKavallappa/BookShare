
class Api::BorrowingsController < ApplicationController

  before_action :set_borrow, only: [:destroy, :update]

  def index

    if params[:asker] == "owner"
      # View borrowings where I am the owner
      @borrowings = Borrowing.where(owner_id: current_user.id,
      request_status: 'pending').includes(:book).includes(:borrower)

    else
      # View borrowings where I am the requester
      @borrowings = Borrowing.where(borrower_id: current_user.id,
      request_status: ['pending', 'borrowed']).includes(:book).includes(:owner)
    end
    render :index

  end

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

  private
  def set_borrow
    @borrowing = Borrowing.find(params[:id])
  end

  def borrow_params
    params.require(:borrow).permit(:owner_id, :borrower_id, :book_id, :request_status)
  end
end
