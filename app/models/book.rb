# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  author      :string           not null
#  description :text
#  image_url   :string           default("http://i.imgur.com/sJ3CT4V.gif"), not null
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# require 'json'

class Book < ActiveRecord::Base
  validates :title, :author, :image_url, :owner_id, presence: true

  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id

  has_one :borrowing,
    class_name: "Borrowing",
    foreign_key: :book_id,
    primary_key: :id,
    dependent: :destroy

def borrow_status
  borrowing.nil? ? 'with_owner' : borrowing.request_status
end

end
