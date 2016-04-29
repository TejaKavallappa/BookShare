class ChangeDefaultImage < ActiveRecord::Migration
  def change
    change_column_default(:books, :image_url, "http://i.imgur.com/sJ3CT4V.gif")
  end
end
