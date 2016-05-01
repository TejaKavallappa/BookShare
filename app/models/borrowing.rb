# == Schema Information
#
# Table name: borrowings
#
#  id          :integer          not null, primary key
#  book_id     :integer          not null
#  owner_id    :integer          not null
#  borrower_id :integer
#  request_id  :integer          default("4"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Borrowing < ActiveRecord::Base
  validates :book_id, :owner_id, :request_id, presence: true
  validates :book_id, uniqueness: true
  validates :request_id, inclusion: {in: 1..4}

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


end
