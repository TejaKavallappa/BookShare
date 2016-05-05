
class Api::BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update, :destroy]


  def index
    userId = Integer(params[:userId])

    # If displaying books of !current_user then display only the books that are not in @borrowings
    # @borrowings = Borrowing.where(owner_id: current_user, request_status: 'pending').joins(:book).joins(:borrower)
    if userId == 0 && !current_user
      # If not logged in user
      render json: {}
      return
    elsif userId == 0
      # requesting books belonging to the current_user
      @books = current_user.books.includes(:borrowing)
      render :index
      return
    else
      # requesting books belonging to another user, that have not been already requested or borrowed
      # @books = Book.where(owner_id: userId && 'owner_id NOT IN (SELECT owner_id FROM borrowings)')
      @books = Book.where(owner_id: userId).includes(:borrowing)
      # ActiveRecord::Base.connection.execute(<<-SQL)
      #   SELECT
      #    books.*
      #   FROM
      #     books
      #   LEFT JOIN
      #     borrowings ON borrowings.book_id = books.id
      #   WHERE
      #     borrowings.book_id IS NULL AND books.owner_id = #{userId}
      # SQL
      render :index
    end

  end



  def create
    @book = Book.new(book_params)
      if @book.save
        render :show, status: 200
      else
        @errors = @book.errors.full_messages
        render "api/shared/error", status: 422
      end
  end

  def show
    if @book
      render :show
    else
      render "api/shared/error", status: 500
    end
  end


  def update
      if @book.update(book_params)
        render :show, status: 200
        # format.json { render :show, status: :ok, location: @book }
      else
        @errors = @book.errors.full_messages
        render "api/shared/error", status: 422
        # format.json { render json: @book.errors, status: :unprocessable_entity }
      end
  end

  def destroy
    @book.destroy
    render :show, status: 200
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def book_params
      params.require(:book).permit(:title, :author, :image_url, :description, :owner_id,:id)
    end
end
