class CreateRepositories < ActiveRecord::Migration[6.1]
  def change
    create_table :repositories do |t|
      t.integer :user_id
      t.string :title
      t.string :description
      t.string :repo_branch
      t.string :tag

      t.timestamps
    end
  end
end
