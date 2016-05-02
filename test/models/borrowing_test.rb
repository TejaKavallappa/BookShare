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

require 'test_helper'

class BorrowingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
