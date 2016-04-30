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

require 'test_helper'

class BorrowingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
