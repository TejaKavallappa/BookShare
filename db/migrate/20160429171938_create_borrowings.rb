class CreateBorrowings < ActiveRecord::Migration
  def change
    create_table :borrowings do |t|
      t.integer :book_id, null: false
      t.integer :owner_id, null: false
      t.integer :borrower_id
      t.integer :request_id, null: false, default: 4
      t.timestamps null: false
    end

    add_index :borrowings, [:book_id, :owner_id, :borrower_id]
    add_index :borrowings, [:request_id]
    add_index :users, :username, unique: true
  end
end
# request_id {1: pending_request, 2: approved_request, 3: borrowed, 4: with_owner, 5: rejected?}
#
