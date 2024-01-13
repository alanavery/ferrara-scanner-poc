# frozen_string_literal: true

class String
  def first
    self[0]
  end

  def second
    self[1]
  end

  def titleize
    split(/ |_/).map(&:capitalize).join(' ')
  end

  def short
    split(/ |_/).map(&:first).join
  end

  def kebab
    gsub(' ', '-').downcase
  end

  def truncate(max)
    length > max ? self[0...max] : self
  end
end
