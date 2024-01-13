# frozen_string_literal: true

module Container
  module Push
    module_function

    def commands
      Repository.tags.map do |tag|
        "#{BINARY} push #{tag}"
      end
    end
  end
end
