class ChangeColumnBorrowings < ActiveRecord::Migration
  def change
    change_column :borrowings, :request_status, :string, default: "with_owner", null: false
  end
end
