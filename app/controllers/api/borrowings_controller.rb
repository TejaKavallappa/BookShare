require 'byebug'
class Api::BorrowingsController < ApplicationController

  before_action :set_borrow, only: [:destroy]

  def create
    @borrowing = Borrowing.create(borrow_params);
    if @borrowing.save
      render :show, status: 200
    else
      @errors = @borrowing.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def destroy
    @borrowing.destroy
  end

  def index
  end

  private
  def set_borrow
    @borrowing = Borrowing.find(params[:id])
  end

  def borrow_params
    params.require(:borrowings).permit(:owner_id, :borrower_id, :book_id, :request_status)
  end
end
