class ChangeColumnNameBorrowings < ActiveRecord::Migration
  def change
    remove_column :borrowings, :request_id
    add_column :borrowings, :request_status, :string, null: false, default: "with_owner"
  end
end
