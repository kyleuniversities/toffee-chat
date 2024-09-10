# frozen_string_literal: true

module Types
  class PostType < Types::BaseObject
    field :id, ID, null: false
    field :user, Types::UserType
    field :picture, String
    field :kind, String
    field :body, String
    field :likes, [Types::LikeType]
    field :comments, [Types::CommentType]
    field :numberOfLikes, Integer
    field :numberOfComments, Integer
    field :createdAtText, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def numberOfComments
      object.comments.length()
    end

    def numberOfLikes
      object.likes.length()
    end

    def createdAtText
      monthTexts = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      text = object.created_at.to_s
      year = text[0,4]
      month = text[5,2]
      monthText = monthTexts[month.to_i - 1]
      day = text[8,2].to_i
      hour = text[11,2].to_i - 7
      if hour < 0
        hour += 24
        day -= 1
      end
      minute = text[14,2]
      second = text[17,2]
      isAm = hour < 12
      hourText = if isAm then (if hour == 24 || hour == 0 then 12 else hour end) else hour - 12 end
      isAmText = if isAm then "am" else "pm" end
      "#{monthText} #{day}, #{year} @#{hourText}:#{minute}:#{second}#{isAmText}"
    end
  end
end
