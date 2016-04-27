class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.text   :description
      t.string :image_url, null: false, default: "https://flavorwire.files.wordpress.com/2011/06/screen-shot-2011-06-25-at-8-15-31-am.jpg"
      t.integer :owner_id, null: false
      t.timestamps null: false
    end
    add_index :books, :owner_id
  end
end
