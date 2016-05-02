# == Schema Information
#
# Table name: borrowings
#
#  id             :integer          not null, primary key
#  book_id        :integer          not null
#  owner_id       :integer          not null
#  borrower_id    :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  request_status :string
#

class Borrowing < ActiveRecord::Base
  validates :book_id, :owner_id, :request_status, presence: true
  validates :book_id, uniqueness: true
  # validates :request_id, inclusion: {in: 1..4}
  validates :request_status, inclusion: { in: %w(pending approved borrowed with_owner)}
  validate :owner_borrower_not_same, on: :create

  belongs_to :book,
    class_name: "Book",
    foreign_key: :book_id,
    primary_key: :id

  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id

  belongs_to :borrower,
    class_name: "User",
    foreign_key: :borrower_id,
    primary_key: :id

  private

  def owner_borrower_not_same
    if owner_id == borrower_id
      errors.add(:owner_id, "Owner and borrower cannot be the same")
    end
  end

end
