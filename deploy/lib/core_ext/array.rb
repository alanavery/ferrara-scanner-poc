# frozen_string_literal: true

class Array
  def second
    self[1]
  end

  def tail
    drop(1)
  end
end
