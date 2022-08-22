class CreateAttachments < ActiveRecord::Migration[6.1]
  def change
    create_table :attachments do |t|
      t.integer :repository_id
      t.string :name
      t.string :code

      t.timestamps
    end
  end
end
